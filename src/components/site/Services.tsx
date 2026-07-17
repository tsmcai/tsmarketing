import { Search, Globe, MessageSquare } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    title: "Local SEO",
    outcome: "Show up when customers search for you.",
    desc: "We get you into the Google Map Pack and local rankings so when someone searches \"near me,\" your business is the first call they make.",
    points: ["Google Business Profile optimization", "Local keyword & content roadmap", "Reviews & citation building"],
    Icon: Search,
  },
  {
    title: "Conversion Websites",
    outcome: "A site that turns clicks into phone calls.",
    desc: "Fast, mobile-first websites designed for one thing: getting visitors to call, book, or request a quote. Built in weeks, not months.",
    points: ["Click-to-call & instant booking", "Sub-second load on mobile", "You own it — no lock-in"],
    Icon: Globe,
  },
  {
    title: "AI Chatbots",
    outcome: "Capture every lead, even at 2am.",
    desc: "A custom AI assistant trained on your services that answers questions, books appointments, and qualifies leads 24/7 — so no job slips away.",
    points: ["Trained on your services & pricing", "Books appointments directly", "Hands off to you for complex jobs"],
    Icon: MessageSquare,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Our solution</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            One partner. The full growth stack.
          </h2>
          <p className="mt-4 text-muted-foreground">
            SEO, website, and chatbot designed to work as one system — so every search becomes a call, and every call becomes a job.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="card-surface group h-full rounded-2xl p-8 hover:-translate-y-1">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: "var(--gradient-primary)" }}
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-glow transition-transform duration-300 group-hover:scale-110">
                  <s.Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="relative mt-2 text-primary-glow">{s.outcome}</p>
                <p className="relative mt-4 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="relative mt-6 space-y-2 border-t border-border/60 pt-6 text-sm">
                  {s.points.map((pt, idx) => (
                    <li
                      key={pt}
                      className="flex items-start gap-3 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground"
                      style={{ transitionDelay: `${idx * 40}ms` }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-primary-glow transition-transform duration-300 group-hover:scale-110">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
