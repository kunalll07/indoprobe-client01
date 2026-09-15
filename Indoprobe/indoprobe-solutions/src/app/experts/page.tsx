import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ExpertsRow } from "@/components/experts/ExpertsRow";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Experts",
  description:
    "Meet the multidisciplinary professionals behind INDOPROBE Solutions Pvt. Ltd. — investigators, engineers and analysts with decades of combined experience.",
};

export default function ExpertsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Truth Finders"
        title="Multidisciplinary Expertise, One Team"
        description="INDOPROBE brings together professionals from investigation, engineering, insurance and automobile analysis to approach every matter from multiple perspectives."
      />

      <section className="bg-offwhite-100 pt-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-graphite-600">
              INDOPROBE is strengthened by a network of well-qualified, trained,
              experienced and dedicated professionals from across Kerala. Our
              multidisciplinary team includes individuals with backgrounds in
              enforcement, police investigation, intelligence, engineering, law,
              insurance, banking, analysis and science — each bringing practical
              knowledge, specialised expertise and professional integrity to every
              assignment.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-offwhite-100 py-20">
        <Container>
          <ExpertsRow />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
