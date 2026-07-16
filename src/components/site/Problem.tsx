import { Reveal } from "./Reveal";

const pains = [
  {
    k: "01",
    t: "OTAs eat 18% of every stay",
    d: "You pay Booking.com and Expedia to send you guests who were already searching for your hotel by name.",
  },
  {
    k: "02",
    t: "Your website looks nice — but doesn't book",
    d: "Pretty photos, no live rate calendar, no direct-book incentive, no urgency. Visitors leave and rebook on an OTA.",
  },
  {
    k: "03",
    t: "Guests ask at midnight. Nobody answers",
    d: "By morning they've booked the hotel down the street. Every unanswered question is a room you didn't sell.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">The problem</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            You're paying OTAs for guests who wanted you first.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border/60 bg-surface/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_oklch(0.55_0.22_275/0.6)]">
                <div className="font-display text-sm font-medium text-primary-glow transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                  {p.k}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
