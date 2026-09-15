import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ConsultationButton } from "@/components/contact/ConsultationButton";

export function CTASection({
  title = "Have a Sensitive Matter?",
  description = "Speak with INDOPROBE confidentially about your requirements.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-graphite-900 py-20">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-10" />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <h2 className="font-display text-3xl text-offwhite sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-offwhite/70">
          {description}
        </p>
        <div className="mt-8">
          <ConsultationButton icon={<ArrowRight className="h-4 w-4" />}>
            Request Confidential Consultation
          </ConsultationButton>
        </div>
      </Container>
    </section>
  );
}
