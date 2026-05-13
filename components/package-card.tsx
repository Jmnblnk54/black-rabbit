import Link from "next/link";
import { Check } from "lucide-react";
import type { Pkg } from "@/lib/packages";
import { cn } from "@/lib/utils";

export function PackageCard({
  pkg,
  ctaHref = "/inquire",
  ctaLabel = "Inquire",
}: {
  pkg: Pkg;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border p-6 md:p-8",
        pkg.featured
          ? "border-rabbit/40 bg-gradient-to-b from-rabbit/[0.08] to-transparent"
          : "border-hairline bg-surface",
      )}
    >
      {pkg.featured && (
        <p className="mb-4 inline-flex w-fit items-center rounded-full bg-rabbit/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-rabbit">
          Most booked
        </p>
      )}
      <h3 className="font-display text-2xl tracking-tightish text-bone md:text-3xl">
        {pkg.name}
      </h3>
      <p className="mt-2 text-sm text-stone">{pkg.tagline}</p>
      <p className="mt-5 font-display text-xl text-bone md:text-2xl">
        {pkg.price}
      </p>

      <ul className="mt-6 space-y-2.5 text-sm text-bone/85">
        {pkg.includes.map((line) => (
          <li key={line} className="flex gap-2.5">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-rabbit" />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-2">
        <Link
          href={ctaHref}
          className={cn(
            "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm transition-colors",
            pkg.featured
              ? "bg-bone text-ink hover:bg-bone/90"
              : "border border-bone/30 text-bone hover:bg-bone hover:text-ink",
          )}
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
