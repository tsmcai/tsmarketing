# TSMC Marketing — Landing Page Plan

Premium single-page site for TSMC Marketing (Google SEO, Websites, Chatbots). Dark "Midnight Indigo" aesthetic, Space Grotesk + DM Sans, one purpose per section, one primary CTA: **Get a free SEO audit**.

## Visual system

- Palette: `#0a0a1a` bg, `#141432` surface, `#1e1e5a` elevated, `#4f46e5` accent, plus off-white text and muted slate.
- Typography: Space Grotesk (display) + DM Sans (body), loaded via `<link>` in `__root.tsx`.
- Tokens in `src/styles.css` as oklch: background, foreground, primary (indigo), muted, border, plus `--gradient-primary`, `--gradient-glow`, `--shadow-elegant`.
- 8px spacing, section padding 96–120px, max content width ~1200px.
- Motion: subtle fade/slide-up on scroll (framer-motion), restrained hover states. No parallax, no floating orbs everywhere.

## Page structure (in order, each with one purpose)

1. **Sticky nav** — logo, 3 links (Services, Process, FAQ), single "Free SEO Audit" button.
2. **Hero** — headline ("Rank higher. Convert more. On autopilot."), one supporting sentence, one primary CTA + subtle trust line, one visual (indigo mesh gradient with a mocked dashboard/search snippet).
3. **Trust bar** — muted row of 5–6 placeholder client wordmarks.
4. **Problem** — 3 short pain statements (invisible on Google, outdated site, missed leads).
5. **Solution / Services** — 3 cards: SEO, Websites, Chatbots. Benefit-led copy.
6. **Benefits** — 4 outcome tiles (more traffic, more leads, 24/7 answers, measurable ROI).
7. **Process** — 4 numbered steps (Audit → Strategy → Build → Grow).
8. **Portfolio placeholder** — 3 case-study cards with metric-forward stats (placeholder imagery marked).
9. **Testimonials** — 2–3 quote cards (placeholder).
10. **FAQ** — accordion, 6 questions handling objections.
11. **Final CTA** — full-width indigo gradient panel repeating "Get a free SEO audit".
12. **Footer** — logo, short tagline, minimal link column, copyright.

## Files to create / modify

- `src/styles.css` — replace default tokens with Midnight Indigo palette; add gradient/shadow tokens; register `--font-display` / `--font-sans`.
- `src/routes/__root.tsx` — Google Fonts `<link>`s; real title/description/OG/Twitter meta ("TSMC Marketing — SEO, Websites & Chatbots that convert"); favicon link to new brand favicon; keep `<Outlet />`.
- `src/routes/index.tsx` — replace placeholder with full landing composition; per-route `head()` with hero-specific title, description, canonical `/`, JSON-LD `Organization`, og:image (absolute via server fn).
- `src/lib/origin.functions.ts` — `getRequestOrigin` server fn for absolute OG URLs.
- `src/components/site/` — `Nav.tsx`, `Hero.tsx`, `TrustBar.tsx`, `Problem.tsx`, `Services.tsx`, `Benefits.tsx`, `Process.tsx`, `Portfolio.tsx`, `Testimonials.tsx`, `FAQ.tsx`, `FinalCTA.tsx`, `Footer.tsx`, `Logo.tsx` (inline SVG wordmark, mono + icon variants).
- `src/components/ui/accordion.tsx` — add shadcn accordion for FAQ (`bun add @radix-ui/react-accordion`).
- `bun add framer-motion` for restrained scroll reveals.

## Brand assets

- **Logo**: inline SVG "TSMC" wordmark with a subtle indigo mark (chevron/arrow). Rendered directly in React — full-color, mono, and 32×32 icon variants exported from the same `Logo.tsx`.
- **Favicon**: generate a square PNG of the icon mark on `#0a0a1a`, save to `public/favicon.png`, delete default `public/favicon.ico`, wire `<link rel="icon" type="image/png" href="/favicon.png">` in root `head()`.
- **Hero visual**: generated indigo-gradient abstract with a stylized search-result / analytics card overlay, saved to `src/assets/hero.jpg`.
- **OG image (1200×630)**: generated banner with logo, headline, indigo gradient, saved to `src/assets/og.jpg` and referenced from the leaf route only (not root) with absolute URL.

## SEO / metadata

- Root: charset, viewport, sitewide og:type=website, og:site_name=TSMC Marketing, theme-color `#0a0a1a`, apple-touch-icon.
- Home leaf: title "TSMC Marketing — SEO, Websites & Chatbots that convert" (<60 chars), meta description (<160), og:title, og:description, og:image (absolute), twitter:card=summary_large_image, canonical `/`, JSON-LD Organization.
- Single H1 in hero. Semantic `<section>` with `aria-labelledby`. Alt text on all imagery. Lazy-load below-fold images.

## Copy principles applied

- Hero headline 6–8 words, subhead ~18 words, one CTA.
- Every service card leads with outcome, not tech.
- FAQ handles: price, timeline, contracts, results guarantee, ownership, tech stack.

## Verification

After build: view generated hero + OG images to confirm quality, check the home route in the preview at desktop (1280) and mobile (390) via Playwright screenshots, confirm no default "Lovable App" strings remain, confirm favicon swapped.
