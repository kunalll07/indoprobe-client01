import type { Metadata } from "next";
import { ShieldCheck, Eye, ScanSearch, LockKeyhole, Target, Compass, Flag } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "INDOPROBE SOLUTIONS PVT. LTD. is an investigation and intelligence organisation based in Kerala, bringing together experienced professionals across specialist fields.",
};

const pillars = [
  { icon: Eye, title: "Discretion", text: "Every assignment is handled with care for the sensitivities involved." },
  { icon: ScanSearch, title: "Experience", text: "Decades of combined professional experience across specialist fields." },
  { icon: ShieldCheck, title: "Analysis", text: "Findings are examined carefully before conclusions are drawn." },
  { icon: LockKeyhole, title: "Confidentiality", text: "Information is handled through controlled, professional channels." },
];

const direction = [
  {
    icon: Target,
    title: "Objective",
    lead: "Sincere, professional support in discovering genuine facts.",
    text: "We approach every matter — personal or corporate — through careful analysis, assessment, enquiry and investigation, supporting clients both in the field and through the appropriate forums to establish and substantiate the facts.",
  },
  {
    icon: Compass,
    title: "Vision",
    lead: "An answer to every uncertainty.",
    text: "Our investigators across Kerala work with dedication until every client requirement is satisfactorily addressed, building a professional experience grounded in trust, clarity, discretion and dependable results.",
  },
  {
    icon: Flag,
    title: "Mission",
    lead: "Helping clients uncover the truth when they have been deceived, misled or placed at risk.",
    text: "A specialised team supports both personal and corporate investigations — spanning business intelligence, market research and information analysis — drawing on our network and experience to surface facts that would otherwise remain unseen.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About INDOPROBE"
        title="Intelligence Built on Experience"
        description="An investigation and intelligence organisation based in Kerala, formed around experience, discretion and multidisciplinary expertise."
      />

      <section className="bg-offwhite-100 py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-graphite-600">
              INDOPROBE SOLUTIONS PVT. LTD. is a detective and investigation agency
              based in Kerala, built on 41 years of professional experience and a
              consistent record of client satisfaction. We bring together experienced
              professionals from different fields — including enforcement,
              engineering, law, analytics, science and academia — to approach every
              matter with the rigour it deserves.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-graphite-600">
              Our team includes investigators and professionals with backgrounds
              across Kerala Police, the Intelligence Bureau, CBI, and the insurance
              and banking sectors. This multidisciplinary experience allows us to
              examine complex matters from multiple perspectives and arrive at
              practical, evidence-based conclusions — whether the matter is personal
              or corporate in nature.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 text-base leading-relaxed text-graphite-600">
              Supported by a wide, well-established information network across
              Kerala, INDOPROBE also develops systems and procedures to protect
              strategic business information — manual or computerised — from
              leakage, misuse or unauthorised access.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-10 rounded-2xl border border-gold-500/30 bg-navy-950 p-8">
              <p className="font-display text-xl text-gold-300">
                Investigation is a sensitive process.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-offwhite/70">
                INDOPROBE&rsquo;s approach is built around discretion, experience,
                analysis and confidentiality — ensuring every matter is handled with
                the seriousness it deserves.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-950 py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={i * 0.08}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <p className="mt-4 font-display text-lg text-offwhite">
                      {pillar.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-offwhite/60">
                      {pillar.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-offwhite-100 py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Direction"
            title="Objective, Vision & Mission"
            description="What drives INDOPROBE's approach to every investigation, from first enquiry to final report."
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {direction.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-navy-900/10 bg-white p-7 shadow-premium">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h2 className="mt-5 font-display text-lg text-navy-900">
                      {card.title}
                    </h2>
                    <p className="mt-3 font-display text-base text-gold-600">
                      {card.lead}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-graphite-600">
                      {card.text}
                    </p>
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
