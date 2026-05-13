import { cn } from "@/lib/utils";

export function TestimonialCard({
  quote,
  attribution,
  className,
}: {
  quote: string;
  attribution: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "rounded-2xl border border-hairline bg-surface p-8 md:p-12",
        className,
      )}
    >
      <blockquote className="font-display text-2xl leading-snug tracking-tightish text-bone md:text-3xl">
        <span aria-hidden className="mr-2 text-rabbit">
          &ldquo;
        </span>
        {quote}
        <span aria-hidden className="ml-1 text-rabbit">
          &rdquo;
        </span>
      </blockquote>
      <figcaption className="mt-6 text-sm uppercase tracking-[0.2em] text-stone">
        — {attribution}
      </figcaption>
    </figure>
  );
}
