import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Problem } from "@/components/site/Problem";
import { Services } from "@/components/site/Services";
import { ShowInAction } from "@/components/site/ShowInAction";
import { Benefits } from "@/components/site/Benefits";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const TITLE = "Hotel SEO, Direct-Booking Websites & AI Concierge — TSMC Marketing";
const DESCRIPTION =
  "We help independent and boutique hotels fill more rooms and pay less to OTAs. SEO, direct-booking websites, and 24/7 AI concierge. Free booking audit in 24 hours.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TSMC Marketing",
          description: DESCRIPTION,
          url: "/",
          sameAs: [],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Services />
        <ShowInAction />
        <Benefits />
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
