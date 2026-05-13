import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Tampa wedding videographer, brand-film studio, and event coverage by Julia Blank. Cinematic films across Florida and beyond.",
  applicationName: SITE.name,
  authors: [{ name: SITE.owner }],
  keywords: [
    "Tampa wedding videographer",
    "Florida wedding videographer",
    "brand film studio",
    "Tampa videographer",
    "wedding film",
    "Black Rabbit Creative",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Tampa wedding videographer, brand-film studio, and event coverage by Julia Blank.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Tampa wedding videographer, brand-film studio, and event coverage by Julia Blank.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0E0E0F",
  width: "device-width",
  initialScale: 1,
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  legalName: "Black Rabbit Creative, LLC",
  image: `${SITE.url}/og.jpg`,
  url: SITE.url,
  email: SITE.email,
  description:
    "Tampa wedding videographer, brand-film studio, and event coverage led by Julia Blank.",
  founder: { "@type": "Person", name: SITE.owner },
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: "US",
  },
  areaServed: ["Tampa", "St. Petersburg", "Clearwater", "Florida"],
  sameAs: [
    `https://instagram.com/${SITE.instagram}`,
    `https://www.tiktok.com/@${SITE.tiktok}`,
    `https://facebook.com/${SITE.facebook}`,
  ],
  priceRange: "$$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-ink font-sans text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusiness),
          }}
        />
        <Header />
        <main id="content" className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
