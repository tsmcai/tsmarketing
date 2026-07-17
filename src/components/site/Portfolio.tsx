import { Reveal } from "./Reveal";

const cases = [
  {
    tag: "Plumbing · Local services",
    title: "From page 4 to the Google Map Pack in 90 days",
    metric: "+412%",
    label: "organic leads",
    img: "https://images.pexels.com/photos/5691536/pexels-photo-5691536.jpeg?auto=compress&cs=tinysrgb&w=800",
    blurb: "A two-truck plumbing outfit was invisible on Google. We rebuilt their local SEO and added a 24/7 chatbot. Phones started ringing within six weeks.",
  },
  {
    tag: "Dental · Healthcare",
    title: "New site cut cost-per-patient in half",
    metric: "−53%",
    label: "cost per acquisition",
    img: "https://images.pexels.com/photos/8413334/pexels-photo-8413334.jpeg?auto=compress&cs=tinysrgb&w=800",
    blurb: "A dental practice was burning budget on ads with no return. We built a conversion-first site and shifted to organic. New patients went up, ad spend went down.",
  },
  {
    tag: "HVAC · Home services",
    title: "AI chat that closes at 3am",
    metric: "$120K",
    label: "chat-attributed revenue",
    img: "https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=800",
    blurb: "An HVAC company kept losing overnight leads to faster competitors. Our AI chatbot now answers, qualifies, and books — before the office opens.",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Proof</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Real businesses. Real numbers.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Local service companies that stopped guessing and started growing.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="font-display text-4xl font-semibold text-white drop-shadow-lg">{c.metric}</div>
                    <div className="mt-1 text-sm text-white/90 drop-shadow">{c.label}</div>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="text-xs uppercase tracking-widest text-primary-glow">{c.tag}</div>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">
                    <span className="story-link">{c.title}</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
