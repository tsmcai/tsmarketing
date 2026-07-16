import { Reveal } from "./Reveal";
import bookingImg from "@/assets/mock-booking.jpg";
import seoImg from "@/assets/mock-seo.jpg";
import chatImg from "@/assets/mock-chatbot.jpg";

const shots = [
  {
    tag: "Booking engine",
    title: "Book direct, save 12%",
    desc: "Live rate calendar with a best-rate badge. Plugs into your existing PMS.",
    img: bookingImg,
    alt: "Direct booking widget with rate calendar",
  },
  {
    tag: "SEO dashboard",
    title: "Rankings you can screenshot",
    desc: "Real climb over 90 days on the phrases that drive reservations.",
    img: seoImg,
    alt: "SEO dashboard showing keyword rankings climbing",
  },
  {
    tag: "AI concierge",
    title: "Books the room mid-chat",
    desc: "Answers guests in 12 languages and closes the reservation without a human.",
    img: chatImg,
    alt: "AI concierge chatbot transcript with a confirm booking button",
  },
];

export function ShowInAction() {
  return (
    <section id="in-action" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">See it in action</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            What you're actually getting.
          </h2>
          <p className="mt-4 text-muted-foreground">
            No mystery deliverables. Here's what shows up in your account.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <figure className="group flex h-full flex-col">
                <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface/40 shadow-[0_30px_80px_-40px_oklch(0.55_0.22_275/0.7)] transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-primary-glow">{s.tag}</div>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
