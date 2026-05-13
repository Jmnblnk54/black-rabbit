import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Mail } from "lucide-react";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { CaseStudyCard } from "@/components/case-study-card";
import { PackageCard } from "@/components/package-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { FaqList, FaqJsonLd } from "@/components/faq";
import { caseStudiesByVertical } from "@/lib/case-studies";
import { weddingPackages } from "@/lib/packages";
import { weddingFaqs } from "@/lib/faqs";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Wedding Films · Tampa, Florida & destination",
  description:
    "Cinematic Tampa wedding videography by Julia Blank. Highlights, documentary cuts, and full-day heirloom films. Florida and destination.",
  alternates: { canonical: "/weddings" },
};

const processSteps = [
  {
    n: "01",
    title: "First note",
    body: "You send a short inquiry. I read every one myself and write back within two business days with availability.",
  },
  {
    n: "02",
    title: "Discovery call",
    body: "Fifteen minutes on the phone. We talk through your day, your venue, and what you want the film to feel like — not just what's in it.",
  },
  {
    n: "03",
    title: "Custom proposal",
    body: "A scoped proposal, often within a day of the call. Packages are starting points; the real version is built for your day.",
  },
  {
    n: "04",
    title: "The wedding day",
    body: "I shoot most weddings solo or with one second shooter. Dual-recorded audio, multi-camera ceremony, backup gear on every shoot.",
  },
  {
    n: "05",
    title: "Edit + delivery",
    body: "Six to ten weeks for most films. The Heirloom package includes a same-day teaser so you can share something the morning after.",
  },
];

export default function WeddingsPage() {
  const studies = caseStudiesByVertical("weddings");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Wedding Videography",
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        addressRegion: SITE.region,
        addressCountry: "US",
      },
    },
    areaServed: ["Tampa", "St. Petersburg", "Clearwater", "Florida"],
    offers: weddingPackages.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.tagline,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: p.price,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,#5B1E1888_0%,#0E0E0F_55%,#0E0E0F_100%)]"
        />
        <div className="container-x relative pt-12 md:pt-24">
          <div className="grid items-end gap-10 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-xs uppercase tracking-[0.22em] text-stone">
                <Heart className="h-3 w-3 text-rabbit" /> Wedding films
              </p>
              <h1 className="mt-5 font-display text-fluid-hero font-light leading-[0.96] tracking-tighter2 text-bone">
                A film, not just <em className="not-italic">footage.</em>
              </h1>
              <p className="mt-6 max-w-xl text-base text-stone md:text-lg">
                Tampa wedding videographer serving Florida and beyond.
                Honest cinematography, dual-recorded audio, multi-camera
                ceremonies — built around the day you're actually
                planning.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/inquire?type=Wedding"
                  className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm text-ink transition hover:bg-bone/90"
                >
                  Check my date
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/weddings/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-sm text-bone transition hover:bg-bone hover:text-ink"
                >
                  See pricing
                </Link>
              </div>
            </div>
            <VideoPlaceholder
              label="Wedding reel · 2 min"
              gradient="ember"
              aspect="4/5"
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="container-x mt-24 md:mt-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading
              eyebrow="What it's like"
              title="The experience is the film."
              intro="Most of my couples have never hired a videographer before. The job is to make that part feel easy — and to disappear into the day enough that the film feels found, not produced."
            />
            <p className="mt-6 max-w-prose text-stone">
              Expect a calm presence on the day, communication you don't
              have to chase, and a film delivered when I promised it.
              Expect to actually finish watching it.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ImagePlaceholder
              label="Ceremony"
              tone="ember"
              aspect="4/5"
              seed={2}
            />
            <ImagePlaceholder
              label="First dance"
              tone="stone"
              aspect="4/5"
              seed={5}
              className="mt-10"
            />
            <ImagePlaceholder
              label="Detail"
              tone="ink"
              aspect="4/5"
              seed={7}
            />
            <ImagePlaceholder
              label="Portrait"
              tone="ember"
              aspect="4/5"
              seed={11}
              className="mt-10"
            />
          </div>
        </div>
      </section>

      {/* RECENT FILMS */}
      <section className="container-x mt-24 md:mt-32">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Recent weddings"
            title="A few films from this season."
          />
          <Link
            href="/weddings/films"
            className="hidden shrink-0 text-sm text-stone hover:text-bone md:inline-flex"
          >
            All wedding films &nbsp;→
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {studies.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="Wedding packages"
          title="Starting points, not ceilings."
          intro="Every wedding I take on is scoped to the day. Use these as a baseline and we'll build the right version on the discovery call."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {weddingPackages.map((p) => (
            <PackageCard key={p.name} pkg={p} ctaHref="/inquire?type=Wedding" />
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="How it works"
          title="From first note to final film."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-hairline bg-surface p-6"
            >
              <p className="font-display text-3xl text-rabbit">{s.n}</p>
              <p className="mt-4 font-display text-xl text-bone">
                {s.title}
              </p>
              <p className="mt-2 text-sm text-stone">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-x mt-24 md:mt-32">
        <TestimonialCard
          quote="We watched it the morning after the wedding and immediately watched it again. It's the day we remembered, not a stranger's version of it."
          attribution="Maya & Jordan · Armature Works"
        />
      </section>

      {/* LEAD MAGNET */}
      <section className="container-x mt-24 md:mt-32">
        <div className="overflow-hidden rounded-3xl border border-hairline bg-gradient-to-br from-surface to-ink p-8 md:p-14">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center md:gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">
                Free guide
              </p>
              <h3 className="mt-3 font-display text-3xl tracking-tighter2 text-bone md:text-4xl">
                Five questions to ask your wedding videographer.
              </h3>
              <p className="mt-4 max-w-prose text-stone md:text-lg">
                A short, honest checklist — the questions worth asking
                before you sign any contract, mine or anyone else's.
                Sent straight to your inbox.
              </p>
            </div>
            <form
              className="flex flex-col gap-3 rounded-2xl border border-hairline bg-ink/60 p-5 md:p-6"
              action="/api/inquire"
              method="post"
            >
              <label
                htmlFor="lead-email"
                className="text-xs uppercase tracking-[0.18em] text-stone"
              >
                Email
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="rounded-lg border border-hairline bg-transparent px-4 py-3 text-bone placeholder:text-stone/60 outline-none focus:border-bone/40"
              />
              <input type="hidden" name="leadMagnet" value="5-questions-guide" />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-bone px-5 py-3 text-sm text-ink transition hover:bg-bone/90"
              >
                <Mail className="h-4 w-4" />
                Send me the guide
              </button>
              <p className="text-[11px] text-stone">
                No spam, no list rental. Unsubscribe any time.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x mt-24 md:mt-32">
        <FaqJsonLd items={weddingFaqs} />
        <SectionHeading eyebrow="Wedding FAQ" title="Good questions, answered." />
        <div className="mt-10">
          <FaqList items={weddingFaqs} />
        </div>
      </section>

      <CtaBanner
        heading="Let's talk about your day."
        body="Send a short note with your wedding date and venue. I'll write back within two business days with availability and a few follow-up questions."
        primary={{ href: "/inquire?type=Wedding", label: "Start a wedding inquiry" }}
      />
      <div className="h-24" />
    </>
  );
}
