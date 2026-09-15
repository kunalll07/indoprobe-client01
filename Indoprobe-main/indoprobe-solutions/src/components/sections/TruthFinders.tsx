"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const outerNodes = [
  { label: "Investigation", angle: -90 },
  { label: "Technical Expertise", angle: 0 },
  { label: "Insurance Intelligence", angle: 90 },
  { label: "Market & Business Intelligence", angle: 180 },
];

const RADIUS = 36;

function positionFor(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(rad),
    y: 50 + radius * Math.sin(rad),
  };
}

/**
 * The four outer nodes and the orbit ring are positioned in the same
 * percentage-of-container coordinate space, so the radial geometry stays
 * mathematically centered and symmetrical regardless of container size.
 */
export function TruthFinders() {
  return (
    <section id="truth-finders" className="relative overflow-hidden bg-navy-950 py-24">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-10" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="THE TRUTH FINDERS"
          title="Different Expertise. One Pursuit — The Truth."
          description="INDOPROBE brings together experienced professionals from investigation, engineering, insurance, automobile, analysis and other specialist fields to approach complex matters from multiple perspectives."
          align="center"
          light
          className="mx-auto"
        />

        {/* Radial diagram: TRUTH at the center, four capabilities equally
            spaced around it on a shared gold orbit. All positions are
            percentage-of-container, so the whole geometry scales together
            at every breakpoint — no separate mobile layout needed.

            Each node is a plain, non-animated positioning wrapper
            (absolute + left/top % + -translate-1/2, sized to shrink-wrap
            its child) with the motion.div nested inside it purely for the
            opacity/scale entrance animation. Framer Motion writes its own
            inline `transform` for animated `scale`, which would silently
            override a Tailwind translate class on the same element — so
            positioning and animation must live on separate elements. */}
        <div className="relative mx-auto mt-16 aspect-square w-full max-w-[300px] sm:max-w-[440px] md:max-w-[560px]">
          {/* Orbit ring connecting the four outer nodes */}
          <div className="absolute left-1/2 top-1/2 z-0 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full rounded-full border border-dashed border-gold-500/25"
            />
          </div>

          {/* Central TRUTH node */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex h-20 w-20 items-center justify-center rounded-full border border-gold-400/70 bg-navy-900 text-center shadow-[0_0_44px_rgba(184,150,90,0.32)] sm:h-28 sm:w-28 md:h-32 md:w-32"
            >
              <span className="font-display text-base tracking-[0.15em] text-gold-300 sm:text-lg md:text-xl">
                TRUTH
              </span>
            </motion.div>
          </div>

          {/* Outer capability nodes */}
          {outerNodes.map((node, i) => {
            const pos = positionFor(node.angle, RADIUS);
            return (
              <div
                key={node.label}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full border border-gold-500/40 bg-navy-950 p-2 text-center shadow-[0_0_22px_rgba(184,150,90,0.22)] sm:h-24 sm:w-24 md:h-28 md:w-28"
                >
                  <p className="text-[0.65rem] font-semibold leading-tight text-offwhite/85 sm:text-xs md:text-sm">
                    {node.label}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
