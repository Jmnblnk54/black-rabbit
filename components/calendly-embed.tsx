"use client";

import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

export function CalendlyEmbed({ url }: { url: string }) {
  const [mounted, setMounted] = useState(false);

  // react-calendly touches window — guard so SSR doesn't error.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="aspect-[3/4] w-full" aria-hidden>
        <div className="h-full w-full bg-ink/60" />
      </div>
    );
  }

  return (
    <InlineWidget
      url={url}
      styles={{ height: "720px", minWidth: "320px" }}
      pageSettings={{
        backgroundColor: "0E0E0F",
        primaryColor: "B23A2A",
        textColor: "F4F1EB",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
      }}
    />
  );
}
