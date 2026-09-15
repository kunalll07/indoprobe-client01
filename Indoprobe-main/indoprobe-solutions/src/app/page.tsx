import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { TruthFinders } from "@/components/sections/TruthFinders";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { WhyIndoprobe } from "@/components/sections/WhyIndoprobe";
import { CTASection } from "@/components/sections/CTASection";
import { ExpertsRow } from "@/components/experts/ExpertsRow";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Investigation Agency Kerala",
  description:
    "INDOPROBE SOLUTIONS PVT. LTD. — an intelligent and dedicated investigation agency from Kerala, offering personal, corporate, insurance and background investigation services.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TruthFinders />

      <section id="expert-panel" className="bg-offwhite-100 py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Experts"
            title="The People Behind the Truth Finders"
            description="Experienced professionals from investigation, engineering, insurance and automobile intelligence, working together across every assignment."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14">
            <ExpertsRow />
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/experts" variant="ghost">
              Meet the Full Team
            </Button>
          </div>
        </Container>
      </section>

      <ExperienceTimeline />
      <ProcessSteps />
      <WhyIndoprobe />
      <CTASection />
    </>
  );
}
