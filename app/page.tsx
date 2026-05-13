import Link from "next/link";
import { ArrowRight, Heart, Building2, Calendar } from "lucide-react";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { CaseStudyCard } from "@/components/case-study-card";
import { ClientsWall } from "@/components/clients-wall";
import { TestimonialCard } from "@/components/testimonial-card";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/case-studies";
import { SITE } from "@/lib/utils";

export default function HomePage() {
  // Lead with weddings on home, then mix.
  const featured = [
    caseStudies.find((c) => c.slug === "armature-works-tampa")!,
    caseStudies.find((c) => c.slug === "clearwater-beach-sunset")!,
    caseStudies.find((c) => c.slug === "throttled-in-bond")!,
    caseStudies.find((c) => c.slug === "wodapalooza-2025")!,
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_-10%,#1a0d0b_0%,#0E0E0F_45%,#0E0E0F_100%)]"
        />
        <div className="container-x relative pt-12 md:pt-24">
          <div className="grid items-end gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone">
                Tampa, FL · Wedding · Brand · Events
              </p>
              <h1 className="mt-5 font-display text-fluid-hero font-light leading-[0.96] tracking-tighter2 text-bone">
                Films worth keeping.
                <br />
                <span className="italic text-bone/85">
                  Stories worth telling.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-stone md:text-lg">
                Cinematic wedding films, brand stories, and event
                coverage led by Julia Blank — with a decade in
                commercial film and television behind every frame.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/weddings"
                  className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm text-ink transition hover:bg-bone/90"
                >
                  See the wedding work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/inquire"
                  className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-sm text-bone transition hover:bg-bone hover:text-ink"
                >
                  Start an inquiry
                </Link>
              </div>
            </div>

            <VideoPlaceholder
              label="2025 Reel · 90s"
              gradient="ember"
              aspect="4/5"
              className="md:ml-auto md:max-w-md"
            />
          </div>

          <p className="mt-14 max-w-xs text-sm leading-relaxed text-stone md:mt-24">
            {SITE.subline}
          </p>
        </div>
      </section>

      {/* THREE VERTICALS */}
      <section className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="What I make"
          title="Three things, done well."
          intro="Weddings are the heart of the studio. Brand and events are where the same eye gets pointed at something else."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <VerticalCard
            href="/weddings"
            icon={<Heart className="h-5 w-5" />}
            title="Weddings"
            body="Cinematic films of your wedding day, edited to feel like the day actually felt. Across Florida and as a destination videographer."
            cta="See wedding work"
          />
          <VerticalCard
            href="/brand"
            icon={<Building2 className="h-5 w-5" />}
            title="Brand films"
            body="Flagship brand films, content sessions, and ongoing retainer work for companies that want their video to look like a film, not a clip."
            cta="See brand work"
          />
          <VerticalCard
            href="/events"
            icon={<Calendar className="h-5 w-5" />}
            title="Events"
            body="Festivals, tournaments, conferences, activations. Recap films and social cutdowns that double as the next event's marketing."
            cta="See event work"
          />
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="container-x mt-24 md:mt-32">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Recent work"
            title="A few films from this year."
          />
          <Link
            href="/weddings/films"
            className="hidden shrink-0 text-sm text-stone hover:text-bone md:inline-flex"
          >
            All wedding films &nbsp;→
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {featured.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-x mt-24 md:mt-32">
        <TestimonialCard
          quote="Black Rabbit Creative delivered clean, high-quality edits with a polished, professional finish that truly elevated our brand. The video and photo content not only looked amazing on our website and flyers but even held up beautifully on a large Jumbotron making our brand stand out in the best way. From modeling videos that matched our style to content we'll use for future campaigns, the entire experience was top-tier and exactly what we needed."
          attribution="Clark Custom Therapy, LLC"
        />
      </section>

      {/* CLIENTS WALL */}
      <div className="mt-24 md:mt-32">
        <ClientsWall />
      </div>

      <CtaBanner />
      <div className="h-24" />
    </>
  );
}

function VerticalCard({
  href,
  icon,
  title,
  body,
  cta,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-hairline bg-surface p-7 transition hover:-translate-y-0.5 hover:border-bone/30 motion-reduce:hover:translate-y-0 md:p-8"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rabbit/15 text-rabbit">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-2xl tracking-tightish text-bone md:text-3xl">
        {title}
      </h3>
      <p className="mt-3 text-sm text-stone md:text-base">{body}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-bone/80 transition group-hover:text-bone">
        {cta}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
