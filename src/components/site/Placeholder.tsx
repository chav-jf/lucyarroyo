import { ImageIcon } from "lucide-react";

/**
 * Elegant image placeholder. Replace with real photography by swapping
 * the containing <Placeholder /> for an <img /> using the same size.
 */
export function Placeholder({
  label,
  index,
  className = "",
}: {
  label: string;
  index?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black ${className}`}
      aria-label={`Marcador de imagen: ${label}`}
    >
      {/* diagonal stripes */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0 1px, transparent 1px 14px)",
        }}
      />
      {/* red accent corner */}
      <div className="absolute -left-8 -top-8 h-24 w-24 rotate-45 bg-primary/20" />
      <div className="absolute bottom-4 right-4 h-10 w-10 border border-white/15" />

      <div className="relative flex flex-col items-center gap-3 text-center px-6">
        <div className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white/60">
          <ImageIcon className="h-5 w-5" />
        </div>
        <div className="text-display text-lg font-semibold text-white/85">{label}</div>
        {index && (
          <div className="text-[10px] uppercase tracking-[0.4em] text-white/40">
            Placeholder · {index}
          </div>
        )}
      </div>
    </div>
  );
}
