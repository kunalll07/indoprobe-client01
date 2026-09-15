"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const milestones = [
  { label: "Engineering & Valuation", detail: "Technical inspection, valuation and loss assessment" },
  { label: "Insurance Investigation", detail: "Motor, fire, engineering and marine claim investigation" },
  { label: "Automobile Intelligence", detail: "Market analysis and specialist motor investigation" },
  { label: "Corporate & Background", detail: "Verification, due-diligence and business intelligence" },
];

export function ExperienceTimeline() {
  return (
    <section className="bg-offwhite-100 py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Experience"
              title="41+ Years of Experience"
              description="41+ years of professional experience represented across the organisation's specialist expertise — spanning engineering, valuation, insurance investigation and automobile intelligence."
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 flex items-baseline gap-3"
            >
              <span className="font-display text-6xl text-navy-900 sm:text-7xl">
                <AnimatedCounter value={41} suffix="+" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-gold-600">
                Years of Combined
                <br />
                Professional Experience
              </span>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-gold-500/60 via-gold-500/30 to-transparent" />
            <ul className="space-y-8">
              {milestones.map((milestone, i) => (
                <motion.li
                  key={milestone.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative pl-8"
                >
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold-500 bg-offwhite-100" />
                  <p className="font-display text-lg text-navy-900">{milestone.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-graphite-600">
                    {milestone.detail}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
