import type { Metadata } from "next";
import { ShieldCheck, Landmark, Home, Car } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "INDOPROBE serves insurance, banking, home finance, automobile finance, corporate and institutional clients across Kerala with tailored investigation support.",
};

const financialSectors = [
  {
    icon: ShieldCheck,
    title: "Insurance Industry",
    items: ["GIC", "LIC", "Health Insurance"],
  },
  {
    icon: Landmark,
    title: "Banking Industry",
    items: ["Government Banks", "Scheduled Banks", "Private Banks"],
  },
  {
    icon: Home,
    title: "Home Financing Industry",
    items: ["Government Sector", "Private Sector"],
  },
  {
    icon: Car,
    title: "Automobile Financing Industry",
    items: ["Government Sector", "Private Sector"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Industries We Support"
        description="From insurance and banking to corporate organisations and individuals, INDOPROBE tailors its investigative approach to each sector's requirements."
      />

      <section className="bg-offwhite-100 py-20">
        <Container>
          <IndustriesGrid />
        </Container>
      </section>

      <section className="bg-navy-950 py-20">
        <Container>
          <SectionHeading
            eyebrow="Specialised Focus"
            title="Financial Sector Investigation Expertise"
            description="INDOPROBE has specialised, longstanding experience across the financial and related sectors, tailored to the requirements of each institution."
            align="center"
            light
            className="mx-auto"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {financialSectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <Reveal key={sector.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <p className="mt-4 font-display text-lg text-offwhite">
                      {sector.title}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {sector.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-offwhite/60">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
