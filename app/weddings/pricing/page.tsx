import type { Metadata } from "next";
import { PackageCard } from "@/components/package-card";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { FaqList, FaqJsonLd } from "@/components/faq";
import { weddingPackages } from "@/lib/packages";
import { weddingFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Wedding pricing — packages & investment",
  description:
    "Wedding videography pricing — Engagement Film, The Story, The Feature, and The Heirloom. Starting at $1,500.",
  alternates: { canonical: "/weddings/pricing" },
};

const inclusions = [
  "Pre-wedding planning call",
  "Dual-recorded ceremony audio",
  "Multi-camera ceremony coverage",
  "Color-graded final film",
  "Online private delivery gallery",
  "Backup gear + redundant storage",
  "Licensed music",
  "$1M general liability insurance",
];

export default function WeddingPricingPage() {
  return (
    <>
      <FaqJsonLd items={weddingFaqs} />
      <section className="container-x pt-12 md:pt-20">
        <SectionHeading
          eyebrow="Wedding pricing"
          title="Honest pricing, scoped to the day."
          intro="Every package below is a starting point. After we talk, I'll send a proposal scoped to your wedding, your venue, and what you actually want the film to do."
        />
      </section>

      <section className="container-x mt-12 md:mt-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {weddingPackages.map((p) => (
            <PackageCard
              key={p.name}
              pkg={p}
              ctaHref="/inquire?type=Wedding"
            />
          ))}
        </div>
      </section>

      <section className="container-x mt-20 md:mt-28">
        <div className="grid gap-10 rounded-3xl border border-hairline bg-surface p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone">
              Every wedding includes
            </p>
            <h2 className="mt-3 font-display text-fluid-h2 tracking-tighter2 text-bone">
              The standards behind every package.
            </h2>
            <p className="mt-4 max-w-prose text-stone">
              These aren't add-ons — they're how the films get made.
              Anything below this bar would compromise the final cut.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {inclusions.map((i) => (
              <li
                key={i}
                className="rounded-xl border border-hairline bg-ink/40 px-4 py-3 text-sm text-bone/90"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x mt-20 md:mt-28">
        <SectionHeading eyebrow="Wedding FAQ" title="Pricing questions." />
        <div className="mt-10">
          <FaqList items={weddingFaqs} />
        </div>
      </section>

      <CtaBanner
        heading="Let's build the right package for your day."
        primary={{ href: "/inquire?type=Wedding", label: "Start a wedding inquiry" }}
      />
      <div className="h-24" />
    </>
  );
}
