// SSR smoke test: renders every converted page component headlessly (no browser
// available in this environment) to catch render-time JS errors, missing images,
// and leftover conversion artifacts.
import { createServer } from "vite";
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
import fs from "node:fs";
import path from "node:path";

const pagesDir = "C:/xampp/htdocs/lunexa-react/src/pages";
const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith(".jsx"));

const server = await createServer({
  root: "C:/xampp/htdocs/lunexa-react",
  server: { middlewareMode: true },
  appType: "custom",
});

let failures = 0;
for (const file of files) {
  const modPath = `/src/pages/${file}`;
  try {
    const mod = await server.ssrLoadModule(modPath);
    const Component = mod.default;
    const html = renderToStaticMarkup(React.createElement(Component));
    const imgSrcs = [...html.matchAll(/src="([^"]+)"/g)].map((m) => m[1]);
    let missing = [];
    for (const src of imgSrcs) {
      if (src.startsWith("/assets/")) {
        const p = path.join("C:/xampp/htdocs/lunexa-react/public", src);
        if (!fs.existsSync(p)) missing.push(src);
      }
    }
    const suspicious = [];
    if (html.includes("undefined")) suspicious.push('contains "undefined"');
    if (html.includes("[object Object]")) suspicious.push("contains [object Object]");
    console.log(
      `OK   ${file.padEnd(20)} html=${html.length}b imgs=${imgSrcs.length}` +
        (missing.length ? ` MISSING_IMAGES=${missing.length}(${missing.slice(0, 3).join(",")})` : "") +
        (suspicious.length ? ` SUSPECT=${suspicious.join(";")}` : "")
    );
  } catch (err) {
    failures++;
    console.log(`FAIL ${file.padEnd(20)} ${err.message.split("\n")[0]}`);
  }
}

await server.close();
console.log(`\n${files.length - failures}/${files.length} pages rendered without error.`);
process.exit(failures ? 1 : 0);
