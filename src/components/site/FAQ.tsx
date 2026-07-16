import * as Accordion from "@radix-ui/react-accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Do you integrate with our PMS and booking engine?",
    a: "Yes. We work with Cloudbeds, Mews, SiteMinder, Little Hotelier, and most modern PMS platforms. If yours has a public API or booking widget, we integrate it.",
  },
  {
    q: "How fast will direct bookings actually move?",
    a: "Chatbot and website changes ship in weeks and lift conversion almost immediately. SEO compounds — expect early ranking wins in 60–90 days and material direct-booking growth by month 6.",
  },
  {
    q: "Do you work with branded or flagged properties?",
    a: "Mostly independents and boutique groups. We'll take on flagged properties when the brand allows meaningful control over the website and marketing — otherwise the work can't move the needle.",
  },
  {
    q: "How much does it cost?",
    a: "Engagements start at $2,500/month for focused SEO and scale with property count and scope. Website builds are project-based and quoted after the audit. You see pricing before we ever ask for a card.",
  },
  {
    q: "Am I locked into a long contract?",
    a: "No. Month-to-month after an initial 90-day sprint. If we're not earning our fee, you leave — and you keep the site, content, and chatbot flows.",
  },
  {
    q: "Who owns the website and guest data?",
    a: "You do. Fully. Code, copy, analytics, chatbot conversations, and guest data live in your accounts from day one. GDPR-compliant by default.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Still weighing it up?</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <Accordion.Root type="single" collapsible className="divide-y divide-border/60 border-y border-border/60">
            {faqs.map((f) => (
              <Accordion.Item key={f.q} value={f.q} className="group">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium transition-colors hover:text-primary-glow">
                    <span>{f.q}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="shrink-0 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-45"
                    >
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-[15px] leading-relaxed text-muted-foreground data-[state=closed]:animate-none data-[state=open]:animate-none">
                  <div className="pb-6 pr-10">{f.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
