import * as cheerio from "cheerio";
import fs from "node:fs";

const html = fs.readFileSync("C:/xampp/htdocs/lunexa/index.php", "utf8");
const $ = cheerio.load(html);
const select = $("select.countrylist").first();
const countries = [];
select.find("option").each((_, el) => {
  const $el = $(el);
  countries.push({
    dial: $el.attr("value"),
    abbr: $el.attr("data-abbr"),
    name: $el.text().trim(),
    selected: $el.attr("selected") === "selected",
  });
});

const out = `// Generated from the legacy country <select> in index.php. Used by CountrySelect.
const countries = ${JSON.stringify(countries, null, 2)};

export default countries;
`;
fs.writeFileSync("C:/xampp/htdocs/lunexa-react/src/data/countries.js", out, "utf8");
console.log("wrote", countries.length, "countries");
