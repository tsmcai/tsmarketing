# Animation Plan — Midnight Indigo, tastefully alive

Goal: make the page feel alive and premium (Linear/Framer-grade) without cartoonish motion. All timings 300–800ms, easing `[0.22, 1, 0.36, 1]`, respects `prefers-reduced-motion`.

## 1. Global motion primitives
- Extend `Reveal.tsx` with variants: `fade-up` (default), `fade`, `blur-in`, `stagger` (children with `staggerChildren: 0.08`).
- Add a `useReducedMotion()` short-circuit that renders children statically.
- Add CSS utilities in `styles.css`: `@keyframes shimmer`, `@keyframes float`, `@keyframes aurora`, `@keyframes marquee`, `.animate-shimmer`, `.animate-float`, `.animate-aurora`.

## 2. Hero (`Hero.tsx`)
- Animated aurora background: slow-drifting radial gradient (25s `aurora` keyframe on the existing radial layer).
- Headline word-by-word reveal: split "Rank higher. Convert more." into spans, stagger opacity+`y:12`+`blur(6px)`→0 at 60ms per word.
- "Convert more." gradient text gets a slow shimmer sweep (6s loop, low opacity).
- Status pill: pulsing glow dot (already there) + subtle scale breathe.
- CTA button: on hover, arrow slides + soft glow ring pulses once.
- Scroll cue below CTA: tiny chevron with 2s bob.

## 3. TrustBar
- Convert to a slow marquee (30s linear infinite, pause on hover) so logos feel continuous instead of static.

## 4. Problem cards
- Stagger reveal (0/80/160ms). On hover: card lifts 4px, border shifts to `primary/40`, the `01/02/03` numeral scales 1.05 and brightens.

## 5. Services
- Icons draw-in using `pathLength` motion (0→1 over 700ms) on first view.
- Card border gets a conic-gradient "beam" that rotates on hover (masked to 1px border).

## 6. Benefits (stat grid)
- Count-up animation for the four numbers (`3.4×`, `48%`, `24/7`, `100%`) using `useMotionValue` + `animate`, triggered `whileInView`, 1.2s ease-out.
- Number gradient gets the same subtle shimmer as hero.

## 7. Process
- Horizontal connector line animates its width from 0→100% (`scaleX` with `transform-origin: left`) over 900ms when scrolled into view.
- Each step circle pops in sequentially (scale 0.8→1, 120ms apart) synced to the line.

## 8. Portfolio cards
- Reveal stagger.
- On hover: image layer scales 1.04, radial glow intensifies, metric number nudges up 2px, tag underlines via `story-link`.
- Tilt-free — keep it calm.

## 9. Testimonials
- Reveal + quote mark rotates in (−12°→0°, 500ms).
- Subtle 6s float on the quote mark icon.

## 10. FAQ
- Chevron rotates 180° on open (already via Radix data-state).
- Answer content uses the existing `accordion-down/up` keyframes — verify they're wired.

## 11. FinalCTA
- Gradient background slowly pans (`background-position` 20s loop).
- Starfield dots twinkle (opacity 0.2↔0.5, staggered, 3–5s).
- Submit button: on submit success, morph to check + "Sent" for 1.5s before reset.

## 12. Nav
- On scroll past 12px (already tracked): logo mark rotates 90° once, backdrop blur fades in over 300ms (already partially there — smooth it).
- Nav link hover: `story-link` underline sweep.

## 13. Page-level polish
- Add a very subtle grain overlay (SVG noise, 3% opacity, fixed) so gradients don't band.
- Smooth section transitions: 1px gradient hairline between sections fades in on scroll.

## Technical notes
- All new motion uses `framer-motion` (already installed) — no new deps.
- Respect `prefers-reduced-motion: reduce` everywhere via `useReducedMotion()` and CSS `@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }`.
- Keep bundle impact zero — no lottie, no GSAP.

## Files touched
- `src/styles.css` (keyframes + reduced-motion guard)
- `src/components/site/Reveal.tsx` (variants)
- `src/components/site/Hero.tsx`
- `src/components/site/TrustBar.tsx`
- `src/components/site/Problem.tsx`
- `src/components/site/Services.tsx`
- `src/components/site/Benefits.tsx` (new count-up)
- `src/components/site/Process.tsx`
- `src/components/site/Portfolio.tsx`
- `src/components/site/Testimonials.tsx`
- `src/components/site/FinalCTA.tsx`
- `src/components/site/Nav.tsx`

No routing, SEO, or business-logic changes.
