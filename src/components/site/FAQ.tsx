import * as Accordion from "@radix-ui/react-accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "How much does this cost?",
    a: "Engagements start at $2,500/month for focused local SEO and scale with scope. Website builds are project-based, quoted after the audit. You'll see exact pricing before we ever ask for a card.",
  },
  {
    q: "How long until I see results?",
    a: "Chatbots and website changes ship in weeks. Local SEO compounds — you'll see early wins in 60–90 days and material traffic growth by month 6. Anyone promising overnight rankings is lying.",
  },
  {
    q: "Am I locked into a long contract?",
    a: "No. We work month-to-month after an initial 90-day sprint. If we're not earning our fee, you leave — and keep everything we built.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "Nobody honest does. We guarantee the work, the process, and full transparency on what's moving the needle. Rankings follow.",
  },
  {
    q: "Who owns the website and content?",
    a: "You do. Fully. Code, copy, chatbot flows, analytics — all in your accounts, from day one. No hostage situations.",
  },
  {
    q: "What if I already have a website?",
    a: "Great — we'll audit it for free. Most local service sites lose leads because they're slow, confusing, or invisible on mobile. We'll show you exactly what's broken and what it'll take to fix.",
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
                <Accordion.Content className="overflow-hidden text-[15px] leading-relaxed text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
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
