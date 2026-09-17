# ACHLIFE Solutions — website rebuild (React + Vite)

A from-scratch rebuild of achlifes.com as a real React app, replacing the old
WordPress/Elementor page. All **three parts are now complete.**

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## What's in Part 1

- `src/components/Navbar.jsx` — top contact bar + sticky nav with mobile menu
- `src/components/Hero.jsx` — headline, CTAs, credential strip, SVG molecule diagram
- `src/components/About.jsx` — company overview + key facts column
- `src/components/WhyChooseUs.jsx` — the 8 "why choose us" reasons as a spec-sheet grid
- `src/components/Certifications.jsx` — certification badges on a dark band
- `src/styles/tokens.css` — design tokens (colors, type, spacing)
- `src/styles/global.css` — all layout/section styling for Part 1
- `src/data/content.js` — editable copy/content for the above sections

**Note:** certification names in `content.js` are placeholders — swap in the
real certificate names/scans when available.

## What's in Part 2

- `src/components/Products.jsx` — interactive category-filterable product catalogue (14 products across precursors, reagents, intermediates and APIs)
- `src/components/OurStrength.jsx` — stats band (customers, product count, years of expertise)
- `src/components/ContractManufacturing.jsx` — contract manufacturing pitch shown as a real 4-step engagement process

## What's in Part 3

- `src/components/Clients.jsx` — auto-scrolling partner marquee (pauses on hover), looped seamlessly with CSS
- `src/components/Blog.jsx` — three blog post cards linking out to the real posts on achlifes.com
- `src/components/SpecRequestForm.jsx` — a fully working product specification request form: controlled inputs, inline validation, and a success state (no backend wired up yet — see note below)
- `src/components/Footer.jsx` — brand blurb, quick links, product links, contact details, bottom bar

**Note on the form:** `SpecRequestForm.jsx` validates and shows a success
message client-side, but doesn't send data anywhere yet. To make it live,
wire the `handleSubmit` function to your email service, a form endpoint
(e.g. Formspree), or your own API route.

**Note on placeholders:** certification names (`certifications` in
`content.js`) and client partner names (`clientPartners`) are generic
placeholders — swap in the real names/logos once you have them.

## The site now has three parts, wired together

1. Navigation, Hero, About, Why Choose Us, Certifications
2. Products showcase (filterable), Our Strength stats, Contract Manufacturing
3. Clients marquee, Blog, Specification request form, Footer

All are already wired into `src/App.jsx` in that order — nothing further to assemble.

---

## Update: navigation, mobile layout & motion

### Navigation now actually works
The original nav pointed at `/about-us`, `/all-products`, `/contact-us` — separate
WordPress pages that don't exist in this single-page build, so those links went
nowhere. Every link now targets a real section on the page, and the same fix was
applied to the footer links and the in-section CTAs.

The nav also highlights the section you're currently reading (`useScrollSpy`).

### "Request a quote"
That button previously did nothing, which is why it looked meaningless. It now
scrolls to the **Product specification request** form at the bottom — the place
where a visitor actually asks for pricing. If you'd rather it opened an email or
a phone call instead, change the `href` on `.navbar__cta` in `Navbar.jsx`.

### Mobile
The old mobile menu was a max-height collapse that overflowed and left the page
scrollable behind it. Replaced with a proper slide-in drawer:

- Slides in from the right with a tap-to-dismiss backdrop
- Locks background scrolling while open; closes on Esc or on link tap
- Burger icon morphs into an X
- Hidden from the tab order and screen readers when closed

The responsive CSS was rewritten as one ordered system at the bottom of
`global.css` (1000px → 860px → 640px → 400px) instead of ~15 media queries
scattered through the file. Also fixed: `overflow-x` clamped so nothing can push
the page sideways, tap targets raised to 44px minimum, and form inputs set to
16px so iOS doesn't zoom on focus.

### Animations (kept restrained)
- Sections fade/lift in once on scroll (`Reveal` + `useReveal`)
- Stat numbers count up when the strength band enters view (`useCountUp`)
- Small hover lifts on product and blog cards; row tint on "why choose us"
- Navbar gains a hairline shadow after scrolling
- Drawer slide + burger morph

All of it is disabled under `prefers-reduced-motion`, and the reveal hook reports
"visible" immediately in that case so no content is ever stuck hidden.

### Verification
The build was run in jsdom to confirm: no runtime errors, all anchors resolve,
the drawer opens/closes and locks scroll, the product filters return the right
counts, and the form blocks an empty submit (5 errors) then accepts valid input.

### Builds
- `npm run build` — normal production build → `dist/`
- `npx vite build --config vite.standalone.config.js` — single classic-script
  bundle used to generate the one-file preview

---

## Update: SEO, favicon & accessibility

### Search and social sharing
`index.html` now carries a full head: meta description, canonical URL,
theme-color, Open Graph and Twitter card tags, and JSON-LD `Organization`
structured data (name, phone, email, postal address, LinkedIn) so Google can
show the company correctly in search results.

Two assets were added in `public/`:
- `favicon.svg` — the brand hexagon mark as a browser tab icon
- `og-image.png` — a 1200×630 branded preview card, shown when the URL is
  pasted into LinkedIn, WhatsApp or Slack

The OG tags use absolute `https://achlifes.com/...` URLs. If the site is
deployed to a different domain, update those four URLs and the canonical link.

### Accessibility
- **Skip link** — keyboard users can jump straight past the nav to the content
- **Product filters** were marked up as `role="tablist"` / `role="tab"` without
  any tabpanels, which misleads screen readers into announcing a tab interface
  that doesn't exist. They're now a labelled button group using `aria-pressed`,
  with a live region announcing the filtered result count
- **Form errors** are now tied to their inputs via `aria-describedby`, and a
  failed submit moves focus to the first invalid field instead of silently
  doing nothing
- **Heading order** — footer column headings were `<h4>` directly under an
  `<h2>`, skipping a level; now `<h3>`
- The closed mobile drawer is kept out of the tab order and the accessibility
  tree via `visibility`, rather than being visually hidden but still focusable

### Preview generation
`make_preview.py` now derives the single-file preview's `<head>` from the real
build output instead of keeping a hand-written copy, so metadata can't drift.
It asserts the OG tags, JSON-LD and script ordering survived before writing.

### Verified in jsdom
Single `<h1>`, no heading-level skips, all four landmarks present, skip-link
target resolves, every SVG labelled or `aria-hidden`, every button has an
accessible name, every input has a `<label for>`, all error messages resolve,
focus moves correctly, JSON-LD parses, and no runtime errors.
