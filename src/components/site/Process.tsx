import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Audit", d: "We map your current rankings, site, and funnel. You get a written diagnosis in 5 business days." },
  { n: "02", t: "Strategy", d: "A 90-day roadmap with clear priorities, targets, and the numbers we're accountable to." },
  { n: "03", t: "Build", d: "We ship — content, pages, chatbot flows, technical fixes — with weekly progress you can see." },
  { n: "04", t: "Grow", d: "Monthly reporting, iteration, and expansion. Compounding results, no surprises." },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">How it works</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">A calm, predictable process.</h2>
        </Reveal>

        <div className="mt-16">
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
            />
            <ol className="grid gap-10 md:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <li className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-background font-display text-sm font-semibold text-primary-glow">
                      {s.n}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
