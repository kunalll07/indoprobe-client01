"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function getInitials(name: string): string {
  return name
    .replace(/^Sri\.\s*/i, "")
    .split(" ")
    .filter((part) => part.length > 0 && /[A-Za-z]/.test(part[0]))
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

/**
 * Expert photo, backed by a premium placeholder: abstract silhouette bust on
 * a navy/graphite gradient, used until real photography is supplied.
 * Deliberately avoids looking like a missing/broken image.
 *
 * Pass `image` (e.g. "/images/experts/expert-01.jpg") once a real
 * photograph is available — it replaces the placeholder automatically,
 * cropped consistently via object-cover. If the file is missing or fails to
 * load, this silently falls back to the placeholder rather than showing a
 * broken-image icon.
 */
export function ExpertPortrait({
  name,
  image,
  className,
  aspect = "aspect-[4/5]",
}: {
  name: string;
  image?: string;
  className?: string;
  aspect?: string;
}) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const initials = getInitials(name);

  // Probe the image client-side before ever rendering an <img> tag. A
  // server-rendered <img> that 404s locally can fire its error event before
  // React finishes hydrating and attaches the handler to that node, so the
  // failure gets silently missed — probing with a detached Image() sidesteps
  // that race entirely and guarantees we never flash a broken-image icon.
  useEffect(() => {
    if (!image) {
      setLoadedSrc(null);
      return;
    }
    let cancelled = false;
    const probe = new window.Image();
    probe.onload = () => {
      if (!cancelled) setLoadedSrc(image);
    };
    probe.onerror = () => {
      if (!cancelled) setLoadedSrc(null);
    };
    probe.src = image;
    return () => {
      cancelled = true;
    };
  }, [image]);

  const showPhoto = loadedSrc === image && Boolean(image);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-b border-gold-500/40 bg-gradient-to-b from-navy-700 via-navy-800 to-navy-950",
        aspect,
        className
      )}
    >
      {showPhoto ? (
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.08]"
            viewBox="0 0 100 125"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <pattern id={`grid-${initials}`} width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M0 0H8V8" fill="none" stroke="#F7F5F0" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="125" fill={`url(#grid-${initials})`} />
          </svg>

          <svg
            viewBox="0 0 100 125"
            className="absolute inset-0 h-full w-full text-navy-500/40"
            preserveAspectRatio="xMidYMax slice"
            aria-hidden="true"
          >
            <circle cx="50" cy="52" r="19" fill="currentColor" />
            <path
              d="M8 132C8 100 25 82 50 82C75 82 92 100 92 132Z"
              fill="currentColor"
            />
          </svg>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-navy-950/40 to-transparent" />

      {!showPhoto && (
        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/40 bg-navy-950/60 font-display text-xs tracking-wide text-gold-300 backdrop-blur-sm">
          {initials}
        </span>
      )}
    </div>
  );
}
