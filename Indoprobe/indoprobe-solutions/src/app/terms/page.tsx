import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the INDOPROBE Solutions Pvt. Ltd. website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="bg-offwhite-100 py-16">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-graphite-600">
          <p>
            This website is operated by INDOPROBE SOLUTIONS PVT. LTD. By accessing
            or using this website, you agree to the following terms.
          </p>
          <div>
            <h2 className="mb-2 font-display text-lg text-navy-900">
              Use of This Website
            </h2>
            <p>
              This website is provided for general informational purposes about
              INDOPROBE&rsquo;s services. Content on this website should not be
              treated as a substitute for a direct, confidential consultation
              regarding your specific requirement.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg text-navy-900">
              Engagement of Services
            </h2>
            <p>
              Any engagement of INDOPROBE&rsquo;s investigation or advisory services
              is subject to a separate discussion and agreement between INDOPROBE
              and the client, following an initial confidential consultation.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg text-navy-900">
              Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics and design, is
              the property of INDOPROBE SOLUTIONS PVT. LTD. and may not be
              reproduced without permission.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
