import { motion, useReducedMotion } from "framer-motion";
import heroImg from "@/assets/hero-hotel.jpg";

const line1 = ["Fill", "more", "rooms."];
const line2 = ["Pay", "less", "to", "OTAs."];

export function Hero() {
  const reduce = useReducedMotion();
  const wordAnim = (i: number) => ({
    initial: { opacity: 0, y: 14, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 ${reduce ? "" : "animate-aurora"}`}
        style={{ background: "var(--gradient-radial)" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-glow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow shadow-[0_0_8px_currentColor]" />
            Built for independent & boutique hotels
          </motion.div>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.03] tracking-tight md:text-6xl lg:text-7xl">
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
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0"
          >
            We build the SEO, direct-booking website, and 24/7 AI concierge that turn Google searches into confirmed reservations — not Booking.com commissions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-col items-center gap-3 lg:items-start"
          >
            <a
              href="#audit"
              className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span className="relative">Get a free booking audit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="relative transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="text-xs text-muted-foreground">
              See where you're losing reservations. 24-hour turnaround. No sales calls.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-[2rem] opacity-60 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <img
            src={heroImg}
            alt="Hotel direct-booking website on laptop with AI concierge chatbot on phone"
            width={1600}
            height={1200}
            className="w-full rounded-2xl border border-border/50 shadow-[0_40px_120px_-40px_oklch(0.55_0.22_275/0.9)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
