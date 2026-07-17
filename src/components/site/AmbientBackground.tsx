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
      {/* Mesh gradient blobs — visible but soft */}
      <div
        className={`absolute -top-1/4 -left-1/6 h-[60vh] w-[60vh] rounded-full opacity-70 blur-2xl ${reduce ? "" : "animate-drift-a"}`}
        style={{ background: "radial-gradient(circle, oklch(0.50 0.24 277 / 0.55), transparent 65%)" }}
      />
      <div
        className={`absolute top-1/3 -right-1/6 h-[55vh] w-[55vh] rounded-full opacity-60 blur-2xl ${reduce ? "" : "animate-drift-b"}`}
        style={{ background: "radial-gradient(circle, oklch(0.62 0.22 285 / 0.50), transparent 65%)" }}
      />
      <div
        className={`absolute bottom-0 left-1/4 h-[50vh] w-[50vh] rounded-full opacity-50 blur-2xl ${reduce ? "" : "animate-drift-c"}`}
        style={{ background: "radial-gradient(circle, oklch(0.58 0.20 260 / 0.45), transparent 65%)" }}
      />
      {/* Warm accent blob for contrast */}
      <div
        className={`absolute top-[60%] right-[20%] h-[35vh] w-[35vh] rounded-full opacity-30 blur-2xl ${reduce ? "" : "animate-drift-b"}`}
        style={{ background: "radial-gradient(circle, oklch(0.65 0.18 40 / 0.35), transparent 65%)" }}
      />

      {/* Fine grid, masked to fade at edges */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Film grain */}
      <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-soft-light" />

      {/* Top + bottom vignette for content legibility */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 50%, oklch(0.13 0.02 277 / 0.5) 100%)" }}
      />
    </div>
  );
}
