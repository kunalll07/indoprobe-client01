"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { ConsultationButton } from "@/components/contact/ConsultationButton";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const trustPoints = [
  { value: 41, suffix: "+ Years", label: "Professional Experience" },
  { value: null, display: "Multidisciplinary", label: "Expert Network" },
  { value: null, display: "Kerala-Wide", label: "Investigation Reach" },
  { value: null, display: "Confidential", label: "Client-Centric Approach" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden bg-navy-950 pt-32 pb-16">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400"
        >
          Investigation &amp; Intelligence · Kerala
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-4xl font-display text-4xl leading-[1.1] text-offwhite sm:text-5xl lg:text-6xl"
        >
          Uncovering Facts. <span className="text-gold-400">Protecting Trust.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-offwhite/70 sm:text-lg"
        >
          Professional investigation and intelligence services across Kerala,
          combining experienced investigators and multidisciplinary expertise to
          uncover facts, assess situations and provide discreet investigative support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <ConsultationButton variant="accent" icon={<ArrowRight className="h-4 w-4" />}>
            Request Confidential Consultation
          </ConsultationButton>
          <Button href="/services" variant="secondary" icon={<Compass className="h-4 w-4" />}>
            Explore Our Expertise
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-7 sm:grid-cols-4"
        >
          {trustPoints.map((point) => (
            <div key={point.label}>
              <p className="font-display text-2xl text-gold-300 sm:text-3xl">
                {point.value !== null ? (
                  <AnimatedCounter value={point.value} suffix={point.suffix} />
                ) : (
                  point.display
                )}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-offwhite/50 sm:text-sm">
                {point.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
