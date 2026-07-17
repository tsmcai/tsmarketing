import { motion, useReducedMotion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const line1 = ["Rank", "higher."];
const line2 = ["Convert", "more."];

const quickStats = [
  { v: "412%", l: "more organic leads" },
  { v: "53%", l: "lower cost per lead" },
  { v: "24/7", l: "AI lead capture" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const mx = useMotionValue(50);
  const my = useMotionValue(20);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.4 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);

  const wordAnim = (i: number) => ({
    initial: { opacity: 0, y: 14, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  });

  function onMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Mesh gradient — overlapping radials for richer depth */}
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className={`absolute inset-0 ${reduce ? "" : "animate-aurora"}`}
          style={{
            background:
              "radial-gradient(60% 50% at 30% 20%, oklch(0.50 0.24 277 / 0.50), transparent 60%), radial-gradient(50% 45% at 75% 30%, oklch(0.62 0.22 285 / 0.45), transparent 65%), radial-gradient(55% 50% at 50% 80%, oklch(0.58 0.20 260 / 0.35), transparent 60%)",
          }}
        />
      </motion.div>

      {/* Cursor spotlight */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-80"
          style={{
            background: useTransform(
              [sx, sy],
              ([x, y]) =>
                `radial-gradient(480px circle at ${x}% ${y}%, oklch(0.70 0.20 285 / 0.22), transparent 60%)`,
            ),
          }}
        />
      )}

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary-glow"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            For plumbers, dentists, lawyers & local service pros
          </motion.div>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            <span className="block">
              {line1.map((w, i) => (
                <motion.span key={w + i} className="inline-block" {...wordAnim(i)}>
                  {w}
                  {i < line1.length - 1 && "\u00A0"}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {line2.map((w, i) => (
                <motion.span
                  key={w + i}
                  className="inline-block bg-gradient-to-br from-white via-white to-primary-glow bg-clip-text text-transparent"
                  {...wordAnim(line1.length + i)}
                >
                  {w}
                  {i < line2.length - 1 && "\u00A0"}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Your customers are searching on Google right now. We make sure they find
            <span className="text-foreground"> you</span> — not your competitor down the street.
            SEO, websites, and AI chatbots built for local service businesses that need phones ringing, not clicks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#audit"
              className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span className="relative">Get your free SEO audit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="relative transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface/60 px-6 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary-glow"
            >
              See the results
            </a>
          </motion.div>

          {/* Quick results bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mx-auto mt-14 flex max-w-2xl items-center justify-center gap-8 rounded-2xl border border-border/60 bg-surface/50 px-6 py-5 backdrop-blur-sm md:gap-12"
          >
            {quickStats.map((s, i) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-2xl font-semibold text-primary-glow md:text-3xl">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.l}</div>
                {i < quickStats.length - 1 && (
                  <span className="sr-only">·</span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.a
            href="#problem"
            aria-label="Scroll down"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mx-auto mt-12 flex h-8 w-8 items-center justify-center text-muted-foreground"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={reduce ? "" : "animate-bob"}>
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
