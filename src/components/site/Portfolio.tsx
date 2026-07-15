import { Reveal } from "./Reveal";

const cases = [
  {
    tag: "Local services",
    title: "From page 4 to page 1 in 90 days",
    metric: "+412%",
    label: "organic leads",
    tint: "from-indigo-500/30 to-violet-500/10",
  },
  {
    tag: "B2B SaaS",
    title: "New site cut CAC in half",
    metric: "−53%",
    label: "cost per acquisition",
    tint: "from-violet-500/30 to-fuchsia-500/10",
  },
  {
    tag: "E-commerce",
    title: "AI chat that closes at 3am",
    metric: "$120K",
    label: "chat-attributed revenue",
    tint: "from-blue-500/30 to-indigo-500/10",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Proof</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Real work. Real numbers.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/40 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_-40px_oklch(0.55_0.22_275/0.8)]">
                <div className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${c.tint}`}>
                  <div
                    aria-hidden
                    className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-100 opacity-70"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, oklch(0.68 0.20 285 / 0.6), transparent 55%)",
                    }}
                  />
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute bottom-6 left-6 transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="font-display text-4xl font-semibold text-white">{c.metric}</div>
                    <div className="mt-1 text-sm text-white/80">{c.label}</div>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.tag}</div>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">
                    <span className="story-link">{c.title}</span>
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
