import Link from "next/link";
import { Instagram, Music2, Facebook } from "lucide-react";
import { SITE } from "@/lib/utils";

const COL_1 = [
  { href: "/weddings", label: "Weddings" },
  { href: "/weddings/films", label: "Wedding films" },
  { href: "/weddings/pricing", label: "Wedding pricing" },
  { href: "/tampa-wedding-videographer", label: "Tampa wedding videographer" },
];

const COL_2 = [
  { href: "/brand", label: "Brand films" },
  { href: "/events", label: "Events" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

const COL_3 = [
  { href: "/inquire", label: "Inquire" },
  { href: "/book", label: "Book a call" },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-hairline bg-ink text-bone">
      <div className="mx-auto max-w-container px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-tightish md:text-3xl">
              Black Rabbit Creative
            </p>
            <p className="mt-3 max-w-sm text-stone">
              Tampa-based wedding videographer, brand-film studio, and
              event production for the people who want a film, not just
              footage.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-bone transition hover:bg-bone hover:text-ink"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={`https://www.tiktok.com/@${SITE.tiktok}`}
                aria-label="TikTok"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-bone transition hover:bg-bone hover:text-ink"
              >
                <Music2 className="h-4 w-4" />
              </a>
              <a
                href={`https://facebook.com/${SITE.facebook}`}
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-bone transition hover:bg-bone hover:text-ink"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol heading="Weddings" links={COL_1} />
          <FooterCol heading="Studio" links={COL_2} />
          <FooterCol heading="Get in touch" links={COL_3}>
            <a
              href={`mailto:${SITE.email}`}
              className="block py-1.5 text-sm text-stone hover:text-bone"
            >
              {SITE.email}
            </a>
            <p className="pt-2 text-xs text-stone">
              {SITE.city}, {SITE.region} · serving Florida and beyond
            </p>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-hairline pt-6 text-xs text-stone md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Black Rabbit Creative,
            LLC. All rights reserved.
          </p>
          <p>
            Filmed and edited by Julia Blank · Site by Black Rabbit
            Creative
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
  children,
}: {
  heading: string;
  links: { href: string; label: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-stone">
        {heading}
      </p>
      <ul className="mt-4">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="block py-1.5 text-sm text-bone/80 hover:text-bone"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
