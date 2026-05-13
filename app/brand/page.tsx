import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { CaseStudyCard } from "@/components/case-study-card";
import { PackageCard } from "@/components/package-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { caseStudiesByVertical } from "@/lib/case-studies";
import { brandPackages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Brand films & content sessions",
  description:
    "Flagship brand films, content sessions, and monthly retainer work for companies that want their video to look like a film.",
  alternates: { canonical: "/brand" },
};

const services = [
  {
    title: "Brand story films",
    body: "60–90 second flagship films that introduce who you are, what you make, and why it matters. Concept, shoot, color, and sound — all in.",
  },
  {
    title: "Content sessions",
    body: "One-day shoots that produce eight to twelve short-form pieces ready for vertical platforms. Designed to feed a quarter of content in a day.",
  },
  {
    title: "Monthly retainer",
    body: "A standing relationship — one shoot day a month, an editor on call, a content calendar you don't have to chase.",
  },
];

export default function BrandPage() {
  const studies = caseStudiesByVertical("brand");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_-10%,#2A2A2D_0%,#0E0E0F_55%,#0E0E0F_100%)]"
        />
        <div className="container-x relative pt-12 md:pt-24">
          <div className="grid items-end gap-10 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-xs uppercase tracking-[0.22em] text-stone">
                <Building2 className="h-3 w-3 text-rabbit" /> Brand films
              </p>
              <h1 className="mt-5 font-display text-fluid-hero font-light leading-[0.96] tracking-tighter2 text-bone">
                Films that look like films.
              </h1>
              <p className="mt-6 max-w-xl text-base text-stone md:text-lg">
                Brand work led by a videographer with a decade in
                commercial film and television. Concept-first
                production for companies that want to show up well.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/inquire?type=Brand"
                  className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm text-ink transition hover:bg-bone/90"
                >
                  Start a brand inquiry
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
              label="Brand reel · 60s"
              gradient="stone"
              aspect="4/5"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="Brand services"
          title="Three ways I usually work with brands."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-hairline bg-surface p-7 md:p-8"
            >
              <h3 className="font-display text-2xl tracking-tightish text-bone md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 text-stone md:text-base">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="Brand work"
          title="A few recent projects."
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
          quote="Black Rabbit Creative delivered clean, high-quality edits with a polished, professional finish that truly elevated our brand. The video and photo content not only looked amazing on our website and flyers but even held up beautifully on a large Jumbotron making our brand stand out in the best way."
          attribution="Clark Custom Therapy, LLC"
        />
      </section>

      {/* PACKAGES */}
      <section id="packages" className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="Brand packages"
          title="Starting points for the most common asks."
          intro="Every brand engagement gets scoped on a call. These are the starting points clients tend to anchor to."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {brandPackages.map((p) => (
            <PackageCard
              key={p.name}
              pkg={p}
              ctaHref="/inquire?type=Brand"
            />
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Tell me about the brand."
        primary={{ href: "/inquire?type=Brand", label: "Start a brand inquiry" }}
      />
      <div className="h-24" />
    </>
  );
}
