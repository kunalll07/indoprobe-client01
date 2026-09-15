import type { Metadata } from "next";
import { MessageSquareLock, EyeOff, KeyRound, FileCheck, ShieldAlert, Fingerprint } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Confidentiality",
  description:
    "INDOPROBE assures 100% privacy and confidentiality of client information — every assignment is handled with discretion, controlled information access and professional reporting.",
};

const pillars = [
  {
    icon: MessageSquareLock,
    title: "Confidential Communication",
    text: "All client discussions are treated as private, using discreet channels appropriate to the sensitivity of the matter.",
  },
  {
    icon: EyeOff,
    title: "Discreet Case Handling",
    text: "Investigations are conducted without drawing unnecessary attention, protecting the interests of everyone involved.",
  },
  {
    icon: KeyRound,
    title: "Controlled Information Access",
    text: "Case information is shared only with those directly involved in the assignment, on a need-to-know basis.",
  },
  {
    icon: FileCheck,
    title: "Professional Reporting",
    text: "Findings are documented factually and delivered through controlled, professional channels.",
  },
  {
    icon: ShieldAlert,
    title: "Strategic Information Protection",
    text: "For corporate clients, we take particular care to prevent leakage or misuse of sensitive business information.",
  },
  {
    icon: Fingerprint,
    title: "Deceptive Practice Identification",
    text: "Our investigators are experienced in identifying issues such as duplicity, piracy, similar packaging and misrepresentation — helping clients recognise and respond to deceptive business practices.",
  },
];

export default function ConfidentialityPage() {
  return (
    <>
      <PageHero
        eyebrow="Confidentiality"
        title="Your Information. Your Trust. Our Confidentiality."
        description="Confidentiality is central to the way we approach every assignment."
      />

      <section className="bg-offwhite-100 py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-graphite-600">
              We assure 100% privacy and confidentiality of every client&rsquo;s
              information and credentials. Our work is built on the strength of
              client trust, and every investigation — personal or corporate — is
              handled with discretion and sensitivity from first enquiry to final
              report.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-graphite-600">
              A strong base of loyal, satisfied clients reflects our ongoing
              commitment to professional service and confidentiality. Information is
              accessed, analysed and reported only through controlled, professional
              channels, on a strict need-to-know basis.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center gap-5 rounded-2xl border border-gold-500/30 bg-navy-950 p-8">
              <span className="font-display text-4xl text-gold-300 sm:text-5xl">
                100%
              </span>
              <span className="text-sm leading-relaxed text-offwhite/70">
                Privacy and confidentiality assured for every client, on every
                assignment.
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-950 py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
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

      <CTASection
        title="Discuss Your Requirement Confidentially"
        description="Speak with INDOPROBE about how confidentiality is maintained throughout your specific matter."
      />
    </>
  );
}
