import { Reveal } from "./Reveal";

const services = [
  {
    title: "Google SEO",
    outcome: "More qualified traffic every month.",
    desc: "Technical SEO, content strategy, and local ranking work that compounds. You own the results.",
    points: ["Full technical audit", "Keyword & content roadmap", "On-page + backlink work"],
  },
  {
    title: "Websites",
    outcome: "A site built to convert, not just impress.",
    desc: "Fast, accessible, conversion focused websites shipped in weeks, not months. Yours to keep.",
    points: ["Conversion first design", "Sub second load times", "CMS you actually control"],
  },
  {
    title: "AI Chatbots",
    outcome: "Answer every visitor in seconds, 24/7.",
    desc: "Custom AI assistants trained on your business. Book meetings and qualify leads while you sleep.",
    points: ["Trained on your content", "Books meetings automatically", "Handoff to humans when needed"],
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
            SEO, website, and chatbot designed to work as one system, not three vendors.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: "var(--gradient-primary)" }}
                />
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-primary-glow transition-transform duration-300 group-hover:scale-110">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
