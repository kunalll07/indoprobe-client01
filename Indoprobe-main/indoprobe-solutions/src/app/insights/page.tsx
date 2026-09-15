import type { Metadata } from "next";
import { FileSearch, TrendingUp, Building2, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives from INDOPROBE on investigation, verification, insurance claims and corporate intelligence practice in Kerala.",
};

const insights = [
  {
    icon: FileSearch,
    title: "Why Background Verification Matters Before Hiring",
    summary:
      "A structured verification process helps organisations make informed decisions and reduces exposure to avoidable risk during recruitment.",
  },
  {
    icon: TrendingUp,
    title: "The Role of Market Intelligence in Automobile Claims",
    summary:
      "Understanding market value and vehicle history is central to assessing motor insurance claims accurately and fairly.",
  },
  {
    icon: Building2,
    title: "Protecting Business Information in a Connected World",
    summary:
      "Corporate organisations face growing exposure to information leakage — a disciplined, investigative approach helps identify and address vulnerabilities.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentiality as a Professional Discipline",
    summary:
      "Confidentiality in investigation work is not a single safeguard but a set of disciplined practices applied consistently across every assignment.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives on Investigation & Intelligence"
        description="Reflections from INDOPROBE's multidisciplinary practice — on investigation, verification and confidential intelligence work across Kerala."
      />

      <section className="bg-offwhite-100 py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {insights.map((insight, i) => {
              const Icon = insight.icon;
              return (
                <Reveal key={insight.title} delay={i * 0.08}>
                  <article className="h-full rounded-2xl border border-navy-900/10 bg-white p-7 shadow-premium">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h2 className="mt-5 font-display text-lg text-navy-900">
                      {insight.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-graphite-600">
                      {insight.summary}
                    </p>
                  </article>
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
