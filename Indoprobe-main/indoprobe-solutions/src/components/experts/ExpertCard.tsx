"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Expert } from "@/data/experts";
import { ExpertPortrait } from "./ExpertPortrait";
import { ExpertProfileModal } from "./ExpertProfileModal";

export function ExpertCard({ expert, index }: { expert: Expert; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-premium transition-transform duration-300 hover:-translate-y-1"
      >
        <div className="relative">
          <ExpertPortrait name={expert.name} image={expert.image} />

        </div>

        <div className="flex flex-1 flex-col items-center gap-4 p-6 text-center">
          <div>
            <h3 className="font-display text-lg leading-snug text-navy-900">
              {expert.name}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
              {expert.position[0]}
            </p>
          </div>

          <div className="rounded-lg border border-gold-500/20 bg-gold-500/5 px-4 py-2">
            <p className="font-display text-base leading-tight text-navy-900">
              {expert.experienceHighlight.metric}
            </p>
            <p className="text-[11px] uppercase tracking-wide text-graphite-500">
              Experience
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-auto inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-navy-800/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy-800 transition-colors hover:border-gold-500 hover:text-gold-600"
            aria-haspopup="dialog"
          >
            View Profile
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>

      <ExpertProfileModal
        expert={expert}
        index={index}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
