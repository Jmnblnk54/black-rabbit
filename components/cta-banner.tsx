import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner({
  heading = "Tell me about your day.",
  body = "Every project starts with a short note. Tell me the date, the place, and what you want the film to feel like — I'll write back within two business days.",
  primary = { href: "/inquire", label: "Start an inquiry" },
  secondary = { href: "/book", label: "Or book a call" },
}: {
  heading?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="mx-auto mt-24 max-w-container px-5 md:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-hairline bg-[radial-gradient(120%_120%_at_80%_0%,#B23A2A22_0%,transparent_50%),linear-gradient(180deg,#17171A_0%,#0E0E0F_100%)] p-8 md:p-16">
        <h2 className="max-w-2xl font-display text-fluid-h1 leading-[1.02] tracking-tighter2 text-bone">
          {heading}
        </h2>
        <p className="mt-5 max-w-xl text-base text-stone md:text-lg">
          {body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={primary.href}
            className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm text-ink transition hover:bg-bone/90"
          >
            {primary.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={secondary.href}
            className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-sm text-bone transition hover:bg-bone hover:text-ink"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
