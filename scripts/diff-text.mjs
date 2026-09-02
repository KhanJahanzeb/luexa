import { createServer } from "vite";
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
import * as cheerio from "cheerio";
import fs from "node:fs";

const file = process.argv[2]; // e.g. FAQs.html
const component = process.argv[3]; // e.g. Faqs

function normText(t) {
  return t.replace(/\s+/g, " ").trim();
}

const html = fs.readFileSync(`C:/xampp/htdocs/lunexa/${file}`, "utf8");
const $ = cheerio.load(html);
$("script, style").remove();
const srcT = normText($("body").text());

const server = await createServer({
  root: "C:/xampp/htdocs/lunexa-react",
  server: { middlewareMode: true },
  appType: "custom",
});
const mod = await server.ssrLoadModule(`/src/pages/${component}.jsx`);
const rHtml = renderToStaticMarkup(React.createElement(mod.default));
await server.close();
const $$ = cheerio.load(rHtml);
const reactT = normText($$.text());

// find first divergence
let i = 0;
while (i < Math.min(srcT.length, reactT.length) && srcT[i] === reactT[i]) i++;
console.log("first diverge at char", i);
console.log("SRC  ...", JSON.stringify(srcT.slice(Math.max(0, i - 80), i + 200)));
console.log("REACT...", JSON.stringify(reactT.slice(Math.max(0, i - 80), i + 200)));
