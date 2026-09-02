// Re-applies the hand-written functional Contact form on top of a freshly
// auto-converted Contact.jsx. Run this (via `npm run resync-contact`, or
// directly) any time `convert.mjs` is re-run — regenerating Contact.jsx wipes
// this patch, since the converter has no idea this form should be functional.
import fs from "node:fs";

const file = "C:/xampp/htdocs/lunexa-react/src/pages/Contact.jsx";
let src = fs.readFileSync(file, "utf8");

if (src.includes("handleContactSubmit")) {
  console.log("Contact.jsx already patched, nothing to do.");
  process.exit(0);
}

const HEADER_OLD = `import Layout from "../components/Layout.jsx";

export default function Contact() {
  return (`;

const HEADER_NEW = `import { useState } from "react";
import Layout from "../components/Layout.jsx";
import CountrySelect from "../components/CountrySelect.jsx";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleContactSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const data = new FormData(e.target);
      // process-form.php expects a single \`popupname\` field (see the PHPMailer
      // backend in ../lunexa/process-form.php); this form splits it into
      // First/Last Name for a better UI, so it's recombined here.
      const fullName = [data.get("firstName"), data.get("lastName")].filter(Boolean).join(" ");
      data.set("popupname", fullName);
      const res = await fetch("/process-form.php", { method: "POST", body: data });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (`;

if (!src.includes(HEADER_OLD)) throw new Error("header anchor not found — Contact.jsx shape changed");
src = src.replace(HEADER_OLD, HEADER_NEW);
fs.writeFileSync(file, src, "utf8");

const lines = fs.readFileSync(file, "utf8").split("\n");

// 1-indexed inclusive range covering the original static <form> block
// (from `<form action={"#"} method={"POST"}>` through its matching `</form>`).
const startLine = lines.findIndex((l) => l.trim() === '<form action={"#"} method={"POST"}>') + 1; // 1-indexed
if (startLine === 0) throw new Error("start anchor not found");
let depth = 0;
let endLine = -1;
for (let i = startLine - 1; i < lines.length; i++) {
  const opens = (lines[i].match(/<form\b/g) || []).length;
  const closes = (lines[i].match(/<\/form>/g) || []).length;
  depth += opens - closes;
  if (depth === 0) {
    endLine = i + 1; // 1-indexed
    break;
  }
}
if (endLine === -1) throw new Error("end anchor not found");

const replacement = `                  <form action="#" method="POST" onSubmit={handleContactSubmit}>
                    <input type="hidden" name="utm_source" defaultValue="" />
                    <input type="hidden" name="utm_term" defaultValue="" />
                    <input type="hidden" name="utm_campaign" defaultValue="" />
                    <input type="hidden" name="gclid" defaultValue="" />
                    <div className="row" id="form8">
                      <div className="col-lg-6">
                        <input type="text" placeholder="First Name" name="firstName" required />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Last Name" name="lastName" required />
                      </div>
                      <div className="col-lg-5">
                        <div className="contact-dd newcountrycode">
                          <span></span>
                          <CountrySelect name="pc" className="countrylist valid" />
                        </div>
                      </div>
                      <div className="col-lg-2 noguttar">
                        <input type="text" name="countrycode" id="countrycode" readOnly />
                      </div>
                      <div className="col-lg-5">
                        <div className="num-with-code">
                          <input type="tel" id="phoneNum" name="phone" placeholder="Phone Number" required />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Email Address" name="popupemail" required />
                        <input type="hidden" name="source" defaultValue="contact form" />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Subject" name="subject" required />
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Message" name="message" required></textarea>
                      </div>
                      <div className="col-lg-12">
                        <input type="submit" value={status === "sending" ? "Sending…" : "Send"} disabled={status === "sending"} />
                      </div>
                      {status === "sent" && (
                        <div className="col-lg-12">
                          <p className="contact-form-status contact-form-status--ok">Thanks! Your message has been sent — we'll be in touch shortly.</p>
                        </div>
                      )}
                      {status === "error" && (
                        <div className="col-lg-12">
                          <p className="contact-form-status contact-form-status--err">Something went wrong sending your message. Please try again.</p>
                        </div>
                      )}
                    </div>
                  </form>`;

const newLines = [
  ...lines.slice(0, startLine - 1),
  replacement,
  ...lines.slice(endLine),
];

fs.writeFileSync(file, newLines.join("\n"), "utf8");
console.log(`Replaced lines ${startLine}-${endLine} (${endLine - startLine + 1} lines) with ${replacement.split("\n").length} lines.`);
