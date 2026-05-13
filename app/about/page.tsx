import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About Julia Blank — Black Rabbit Creative",
  description:
    "Tampa-based videographer with over a decade in commercial film and television. Wedding films, brand stories, and event coverage.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "The story comes first.",
    body: "Gear is a tool. The shot list is a tool. The story is the thing we're actually making — everything else serves it.",
  },
  {
    title: "Make every frame count.",
    body: "I'd rather deliver 90 seconds of film you'll watch six times than 6 minutes you'll never finish.",
  },
  {
    title: "Show up, then disappear.",
    body: "On the day, my job is to be present and prepared, then to fade into the room enough that the film feels found.",
  },
  {
    title: "Communicate honestly.",
    body: "Real timelines, real scope, real numbers. No surprise upcharges and no missed delivery dates.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-x pt-12 md:pt-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone">
              About · Julia Blank
            </p>
            <h1 className="mt-4 font-display text-fluid-hero font-light leading-[0.96] tracking-tighter2 text-bone">
              Hi, I'm Julia.
            </h1>
            <div className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-bone/85 md:text-lg">
              <p>
                I'm the owner and founder of Black Rabbit Creative. I
                specialize in creative direction and crafting short,
                cinematic visuals that authentically tell your story.
              </p>
              <p>
                With over a decade of experience in commercial film and
                television, I've developed a keen eye for detail and a
                deep understanding of visual storytelling — what to
                cover, what to leave alone, and when to let a moment
                breathe.
              </p>
              <p>
                Whether you're celebrating your love story, elevating
                your brand, or capturing the moments that matter most,
                I work collaboratively to bring your vision to life in
                a way that feels real, intentional, and unmistakably
                you.
              </p>
              <p className="font-display text-xl text-bone md:text-2xl">
                Because your story isn't one-size-fits-all — and your
                films shouldn't be either.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/inquire"
                className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm text-ink transition hover:bg-bone/90"
              >
                Start an inquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-sm text-bone transition hover:bg-bone hover:text-ink"
              >
                Book a call
              </Link>
            </div>
          </div>
          <ImagePlaceholder
            label="Julia Blank · portrait"
            tone="ember"
            aspect="4/5"
            seed={9}
          />
        </div>
      </section>

      <section className="container-x mt-24 md:mt-32">
        <SectionHeading
          eyebrow="How I work"
          title="Four principles, kept short on purpose."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-hairline bg-surface p-7 md:p-9"
            >
              <p className="font-display text-2xl tracking-tightish text-bone md:text-3xl">
                {p.title}
              </p>
              <p className="mt-3 text-stone md:text-base">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-24 md:mt-32">
        <div className="grid gap-6 rounded-3xl border border-hairline bg-gradient-to-b from-surface to-ink p-8 md:grid-cols-3 md:p-12">
          <Stat n="10+" label="Years in commercial film & TV" />
          <Stat n="Tampa, FL" label="Home base, traveling welcome" />
          <Stat n="Solo studio" label="Every film made by Julia" />
        </div>
      </section>

      <CtaBanner />
      <div className="h-24" />
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-fluid-h2 tracking-tighter2 text-bone">
        {n}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone">
        {label}
      </p>
    </div>
  );
}
