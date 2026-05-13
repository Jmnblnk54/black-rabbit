import Link from "next/link";
import { ArrowRight, MapPin, Calendar as CalIcon } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";
import { VideoPlaceholder } from "./video-placeholder";
import { ImagePlaceholder } from "./image-placeholder";
import { TestimonialCard } from "./testimonial-card";
import { SITE } from "@/lib/utils";

const GRADIENT: Record<CaseStudy["vertical"], "ink" | "ember" | "stone"> = {
  weddings: "ember",
  brand: "stone",
  events: "ink",
};

export function CaseStudyTemplate({
  study,
  next,
}: {
  study: CaseStudy;
  next?: { slug: string; title: string; vertical: CaseStudy["vertical"] };
}) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: study.title,
    description: study.summary,
    uploadDate: study.date,
    contentLocation: study.location,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
    },
    creator: { "@type": "Person", name: SITE.owner },
    thumbnailUrl: [`${SITE.url}/og.jpg`],
  };

  const nextHref = next
    ? `/${next.vertical}/${next.slug}`
    : `/${study.vertical}`;

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <section className="container-x pt-12 md:pt-20">
        <p className="text-xs uppercase tracking-[0.22em] text-stone">
          {study.vertical} · {study.client}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-fluid-h1 leading-[0.98] tracking-tighter2 text-bone">
          {study.title}
        </h1>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {study.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalIcon className="h-4 w-4" /> {study.date}
          </span>
        </div>
      </section>

      <section className="container-x mt-10 md:mt-14">
        <VideoPlaceholder
          label={study.title}
          gradient={GRADIENT[study.vertical]}
          aspect="16/9"
        />
      </section>

      <section className="container-x mt-14 md:mt-20">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:gap-16">
          <div className="space-y-6">
            <p className="font-display text-2xl leading-snug tracking-tightish text-bone md:text-3xl">
              {study.summary}
            </p>
            <p className="max-w-prose text-base leading-relaxed text-bone/85 md:text-lg">
              {study.story}
            </p>
          </div>
          <aside className="rounded-2xl border border-hairline bg-surface p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-stone">
              Project
            </p>
            <dl className="mt-5 space-y-4 text-sm">
              <Row k="Client" v={study.client} />
              <Row k="Location" v={study.location} />
              <Row k="Date" v={study.date} />
              <Row k="Vertical" v={study.vertical} />
            </dl>
            <p className="mt-6 border-t border-hairline pt-5 text-xs text-stone">
              {study.credits}
            </p>
          </aside>
        </div>
      </section>

      <section className="container-x mt-16 md:mt-20">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {Array.from({ length: study.stillsCount }).map((_, i) => (
            <ImagePlaceholder
              key={i}
              label={`Still ${i + 1}`}
              tone={i === 1 ? "stone" : i === 2 ? "ink" : "ember"}
              aspect={i === 1 ? "4/5" : "3/4"}
              seed={(i + 1) * 13 + study.slug.length}
            />
          ))}
        </div>
      </section>

      {study.quote && (
        <section className="container-x mt-20 md:mt-28">
          <TestimonialCard
            quote={study.quote.text}
            attribution={study.quote.attribution}
          />
        </section>
      )}

      <section className="container-x mt-24 md:mt-32">
        <div className="flex flex-col gap-6 rounded-3xl border border-hairline bg-gradient-to-b from-surface to-ink p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone">
              Up next
            </p>
            {next ? (
              <p className="mt-2 max-w-xl font-display text-2xl tracking-tightish text-bone md:text-3xl">
                {next.title}
              </p>
            ) : (
              <p className="mt-2 max-w-xl font-display text-2xl tracking-tightish text-bone md:text-3xl">
                Back to the {study.vertical} index.
              </p>
            )}
          </div>
          <Link
            href={nextHref}
            className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-3 text-sm text-ink transition hover:bg-bone/90"
          >
            View
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container-x mt-24 md:mt-32">
        <div className="rounded-3xl border border-rabbit/30 bg-rabbit/[0.06] p-8 text-center md:p-12">
          <h2 className="font-display text-fluid-h2 tracking-tighter2 text-bone">
            Want a film like this for your project?
          </h2>
          <Link
            href="/inquire"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm text-ink transition hover:bg-bone/90"
          >
            Start an inquiry
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <div className="h-24" />
    </article>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.18em] text-stone">
        {k}
      </dt>
      <dd className="mt-1 capitalize text-bone">{v}</dd>
    </div>
  );
}
