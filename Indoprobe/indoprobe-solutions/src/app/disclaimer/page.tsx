import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for the INDOPROBE Solutions Pvt. Ltd. website.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Disclaimer" />
      <section className="bg-offwhite-100 py-16">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-graphite-600">
          <p>
            The information provided on this website is for general informational
            purposes only. While INDOPROBE SOLUTIONS PVT. LTD. strives to keep the
            information accurate and up to date, no representation or warranty is
            made regarding its completeness or suitability for any particular
            purpose.
          </p>
          <p>
            Descriptions of services, expertise and experience on this website are
            based on information available to INDOPROBE and are provided in good
            faith. They do not constitute a guarantee of outcome for any specific
            investigation or assignment, as each matter depends on its own facts
            and circumstances.
          </p>
          <p>
            Nothing on this website constitutes legal advice. Where legal
            implications arise from an investigation, clients are encouraged to seek
            independent legal counsel.
          </p>
        </Container>
      </section>
    </>
  );
}
