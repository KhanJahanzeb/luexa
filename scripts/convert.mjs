// One-time migration tool: converts the legacy Lunexa static HTML/PHP pages
// into React (JSX) page components. Not part of the shipped app.
import * as cheerio from "cheerio";
import fs from "node:fs";
import path from "node:path";

const SRC = "C:/xampp/htdocs/lunexa";
const OUT_PAGES = "C:/xampp/htdocs/lunexa-react/src/pages";
const OUT_DATA = "C:/xampp/htdocs/lunexa-react/src/data";

fs.mkdirSync(OUT_PAGES, { recursive: true });
fs.mkdirSync(OUT_DATA, { recursive: true });

// file -> {route, title, component}
const PAGES = [
  { file: "index.php", route: "/", title: "Home", component: "Home" },
  { file: "website.html", route: "/website", title: "Website", component: "Website" },
  { file: "branding.html", route: "/branding", title: "Branding", component: "Branding" },
  { file: "ecommerce.html", route: "/ecommerce", title: "Ecommerce", component: "Ecommerce" },
  { file: "mobile.html", route: "/mobile", title: "Mobile", component: "Mobile" },
  { file: "about.html", route: "/about", title: "About", component: "About" },
  { file: "packeges.html", route: "/packages", title: "Packages", component: "Packages" },
  { file: "contact.html", route: "/contact", title: "Contact", component: "Contact" },
  { file: "FAQs.html", route: "/faqs", title: "FAQs", component: "Faqs" },
  { file: "reviews.html", route: "/reviews", title: "Reviews", component: "Reviews" },
  { file: "crm.html", route: "/crm", title: "Crm", component: "Crm" },
  { file: "seo.html", route: "/seo", title: "Seo", component: "Seo" },
  { file: "all-in-one.html", route: "/all-in-one", title: "AllInOne", component: "AllInOne" },
  { file: "Privacy-Policy.html", route: "/privacy-policy", title: "PrivacyPolicy", component: "PrivacyPolicy" },
  { file: "Refund-Policy.html", route: "/refund-policy", title: "RefundPolicy", component: "RefundPolicy" },
  { file: "Terms&Conditions.html", route: "/terms-and-conditions", title: "TermsConditions", component: "TermsConditions" },
];

const FILE_TO_ROUTE = new Map();
for (const p of PAGES) FILE_TO_ROUTE.set(p.file, p.route);
// aliases that appear in hrefs
FILE_TO_ROUTE.set("./index.php", "/");
FILE_TO_ROUTE.set("index.php", "/");

function mapHref(href) {
  if (!href) return null;
  const clean = href.replace(/^\.\//, "").replace(/^\.\.\//, "");
  if (FILE_TO_ROUTE.has(clean)) return FILE_TO_ROUTE.get(clean);
  for (const p of PAGES) {
    if (clean === p.file || clean.toLowerCase() === p.file.toLowerCase()) return p.route;
  }
  return null;
}

const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

const BOOL_ATTRS = new Set([
  "required", "disabled", "readonly", "checked", "selected", "multiple",
  "autofocus", "autoplay", "controls", "loop", "muted", "defer", "async",
  "novalidate", "formnovalidate", "reversed", "itemscope", "nomodule", "hidden",
]);

const ATTR_MAP = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  readonly: "readOnly",
  maxlength: "maxLength",
  minlength: "minLength",
  autocomplete: "autoComplete",
  crossorigin: "crossOrigin",
  contenteditable: "contentEditable",
  spellcheck: "spellCheck",
  srcset: "srcSet",
  allowfullscreen: "allowFullScreen",
  frameborder: "frameBorder",
  colspan: "colSpan",
  rowspan: "rowSpan",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  usemap: "useMap",
  accesskey: "accessKey",
  enctype: "encType",
  novalidate: "noValidate",
  autocapitalize: "autoCapitalize",
  formnovalidate: "formNoValidate",
};

function jsStringLiteral(s) {
  return JSON.stringify(s);
}

// A bare JSX attribute (`attr="value"`) is NOT a JS string literal — JSX does not
// process backslash escapes in quoted attribute values, so JSON.stringify's `\n`
// (correct *inside* a JS string) renders as a literal backslash+n in the DOM
// wherever a source value contains a real newline (common in hand-formatted
// multi-line SVG `d`/`points` data). Always using the {"..."} expression form puts
// the string in a real JS expression context, where escapes are handled correctly.
function jsxAttr(name, value) {
  return `${name}={${jsStringLiteral(value)}}`;
}

function styleStringToObject(styleStr) {
  const pairs = styleStr.split(";").map((s) => s.trim()).filter(Boolean);
  const entries = [];
  for (const pair of pairs) {
    const idx = pair.indexOf(":");
    if (idx === -1) continue;
    let prop = pair.slice(0, idx).trim();
    let val = pair.slice(idx + 1).trim();
    if (!prop) continue;
    // Inline style url(...) resolves against the *current document URL* (there's
    // no stylesheet base to anchor to), so a relative "assets/..." reference
    // silently breaks depending on which client-side route is active.
    val = val.replace(/url\((['"]?)((?:\.\.\/|\.\/)*assets\/[^'")]*)\1\)/g, (_, q, p) => `url(${q}${normalizeAssetPath(p)}${q})`);
    const camel = prop.startsWith("--")
      ? prop
      : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    entries.push(`${JSON.stringify(camel)}: ${JSON.stringify(val)}`);
  }
  return `{ ${entries.join(", ")} }`;
}

function normalizeAssetPath(v) {
  if (!v) return v;
  return v.replace(/^(\.\.\/|\.\/)+(assets\/)/, "/$2").replace(/^(?!\/)(assets\/)/, "/$1");
}

function serializeAttrs($, el, tagNameLower) {
  const attrs = el.attribs || {};
  const parts = [];
  // NB: <option> deliberately excluded — it has no defaultValue prop in React;
  // its real submitted value comes from a literal `value` attribute, which is
  // valid JSX as-is (unlike <input>/<textarea>, it triggers no controlled-input warning).
  const isFormField = ["input", "textarea", "select"].includes(tagNameLower);
  for (const [rawName, rawVal] of Object.entries(attrs)) {
    // Defensively drop attributes with malformed names — a handful of pages have
    // an unclosed quote in a style attribute (e.g. `style="...center; data-img="url(...)">`)
    // which HTML parsers recover from by splitting the tail into garbage
    // pseudo-attributes like `url(assets="" images="" ...)"=""`, invalid in JSX.
    if (!/^[a-zA-Z_:][-a-zA-Z0-9_:.]*$/.test(rawName)) continue;
    let name = rawName;
    let val = rawVal;
    if (name === "style") {
      parts.push(`style={${styleStringToObject(val)}}`);
      continue;
    }
    if (name === "class") {
      if (!val.trim()) continue;
      parts.push(jsxAttr("className", val));
      continue;
    }
    if (name === "onclick") {
      parts.push(`onClick={() => { if (typeof window.setButtonURL === "function") window.setButtonURL(); }}`);
      continue;
    }
    if (name === "onchange" || name === "onsubmit" || name === "onmouseover" || name === "onmouseout") {
      // no other real handlers found in source; drop defensively
      continue;
    }
    // Normalize by value shape, not just attribute name, so data-src/data-href
    // (lazy-load + fancybox lightbox targets) get the same absolute-path fix as
    // src/href — a relative "assets/..." path resolves against the *current*
    // client-side route, which silently breaks once any route is nested.
    if (/^(\.\.\/|\.\/)*assets\//.test(val)) {
      val = normalizeAssetPath(val);
    }
    if (isFormField && (name === "value")) {
      parts.push(jsxAttr("defaultValue", val));
      continue;
    }
    if (isFormField && name === "checked") {
      parts.push(`defaultChecked`);
      continue;
    }
    if (tagNameLower === "option" && name === "selected") {
      parts.push(`defaultValue={undefined}`); // placeholder, replaced below at select level if needed
      // Actually just keep selected attr for uncontrolled initial render:
      parts.pop();
      parts.push(`selected`);
      continue;
    }
    if (BOOL_ATTRS.has(name) && (val === "" || val === name)) {
      const mapped = ATTR_MAP[name] || name;
      parts.push(mapped);
      continue;
    }
    const mapped = ATTR_MAP[name] || name;
    parts.push(jsxAttr(mapped, val));
  }
  return parts;
}

function nodeToJSX($, node, indent) {
  const pad = "  ".repeat(indent);
  if (node.type === "text") {
    const raw = node.data;
    if (!raw || !raw.trim()) return "";
    if (raw.includes("{") || raw.includes("}")) {
      return pad + `{${jsStringLiteral(raw)}}\n`;
    }
    return pad + raw.trim().replace(/\s+/g, " ") + "\n";
  }
  if (node.type === "comment") return "";
  if (node.type !== "tag" && node.type !== "script" && node.type !== "style") return "";

  let tagName = node.name;
  const attrs = node.attribs || {};

  // Internal <a href="./about.html"> links are kept as plain <a href="/about">
  // (full page load) rather than react-router <Link> — see README: dozens of
  // legacy jQuery/Slick carousels only initialize once on full page load.
  const outTag = tagName;
  const attrParts = [];
  for (const [rawName, rawVal] of Object.entries(attrs)) {
    if (tagName === "a" && rawName === "href") {
      const route = mapHref(rawVal);
      // Not an internal page link (e.g. a fancybox gallery target like
      // "./assets/images/x.jpg") — still normalize to an absolute path.
      const finalHref = route !== null ? route : normalizeAssetPath(rawVal);
      attrParts.push(jsxAttr("href", finalHref));
      continue;
    }
    // reuse generic attr serializer for a single attr
    const fakeEl = { attribs: { [rawName]: rawVal } };
    const serialized = serializeAttrs($, fakeEl, tagName);
    attrParts.push(...serialized);
  }

  const attrStr = attrParts.length ? " " + attrParts.join(" ") : "";

  if (VOID_ELEMENTS.has(tagName)) {
    return `${pad}<${outTag}${attrStr} />\n`;
  }

  const children = $(node).contents().toArray();
  let childStr = "";
  for (const child of children) {
    childStr += nodeToJSX($, child, indent + 1);
  }

  if (!childStr.trim()) {
    return `${pad}<${outTag}${attrStr}></${outTag}>\n`;
  }

  return `${pad}<${outTag}${attrStr}>\n${childStr}${pad}</${outTag}>\n`;
}

function extractTitleMeta(html) {
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/i);
  return {
    title: titleMatch ? titleMatch[1].trim() : "Lunexa Studio",
    description: descMatch ? descMatch[1].trim() : "",
  };
}

function convertPage(pageDef) {
  const srcPath = path.join(SRC, pageDef.file);
  const html = fs.readFileSync(srcPath, "utf8");
  const { title, description } = extractTitleMeta(html);

  const $ = cheerio.load(html, { xmlMode: false });

  // Not every source page has the lead popup (e.g. FAQs.html, the three legal
  // pages) — detect it per-page rather than assuming Layout should always show it.
  const hasLeadPopup = $(".form-topmain").length > 0;

  // Remove header, footer, and the top lead-popup slide-in block (shared components)
  $("header").remove();
  $("footer").remove();
  $(".form-topmain").remove(); // top slide-in lead popup
  $(".cyber-popup").remove();
  $(".black-layout").remove();
  // all-in-one.html has a malformed <head> that makes the parser misplace
  // <meta charset> inside <body>; head-only tags never belong in page content.
  $("body meta, body title, body base").remove();
  // drop external widget scripts / inline <script> tags embedded in body (kept globally elsewhere / not migrated)
  $("body script").remove();

  const bodyChildren = $("body").contents().toArray();
  let jsx = "";
  for (const child of bodyChildren) {
    jsx += nodeToJSX($, child, 3);
  }
  if (!jsx.trim()) jsx = `      <div />\n`;

  const leadPopupProp = hasLeadPopup ? "" : " showLeadPopup={false}";
  const componentSrc = `import Layout from "../components/Layout.jsx";

export default function ${pageDef.component}() {
  return (
    <Layout title={${jsStringLiteral(title)}} description={${jsStringLiteral(description)}} ${jsxAttr("activePath", pageDef.route)}${leadPopupProp}>
${jsx}    </Layout>
  );
}
`;
  const outPath = path.join(OUT_PAGES, `${pageDef.component}.jsx`);
  fs.writeFileSync(outPath, componentSrc, "utf8");
  console.log("wrote", outPath, `(${jsx.split("\n").length} lines)`);
}

for (const p of PAGES) {
  convertPage(p);
}

console.log("Done converting", PAGES.length, "pages.");
