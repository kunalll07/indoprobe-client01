import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personal investigation, corporate investigation, background verification, insurance investigation, banking & financial investigation and technical investigation services from INDOPROBE Solutions Pvt. Ltd.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Investigation Services"
        description="A comprehensive range of investigation and verification services, delivered by experienced, multidisciplinary professionals."
      />

      <section className="bg-offwhite-100 py-20">
        <Container>
          <ServicesGrid />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
