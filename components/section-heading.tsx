import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto text-center" : "",
        "max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.22em] text-stone">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-fluid-h2 leading-[1.05] tracking-tighter2 text-bone",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-4 max-w-prose text-base text-stone md:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}
