import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3.5", className)}>
      <span className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-gold-400/50 bg-offwhite-100">
        <Image
          src="/logo-mark.png"
          alt="INDOPROBE Solutions Pvt. Ltd. emblem"
          fill
          sizes="80px"
          className="object-contain p-2.5"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl tracking-wide text-offwhite">
          INDOPROBE
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-gold-400/80">
          Solutions Pvt. Ltd.
        </span>
      </span>
    </span>
  );
}
