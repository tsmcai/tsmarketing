# Footer Redesign Plan

The current footer is a thin two-row utility bar (logo + tagline, 4 links, copyright). It underuses the closing real estate and doesn't reinforce trust, SEO, or the primary CTA. Here's a focused upgrade that stays on-brand (Midnight Indigo, Space Grotesk + DM Sans) and only touches presentation code.

## Goals

- Reinforce the primary CTA one last time (audit) without duplicating the FinalCTA panel.
- Give search engines and humans a real sitemap and contact surface.
- Add subtle brand atmosphere (gradient hairline, soft glow) so the page ends with intention, not a flat line.

## New footer structure

```text
┌──────────────────────────────────────────────────────────────┐
│  gradient hairline (indigo → transparent)                    │
│                                                              │
│  ┌────────────────────┐   ┌─────────┐ ┌─────────┐ ┌────────┐ │
│  │ Logo               │   │ Services│ │ Company │ │ Resources│
│  │ One-line tagline   │   │ SEO     │ │ About   │ │ FAQ     │ │
│  │ Contact:           │   │ Websites│ │ Process │ │ Case    │ │
│  │  hello@tsmc...     │   │ Chatbots│ │ Work    │ │ studies │ │
│  │  +1 (000) 000-0000 │   │ Audits  │ │ Contact │ │ Blog    │ │
│  │ Socials (X, LI, IG)│   │         │ │         │ │         │ │
│  └────────────────────┘   └─────────┘ └─────────┘ └────────┘ │
│                                                              │
│  ─────────────────────────────────────────────────────────── │
│  © 2026 TSMC Marketing · Privacy · Terms      Made in ▍     │
└──────────────────────────────────────────────────────────────┘
```

Four-column grid on desktop (brand block spans 2 cols), stacks to a single column on mobile with generous spacing.

## Sections in detail

1. **Brand block (left, 2 cols wide)**
   - Logo + one-sentence positioning line.
   - Contact affordances: mailto link, tel link, city ("Remote · Serving North America").
   - Small social row (X / LinkedIn / Instagram) as icon buttons with hover lift.

2. **Services column** — SEO, Websites, Chatbots, Free audit (each anchors to the matching section, `#services`, `#audit`).

3. **Company column** — About, Process (`#process`), Work (`#work`), Contact (`#audit`).

4. **Resources column** — FAQ (`#faq`), Case studies (`#work`), Blog (placeholder `#`), Testimonials (`#testimonials` if id added, else `#work`).

5. **Legal bar (bottom)**
   - Left: © year + "TSMC Marketing" + Privacy + Terms (placeholder routes `#`).
   - Right: subtle "Crafted with intent" or region badge; keep it quiet.

## Visual details

- Top edge: 1px gradient hairline `linear-gradient(90deg, transparent, var(--primary)/40, transparent)` instead of a solid border, so the footer feels like it emerges from the page.
- Background: `bg-surface/40` with a very soft radial glow (reuse `--gradient-radial`) anchored bottom-left at ~10% opacity — echoes the hero without shouting.
- Column headings: uppercase, tracking-wide, `text-xs`, `text-muted-foreground`.
- Links: `text-sm`, muted → foreground on hover, 150ms transition.
- Social icons: 36×36 rounded-full, `border border-border/60`, hover `bg-primary/10 border-primary/40`.
- Spacing: `py-16 md:py-20` for the main grid, `py-5` for the legal bar.
- Newsletter is intentionally NOT added — no backend, and it would dilute the single "Free SEO audit" CTA the page is built around.

## Files touched

- `src/components/site/Footer.tsx` — rewrite structure and styling per above. Presentation-only, no data/logic.
- (Optional) `src/components/site/Testimonials.tsx` — add `id="testimonials"` on the section wrapper so the resource link resolves. Skip if you'd rather keep footer links pointing at existing anchors only.

No new dependencies, no route/SEO changes, no business logic.

## Verification

- Playwright screenshot at 1280 and 390 widths to confirm the 4-col → 1-col reflow, hairline visibility, and that the glow doesn't fight the FinalCTA panel above.
- Tab through footer links to confirm focus rings are visible on the dark surface.
