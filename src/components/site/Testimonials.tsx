import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const quotes = [
  {
    q: "We were spending $4K/month on ads and getting maybe two calls a week. Six months in, we're getting fifteen calls a week from Google — and we cut the ad spend.",
    a: "Mike R.",
    r: "Owner, Riverside Plumbing",
    tag: "Plumbing",
  },
  {
    q: "The chatbot paid for itself in the first month. We booked three emergency jobs overnight that we would've lost. It's like having a receptionist that never sleeps.",
    a: "Sarah L.",
    r: "Operations, Apex HVAC",
    tag: "HVAC",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            From the people who took the leap.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.a} delay={i * 0.08}>
              <figure className="card-surface group flex h-full flex-col rounded-2xl p-8 hover:-translate-y-1">
                <div className="flex items-center justify-between">
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
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-glow">
                    {q.tag}
                  </span>
                </div>
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
