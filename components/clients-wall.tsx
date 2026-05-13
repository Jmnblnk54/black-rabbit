import { CLIENTS } from "@/lib/utils";

export function ClientsWall() {
  return (
    <section aria-label="Selected clients" className="border-y border-hairline">
      <div className="mx-auto max-w-container px-5 py-12 md:px-8 md:py-16">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-stone">
          Selected work for
        </p>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((c) => (
            <li
              key={c}
              className="text-center font-display text-base tracking-tightish text-bone/70 transition hover:text-bone md:text-lg"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
