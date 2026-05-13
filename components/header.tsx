"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn, SITE } from "@/lib/utils";

const NAV = [
  { href: "/weddings", label: "Weddings" },
  { href: "/brand", label: "Brand" },
  { href: "/events", label: "Events" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-hairline bg-ink/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tightish text-bone md:text-xl"
          aria-label={`${SITE.name} — home`}
        >
          <span className="font-medium">Black Rabbit</span>
          <span className="ml-1 text-stone">Creative</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-tightish transition-colors",
                  active
                    ? "text-bone"
                    : "text-stone hover:text-bone",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/inquire"
            className="rounded-full border border-bone/30 bg-bone/5 px-4 py-2 text-sm text-bone transition-colors hover:bg-bone hover:text-ink"
          >
            Inquire
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-bone md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-hairline bg-ink/95 md:hidden"
        >
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-container flex-col px-5 py-4"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 font-display text-2xl text-bone"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/inquire"
              className="mt-3 inline-flex w-fit rounded-full border border-bone bg-bone px-5 py-2.5 text-sm text-ink"
            >
              Inquire
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
