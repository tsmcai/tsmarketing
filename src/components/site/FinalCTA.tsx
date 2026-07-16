import { useState } from "react";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  const [sent, setSent] = useState(false);
  return (
    <section id="audit" className="px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-primary/30 px-8 py-20 text-center md:px-16 md:py-24 animate-pan-bg"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 animate-twinkle"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, white 0.5px, transparent 1px), radial-gradient(circle at 80% 60%, white 0.5px, transparent 1px)",
                backgroundSize: "48px 48px, 72px 72px",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold text-white md:text-5xl">
                See exactly where your bookings are leaking.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-white/85">
                Free 30-minute audit: your site, your 3 closest competitors, and the OTA revenue you can win back. Delivered by a real strategist within 24 hours.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  console.log("audit request", Object.fromEntries(data));
                  (e.currentTarget as HTMLFormElement).reset();
                  setSent(true);
                  setTimeout(() => setSent(false), 1800);
                }}
                className="mx-auto mt-10 flex max-w-xl flex-col gap-3"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label className="sr-only" htmlFor="site">Hotel website URL</label>
                  <input
                    id="site"
                    name="site"
                    type="url"
                    required
                    placeholder="yourhotel.com"
                    className="h-12 flex-1 rounded-full border border-white/25 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur transition-colors focus:border-white/60"
                  />
                  <label className="sr-only" htmlFor="rooms">Number of rooms</label>
                  <select
                    id="rooms"
                    name="rooms"
                    required
                    defaultValue=""
                    className="h-12 rounded-full border border-white/25 bg-white/10 px-5 text-sm text-white outline-none backdrop-blur transition-colors focus:border-white/60"
                  >
                    <option value="" disabled className="text-foreground">Rooms</option>
                    <option value="10-50" className="text-foreground">10–50 rooms</option>
                    <option value="51-150" className="text-foreground">51–150 rooms</option>
                    <option value="150+" className="text-foreground">150+ rooms</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
                >
                  {sent ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Sent
                    </>
                  ) : (
                    "Get my booking audit"
                  )}
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
