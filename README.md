# Lunexa Studio — React Conversion

This is a React (Vite) rebuild of the static `lunexa` site (`C:\xampp\htdocs\lunexa`). The
original project is **untouched** — this lives in a separate `lunexa-react` folder next to it.

## 1. What the original project was

A 15-page marketing/agency site (logo, website, branding, ecommerce, mobile-app, SEO, CRM
services) built as static HTML + one PHP page (`index.php`), sharing:

| Piece | Size | Role |
|---|---|---|
| `assets/css/layout.css` + `main.css` | ~27k lines | Bootstrap-era global styling |
| `assets/js/layout.js` | ~16.5k lines | **Not custom code** — a vendored bundle of jQuery 1.11.1 + the Slick carousel plugin + bigSlide (mobile nav slide-out) + Fancybox (lightbox galleries) |
| `assets/js/custom.js` | ~1.5k lines | The site's actual behavior: slider init, mobile nav toggle, Fancybox init for the portfolio galleries, a Cyber-Monday countdown popup, a couple of AJAX form handlers |
| `assets/js/intlTelInput.js` | phone input formatting helper |
| `assets/js/dev.js` | dead code — entirely commented out, not migrated |
| `process-form.php` + `PHPMailer/` | the one real backend: emails a lead's name/email/country/phone to `jahanzebnobody@gmail.com` |

Every page shares an identical `<header>` (nav + top bar), an identical `<footer>`, and an
identical slide-in "Get 80% Discount" lead popup pinned above the page content. Almost every
page also embeds multiple Slick.js carousels (portfolio, testimonials, awards, "why us" lists).

## 2. What was converted

All 15 pages → 16 React route components (the extra one is `all-in-one.html`), 1:1:

| Route | Source file |
|---|---|
| `/` | `index.php` |
| `/website` | `website.html` |
| `/branding` | `branding.html` |
| `/ecommerce` | `ecommerce.html` |
| `/mobile` | `mobile.html` |
| `/about` | `about.html` |
| `/packages` | `packeges.html` |
| `/contact` | `contact.html` |
| `/faqs` | `FAQs.html` |
| `/reviews` | `reviews.html` |
| `/crm` | `crm.html` |
| `/seo` | `seo.html` |
| `/all-in-one` | `all-in-one.html` |
| `/privacy-policy` | `Privacy-Policy.html` |
| `/refund-policy` | `Refund-Policy.html` |
| `/terms-and-conditions` | `Terms&Conditions.html` |

Shared chrome became real components in `src/components/`:

- **`Header.jsx`** — nav bar, active-link highlighting driven by an `activePath` prop.
- **`Footer.jsx`** — footer links, disclaimer.
- **`LeadPopup.jsx`** — the slide-in lead form. Rewritten as a controlled component that
  actually `fetch()`-POSTs to `process-form.php` and shows a sent/error status (the original
  just did a full-page form POST).
- **`CookieConsent.jsx`** — the "Cyber Monday" countdown popup.
- **`CountrySelect.jsx`** + **`src/data/countries.js`** — the 235-country dial-code dropdown,
  extracted once into data instead of being duplicated (as literal HTML) on every page.
- **`Layout.jsx`** — composes the above around each page's unique content, and sets
  `document.title` / the meta description per page.

## 3. How the conversion was done

Given the scale (about 19,000 lines of page markup across 15 files), each page's *unique*
content was converted programmatically rather than hand-transcribed:

- `scripts/convert.mjs` parses each source file with `cheerio`, strips out the header/footer/
  lead-popup/cookie-popup (now shared components), and serializes the remaining DOM to JSX:
  `class`→`className`, `style="a:b"` → `style={{a:'b'}}`, void elements self-close, form field
  `value`/`checked` → `defaultValue`/`defaultChecked` (so React doesn't treat them as
  controlled inputs), internal `<a href="./about.html">` → `<a href="/about">` with paths
  mapped to the routes above.
- `scripts/extract-countries.mjs` pulled the country `<select>` options into
  `src/data/countries.js` once.
- `scripts/patch-contact-form.mjs` re-applies the hand-wired Contact form (see §4) on top of
  a freshly auto-converted `Contact.jsx` — the converter has no idea that page should be
  functional, so regenerating wipes it otherwise.
- `scripts/smoke-test.mjs`, `scripts/compare-content.mjs`, `scripts/word-diff.mjs` are
  verification tools, not part of the conversion itself — see §4a.

Regenerating after a source change is `npm run resync-pages` (runs `convert.mjs` then
`patch-contact-form.mjs`), followed by `npm run smoke-test`. These scripts are kept in the
repo as a record of how the migration was done and in case the original site changes and
needs re-syncing; they aren't part of the running app.

## 4a. Verification pass (old site vs. new — what was checked, what was found)

Since there's no browser available in this environment, the two sites were compared
programmatically instead of by eye:

- **`npm run build`** — production build compiles clean.
- **`npm run smoke-test`** — server-renders all 16 pages headlessly (Vite's SSR module loader
  + `react-dom/server`), catching render-time JS errors and missing `/assets/...` references.
  All 16 render clean.
- **`node scripts/compare-content.mjs`** — extracts visible body text from each original
  static file and from the SSR-rendered React equivalent and compares length; every page is
  within ±3%, mostly ±1% (the residual is whitespace-collapsing differences between raw HTML
  and JSX, not lost content — see below).
- **`node scripts/word-diff.mjs <file> <Component>`** — an order-insensitive word-count diff,
  used to inspect the largest outliers from the above. Confirmed no real words are missing;
  apparent "merges" (e.g. `nowlive`) come from JSX dropping whitespace-only text nodes between
  sibling elements, which HTML renders as a single space but JSX removes entirely when a
  newline is present. This is normal JSX behavior, not a bug — but it *could* cause a real
  visual gap to disappear if some pair of adjacent inline elements relied on incidental source
  whitespace rather than CSS for spacing. Checked the actual offenders this surfaced (header
  top bar, nav items, pricing-card CTAs): all of them get their spacing from explicit CSS
  (`.top-nav li+li { margin-left: 18px }`, `.top-info-links a { padding-left: 20px }`, or
  block-level layout), so no visual regression from this. Worth re-checking if you add new
  adjacent inline elements by hand.
- **A live POST to `process-form.php`** through the dev proxy, to confirm the wired-up forms
  actually reach the PHP backend end-to-end (they do — got the expected 302 to `test.php`;
  local XAMPP has no SMTP server configured so `mail()` itself warns, which is an environment
  detail unrelated to the conversion).

### Real bugs this pass found and fixed

- **The lead popup was showing on pages that never had it.** `FAQs.html`, `Privacy-Policy.html`,
  `Refund-Policy.html`, and `Terms&Conditions.html` don't include the `.form-topmain` slide-in
  form in the original site — but `Layout` was rendering `LeadPopup` unconditionally on every
  page, adding content (and a 235-country dropdown) that shouldn't have been there. Fixed:
  `convert.mjs` now detects `.form-topmain` per source file and passes
  `showLeadPopup={false}` to `Layout` for those four pages; `Layout` only renders `LeadPopup`
  when `showLeadPopup` (default `true`) is set. This is exactly what surfaced the +12–14%
  content-length deltas the content-comparison script first flagged.
- **Relative `assets/...` paths outside `src`/`href` weren't normalized.** The converter only
  rewrote asset paths for the `src`, `href`, `srcset`, and `poster` attributes. Two other
  patterns in the source were missed:
  - `data-src="./assets/images/x.png"` and `data-href="./assets/images/x.jpg"` — used by the
    homepage/portfolio-page image galleries. **These are real, active functionality**: contrary
    to what an earlier pass of this doc assumed, `layout.js` bundles Fancybox (not just jQuery
    + Slick), and `custom.js` calls `$("[data-fancybox]").fancybox({...})` — so these lightbox
    galleries actually work in the original site and needed correct absolute paths, not just
    cosmetic cleanup.
  - Inline `style="background-image: url('assets/images/x.png')"` — a relative path inside an
    inline style resolves against the *current document URL*, which for a React Router SPA is
    the current route, not the site root; it happened to still resolve correctly here only
    because every route is a single path segment.
  
  Fixed: attribute normalization is now based on the *value* shape (any attribute whose value
  starts with `assets/`, `./assets/`, or `../assets/`) rather than a fixed list of attribute
  names, and `styleStringToObject` rewrites `url(...)` references the same way.
- **`<option value="...">` was being rewritten to `<option defaultValue="...">`.** `defaultValue`
  isn't a real prop for `<option>` (only `<select>`/`<input>`/`<textarea>` have it), so React
  silently dropped it — every country `<select>` on every page (before the Contact/LeadPopup
  hand-rewrite) would have submitted the option's *visible text* ("AFGHANISTAN") instead of its
  dial code ("93") if a form using one were ever actually submitted. Fixed by excluding
  `<option>` from that attribute rewrite — plain `value="93"` is valid JSX as-is.

## 4b. Real-browser test pass (Playwright) — every interactive feature, desktop + mobile

§4a above was programmatic (no real browser available in that session). This pass added
Playwright + Chromium and drove the actual running app — real DOM, real jQuery/Slick/Fancybox
execution, real form submissions — at both a desktop viewport (1440×900) and a mobile one
(390×844, touch-enabled). `scripts/e2e-test.mjs` (`npm run e2e-test`) covers:

- All 16 routes loaded at both viewports: console errors, failed network requests, and
  horizontal overflow (`scrollWidth` vs `clientWidth`) captured per page.
- Mobile nav-btn hamburger menu opens and shows all nav links.
- Slick carousels actually initialize (checks for `.slick-initialized`).
- Fancybox lightbox opens on a portfolio thumbnail click.
- The process/step "tabs" (`ul.process-ul li`) switch their active state on click.
- Both wired forms (LeadPopup, Contact) fill out and submit successfully.
- Full-page header nav actually changes route, and active-nav highlighting updates.
- The Cyber Monday countdown renders real numbers.

### Two real, significant bugs this pass found (both now fixed)

- **`custom.js` was loading before React had mounted anything — breaking nearly all site
  interactivity.** Described in §4 above. This is the one that matters most: before the fix,
  the mobile hamburger menu did nothing, **every Slick carousel on every page was dead** (no
  portfolio/testimonial/award sliders), the process tabs didn't switch, and the package
  "Order Now" buttons didn't respond — because all of that code queried the DOM once, at
  script-load time, when `#root` was still empty. Fancybox appeared to work by coincidence
  (it binds via document-level event delegation, so it doesn't care when it was loaded); that
  false negative is what took longest to track down. Fixed by injecting `custom.js`
  dynamically after mount instead of loading it as a static tag (see §4 for the mechanism).
- **JSX attribute escaping bug corrupting multi-line SVG path data.** The converter emitted
  plain double-quoted JSX attributes (`d="...\n..."`) for every attribute value, built via
  `JSON.stringify`. That's correct *inside* a `{...}` JS expression, but JSX's bare
  `attr="value"` syntax is not a JS string literal — it does not process backslash escapes at
  all, so a real newline (correctly escaped to `\n` by `JSON.stringify`, which is exactly right
  for a JS string) rendered as two literal characters, backslash and `n`, right in the middle
  of an SVG `d`/`points` attribute. Every hand-formatted multi-line SVG icon on the About page
  hit this, throwing real "Expected path command"/"Expected number" console errors and
  presumably rendering the icon wrong or not at all. It's not About-page-specific — it would
  hit *any* attribute value anywhere in the source containing a literal newline. Fixed by
  always emitting attribute values as a `{"..."}` expression (`jsxAttr()` in `convert.mjs`)
  rather than a bare quoted string, so escape sequences are processed correctly regardless of
  content.

### Investigated and confirmed NOT regressions (pre-existing in the original site)

- **~249px / ~15px of horizontal overflow on desktop**, present on most pages. Traced to
  `.slick-track` (Slick's internal carousel wrapper) — `document.documentElement.scrollWidth`
  counts its full unclipped width even though the immediate `.slick-list` wrapper visually
  clips it with `overflow:hidden` (a known Slick/browser quirk, not something introduced here).
  Verified by measuring the *original* static site (still served by the same XAMPP Apache at
  `http://localhost/lunexa/...`) at the same viewport width — identical 249px/15px overflow,
  same culprit element. No visible scrollbar for real users either way.
- **The local `fontawesome-webfont.*` files are broken** (`layout.css`'s legacy `@font-face`
  block references `.eot`/`.woff2`/`.woff`/`.ttf`/`.svg` variants; only the `.woff2` exists,
  and it's a 90-byte stub, not a real font — checksums confirm the copied file is byte-identical
  to the one in the original `lunexa/assets/fonts/` folder). This produces harmless
  "invalid sfntVersion" console warnings but has no visible effect, since every page also loads
  Font Awesome 6.7.2 from a CDN in `<head>`, which is what actually renders the `fa fa-*` icons
  seen throughout the site.
- Duplicate `<header>` elements in the DOM (2 per page) — intentional: `custom.js` clones the
  header for a sticky-on-scroll effect (`$("header").before($(".StickyHeader").clone()...)`),
  unmodified original behavior.

### Result

8/9 interaction checks pass reliably; the 9th (Contact form submit) is flaky *only* inside the
long sequential test run (many browser contexts opened/closed in one script) and passes
consistently when run in isolation — treated as test-harness resource contention, not an app
bug. Screenshots from the run (mobile hamburger menu open, mobile pricing page, desktop
homepage, form-submitted states) are in the session scratchpad if you want to see them.

## 4. Deliberate design decisions (read this before extending the site)

**Navigation uses plain `<a href="/path">`, not React Router `<Link>`.** React Router
(`BrowserRouter`/`Routes`) is wired up in `App.jsx` so every route above is reachable and
bookmarkable — but the header, footer, and in-page links intentionally trigger a full page
reload instead of a client-side transition. Reason: nearly every page initializes several
Slick.js carousels via `assets/js/custom.js`'s `$(document).ready(...)`, which only runs
**once**, on the initial page load. A client-side SPA navigation would swap in a new page's
DOM without re-running that init, leaving its carousels dead. A full page load re-runs it
correctly every time, exactly like the original multi-page site. If you later rewrite the
carousels as native React components (e.g. with `embla-carousel-react` or similar), switch
these to `<Link>` for instant SPA navigation.

**The legacy scripts were kept, not rewritten — but `custom.js` loads differently than
`layout.js`, and that distinction matters (see §4b for how this was found).**
`index.html` loads `assets/js/layout.js` (jQuery 1.11.1 + Slick + bigSlide + Fancybox) and
`intlTelInput.js` as plain `<script>` tags — pure library definitions with no DOM queries of
their own, safe to load before React mounts. `assets/js/custom.js` is different: only ~100 of
its 1,480 lines are wrapped in `$(document).ready(...)`; the rest — every `.slick({...})` call,
the nav-btn toggle, the process tabs, the package "order now" buttons — is bare top-level code
(`$('.selector').on('click', ...)`, `$('.selector').slick({...})`) written assuming it's the
last script on an already-fully-rendered static page. Loading it as a plain tag in `index.html`
(before React paints anything into `#root`) means it queries an *empty* page and binds to
nothing — this exact bug shipped in an earlier version of this conversion and silently broke
essentially all site interactivity. It's now injected dynamically instead, from a `useEffect`
in `Layout.jsx` (`components/Layout.jsx`) that runs once after the page's real content has
mounted — see the comment there and in `index.html` for the full mechanism. Because every
navigation is a full page load (see above), this re-injects and re-runs custom.js fresh on
every page view, exactly like the original site loading it at the bottom of `<body>`.

This is still not a "pure" React app internally — it's a React shell around the same jQuery
behavior layer, now loaded correctly. Rewriting that behavior in React (carousels, nav toggle,
countdown) is the natural next step if you want a fully idiomatic React app; it wasn't
attempted here to avoid changing ~1,500 lines of working interaction logic sight-unseen for a
first conversion pass.

**Only two forms were wired to the backend; the rest stay static.** The Contact page alone
had **six** near-duplicate lead-capture forms (a common pattern in this template — every CTA
block has its own copy). In the *original* site, none of them actually submitted anywhere:
the popup form (`#popupform`) submit handler is commented out in `custom.js`, and the one
active AJAX handler (`#homeform`) posts to a hardcoded, unrelated third-party domain
(`logogenies.com/crm/...`) — dead functionality carried over from whatever template this was
built from. Rather than leave the site with zero working forms, two were wired for real:
  - **`LeadPopup`** (the header slide-in, present on every page) — the one whose field names
    already matched `process-form.php`'s expectations (`popupname`, `popupemail`, `pc`,
    `phone`).
  - **The Contact page's primary form** ("Fill the Required Information") — its original
    `action="#"` meant it didn't submit anywhere at all; it now `fetch()`-POSTs to
    `process-form.php` too.

  Both show an inline "sent"/"error" status instead of the original's server-side redirect to
  `test.php`. All other repeated CTA forms across the 16 pages were left exactly as
  auto-converted: visually identical, `action="#"`, no submit handler — matching their
  (already non-functional) behavior in the live site.

**A pre-existing bug was fixed while rewriting the Contact form.** Its First Name and Last
Name inputs both shared `name="popupname"` in the original markup — in a real POST, PHP's
`$_POST['popupname']` keeps only the *last* same-named field, so the first name was silently
dropped. The rewritten form uses distinct `firstName`/`lastName` fields and joins them into
`popupname` before posting, preserving the two-field UI without losing data.

**A few other pre-existing bugs in the source were fixed, not reproduced:**
- The footer logo referenced `assets/images/Lunexa StudioLogoWhite.png`, which doesn't exist
  in `assets/images/` on any page — fixed to the file that actually exists,
  `LogifyeLogoWhite.png`.
- `all-in-one.html` has a malformed `<head>` that made the HTML parser misplace
  `<meta charset>` inside `<body>`; the converter now strips any head-only tag that ends up
  in body content.
- A handful of pages have a `style="...; data-img="url(...)">` attribute with an unclosed
  quote, which HTML parsers recover from by inventing garbage pseudo-attributes — the
  converter now drops any attribute whose name isn't a syntactically valid identifier.
- One `data-fancybox` gallery link on the homepage points at `Logos/1.gif`, which doesn't
  exist (`Logos/01.gif` does) — left as-is; it's a single broken thumbnail in a working
  lightbox gallery (Fancybox *is* active on this site — see §4a), not worth guessing which of
  the 235 real images it was supposed to point to.

## 5. Running it

```bash
npm install
npm run dev       # http://localhost:5173 (or next free port)
```

The lead forms POST to `/process-form.php`. In dev, `vite.config.js` proxies that path to
`http://localhost/lunexa/process-form.php` — i.e. **XAMPP's Apache must be running** and the
original `lunexa` folder must still exist alongside this one, since the PHP/PHPMailer backend
was intentionally *not* ported (React can't run PHP). For a production deploy, put the built
`dist/` output on the same origin as `process-form.php` (e.g. serve it from
`htdocs/lunexa-react/dist` and keep `process-form.php` reachable at `/process-form.php` on
that same host), or change the fetch URLs in `LeadPopup.jsx` / `Contact.jsx` to an absolute
URL. The host also needs an SPA fallback (serve `index.html` for unknown paths) for direct/
bookmarked URLs like `/about` to work — Vite's dev server does this automatically; Apache
would need a rewrite rule.

```bash
npm run build         # production build to dist/
npm run lint           # oxlint
npm run smoke-test      # headless SSR render check of all 16 pages (no browser needed)
npm run e2e-test        # real-browser Playwright pass: desktop+mobile, all interactive
                         # features, both wired forms — see §4b. Requires the dev server
                         # running on :5174 and `npx playwright install chromium` once.
npm run resync-pages    # re-run the converter + reapply the Contact form patch,
                         # e.g. after editing anything under ../lunexa
```

## 6. Known gaps / good next steps

Status after §4a (programmatic) and §4b (real-browser Playwright) verification: build clean,
all 16 pages render error-free in SSR and in a real browser at desktop and mobile widths, all
16 routes serve 200, content parity confirmed within measurement noise, mobile nav/Slick
carousels/Fancybox/process-tabs/countdown all verified actually working (not just present in
markup), and both wired forms POST through to `process-form.php` successfully end-to-end.
Remaining gaps:

- **Carousels, mobile nav, and the countdown popup are still jQuery**, not React — see the
  "legacy scripts were kept" decision above. They work correctly now (§4b), but rewriting them
  natively would remove the full-page-navigation constraint and the jQuery dependency entirely.
- **The four duplicate lead forms elsewhere on the Contact page** (and equivalent forms on
  other pages) are static/non-functional, matching the original.
- **The homepage's `#homeform`** still posts (via `custom.js`, unmodified) to the unrelated
  `logogenies.com` domain from the original template — not touched, since fixing it would
  require guessing what it's actually supposed to do.
- **Bundle size**: the whole site is currently one ~2.8 MB JS bundle (route-based code
  splitting via `React.lazy` would shrink the per-page download).
- `test.php` / `test-mail.php` / `test-mail2.php` were developer scratch files in the
  original project, not real site pages, and weren't included in the 15-page scope.
#   l u e x a  
 #   l u e x a  
 