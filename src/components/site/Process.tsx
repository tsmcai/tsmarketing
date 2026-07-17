import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Audit", d: "We map your current rankings, site, and funnel. You get a written diagnosis of what's costing you jobs — in 5 business days." },
  { n: "02", t: "Strategy", d: "A 90-day roadmap with the keywords your customers actually search, clear priorities, and the numbers we're accountable to." },
  { n: "03", t: "Build", d: "We ship content, pages, chatbot flows, and technical fixes — with weekly progress you can see and measure." },
  { n: "04", t: "Grow", d: "Monthly reporting, iteration, and expansion. Compounding results, no surprises, no lock-in." },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">How it works</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">A calm, predictable process.</h2>
          <p className="mt-4 text-muted-foreground">
            No black boxes. No jargon. You always know what we're doing and why.
          </p>
        </Reveal>

        <div className="mt-16">
          <div className="relative">
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent md:block"
            />
            <ol className="grid gap-10 md:grid-cols-4">
              {steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-elevated font-display text-sm font-semibold text-primary-glow shadow-[0_0_24px_-6px_oklch(0.68_0.20_285/0.8)]">
                    {s.n}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
