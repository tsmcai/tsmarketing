import { useReducedMotion } from "framer-motion";

/**
 * Fixed, full-viewport atmospheric base layer.
 * Mesh gradient blobs + fine grid + film grain.
 * Sits behind all content (z -10), pointer-events none, reduced-motion safe.
 */
export function AmbientBackground() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Mesh gradient blobs */}
      <div
        className={`absolute -top-1/4 -left-1/6 h-[55vh] w-[55vh] rounded-full opacity-50 blur-3xl ${reduce ? "" : "animate-drift-a"}`}
        style={{ background: "radial-gradient(circle, oklch(0.55 0.22 275 / 0.45), transparent 70%)" }}
      />
      <div
        className={`absolute top-1/3 -right-1/6 h-[50vh] w-[50vh] rounded-full opacity-40 blur-3xl ${reduce ? "" : "animate-drift-b"}`}
        style={{ background: "radial-gradient(circle, oklch(0.68 0.20 285 / 0.40), transparent 70%)" }}
      />
      <div
        className={`absolute bottom-0 left-1/4 h-[45vh] w-[45vh] rounded-full opacity-30 blur-3xl ${reduce ? "" : "animate-drift-c"}`}
        style={{ background: "radial-gradient(circle, oklch(0.62 0.18 250 / 0.35), transparent 70%)" }}
      />

      {/* Fine grid, masked to fade at edges */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Film grain */}
      <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-soft-light" />
    </div>
  );
}
