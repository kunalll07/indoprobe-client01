import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { contactConfig } from "@/config/contact";
import { buildEmailUrl, buildWhatsAppUrl } from "@/lib/contact-links";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact INDOPROBE Solutions Pvt. Ltd. via WhatsApp, email or the confidential enquiry form to discuss your investigation requirements.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Have a Sensitive Matter?"
        description="Speak with INDOPROBE confidentially about your requirements."
      />

      <section className="bg-offwhite-100 py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-display text-2xl text-navy-900">
                  Reach Us Directly
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-graphite-600">
                  For urgent or sensitive matters, WhatsApp and email remain the most
                  direct and discreet ways to reach INDOPROBE.
                </p>

                <div className="mt-6 flex flex-col gap-4">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-navy-900/10 bg-white p-4 shadow-premium transition-colors hover:border-gold-500/40"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 text-[#1DA851]">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-navy-900">
                        WhatsApp INDOPROBE
                      </span>
                      <span className="block text-xs text-graphite-500">
                        {contactConfig.whatsapp}
                      </span>
                    </span>
                  </a>

                  <a
                    href={buildEmailUrl()}
                    className="flex items-center gap-3 rounded-xl border border-navy-900/10 bg-white p-4 shadow-premium transition-colors hover:border-gold-500/40"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/10 text-gold-600">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-navy-900">
                        Email INDOPROBE
                      </span>
                      <span className="block text-xs text-graphite-500">
                        {contactConfig.email}
                      </span>
                    </span>
                  </a>

                  <div className="flex items-center gap-3 rounded-xl border border-navy-900/10 bg-white p-4 shadow-premium">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900/5 text-navy-800">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-navy-900">
                        Service Area
                      </span>
                      <span className="block text-xs text-graphite-500">
                        {contactConfig.location}
                      </span>
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
