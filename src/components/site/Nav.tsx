import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="shrink-0 transition-transform duration-300 hover:scale-[1.03]">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {[
            { h: "#services", l: "Services" },
            { h: "#process", l: "Process" },
            { h: "#work", l: "Work" },
            { h: "#faq", l: "FAQ" },
          ].map((i) => (
            <a key={i.h} href={i.h} className="story-link transition-colors hover:text-foreground">
              {i.l}
            </a>
          ))}
        </nav>
        <a
          href="#audit"
          className="group relative inline-flex h-9 items-center overflow-hidden rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.04]"
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
          <span className="relative">Free SEO audit</span>
        </a>
      </div>
    </header>
  );
}
