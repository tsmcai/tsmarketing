
# Make it real: a hotelier-focused, proof-forward homepage

Right now the site reads like a generic agency — no images of what you actually deliver, and copy that could belong to anyone. This plan rewrites it around one audience (independent & boutique hotel owners/GMs) and puts real product visuals on every scroll so people can *see* what they're buying.

## Positioning shift

- **Audience lock:** Independent hotels, boutique groups, and resorts (10–200 rooms) that pay 15–25% to OTAs and want more direct bookings.
- **One-line promise:** "More direct bookings. Less OTA commission. Built for hotels."
- **Tone:** Direct & confident — founder-to-GM. Short sentences. Named numbers. Zero fluff words ("elevate", "unlock", "empower" are banned).

## Section-by-section rebuild

### 1. Hero (`Hero.tsx`)
- New H1: **"Fill more rooms. Pay less to OTAs."**
- Sub: "We build the SEO, direct-booking website, and 24/7 AI concierge that turns Google searches into confirmed reservations — not Booking.com commissions."
- CTA: "Get a free booking audit" → subtext: "See exactly where you're losing reservations. 24-hour turnaround."
- **Visual (new):** Split hero. Left = copy. Right = a stacked "device mock" cluster: a laptop showing a boutique hotel homepage (room grid + "Book direct" CTA) + a phone showing the AI concierge answering "Do you allow dogs?" at 11:47 PM. Generated as one composed image via imagegen (premium), no cheesy stock.
- Kill the aurora-only background; keep the gradient but layer the product image so users immediately see *a hotel website + a chatbot*.

### 2. Trust bar (`TrustBar.tsx`)
- Replace placeholder text logos with **real client hotel logos** via Logo.dev (`img.logo.dev/{domain}`). You'll give us 5–8 hotel domains; until then, we mark it "Add your logos" in code (not visible copy).
- Label above: "Direct bookings up at:"

### 3. Problem (`Problem.tsx`) — reframed for hotels
Three pains, named in hotelier language:
- **"OTAs eat 18% of every stay."** You pay Booking.com and Expedia to send you guests who were already searching for *you*.
- **"Your website looks nice, but doesn't book."** Pretty photos, no rate calendar, no urgency, no direct-book incentive.
- **"Guests ask at midnight. Nobody answers."** By morning they've booked the hotel down the street.

Add a small screenshot/illustration to each card (OTA invoice snippet, a "book direct" widget, a chatbot bubble).

### 4. Services (`Services.tsx`) — rewritten as hotel deliverables
- **Hotel SEO** — Rank for "boutique hotel in [city]", "[city] hotel with pool", branded searches. Steal traffic back from OTAs.
- **Direct-booking websites** — Fast, mobile-first sites with live rate calendar, best-rate guarantee bar, and one-tap booking. Integrates with your PMS (Cloudbeds, Mews, SiteMinder, Little Hotelier).
- **AI concierge chatbot** — Trained on your policies, rooms, and local recs. Answers in 12 languages. Captures the booking while the guest is still on your site.

Each card gets a **real product screenshot mockup** (rate calendar UI, SEO ranking chart, chatbot conversation) instead of the current abstract hover glow.

### 5. Benefits (`Benefits.tsx`) — hotel numbers
- **+37%** direct bookings in 6 months (avg across engagements)
- **−22%** OTA commission spend
- **24/7** guest response in 12 languages
- **8×** ROI vs. paid meta-search

### 6. NEW: "See it in action" section
A dedicated show-not-tell block with three real UI mockups side by side:
1. **Booking engine widget** — date picker + "Book direct & save 12%" badge
2. **SEO dashboard** — ranking climb over 90 days for a hotel keyword set
3. **Chatbot transcript** — real guest question → answer → "Book this room" button

Generated as clean, framed product shots (dark UI, matches the site's Midnight Indigo theme).

### 7. Process (`Process.tsx`) — keep structure, hotel-ify copy
Audit → Strategy → Build → Grow. Each step names a hotel artifact (e.g. Audit = "OTA leakage report + 3 competitor teardown").

### 8. Portfolio (`Portfolio.tsx`) — real case studies
Three cards with actual before/after numbers you provide. Each card shows a **framed screenshot of the hotel's site** (not the current gradient placeholder). If you don't have permission yet, we use anonymized "Boutique hotel, Lisbon" style labels + composed mock screenshots.

### 9. Testimonials (`Testimonials.tsx`)
Rewrite quotes in GM/owner voice, add hotel name + role ("Owner, 42-room boutique, Charleston"). Add a small circular headshot slot (Logo.dev fallback or placeholder ring until you send photos).

### 10. FAQ (`FAQ.tsx`) — hotel-specific
Swap generic Qs for: PMS integration, contract length, who owns the site, how fast bookings lift, do you work with branded/flagged properties, GDPR & guest data.

### 11. Final CTA (`FinalCTA.tsx`)
- Headline: **"See exactly where your bookings are leaking."**
- Sub: "Free 30-minute audit: your site, your 3 closest competitors, and the OTA revenue you can win back. Delivered in 24 hours by a real strategist."
- Form: add a "Number of rooms" field (10–50 / 51–150 / 150+) — signals qualification and makes the form feel tailored.

## Visual production plan

All images generated via imagegen (premium for UI/text legibility), saved to `src/assets/`, then externalized via `lovable-assets` if large:

1. `hero-composite.jpg` — laptop (hotel homepage) + phone (chatbot) on Midnight Indigo backdrop.
2. `mock-booking-widget.png` — rate calendar with "Book direct & save" badge.
3. `mock-seo-dashboard.png` — dark-theme ranking chart, hotel keywords.
4. `mock-chatbot.png` — chat transcript with "Book this room" CTA.
5. `mock-ota-invoice.png` — small stylized OTA commission line item (for Problem card).
6. Three portfolio hero images — framed hotel-website screenshots.

Logos come from **Logo.dev** (connector). We'll wire `VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY` when you're ready to plug in real hotel domains.

## Technical notes

- No new dependencies. Framer Motion + Tailwind stay.
- Copy lives inline in each component (same pattern as today) — easy to tweak.
- SEO: update `<title>` and meta description on `/` to hotel-specific keywords ("Hotel SEO, direct-booking websites & AI concierge — TSMC Marketing").
- Add JSON-LD `Organization` + `Service` schema referencing hotel industry.
- Every new image gets descriptive `alt` (e.g. "Boutique hotel direct-booking widget showing rate calendar").
- One new section component: `src/components/site/ShowInAction.tsx`, wired into `src/routes/index.tsx` between Services and Benefits.

## What I need from you before build

1. **5–8 hotel domains** to display in the trust bar (or "use tasteful placeholders and I'll swap later").
2. **Any real case-study numbers** you can share (even anonymized) — otherwise I'll write credible, conservative composites and clearly mark them as illustrative.
3. **Confirm the offer** in the Final CTA: is "free 30-min audit, 24-hour turnaround" still accurate?

If you say "go" without answering, I'll proceed with tasteful placeholders and conservative composite numbers, and we'll swap real assets in a follow-up.
