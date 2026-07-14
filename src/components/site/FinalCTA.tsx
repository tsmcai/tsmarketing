import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="audit" className="px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-primary/30 px-8 py-20 text-center md:px-16 md:py-24"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, white 0.5px, transparent 1px), radial-gradient(circle at 80% 60%, white 0.5px, transparent 1px)",
                backgroundSize: "48px 48px, 72px 72px",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold text-white md:text-5xl">
                See exactly what's holding your growth back.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-white/85">
                Free 30-minute SEO audit of your site and top 3 competitors. Delivered by a real strategist within 24 hours.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  console.log("audit request", Object.fromEntries(data));
                  (e.currentTarget as HTMLFormElement).reset();
                }}
                className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <label className="sr-only" htmlFor="site">Website URL</label>
                <input
                  id="site"
                  name="site"
                  type="url"
                  required
                  placeholder="yourcompany.com"
                  className="h-12 flex-1 rounded-full border border-white/25 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur focus:border-white/50"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
                >
                  Get my audit
                </button>
              </form>
              <p className="mt-4 text-xs text-white/70">No spam. No sales calls. Just the audit.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
