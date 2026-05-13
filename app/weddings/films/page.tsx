import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { caseStudiesByVertical } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Wedding film portfolio · Tampa & destination",
  description:
    "A growing gallery of wedding films from Tampa and beyond. Armature Works, Oxford Exchange, Clearwater Beach, and more.",
  alternates: { canonical: "/weddings/films" },
};

// Some extra placeholder reels to flesh out the gallery
const EXTRA_PLACEHOLDERS = [
  { label: "Hyde Park · spring 2025", gradient: "ember" as const },
  { label: "Sarasota estate · 2024", gradient: "stone" as const },
  { label: "Hillsborough River · 2024", gradient: "ink" as const },
  { label: "Tampa Garden Club · 2024", gradient: "ember" as const },
];

export default function WeddingFilmsPage() {
  const studies = caseStudiesByVertical("weddings");

  return (
    <>
      <section className="container-x pt-12 md:pt-20">
        <SectionHeading
          eyebrow="Wedding portfolio"
          title="A growing gallery of wedding films."
          intro="Each film is the day it covered — no two looking the same. Click through for the full story."
        />
      </section>

      <section className="container-x mt-12 md:mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          {studies.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}

          {EXTRA_PLACEHOLDERS.map((p, i) => (
            <div key={p.label}>
              <VideoPlaceholder
                label={p.label}
                gradient={p.gradient}
                aspect="16/9"
              />
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-stone">
                Weddings · Coming soon
              </p>
              <h3 className="mt-1 font-display text-xl tracking-tightish text-bone md:text-2xl">
                {p.label}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        heading="See yours on this page next?"
        body="If you like what you see, let's talk about your wedding. I take on a limited number of weddings per year so I can stay all-in on each one."
        primary={{ href: "/inquire?type=Wedding", label: "Start a wedding inquiry" }}
      />
      <div className="h-24" />
    </>
  );
}
