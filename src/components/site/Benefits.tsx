import { Reveal } from "./Reveal";

const stats = [
  { n: "3.4×", t: "more organic traffic", d: "Average lift across our 12-month engagements." },
  { n: "48%", t: "lower cost per lead", d: "By replacing paid dependency with owned channels." },
  { n: "24/7", t: "always-on response", d: "AI chat answers before your competition wakes up." },
  { n: "100%", t: "of the work, yours to keep", d: "No lock-in. You own the site, content, and data." },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Why it matters</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Outcomes you can put on a spreadsheet.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06}>
              <div className="h-full bg-background p-8">
                <div className="font-display text-5xl font-semibold tracking-tight">
                  <span className="bg-gradient-to-br from-white to-primary-glow bg-clip-text text-transparent">
                    {s.n}
                  </span>
                </div>
                <div className="mt-2 text-sm font-medium text-foreground">{s.t}</div>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
