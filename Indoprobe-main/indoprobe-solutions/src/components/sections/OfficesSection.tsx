"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Instagram, Youtube, Twitter, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { contactConfig, offices, socialLinks } from "@/config/contact";
import { buildDirectionsUrl, buildMapEmbedUrl, buildWhatsAppUrl } from "@/lib/contact-links";
import { cn } from "@/lib/utils";

type SocialChannel = {
  key: string;
  label: string;
  icon: LucideIcon;
  href: string;
};

const socialChannels: SocialChannel[] = [
  { key: "instagram", label: "Instagram", icon: Instagram, href: socialLinks.instagram },
  { key: "youtube", label: "YouTube", icon: Youtube, href: socialLinks.youtube },
  { key: "twitter", label: "X (Twitter)", icon: Twitter, href: socialLinks.twitter },
  { key: "whatsapp", label: "WhatsApp", icon: MessageCircle, href: buildWhatsAppUrl() },
];

export function OfficesSection() {
  const [activeOfficeId, setActiveOfficeId] = useState(offices[0].id);
  const activeOffice = offices.find((office) => office.id === activeOfficeId) ?? offices[0];

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-10" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Reach Us"
          title="Our Offices"
          description="INDOPROBE operates from two Kerala offices — reach out directly, or get directions to whichever is closer to you."
          align="center"
          light
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:items-stretch">
          <div className="flex flex-col gap-6 lg:col-span-2">
            {offices.map((office, i) => {
              const isActive = office.id === activeOfficeId;
              return (
                <Reveal key={office.id} delay={i * 0.1}>
                  <div
                    className={cn(
                      "h-full rounded-2xl border p-6 transition-colors duration-300",
                      isActive
                        ? "border-gold-400/60 bg-white/[0.06]"
                        : "border-white/10 bg-white/[0.02]"
                    )}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                      {office.label}
                    </p>
                    <p className="mt-2 font-display text-lg text-offwhite">
                      {contactConfig.companyName}
                    </p>
                    <div className="mt-2 space-y-0.5 text-sm leading-relaxed text-offwhite/70">
                      {office.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveOfficeId(office.id)}
                        aria-pressed={isActive}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                          isActive
                            ? "border-gold-400/70 text-gold-300"
                            : "border-white/15 text-offwhite/70 hover:border-gold-400 hover:text-gold-300"
                        )}
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        {isActive ? "Showing on Map" : "View on Map"}
                      </button>
                      <a
                        href={buildDirectionsUrl(office.mapQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-offwhite/70 transition-colors hover:border-gold-400 hover:text-gold-300"
                      >
                        <Navigation className="h-3.5 w-3.5" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2} className="lg:col-span-3">
            <div className="h-full overflow-hidden rounded-2xl border border-white/10 shadow-premium">
              <iframe
                key={activeOffice.id}
                title={`Map — ${activeOffice.label}`}
                src={buildMapEmbedUrl(activeOffice.mapQuery)}
                className="h-72 w-full sm:h-96 lg:h-full lg:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-white/10 pt-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Connect With Us
          </p>
          <h3 className="mt-3 font-display text-2xl text-offwhite">Follow INDOPROBE</h3>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {socialChannels.map(({ key, label, icon: Icon, href }) => {
              const isReady = Boolean(href);
              return (
                <motion.a
                  key={key}
                  href={isReady ? href : undefined}
                  target={isReady ? "_blank" : undefined}
                  rel={isReady ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  aria-disabled={!isReady}
                  title={isReady ? label : `${label} — coming soon`}
                  whileHover={isReady ? { y: -3 } : undefined}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300",
                    isReady
                      ? "border-white/15 text-offwhite/80 hover:border-gold-400 hover:text-gold-300 hover:shadow-gold"
                      : "cursor-not-allowed border-white/10 text-offwhite/25"
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
