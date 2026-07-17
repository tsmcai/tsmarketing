import { PhoneOff, EyeOff, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const pains = [
  {
    k: "01",
    t: "You're invisible on Google",
    d: "When someone searches \"emergency plumber near me\" or \"best dentist in town,\" your competitor shows up. You don't. Every search is a customer you'll never know you lost.",
    Icon: EyeOff,
  },
  {
    k: "02",
    t: "Your website doesn't close",
    d: "Traffic comes, looks around, and leaves. No call, no form, no booking. A pretty website that doesn't ring your phone is just an expensive brochure.",
    Icon: PhoneOff,
  },
  {
    k: "03",
    t: "Leads slip through at night",
    d: "A homeowner has a burst pipe at 11pm. They message three companies. The first one to respond wins. You answer in the morning. The job is already gone.",
    Icon: Clock,
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">The problem</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Every day you wait, you're handing jobs to the competition.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.08}>
              <div className="card-surface group h-full rounded-2xl p-8 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-glow transition-transform duration-300 group-hover:scale-110">
                    <p.Icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-sm font-medium text-primary-glow">{p.k}</div>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{p.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
