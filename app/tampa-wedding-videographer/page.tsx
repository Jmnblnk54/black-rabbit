import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { CaseStudyCard } from "@/components/case-study-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { FaqList, FaqJsonLd } from "@/components/faq";
import { caseStudiesByVertical } from "@/lib/case-studies";
import { tampaFaqs } from "@/lib/faqs";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tampa Wedding Videographer — Black Rabbit Creative",
  description:
    "Tampa wedding videographer Julia Blank. Cinematic wedding films across Tampa Bay — Armature Works, Oxford Exchange, Clearwater Beach, and beyond.",
  alternates: { canonical: "/tampa-wedding-videographer" },
  keywords: [
    "Tampa wedding videographer",
    "Tampa Bay wedding videographer",
    "wedding videographer Tampa",
    "Tampa wedding films",
    "Tampa Heights wedding videographer",
  ],
};

const venues = [
  {
    name: "Armature Works",
    body: "Tampa Heights brick, trusses, and golden-hour windows.",
  },
  {
    name: "Oxford Exchange",
    body: "Marble, library light, and the conservatory ceremony space.",
  },
  {
    name: "Clearwater Beach",
    body: "Gulf-coast last light and intimate beach ceremonies.",
  },
  {
    name: "Hyde Park & Bayshore",
    body: "Historic neighborhoods, garden ceremonies, waterfront receptions.",
  },
  {
    name: "Tampa Garden Club",
    body: "Intimate weddings in one of Tampa's quieter venues.",
  },
  {
    name: "Sarasota & St. Pete",
    body: "Across Tampa Bay — happy to travel anywhere on the I-275 corridor.",
  },
];

const reasons = [
  {
    h: "Local light, local hours.",
    p: "Florida light is unforgiving and Tampa light is its own thing — the golden window at Armature Works is forty minutes long, the beaches do their best work at the very end of the day, and historic interiors need someone who's shot them before. Hiring local means none of that is a surprise.",
  },
  {
    h: "Vendor relationships.",
    p: "A wedding day is a coordination problem. I've worked alongside most of the Tampa Bay coordinators, photographers, and DJs you're already talking to, which means less time figuring out logistics on the day and more time getting the shots.",
  },
  {
    h: "A film made in Tampa.",
    p: "Color grade, sound design, edit — all of it happens here. You're not waiting on a post house in another time zone to get a revision back, and the people making your film actually know the room it was shot in.",
  },
];

export default function TampaPage() {
  const studies = caseStudiesByVertical("weddings");

  return (
    <>
      <FaqJsonLd items={tampaFaqs} />

      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,#5B1E1888_0%,#0E0E0F_55%,#0E0E0F_100%)]"
        />
        <div className="container-x relative pt-12 md:pt-24">
          <div className="grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-xs uppercase tracking-[0.22em] text-stone">
                <MapPin className="h-3 w-3 text-rabbit" /> Tampa, Florida
              </p>
              <h1 className="mt-5 font-display text-fluid-hero font-light leading-[0.95] tracking-tighter2 text-bone">
                Tampa wedding videographer.
              </h1>
              <p className="mt-6 max-w-xl text-base text-stone md:text-lg">
                Cinematic wedding films across Tampa Bay — Tampa
                Heights, Hyde Park, Clearwater Beach, Sarasota, and
                anywhere your day takes us. Led by Julia Blank, with a
                decade in commercial film and television behind every
                frame.
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
              label="Tampa wedding reel · 90s"
              gradient="ember"
              aspect="4/5"
            />
          </div>
        </div>
      </section>

      {/* WHY LOCAL */}
      <section className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="Why hire local"
          title="A Tampa wedding film, made in Tampa."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.h}
              className="rounded-2xl border border-hairline bg-surface p-7 md:p-8"
            >
              <p className="font-display text-xl tracking-tightish text-bone md:text-2xl">
                {r.h}
              </p>
              <p className="mt-3 text-stone">{r.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VENUES */}
      <section className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="Tampa Bay venues"
          title="Where I keep filming."
          intro={`${SITE.city} has a deep bench of wedding venues. Here are the ones I keep coming back to.`}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {venues.map((v) => (
            <div
              key={v.name}
              className="rounded-xl border border-hairline bg-surface p-6"
            >
              <p className="font-display text-xl tracking-tightish text-bone md:text-2xl">
                {v.name}
              </p>
              <p className="mt-2 text-sm text-stone">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="Recent Tampa weddings"
          title="A few films from this season."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {studies.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-x mt-24 md:mt-32">
        <TestimonialCard
          quote="We watched it the morning after the wedding and immediately watched it again. It's the day we remembered, not a stranger's version of it."
          attribution="Maya & Jordan · Armature Works"
        />
      </section>

      {/* FAQ */}
      <section className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="Tampa FAQ"
          title="Questions Tampa couples ask first."
        />
        <div className="mt-10">
          <FaqList items={tampaFaqs} />
        </div>
      </section>

      <CtaBanner
        heading="Let's film your Tampa wedding."
        primary={{ href: "/inquire?type=Wedding", label: "Check my date" }}
      />
      <div className="h-24" />
    </>
  );
}
