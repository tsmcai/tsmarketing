import { motion, useReducedMotion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";

const line1 = ["Rank", "higher."];
const line2 = ["Convert", "more."];

export function Hero() {
  const reduce = useReducedMotion();
  const wordAnim = (i: number) => ({
    initial: { opacity: 0, y: 14, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Aurora background */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 ${reduce ? "" : "animate-aurora"}`}
        style={{ background: "var(--gradient-radial)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]"
        style={{
          backgroundImage: heroImg ? `url(${heroImg})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Status badge hidden per user request */}


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
            We build the SEO, website, and chatbot stack that turns Google searches into paying customers measured, not promised.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <a
              href="#audit"
              className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span className="relative">Get a free SEO audit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="relative transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="text-xs text-muted-foreground">
              {"\n"}
            </p>
          </motion.div>

          <motion.a
            href="#problem"
            aria-label="Scroll down"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mx-auto mt-16 flex h-8 w-8 items-center justify-center text-muted-foreground"
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
