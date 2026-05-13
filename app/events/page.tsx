import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { CaseStudyCard } from "@/components/case-study-card";
import { PackageCard } from "@/components/package-card";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { caseStudiesByVertical } from "@/lib/case-studies";
import { eventPackages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Event coverage · festivals, tournaments, conferences",
  description:
    "Event films and recap reels for festivals, tournaments, conferences, and brand activations. Same-week turnaround available.",
  alternates: { canonical: "/events" },
};

const whatIDeliver = [
  "Headline recap film",
  "Daily highlight cutdowns",
  "Vertical social cuts",
  "Sponsor-ready inserts",
  "Press-grade stills (on request)",
  "Same-week turnaround",
];

export default function EventsPage() {
  const studies = caseStudiesByVertical("events");

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_-10%,#17171A_0%,#0E0E0F_55%,#0E0E0F_100%)]"
        />
        <div className="container-x relative pt-12 md:pt-24">
          <div className="grid items-end gap-10 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-xs uppercase tracking-[0.22em] text-stone">
                <Calendar className="h-3 w-3 text-rabbit" /> Events
              </p>
              <h1 className="mt-5 font-display text-fluid-hero font-light leading-[0.96] tracking-tighter2 text-bone">
                Recap films that sell the next one.
              </h1>
              <p className="mt-6 max-w-xl text-base text-stone md:text-lg">
                Festivals, tournaments, conferences, brand
                activations. The film you'll lead the next ticket sale
                with, and the social cutdowns to keep the room talking.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/inquire?type=Event"
                  className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm text-ink transition hover:bg-bone/90"
                >
                  Start an event inquiry
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#packages"
                  className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-sm text-bone transition hover:bg-bone hover:text-ink"
                >
                  See packages
                </Link>
              </div>
            </div>
            <VideoPlaceholder
              label="Event reel · 60s"
              gradient="ink"
              aspect="4/5"
            />
          </div>
        </div>
      </section>

      <section className="container-x mt-24 md:mt-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <SectionHeading
            eyebrow="What you'll get"
            title="Built for the way events actually move."
            intro="Event clients need to ship fast and look good. Production runs lean, on-site editing keeps turnaround tight."
          />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whatIDeliver.map((i) => (
              <li
                key={i}
                className="rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-bone/90"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="Recent events"
          title="A few recent productions."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {studies.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>
      </section>

      <section id="packages" className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="Event packages"
          title="From half-day coverage to multi-day productions."
          intro="The right shape depends on the scale of the event and how fast you need to ship — let's talk through it."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {eventPackages.map((p) => (
            <PackageCard
              key={p.name}
              pkg={p}
              ctaHref="/inquire?type=Event"
            />
          ))}
        </div>
      </section>

      <CtaBanner
        heading="What's on the calendar?"
        primary={{ href: "/inquire?type=Event", label: "Start an event inquiry" }}
      />
      <div className="h-24" />
    </>
  );
}
