// Word-level diff (order-insensitive) between source and React text, to separate
// real content loss from whitespace-collapsing noise between adjacent inline tags.
import { createServer } from "vite";
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
import * as cheerio from "cheerio";
import fs from "node:fs";

const file = process.argv[2];
const component = process.argv[3];

function words(t) {
  return t.toLowerCase().match(/[a-z0-9%'&]+/g) || [];
}
function counts(arr) {
  const m = new Map();
  for (const w of arr) m.set(w, (m.get(w) || 0) + 1);
  return m;
}

const html = fs.readFileSync(`C:/xampp/htdocs/lunexa/${file}`, "utf8");
const $ = cheerio.load(html);
$("script, style").remove();
const srcWords = counts(words($("body").text()));

const server = await createServer({ root: "C:/xampp/htdocs/lunexa-react", server: { middlewareMode: true }, appType: "custom" });
const mod = await server.ssrLoadModule(`/src/pages/${component}.jsx`);
const rHtml = renderToStaticMarkup(React.createElement(mod.default));
await server.close();
const $$ = cheerio.load(rHtml);
const reactWords = counts(words($$.text()));

const onlyInSrc = [];
for (const [w, c] of srcWords) {
  const rc = reactWords.get(w) || 0;
  if (c > rc) onlyInSrc.push([w, c - rc]);
}
const onlyInReact = [];
for (const [w, c] of reactWords) {
  const sc = srcWords.get(w) || 0;
  if (c > sc) onlyInReact.push([w, c - sc]);
}
onlyInSrc.sort((a, b) => b[1] - a[1]);
onlyInReact.sort((a, b) => b[1] - a[1]);
console.log(`Missing from React (present in source), top 30 of ${onlyInSrc.length}:`);
console.log(onlyInSrc.slice(0, 30));
console.log(`\nExtra in React (not in source), top 30 of ${onlyInReact.length}:`);
console.log(onlyInReact.slice(0, 30));
