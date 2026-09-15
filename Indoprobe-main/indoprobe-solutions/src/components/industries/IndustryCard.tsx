"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function IndustryCard({
  icon,
  title,
  description,
  index,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-7 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-500/5 transition-transform duration-500 group-hover:scale-125" />
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
        {icon}
      </div>
      <h3 className="relative z-10 mt-5 font-display text-lg text-navy-900">{title}</h3>
      <p className="relative z-10 mt-2 text-sm leading-relaxed text-graphite-600">
        {description}
      </p>
    </motion.div>
  );
}
