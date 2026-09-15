"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-[0.15]" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/95 to-navy-950" />

      <motion.div
        className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
        animate={prefersReducedMotion ? {} : { y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-navy-600/30 blur-3xl"
        animate={prefersReducedMotion ? {} : { y: [0, -24, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
