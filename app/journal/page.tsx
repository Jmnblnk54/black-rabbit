import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { posts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal — wedding planning, craft, venues",
  description:
    "Articles on wedding planning, the craft of cinematography, and the venues we keep filming at across Tampa Bay.",
  alternates: { canonical: "/journal" },
};

function fmtDate(d: string) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function JournalPage() {
  return (
    <>
      <section className="container-x pt-12 md:pt-20">
        <SectionHeading
          eyebrow="Journal"
          title="Notes from the studio."
          intro="Short, useful writing about wedding planning, the craft of cinematography, and the venues I keep filming at across Tampa Bay."
        />
      </section>

      <section className="container-x mt-12 md:mt-16">
        <ul className="divide-y divide-hairline border-y border-hairline">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/journal/${p.slug}`}
                className="group block py-8 md:py-10"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-12">
                  <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone">
                      {p.tag} · {p.readMinutes} min read · {fmtDate(p.date)}
                    </p>
                    <h3 className="mt-3 font-display text-2xl tracking-tightish text-bone transition group-hover:text-bone md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-stone md:text-base">
                      {p.excerpt}
                    </p>
                  </div>
                  <ArrowUpRight className="hidden h-6 w-6 shrink-0 text-stone transition group-hover:text-bone md:block" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner />
      <div className="h-24" />
    </>
  );
}
