import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy of INDOPROBE Solutions Pvt. Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="bg-offwhite-100 py-16">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-graphite-600">
          <p>
            INDOPROBE SOLUTIONS PVT. LTD. (&ldquo;INDOPROBE&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;) respects the privacy of visitors to this website and
            individuals who contact us regarding our services.
          </p>
          <div>
            <h2 className="mb-2 font-display text-lg text-navy-900">
              Information We Collect
            </h2>
            <p>
              When you use our contact form, WhatsApp or email to reach us, we may
              receive information you choose to provide, such as your name, phone
              number, email address, organisation and the nature of your enquiry.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg text-navy-900">
              How We Use Information
            </h2>
            <p>
              Information submitted through this website is used solely to respond
              to your enquiry and to assess whether INDOPROBE can assist with your
              requirement. We do not sell or share your information with unrelated
              third parties.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg text-navy-900">
              Sensitive Information
            </h2>
            <p>
              We advise against submitting highly sensitive case details through the
              public contact form. For sensitive matters, please contact us directly
              via WhatsApp or email so the conversation can be handled through a more
              controlled, confidential channel.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg text-navy-900">Contact</h2>
            <p>
              If you have questions about this privacy policy, please contact us
              through the details provided on our Contact page.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
