import { Reveal } from "./Reveal";

const brands = [
  "AURELIA HOTELS",
  "KING STREET INN",
  "MARINER & CO",
  "THE LAUREL",
  "CASA MERIDIAN",
  "NORTH BAY LODGE",
];

export function TrustBar() {
  const loop = [...brands, ...brands];
  return (
    <section aria-label="Trusted by hotels" className="border-y border-border/50 bg-surface/30 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Direct bookings up at
          </p>
        </Reveal>
        <div
          className="group mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          <div className="animate-marquee pause-on-hover flex w-max items-center gap-16 whitespace-nowrap">
            {loop.map((b, i) => (
              <span
                key={b + i}
                className="font-display text-sm font-semibold tracking-widest text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
