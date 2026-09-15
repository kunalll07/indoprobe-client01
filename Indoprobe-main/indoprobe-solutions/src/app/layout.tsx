import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OfficesSection } from "@/components/sections/OfficesSection";
import { ContactModalProvider } from "@/context/ContactModalContext";
import { ContactModal } from "@/components/contact/ContactModal";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { siteUrl } from "@/lib/utils";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "INDOPROBE Solutions Pvt. Ltd. | Investigation Agency Kerala",
    template: "%s | INDOPROBE Solutions Pvt. Ltd.",
  },
  description:
    "INDOPROBE SOLUTIONS PVT. LTD. is an intelligent and dedicated investigation agency from Kerala, offering private investigation, corporate investigation, background verification, insurance investigation and business intelligence services.",
  keywords: [
    "Investigation Agency Kerala",
    "Private Investigation Kerala",
    "Investigation Agency Kochi",
    "Corporate Investigation Kerala",
    "Insurance Investigation Kerala",
    "Background Verification Kerala",
    "Business Intelligence Kerala",
  ],
  authors: [{ name: "INDOPROBE SOLUTIONS PVT. LTD." }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "INDOPROBE SOLUTIONS PVT. LTD.",
    title: "INDOPROBE Solutions Pvt. Ltd. | Investigation Agency Kerala",
    description:
      "An intelligent and dedicated investigation agency from Kerala, combining experienced investigators and multidisciplinary expertise to uncover facts with discretion.",
  },
  twitter: {
    card: "summary_large_image",
    title: "INDOPROBE Solutions Pvt. Ltd. | Investigation Agency Kerala",
    description:
      "Professional investigation and intelligence services across Kerala. Confidential. Experienced. Multidisciplinary.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body antialiased">
        <ContactModalProvider>
          <Header />
          <main>{children}</main>
          <OfficesSection />
          <Footer />
          <ContactModal />
          <FloatingContact />
        </ContactModalProvider>
      </body>
    </html>
  );
}
