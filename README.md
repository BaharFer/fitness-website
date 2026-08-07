# Pulse — Premium Fitness Landing Page

A portfolio-grade landing page for **Pulse**, a fitness brand, built as a fast, accessible,
production-ready single-page site. Dark editorial design language, original geometric SVG
illustrations (no stock photography), scroll-driven motion, and a fully typed, modular React
codebase.

## Quick start

Requires **Node.js 20+**.

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

### Other scripts

```bash
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
npm run lint      # run oxlint across the codebase
```

## Design system

| Token           | Value                     |
| ---------------- | -------------------------- |
| Background        | `#0D0F14` |
| Surface           | `#151922` |
| Card               | `#1C2130` |
| Primary accent (lime)  | `#B8FF4A` |
| Secondary accent (violet) | `#8C7BFF` |
| Highlight (teal)  | `#4CE2C2` |
| Text               | `#FFFFFF` |
| Muted text         | `#A9B2C3` |
| Border             | `rgba(255,255,255,.08)` |

Typography: **Space Grotesk** for display/headings, **Inter** for body copy — both self-hosted
via `@fontsource` (no third-party font CDN, no render-blocking external request).

## Project structure

```
src/
  animations/       Framer Motion variant presets (fade-up, stagger, text reveal…)
  assets/
    icons/          Brand partner wordmarks (SVG)
    images/         Original geometric-illustration SVGs (hero, programs, coaches…)
  components/
    layout/         Navbar, Footer
    ui/             Reusable primitives: MagneticButton, GlassCard, Eyebrow,
                     RevealOnScroll, Icons
  constants/        Static site content (programs, coaches, plans, FAQ, stats…)
  hooks/            useScrollReveal, useCountUp, useParallax, useSmoothScroll
  sections/         One component per landing-page section
  styles/           global.css — Tailwind v4 theme tokens + base styles
  types/            Shared TypeScript interfaces
  utils/            cn() class merge helper, input sanitizers
  App.tsx           Section composition + code-split lazy loading
  main.tsx          Entry point, font imports
```

## Sections included

Navigation · Hero · Brand Partners · Training Programs · Statistics · Why Choose Us ·
Transformation CTA · Our Approach · Coaches · Membership Plans · Testimonials · FAQ · Footer

## Images

Every image on the page is a **locally authored, original SVG illustration** — no Unsplash,
Pexels, hotlinking, or external image CDNs. Athletes and coaches are rendered as faceted,
geometric line-study illustrations that match the dark editorial art direction, generated as
part of this project and stored under `src/assets/images/`. Brand-partner marks under
`src/assets/icons/` are original wordmarks, not real trademarks.

## Motion

- **Framer Motion** drives fade-ups, staggered reveals, hover lifts, and the magnetic-button
  micro-interaction.
- A lightweight custom `useParallax` hook drives the hero's mouse-parallax depth effect.
- **Lenis** provides smooth-scroll easing site-wide.
- All animation respects `prefers-reduced-motion`; motion is disabled or shortened
  automatically for users who request it, and parallax/magnetic effects no-op on touch
  devices.

## Performance & code quality

- Route-level **code splitting**: every below-the-fold section is `React.lazy`-loaded, so the
  initial JS payload only includes the Hero, brand strip, and Programs grid.
- **Manual chunking** in `vite.config.ts` separates `vendor` (React), `motion` (Framer
  Motion), and `scroll` (Lenis) into cacheable chunks.
- Fonts are self-hosted, Latin-subset only, and loaded as static assets (no `@import`
  network round-trip).
- Small SVGs are inlined as data URIs by Vite automatically; the hero illustration is served
  as a separate cacheable asset.
- Strict TypeScript (`noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`) — zero
  build errors, zero `oxlint` warnings.
- Zero `dangerouslySetInnerHTML` usage anywhere in the codebase; sanitizer helpers live in
  `src/utils/sanitize.ts` for any future form input.

## Accessibility

- One `<h1>` per page (Hero), logical `<h2>`/`<h3>` hierarchy for every section and card.
- All interactive elements are real `<button>`/`<a>` tags with visible focus rings
  (`:focus-visible`) and `aria-expanded` / `aria-controls` on the mobile menu and FAQ
  accordion.
- Every image carries descriptive `alt` text (or `alt=""` for purely decorative art).
- Color contrast between text and background meets WCAG AA across the palette above.

## SEO

`index.html` includes a full meta description, canonical URL, Open Graph and Twitter Card
tags, a JSON-LD `SportsActivityLocation` structured-data block, plus `robots.txt` and a
`site.webmanifest` in `public/`.

## Browser support

Evergreen browsers (Chrome, Edge, Firefox, Safari — latest two versions). The build targets
`es2020`.

## License

This is a portfolio/demo project. Replace copy, imagery, and brand marks before any commercial
use.
