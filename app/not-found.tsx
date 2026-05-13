import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x pt-24 md:pt-40">
      <p className="text-xs uppercase tracking-[0.22em] text-stone">
        404
      </p>
      <h1 className="mt-4 font-display text-fluid-h1 leading-[0.98] tracking-tighter2 text-bone">
        That page doesn't exist.
      </h1>
      <p className="mt-4 max-w-prose text-stone md:text-lg">
        It happens. Head back to the home page or jump straight to the
        wedding work.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm text-ink transition hover:bg-bone/90"
        >
          Home
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/weddings"
          className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-sm text-bone transition hover:bg-bone hover:text-ink"
        >
          Weddings
        </Link>
      </div>
      <div className="h-48" />
    </section>
  );
}
