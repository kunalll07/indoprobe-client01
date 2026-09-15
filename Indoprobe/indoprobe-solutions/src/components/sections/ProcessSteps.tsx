"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSteps() {
  return (
    <section className="bg-navy-950 py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A Structured, Confidential Approach"
          description="Every assignment follows a disciplined process designed to protect confidentiality while ensuring thorough, evidence-based outcomes."
          align="center"
          light
          className="mx-auto"
        />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-6 hidden h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/70 bg-navy-900 font-display text-lg text-gold-300">
                  {step.number}
                </div>
                <p className="mt-4 font-display text-base text-offwhite">{step.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-offwhite/60">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
