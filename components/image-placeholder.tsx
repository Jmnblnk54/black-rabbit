// TODO: swap with next/cloudinary <CldImage>

import { cn } from "@/lib/utils";

type Props = {
  label: string;
  className?: string;
  tone?: "ink" | "ember" | "stone" | "bone";
  aspect?: "16/9" | "4/5" | "1/1" | "3/4" | "9/16";
  seed?: number;
};

const TONES: Record<NonNullable<Props["tone"]>, string[]> = {
  ink: ["#0E0E0F", "#17171A", "#2A2A2D"],
  ember: ["#1A0D0B", "#5B1E18", "#B23A2A"],
  stone: ["#17171A", "#2A2A2D", "#6F6A62"],
  bone: ["#A89F90", "#CFC9BF", "#F4F1EB"],
};

const ASPECTS: Record<NonNullable<Props["aspect"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "9/16": "aspect-[9/16]",
};

// Deterministic, no network — composes a simple gradient + a soft shape.
export function ImagePlaceholder({
  label,
  className,
  tone = "ink",
  aspect = "4/5",
  seed = 1,
}: Props) {
  const [c1, c2, c3] = TONES[tone];
  const a = (seed * 37) % 100;
  const b = (seed * 53) % 100;

  return (
    <figure
      role="img"
      aria-label={`Image placeholder — ${label}`}
      className={cn(
        "relative overflow-hidden rounded-lg border border-hairline",
        ASPECTS[aspect],
        className,
      )}
      style={{
        backgroundImage: `radial-gradient(80% 80% at ${a}% ${b}%, ${c3} 0%, ${c2} 45%, ${c1} 100%)`,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(40% 50% at ${(a + 30) % 100}% ${(b + 40) % 100}%, ${c3} 0%, transparent 60%)`,
        }}
      />
      <div className="pointer-events-none absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-bone/60">
        {label}
      </div>
    </figure>
  );
}
