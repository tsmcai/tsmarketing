import { Reveal } from "./Reveal";

const brands = ["NORTHWIND", "ATLAS & CO", "Lumen", "Kestrel", "Meridian", "FORGE"];

export function TrustBar() {
  return (
    <section aria-label="Trusted by" className="border-y border-border/50 bg-surface/30 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by growing teams
          </p>
          <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-6 text-center md:grid-cols-6">
            {brands.map((b) => (
              <span
                key={b}
                className="font-display text-sm font-semibold tracking-widest text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
