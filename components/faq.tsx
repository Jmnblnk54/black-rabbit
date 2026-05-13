import type { Faq } from "@/lib/faqs";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item) => (
        <details
          key={item.q}
          className="group py-5 marker:hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-1">
            <span className="font-display text-xl tracking-tightish text-bone md:text-2xl">
              {item.q}
            </span>
            <span
              aria-hidden
              className="mt-2 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hairline text-bone transition group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-prose text-base text-stone md:text-lg">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}

export function FaqJsonLd({ items }: { items: Faq[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
