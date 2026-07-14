import { Reveal } from "./Reveal";

const quotes = [
  {
    q: "Within three months we were ranking for terms we'd been chasing for two years. The difference was strategy, not spend.",
    a: "Rachel Voss",
    r: "Founder, Northwind Studio",
  },
  {
    q: "The chatbot pays for itself every week. It handles the questions we used to hire people to answer.",
    a: "Marco DeLuca",
    r: "Head of Ops, Atlas & Co",
  },
];

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.a} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-border/60 bg-surface/40 p-8">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary-glow" aria-hidden>
                  <path
                    d="M7 7h4v4H7v3a4 4 0 004-4V7H7zm10 0h4v4h-4v3a4 4 0 004-4V7h-4z"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                </svg>
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
