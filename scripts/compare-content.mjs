// Compares visible text content between each original static page and its
// SSR-rendered React equivalent, to catch content that got dropped/mangled
// during the automated HTML->JSX conversion.
import { createServer } from "vite";
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
import * as cheerio from "cheerio";
import fs from "node:fs";

const SRC = "C:/xampp/htdocs/lunexa";
const PAGES = [
  ["index.php", "Home"], ["website.html", "Website"], ["branding.html", "Branding"],
  ["ecommerce.html", "Ecommerce"], ["mobile.html", "Mobile"], ["about.html", "About"],
  ["packeges.html", "Packages"], ["contact.html", "Contact"], ["FAQs.html", "Faqs"],
  ["reviews.html", "Reviews"], ["crm.html", "Crm"], ["seo.html", "Seo"],
  ["all-in-one.html", "AllInOne"], ["Privacy-Policy.html", "PrivacyPolicy"],
  ["Refund-Policy.html", "RefundPolicy"], ["Terms&Conditions.html", "TermsConditions"],
];

function normText(t) {
  return t.replace(/\s+/g, " ").trim();
}

function sourceText(file) {
  const html = fs.readFileSync(`${SRC}/${file}`, "utf8");
  const $ = cheerio.load(html);
  $("script, style").remove();
  return normText($("body").text());
}

const server = await createServer({
  root: "C:/xampp/htdocs/lunexa-react",
  server: { middlewareMode: true },
  appType: "custom",
});

console.log("file".padEnd(20), "src_chars".padStart(10), "react_chars".padStart(12), "delta%".padStart(8));
for (const [file, component] of PAGES) {
  const srcT = sourceText(file);
  const mod = await server.ssrLoadModule(`/src/pages/${component}.jsx`);
  const html = renderToStaticMarkup(React.createElement(mod.default));
  const $$ = cheerio.load(html);
  const reactT = normText($$.text());
  const delta = (((reactT.length - srcT.length) / srcT.length) * 100).toFixed(1);
  const flag = Math.abs(delta) > 15 ? "  <-- CHECK" : "";
  console.log(file.padEnd(20), String(srcT.length).padStart(10), String(reactT.length).padStart(12), (delta + "%").padStart(8) + flag);
}

await server.close();
