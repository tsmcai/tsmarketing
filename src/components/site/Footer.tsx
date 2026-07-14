import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/30">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            SEO, websites, and chatbots that turn search into revenue.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:gap-8">
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#process" className="transition-colors hover:text-foreground">Process</a>
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#audit" className="transition-colors hover:text-foreground">Contact</a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} TSMC Marketing. All rights reserved.</span>
          <span>Built with intention.</span>
        </div>
      </div>
    </footer>
  );
}
