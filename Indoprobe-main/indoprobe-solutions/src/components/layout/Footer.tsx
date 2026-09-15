import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { navItems } from "@/data/nav";
import { contactConfig } from "@/config/contact";
import { buildEmailUrl, buildWhatsAppUrl } from "@/lib/contact-links";
import { Logo } from "@/components/layout/Logo";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-navy-950 text-offwhite">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-12">
          <div className="sm:col-span-2 md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-offwhite/60">
              {contactConfig.tagline}. Bringing together experienced professionals to
              uncover facts and provide discreet investigative support across Kerala.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-offwhite/80 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <a
                href={buildEmailUrl()}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-offwhite/80 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <Mail className="h-3.5 w-3.5" />
                {contactConfig.email}
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400/80">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm leading-none text-offwhite/70 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400/80">
              Legal
            </p>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm leading-none text-offwhite/70 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <span aria-hidden="true" className="mt-6 block h-px w-10 bg-gold-500/40" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-offwhite/40 sm:flex-row">
          <p>
            © {year} {contactConfig.companyName}. All rights reserved.
          </p>
          <p>Kerala, India</p>
        </div>
      </div>
    </footer>
  );
}
