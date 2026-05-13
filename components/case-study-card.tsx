import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";
import { VideoPlaceholder } from "./video-placeholder";

const HREF: Record<CaseStudy["vertical"], string> = {
  weddings: "/weddings",
  brand: "/brand",
  events: "/events",
};

const GRADIENT: Record<CaseStudy["vertical"], "ink" | "ember" | "stone"> = {
  weddings: "ember",
  brand: "stone",
  events: "ink",
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`${HREF[study.vertical]}/${study.slug}`}
      className="group block"
    >
      <VideoPlaceholder
        label={study.title}
        gradient={GRADIENT[study.vertical]}
        aspect="16/9"
      />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-stone">
            {study.vertical} · {study.location.split(" · ")[0]}
          </p>
          <h3 className="mt-1 font-display text-xl tracking-tightish text-bone md:text-2xl">
            {study.title}
          </h3>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 translate-y-1 text-stone transition group-hover:-translate-y-0 group-hover:text-bone motion-reduce:transition-none" />
      </div>
    </Link>
  );
}
