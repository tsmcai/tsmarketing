import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  { label: "Google SEO", href: "#services" },
  { label: "Websites", href: "#services" },
  { label: "AI Chatbots", href: "#services" },
  { label: "Free SEO audit", href: "#audit" },
];

const company = [
  { label: "About", href: "#" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#audit" },
];

const resources = [
  { label: "FAQ", href: "#faq" },
  { label: "Case studies", href: "#work" },
  { label: "Testimonials", href: "#work" },
  { label: "Blog", href: "#" },
];

const socials = [
  { label: "Twitter", href: "#", Icon: Twitter },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Instagram", href: "#", Icon: Instagram },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-foreground/80 transition-colors duration-150 hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface/40">
      {/* Gradient hairline */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.55 0.22 275 / 0.55), transparent)",
        }}
      />
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* Brand block */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              SEO, websites, and chatbots that turn search into revenue — engineered for
              teams that measure marketing in pipeline, not impressions.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hello@tsmcmarketing.com"
                  className="group inline-flex items-center gap-2.5 text-foreground/80 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  hello@tsmcmarketing.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+10000000000"
                  className="group inline-flex items-center gap-2.5 text-foreground/80 transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Remote · Serving North America
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <Column title="Services" links={services} />
          <Column title="Company" links={company} />
          <Column title="Resources" links={resources} />
        </div>
      </div>

      <div className="relative border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {new Date().getFullYear()} TSMC Marketing</span>
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_oklch(0.55_0.22_275/0.9)]" />
            Crafted with intent
          </div>
        </div>
      </div>
    </footer>
  );
}
