import { Reveal } from "./Reveal";
import bookingImg from "@/assets/mock-booking.jpg";
import seoImg from "@/assets/mock-seo.jpg";
import chatImg from "@/assets/mock-chatbot.jpg";

const services = [
  {
    title: "Hotel SEO",
    outcome: "Own the searches OTAs currently win.",
    desc: "We rank you for the phrases guests actually type — \"boutique hotel in [city]\", \"[city] hotel with pool\", and your own brand name.",
    points: ["Steal back branded searches", "Local + map pack dominance", "Content built for booking intent"],
    img: seoImg,
    alt: "SEO dashboard showing hotel keyword rankings climbing over 90 days",
  },
  {
    title: "Direct-booking websites",
    outcome: "A site built to book, not just impress.",
    desc: "Fast, mobile-first sites with a live rate calendar, best-rate guarantee, and one-tap booking. Plugs into Cloudbeds, Mews, SiteMinder, and Little Hotelier.",
    points: ["Live rate calendar & PMS sync", "Best-rate guarantee bar", "Sub-second mobile load"],
    img: bookingImg,
    alt: "Hotel direct-booking widget with rate calendar and Book Direct & Save badge",
  },
  {
    title: "24/7 AI concierge",
    outcome: "Answer every guest in seconds, in 12 languages.",
    desc: "Trained on your rooms, policies, and local recs. Handles the 11pm questions and books the room before the guest closes the tab.",
    points: ["Books rooms inside the chat", "12 languages out of the box", "Handoff to your front desk anytime"],
    img: chatImg,
    alt: "AI concierge chatbot conversation booking a hotel room",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">The stack</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            One partner. The full direct-booking stack.
          </h2>
          <p className="mt-4 text-muted-foreground">
            SEO, website, and AI concierge — designed to work as one system, not three vendors sending you invoices.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/50 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border/60">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-primary-glow">{s.outcome}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-6 space-y-2 border-t border-border/60 pt-6 text-sm">
                    {s.points.map((pt, idx) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground"
                        style={{ transitionDelay: `${idx * 40}ms` }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-primary-glow">
                          <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
