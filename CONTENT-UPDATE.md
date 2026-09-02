# Content Update — Lunexa Studios source content

Date: 2026-08-31
Source: https://lunexastudios.com/

## What was done

1. **Audited every page in `src/pages/`** against the live site and the app's
   own routing/nav (`src/components/Header.jsx`) to see which pages already
   carry real Lunexa Studios content and which still had leftover copy from
   the original template this project was built from (a generic
   "logo/website design service" agency theme).
2. **`src/pages/Home.jsx`** — already fully matched the live homepage
   (`https://lunexastudios.com/`). No changes were needed; verified section
   by section (hero, expertise, social proof, 3 core approaches, why-choose,
   4 divisions, case studies, testimonials, process, pricing, footer).
3. **`src/pages/Website.jsx`** (route `/website`, nav label **"Lunexa
   Digital"**) — rewritten from scratch. It previously contained unrelated
   template placeholder copy ("Website design service by expert designers",
   static/dynamic/CMS website type tiles, WordPress package tiers, etc.).
   It now mirrors the live **`/Lunexa-Digital`** page, reusing the same
   section markup/CSS classes already proven out on the home page. File
   size went from 6,490 lines of unrelated boilerplate to a focused 847
   lines.
4. **`src/pages/Branding.jsx`** (route `/branding`, nav label **"Lunexa
   Launchpad"**) — rewritten to mirror the live **`/Lunexa-Launchpad`**
   page. Now 791 lines.
5. **`src/pages/Ecommerce.jsx`** (route `/ecommerce`, nav label **"Lunexa
   Connect"**) — rewritten to mirror the live **`/Lunexa-Connect`** page.
   Now 1,079 lines.
6. **`src/pages/Mobile.jsx`** (route `/mobile`, nav label **"Lunexa
   Media"**) — rewritten to mirror the live **`/Lunexa-Media`** page. Now
   630 lines.
7. Verified the app builds cleanly (`npx vite build`) and lints clean
   (`npx oxlint`) after every change — each page was checked independently.

All four division pages plus the homepage now reflect the live
lunexastudios.com content. Nothing in `src/pages/` still carries the old
placeholder "logo/website design service" template copy.

## `/website` ("Lunexa Digital") — new section-by-section content

| Section | Heading | Key content |
|---|---|---|
| Hero | "Innovative Digital Solutions for Growth" | Tagline + "Get Started" / "Get a Free Consultation" CTAs |
| Client logos | — | Reused shared `bclient-logos` strip |
| Expertise | "At **Lunexa Digital**" | Description + 6-item core services checklist (Web Development, Mobile App Development, Custom Software Solutions, CRMs/Dashboards, Digital Marketing & Growth, Conversion Optimization) + "8+ Years of Experience" stat |
| Social proof | "Powering Success for Top Brands" | Growth tagline |
| Features (3 cards) | Data-Driven Approach / Creative & Innovative / Transparent Reporting | Full descriptive copy + "Read More" CTAs |
| CTA banner | "Your Success is Our Mission" | "Let's Talk Strategy" + Live Chat + phone CTA |
| CTA banner | "Transform Your Business with Lunexa!" | Supporting tagline |
| Core Services (4 tiles) | "Our Expert Solutions That Drive Real Results" | Mobile App Development → `/mobile`, Custom Software Solutions → `/crm`, Digital Marketing & Growth → `/seo`, Website Development → `/all-in-one` |
| Case studies (4) | "See How We Help Businesses Thrive" | Local Business Digital Transformation, SaaS Lead Generation Success, E-Commerce Growth Boost, Startup Brand Awareness Expansion — each with tags + result stat |
| Testimonials (3) | "Hear from Our Satisfied Clients, Real Success Stories" | Emma Richard (CEO, Nexatech), David Mont (Marketing Director), Sophia Lewis (Founder) — verbatim quotes, reused from Home.jsx |
| Process (4 steps) | "Simple Steps to Digital Success" | Discovery & Consult → Strategy & Planning → Execution & Optimize → Results & Growth |
| Pricing | "Flexible Pricing Plan for Every Business" | Lunexa One Team Plan — $5,000/month, full itemized feature list (Marketing & Advertising, Social Media Management, Content Creation, SEO & Online Presence, Exclusive Lunexa One Benefits, Reporting & Strategy), "Explore More Plans" → `/packages` |

## Known gaps / deliberate simplifications

- **No dedicated video block.** The live page has a short "See How We Help
  Brands Grow" video embed between the Why-Choose and Transform banners.
  `Home.jsx` has no video-embed pattern anywhere to copy, so this was
  folded into the adjacent "Transform Your Business" text banner instead
  of introducing a new, unproven markup pattern.
- **Placeholder imagery.** Testimonial photos and the named client logos
  (Lunexan, Crevox, Brandex, Bravix, Nexora, Adstra) shown on the live site
  don't exist as local assets in `public/assets/images`. The page reuses
  the same placeholder image (`logo-pic-01.png`) and generic
  `bclient-logos/*.png` strip that `Home.jsx` already uses — swap in real
  assets if/when they're provided.
- **Single pricing tier shown.** The live `/Lunexa-Digital` page also has a
  second, more detailed 4-tier pricing table (Foundation $3,500 / Growth
  $5,000 / Authority $7,500 / Enterprise custom). That tier breakdown
  already lives on this app's `/packages` page, so it wasn't duplicated
  here — the page's "Explore More Plans" button links there instead.

## `/branding` ("Lunexa Launchpad") — new section-by-section content

| Section | Heading | Key content |
|---|---|---|
| Hero | "Launch. Scale. Dominate the Marketplace." | "Start My E-Commerce Journey" + "Get a Free Consultation" CTAs |
| Expertise | "Data Driven Strategies, Measurable Results" | 6-item checklist (Product Research & Sourcing, Store Setup & Optimization, E-Commerce Marketing, End-to-End Brand Management, Fulfillment & Logistics, Marketplace Growth) |
| Features (3 cards) | One Umbrella Solution / Data-Backed Strategy / Faster Time-to-Market | Full descriptive copy |
| Core Services (4 tiles) | "Our Expert Solutions That Drive Real Results" | Product Research & Sourcing, Store Setup & Optimization, E-Commerce Marketing → `/seo`, End-to-End Brand Management → `/ecommerce` |
| Case studies / Testimonials / Process | (shared) | Same 4 case studies, 3 testimonials, 4-step process reused verbatim from `Website.jsx` |
| Pricing | "Flexible Pricing Plans for Every Business" | 3-tier grid: **Starter Growth** $399/mo, **Growth** $899/mo, **Scale** $1,499/mo — adapted from `Packages.jsx`'s multi-card layout |

## `/ecommerce` ("Lunexa Connect") — new section-by-section content

| Section | Heading | Key content |
|---|---|---|
| Hero | "Your Reliable Outsourcing & Call Center Partner" | "Get a Free Outsourcing Consultation" CTA |
| Expertise | "Customer expectations are higher than ever!" | 6-item checklist + "Connect Smarter. Serve Better. Grow Faster." tagline |
| Features (3 cards) | Cost Efficiency / 24/7 Global Coverage / Data-Driven Insights | Full descriptive copy |
| Core Services (4 tiles) | "Our Expert Solutions That Drive Real Results" | Cross-links to all 4 divisions: `/website`, `/branding`, `/ecommerce`, `/mobile` |
| Case studies / Testimonials / Process | (shared) | Same 4 case studies, 3 testimonials, 4-step process reused verbatim from `Website.jsx` |
| Pricing 1 | "Flexible Pricing Plan for Every Business" | Exact "Lunexa One Team Plan" card reused verbatim from `Website.jsx` ($5,000/mo) |
| Pricing 2 | "Industry-Specific Outsourcing Plans" | 7 compact hourly-rate cards: Clinic & Healthcare ($9/hr), Real Estate ($8/hr), E-Commerce & Retail ($7/hr), Education & EdTech ($8/hr), Custom Outsourcing Teams (quote), Digital Marketing Assistant ($8/hr), Sales Agent ($10/hr) |

## `/mobile` ("Lunexa Media") — new section-by-section content

This page's live source is structurally different (a photography/video service page, not the marketing-agency template), so it keeps the shared hero/logo-strip/CTA-banner/process blocks for visual consistency but swaps the case-studies/testimonials/big-pricing-plan sections for photography-specific content.

| Section | Heading | Key content |
|---|---|---|
| Hero | "Professional Photography & Visuals That Capture Stories" | "Get Started" + "Get a Free Consultation" CTAs |
| Service categories | "What We Shoot" | Portraits, Weddings, Glamour |
| Pricing (4 cards) | "Photography & Video Packages" | Family Session ($450), Graduation Session ($450), Birthday/Party ($500), Wedding Events (from $1,200) — each with the live site's exact feature bullets and add-on notes |
| Portfolio | "Our Creative Portfolio" | 3 categories (Events/Graduation, Family Portraits, Cap and Gown Sessions), each with placeholder thumbnails |
| Process / Closing CTA | (shared) | Same 4-step process + "Transform Your Business with Lunexa!" banner reused from `Website.jsx` |

## Known gaps / deliberate simplifications across the 3 new pages

- **`/branding` and `/ecommerce`:** every spec item fit cleanly into the
  existing template markup — no content was dropped.
- **`/mobile` portfolio images:** no real Lunexa Media photography assets
  exist locally, so the 9 portfolio thumbnails reuse existing generic
  headshot placeholders (`public/assets/images/people/testi-author-0{1-9}.jpg`).
  **Swap these for real photos before going live** — they're the one
  clearly non-final piece of this round of work.
- **`/mobile` pricing section background** reuses the existing
  `packeges.jpg` asset rather than a photography-specific background.

## Verification

All four rewritten pages were built and linted independently:

- `npx vite build` — ✅ succeeds (checked after each page)
- `npx oxlint src/pages/Website.jsx` — ✅ no issues
- `npx oxlint src/pages/Branding.jsx` — ✅ no issues
- `npx oxlint src/pages/Ecommerce.jsx` — ✅ no issues
- `npx oxlint src/pages/Mobile.jsx` — ✅ no issues
