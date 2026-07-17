import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

type Stat = { value: number; suffix: string; decimals?: number; t: string; d: string };

const stats: Stat[] = [
  { value: 3.4, suffix: "×", decimals: 1, t: "more organic traffic", d: "The average lift across our 12-month engagements — not a best-case cherry pick." },
  { value: 48, suffix: "%", t: "lower cost per lead", d: "By replacing paid ad dependency with owned channels that compound." },
  { value: 24, suffix: "/7", t: "AI lead capture", d: "Your chatbot answers and qualifies before your competitor wakes up." },
  { value: 100, suffix: "%", t: "yours to keep", d: "No lock-in. You own the site, content, and data from day one." },
];

function CountUp({ to, decimals = 0, suffix }: { to: number; decimals?: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, to, mv]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
    return () => unsub();
  }, [rounded, suffix]);

  return <span ref={ref}>{(0).toFixed(decimals)}{suffix}</span>;
}

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Why it matters</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Numbers that show up on your P&L.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06}>
              <div className="group h-full bg-elevated p-8 transition-colors duration-300 hover:bg-surface">
                <div className="font-display text-5xl font-semibold tracking-tight">
                  <span className="bg-gradient-to-br from-white to-primary-glow bg-clip-text text-transparent">
                    <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
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
