import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { SectionHeading } from "@/components/section-heading";
import { SITE } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a discovery call",
  description:
    "Pick a time that works. Fifteen-minute discovery call with Julia Blank.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  // Set NEXT_PUBLIC_CALENDLY_URL in .env.local once Julia's Calendly account is live.
  // When unset, we show a graceful "email instead" card rather than embedding a broken Calendly URL.
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <>
      <section className="container-x pt-12 md:pt-20">
        <SectionHeading
          eyebrow="Book a call"
          title="Fifteen minutes. No pressure."
          intro="Audio or video — your call. Bring your date, your story, your questions."
        />
      </section>

      <section className="container-x mt-12 md:mt-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="overflow-hidden rounded-3xl border border-hairline bg-surface">
            {url ? (
              <CalendlyEmbed url={url} />
            ) : (
              <div className="flex min-h-[480px] flex-col items-center justify-center p-12 text-center">
                <p className="text-xs uppercase tracking-[0.22em] text-stone">
                  Direct booking — opening soon
                </p>
                <h3 className="mt-6 font-display text-3xl text-bone md:text-4xl">
                  Email me to set a time.
                </h3>
                <p className="mt-4 max-w-md text-sm text-stone">
                  My calendar isn&rsquo;t public yet, but I reply to every
                  inquiry within a few hours.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${SITE.email}?subject=Discovery%20call`}
                    className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm text-ink transition hover:bg-bone/90"
                  >
                    {SITE.email}
                  </a>
                  <Link
                    href="/inquire"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm text-bone transition hover:border-bone/40"
                  >
                    Or send an inquiry
                  </Link>
                </div>
              </div>
            )}
          </div>

          <aside>
            <p className="text-xs uppercase tracking-[0.22em] text-stone">
              What to expect
            </p>
            <ul className="mt-5 space-y-4 text-sm text-bone/85">
              <li>
                <span className="font-display text-lg text-bone">
                  Fifteen minutes.
                </span>{" "}
                Audio or video — your call.
              </li>
              <li>
                <span className="font-display text-lg text-bone">
                  We talk through your project.
                </span>{" "}
                Date, venue, scope, what the film needs to do.
              </li>
              <li>
                <span className="font-display text-lg text-bone">
                  A proposal within 24 hours.
                </span>{" "}
                Scoped to your day, with real numbers.
              </li>
            </ul>
            <p className="mt-8 text-sm text-stone">
              Prefer writing? Email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-bone hover:text-bone/80"
              >
                {SITE.email}
              </a>{" "}
              or{" "}
              <Link href="/inquire" className="text-bone hover:text-bone/80">
                send a short inquiry
              </Link>
              .
            </p>
          </aside>
        </div>
      </section>
      <div className="h-24" />
    </>
  );
}
