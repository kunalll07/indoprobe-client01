"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceCard({
  icon,
  title,
  description,
  items,
  index,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group rounded-2xl border border-navy-900/10 bg-white p-7 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-graphite-600">{description}</p>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-600 transition-colors hover:text-gold-700"
        aria-expanded={open}
      >
        Explore Service
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        />
      </button>

      <motion.ul
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="mt-4 grid grid-cols-1 gap-1.5 border-t border-navy-900/10 pt-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-graphite-600">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </div>
      </motion.ul>
    </motion.div>
  );
}
