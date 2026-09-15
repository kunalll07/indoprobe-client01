"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Expert } from "@/data/experts";
import { ExpertPortrait } from "./ExpertPortrait";

export function ExpertProfileModal({
  expert,
  index,
  open,
  onClose,
}: {
  expert: Expert;
  index: number;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/75 backdrop-blur-sm sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`expert-modal-title-${expert.slug}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-full w-full flex-col overflow-y-auto bg-white sm:h-auto sm:max-h-[88vh] sm:w-full sm:max-w-lg sm:rounded-2xl sm:shadow-premium"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/50 text-offwhite backdrop-blur-sm transition-colors hover:bg-navy-950/70"
              aria-label="Close profile"
            >
              <X className="h-5 w-5" />
            </button>

            <ExpertPortrait
              name={expert.name}
              image={expert.image}
              aspect="aspect-[16/9] sm:aspect-[16/8]"
            />

            <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
              <div>

                <h3
                  id={`expert-modal-title-${expert.slug}`}
                  className="mt-1 font-display text-2xl text-navy-900"
                >
                  {expert.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-graphite-500">
                  {expert.qualifications} · {expert.identity}
                </p>
                <div className="mt-2 space-y-0.5">
                  {expert.position.map((line) => (
                    <p
                      key={line}
                      className="text-xs font-semibold uppercase tracking-wide text-navy-700"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {expert.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {expert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-navy-900/10 bg-navy-900/[0.03] px-2.5 py-1 text-[11px] font-medium text-navy-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="rounded-xl border border-gold-500/25 bg-gold-500/5 px-4 py-3">
                <p className="font-display text-xl leading-tight text-navy-900">
                  {expert.experienceHighlight.metric}
                </p>
                <p className="mt-0.5 text-xs uppercase tracking-wide text-graphite-500">
                  {expert.experienceHighlight.label}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-graphite-600">{expert.summary}</p>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy-800">
                  Areas of Expertise
                </p>
                <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {expert.expertise.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-graphite-600"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {expert.career && expert.career.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy-800">
                    Career History
                  </p>
                  <ul className="space-y-3 border-l border-navy-900/10 pl-4">
                    {expert.career.map((entry) => (
                      <li key={entry.role} className="relative">
                        <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-gold-500" />
                        <p className="text-sm font-semibold text-navy-900">{entry.role}</p>
                        <p className="text-sm text-graphite-600">{entry.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
