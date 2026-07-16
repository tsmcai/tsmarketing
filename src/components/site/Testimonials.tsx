import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const quotes = [
  {
    q: "We cut OTA commission by nearly a quarter in six months. The site pays for itself every single week.",
    a: "Rachel Voss",
    r: "Owner, 42-room boutique · Charleston",
  },
  {
    q: "The AI concierge answers the 11pm questions our front desk used to miss. Those are bookings we were flat-out losing.",
    a: "Marco DeLuca",
    r: "General Manager, seaside resort · Portugal",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.a} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-border/60 bg-surface/40 p-8 transition-colors hover:border-primary/40">
                <motion.svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary-glow animate-float"
                  aria-hidden
                  initial={{ rotate: -12, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <path
                    d="M7 7h4v4H7v3a4 4 0 004-4V7H7zm10 0h4v4h-4v3a4 4 0 004-4V7h-4z"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                </motion.svg>
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-foreground">
                  "{q.q}"
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-medium text-foreground">{q.a}</div>
                  <div className="text-muted-foreground">{q.r}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
