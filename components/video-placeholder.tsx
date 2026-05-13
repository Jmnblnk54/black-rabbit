// TODO: swap with @mux/mux-player-react once Mux playback IDs exist

import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  className?: string;
  gradient?: "ink" | "ember" | "stone" | "bone";
  aspect?: "16/9" | "9/16" | "4/5" | "1/1";
};

const GRADIENTS: Record<NonNullable<Props["gradient"]>, string> = {
  ink: "bg-[radial-gradient(120%_120%_at_20%_10%,#2A2A2D_0%,#17171A_45%,#0E0E0F_100%)]",
  ember:
    "bg-[radial-gradient(120%_120%_at_80%_20%,#B23A2A_0%,#5B1E18_40%,#17171A_100%)]",
  stone:
    "bg-[radial-gradient(120%_120%_at_30%_30%,#6F6A62_0%,#2A2A2D_50%,#17171A_100%)]",
  bone: "bg-[radial-gradient(120%_120%_at_30%_20%,#F4F1EB_0%,#CFC9BF_55%,#6F6A62_100%)]",
};

const ASPECTS: Record<NonNullable<Props["aspect"]>, string> = {
  "16/9": "aspect-[16/9]",
  "9/16": "aspect-[9/16]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
};

export function VideoPlaceholder({
  label,
  className,
  gradient = "ink",
  aspect = "16/9",
}: Props) {
  return (
    <div
      role="img"
      aria-label={`Video placeholder — ${label}`}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-hairline",
        ASPECTS[aspect],
        GRADIENTS[gradient],
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-bone/10 backdrop-blur-sm ring-1 ring-bone/30 transition group-hover:scale-105 motion-reduce:transition-none">
          <Play className="h-6 w-6 translate-x-[1px] fill-bone text-bone" />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-bone/70">
        <span>Reel</span>
        <span className="truncate pl-3 text-right">{label}</span>
      </div>
    </div>
  );
}
