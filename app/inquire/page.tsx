import type { Metadata } from "next";
import { Suspense } from "react";
import { InquiryForm } from "@/components/inquiry-form";
import { SectionHeading } from "@/components/section-heading";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Inquire — start a project",
  description:
    "Tell me about your wedding, brand film, or event. I read every inquiry myself and reply within two business days.",
  alternates: { canonical: "/inquire" },
};

type ProjectType = "Wedding" | "Brand" | "Event" | "Other";

function pickType(v: string | string[] | undefined): ProjectType {
  const s = Array.isArray(v) ? v[0] : v;
  if (s === "Brand" || s === "Event" || s === "Other") return s;
  return "Wedding";
}

export default async function InquirePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const sp = await searchParams;
  const defaultType = pickType(sp?.type);

  return (
    <>
      <section className="container-x pt-12 md:pt-20">
        <SectionHeading
          eyebrow="Inquire"
          title="Tell me about your project."
          intro="A short note is all I need — date, place, what you want the film to feel like. I read every inquiry myself and reply within two business days."
        />
      </section>

      <section className="container-x mt-12 md:mt-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:gap-16">
          <Suspense fallback={null}>
            <InquiryForm defaultType={defaultType} />
          </Suspense>

          <aside className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">
                Prefer email?
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-2 inline-block font-display text-2xl text-bone hover:text-bone/80 md:text-3xl"
              >
                {SITE.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">
                Based in
              </p>
              <p className="mt-2 font-display text-2xl text-bone md:text-3xl">
                {SITE.city}, {SITE.region}
              </p>
              <p className="mt-2 max-w-xs text-sm text-stone">
                Serving all of Florida and traveling anywhere in the US
                or beyond.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">
                What happens next
              </p>
              <ol className="mt-3 space-y-2 text-sm text-bone/85">
                <li>1. You send a short note.</li>
                <li>2. I reply within two business days.</li>
                <li>3. We hop on a quick discovery call.</li>
                <li>4. I send a custom proposal.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
      <div className="h-24" />
    </>
  );
}
