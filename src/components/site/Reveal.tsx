import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "fade-up" | "fade" | "blur-in";

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "fade-up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: Variant;
} & MotionProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const initial =
    variant === "fade"
      ? { opacity: 0 }
      : variant === "blur-in"
      ? { opacity: 0, filter: "blur(8px)", y: 8 }
      : { opacity: 0, y: 16 };
  const animate =
    variant === "fade"
      ? { opacity: 1 }
      : variant === "blur-in"
      ? { opacity: 1, filter: "blur(0px)", y: 0 }
      : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
