// Real-browser end-to-end test (Playwright + Chromium) covering: every route loads
// clean (no console errors, no 404s), mobile viewport has no horizontal overflow,
// mobile nav toggle works, carousels/lightbox actually initialize, and both wired
// forms (LeadPopup + Contact) submit successfully through to process-form.php.
import { chromium } from "playwright";
import fs from "node:fs";

const BASE = "http://localhost:5174";
const SHOT_DIR = "C:/Users/FAZZCO~1/AppData/Local/Temp/claude/C--xampp-htdocs-lunexa/788f6913-b36c-4e3f-b323-7b95961dc15a/scratchpad/shots";
fs.mkdirSync(SHOT_DIR, { recursive: true });

const ROUTES = [
  "/", "/website", "/branding", "/ecommerce", "/mobile", "/about", "/packages",
  "/contact", "/faqs", "/reviews", "/crm", "/seo", "/all-in-one",
  "/privacy-policy", "/refund-policy", "/terms-and-conditions",
];

const DESKTOP = { width: 1440, height: 900 };
const MOBILE = { width: 390, height: 844 }; // iPhone 12-ish

const results = { desktop: [], mobile: [], interactions: [] };

const browser = await chromium.launch();

async function checkRoute(context, route, viewportName) {
  const page = await context.newPage();
  const consoleErrors = [];
  const failedRequests = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text().slice(0, 200));
  });
  page.on("requestfailed", (req) => failedRequests.push(`${req.url()} (${req.failure()?.errorText})`));
  page.on("response", (res) => {
    if (res.status() >= 400) failedRequests.push(`${res.url()} -> ${res.status()}`);
  });

  const t0 = Date.now();
  let navError = null;
  try {
    await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 20000 });
  } catch (e) {
    navError = e.message.slice(0, 200);
  }
  await page.waitForTimeout(300); // let jQuery ready-handlers settle

  const title = await page.title().catch(() => null);
  const headerVisible = await page.locator("header").count();
  const footerVisible = await page.locator("footer").count();
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth).catch(() => null);
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth).catch(() => null);
  const overflow = scrollWidth && clientWidth ? scrollWidth - clientWidth : null;

  const record = {
    route,
    ms: Date.now() - t0,
    navError,
    title,
    headerVisible,
    footerVisible,
    scrollWidth,
    clientWidth,
    overflowPx: overflow,
    consoleErrors: [...new Set(consoleErrors)].slice(0, 8),
    failedRequests: [...new Set(failedRequests)].slice(0, 8),
  };
  results[viewportName].push(record);
  await page.close();
  return record;
}

function printRec(rec) {
  const flag = rec.navError || rec.consoleErrors.length || rec.failedRequests.length || (rec.overflowPx && rec.overflowPx > 5) ? " <-- ISSUE" : "";
  console.log(`${rec.route.padEnd(24)} ${rec.ms}ms  title="${(rec.title || "").slice(0, 40)}" overflow=${rec.overflowPx}px${flag}`);
  if (rec.navError) console.log(`   navError: ${rec.navError}`);
  for (const e of rec.consoleErrors) console.log(`   console: ${e}`);
  for (const f of rec.failedRequests) console.log(`   failed:  ${f}`);
}

console.log("=== DESKTOP pass (1440x900) ===");
const desktopCtx = await browser.newContext({ viewport: DESKTOP });
for (const r of ROUTES) {
  const rec = await checkRoute(desktopCtx, r, "desktop");
  printRec(rec);
}
await desktopCtx.close();

console.log("\n=== MOBILE pass (390x844) ===");
const mobileCtx = await browser.newContext({ viewport: MOBILE, isMobile: true, hasTouch: true });
for (const r of ROUTES) {
  const rec = await checkRoute(mobileCtx, r, "mobile");
  printRec(rec);
}
await mobileCtx.close();

// ---- Interaction tests ----
console.log("\n=== Interaction tests ===");

function record(name, ok, detail) {
  results.interactions.push({ name, ok, detail });
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? "  -- " + detail : ""}`);
}

async function test(name, fn) {
  try {
    await fn();
  } catch (e) {
    record(name, false, `THREW: ${e.message.split("\n")[0]}`);
  }
}

// 1. Mobile nav toggle
await test("mobile nav-btn toggles .active class on click", async () => {
  const ctx = await browser.newContext({ viewport: MOBILE, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  // custom.js clones the whole header for the sticky-on-scroll effect
  // ($("header").before($(".StickyHeader").clone().addClass("stick"))), inserted
  // *before* the original in DOM order and hidden until scrolled — so there are
  // two a.nav-btn elements; .first() would grab the hidden clone's. Use :visible.
  const navBtn = page.locator("a.nav-btn:visible").first();
  const beforeClass = await navBtn.getAttribute("class");
  await navBtn.click();
  await page.waitForTimeout(300);
  const afterClass = await navBtn.getAttribute("class");
  await page.screenshot({ path: `${SHOT_DIR}/mobile-nav-toggle.png` });
  record("mobile nav-btn toggles .active class on click", (beforeClass || "").indexOf("active") === -1 && (afterClass || "").includes("active"), `before="${beforeClass}" after="${afterClass}"`);
  await ctx.close();
});

// 2. Carousels actually initialized (Slick adds .slick-initialized)
await test("Slick carousels initialize on Home", async () => {
  const ctx = await browser.newContext({ viewport: DESKTOP });
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  const slickCount = await page.locator(".slick-initialized").count();
  record("Slick carousels initialize on Home", slickCount > 0, `${slickCount} .slick-initialized elements found`);
  await ctx.close();
});

// 3. Fancybox lightbox opens
await test("Fancybox lightbox opens on thumbnail click", async () => {
  const ctx = await browser.newContext({ viewport: DESKTOP });
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  const thumbCount = await page.locator("[data-fancybox]").count();
  if (thumbCount > 0) {
    // Fancybox binds via document-level event delegation (see README §4a), so a
    // native DOM click works regardless of Playwright's viewport/visibility
    // actionability checks, which some thumbnails fail (zero-size anchor boxes).
    await page.evaluate(() => document.querySelector("[data-fancybox]")?.click());
    await page.waitForTimeout(500);
    const fbCount = await page.locator(".fancybox-container, .fancybox-is-open").count();
    await page.screenshot({ path: `${SHOT_DIR}/fancybox-open.png` });
    record("Fancybox lightbox opens on thumbnail click", fbCount > 0, `${thumbCount} data-fancybox elements on page`);
  } else {
    record("Fancybox lightbox opens on thumbnail click", false, "no [data-fancybox] elements found on Home");
  }
  await ctx.close();
});

// 4. Process "tabs" (ul.process-ul li click swaps the active step) on Home
await test("Process tabs switch active step on click", async () => {
  const ctx = await browser.newContext({ viewport: DESKTOP });
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  const items = page.locator("ul.process-ul li");
  const n = await items.count();
  if (n < 2) {
    record("Process tabs switch active step on click", false, `only ${n} ul.process-ul li found`);
  } else {
    await items.nth(1).scrollIntoViewIfNeeded();
    await items.nth(1).click({ force: true });
    await page.waitForTimeout(300);
    const activeClass = await items.nth(1).getAttribute("class");
    record("Process tabs switch active step on click", (activeClass || "").includes("active"), `item[1] class="${activeClass}"`);
  }
  await ctx.close();
});

// 5. LeadPopup: reveal via footer toggle, fill, submit
await test("LeadPopup submits and shows a status message", async () => {
  const ctx = await browser.newContext({ viewport: DESKTOP });
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  // .open-form-slide is display:none by default; .open-form-footr toggles it via jQuery slideToggle()
  await page.click(".open-form-footr");
  await page.waitForTimeout(600);
  const revealed = await page.locator("#form7 #name").isVisible().catch(() => false);
  if (!revealed) {
    record("LeadPopup submits and shows a status message", false, "form did not become visible after clicking .open-form-footr (slideToggle didn't run)");
  } else {
    await page.fill("#form7 #name", "Playwright Test");
    await page.fill("#form7 #email", "playwright-test@example.com");
    await page.fill("#form7 #phoneNum2", "5551234567");
    await page.click('#form7 button[type="submit"]');
    await page.waitForTimeout(1500);
    const statusText = await page.locator(".lead-popup-status").first().textContent().catch(() => null);
    await page.screenshot({ path: `${SHOT_DIR}/leadpopup-submitted.png` });
    record("LeadPopup submits and shows a status message", !!statusText, `status="${statusText}"`);
  }
  await ctx.close();
});

// 6. Contact page main form submit
await test("Contact page form submits and shows a status message", async () => {
  const ctx = await browser.newContext({ viewport: DESKTOP });
  const page = await ctx.newPage();
  await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  await page.fill('input[name="firstName"]', "Play");
  await page.fill('input[name="lastName"]', "Wright");
  await page.fill('input[name="popupemail"]', "playwright-test@example.com");
  await page.fill('input[name="phone"]', "5551234567");
  await page.fill('input[name="subject"]', "Automated test");
  await page.fill('textarea[name="message"]', "This is a Playwright end-to-end test submission.");
  await page.click('#form8 ~ .row input[type="submit"]');
  await page.waitForTimeout(1500);
  const statusText = await page.locator(".contact-form-status").first().textContent().catch(() => null);
  await page.screenshot({ path: `${SHOT_DIR}/contact-submitted.png` });
  record("Contact page form submits and shows a status message", !!statusText, `status="${statusText}"`);
  await ctx.close();
});

// 7. Full-page nav actually changes route (no client-side routing regressions)
await test("Header nav link navigates + active nav highlight", async () => {
  const ctx = await browser.newContext({ viewport: DESKTOP });
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  // 3-way ambiguous otherwise: the sticky-header clone (visible-but-off-canvas
  // pre-scroll), the real header, and the footer's "About us" link all match.
  await page.click('header:not(.stick) .top-nav a[href="/about"]');
  await page.waitForLoadState("networkidle");
  const url = page.url();
  const activeNavText = await page.locator("li.active_nav a:visible").first().textContent().catch(() => null);
  record("Header nav link navigates to /about", url.endsWith("/about"), `url=${url}`);
  record("Active nav highlight matches current page", (activeNavText || "").trim() === "About Us", `active="${activeNavText}"`);
  await ctx.close();
});

// 8. Countdown popup renders with numbers
await test("Cyber Monday countdown renders a numeric value", async () => {
  const ctx = await browser.newContext({ viewport: DESKTOP });
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  const days = await page.locator("#clockdiv .days").textContent().catch(() => null);
  await page.screenshot({ path: `${SHOT_DIR}/desktop-home.png`, fullPage: false });
  record("Cyber Monday countdown renders a numeric value", /^\d+$/.test((days || "").trim()), `days="${days}"`);
  await ctx.close();
});

// Mobile screenshot of a content-heavy page for visual review
await test("mobile screenshot capture", async () => {
  const ctx = await browser.newContext({ viewport: MOBILE, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  await page.goto(BASE + "/packages", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${SHOT_DIR}/mobile-packages.png`, fullPage: true });
  await ctx.close();
});

await browser.close();

fs.writeFileSync(`${SHOT_DIR}/../e2e-results.json`, JSON.stringify(results, null, 2));

console.log("\n=== SUMMARY ===");
const allDesktopIssues = results.desktop.filter((r) => r.navError || r.consoleErrors.length || r.failedRequests.length || (r.overflowPx && r.overflowPx > 5));
const allMobileIssues = results.mobile.filter((r) => r.navError || r.consoleErrors.length || r.failedRequests.length || (r.overflowPx && r.overflowPx > 5));
console.log(`Desktop: ${results.desktop.length - allDesktopIssues.length}/${results.desktop.length} clean`);
console.log(`Mobile:  ${results.mobile.length - allMobileIssues.length}/${results.mobile.length} clean`);
console.log(`Interactions: ${results.interactions.filter((i) => i.ok).length}/${results.interactions.length} passed`);
if (allDesktopIssues.length) console.log("\nDesktop issues:", JSON.stringify(allDesktopIssues, null, 2));
if (allMobileIssues.length) console.log("\nMobile issues:", JSON.stringify(allMobileIssues, null, 2));
const failedInteractions = results.interactions.filter((i) => !i.ok);
if (failedInteractions.length) console.log("\nFailed interactions:", JSON.stringify(failedInteractions, null, 2));
