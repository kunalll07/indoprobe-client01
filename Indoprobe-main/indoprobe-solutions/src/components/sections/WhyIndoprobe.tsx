"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Lock,
  Network,
  BookOpen,
  Microscope,
} from "lucide-react";
import { whyIndoprobe } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [ShieldCheck, Users, Lock, Network, BookOpen, Microscope];

export function WhyIndoprobe() {
  return (
    <section className="bg-offwhite-100 py-24">
      <Container>
        <SectionHeading
          eyebrow="Why INDOPROBE"
          title="A Trusted Partner in Investigation"
          description="Six reasons clients, institutions and agencies rely on INDOPROBE for sensitive investigative work."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyIndoprobe.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-navy-900/10 bg-white p-7 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg text-navy-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-600">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
