import { Reveal } from "./Reveal";

const brands = ["RIVERSIDE PLUMBING", "APEX HVAC", "BRIGHTSMILE DENTAL", "MERIDIAN LAW", "FORGE ELECTRIC", "KESTREL ROOFING"];

export function TrustBar() {
  const loop = [...brands, ...brands];
  return (
    <section aria-label="Trusted by" className="border-y border-border/50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by local service businesses across North America
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
