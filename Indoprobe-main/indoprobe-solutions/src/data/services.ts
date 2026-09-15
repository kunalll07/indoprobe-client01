import type { LucideIcon } from "lucide-react";
import {
  UserSearch,
  Building2,
  ShieldCheck,
  FileWarning,
  Landmark,
  Wrench,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "personal-investigation",
    icon: UserSearch,
    title: "Personal Investigation",
    description:
      "Discreet enquiries into personal matters, conducted with sensitivity and professional rigour.",
    items: [
      "Personal investigation",
      "Character investigation",
      "Background enquiries",
      "Fact finding",
      "Situational enquiries",
    ],
  },
  {
    slug: "corporate-investigation",
    icon: Building2,
    title: "Corporate Investigation",
    description:
      "Protecting organisational integrity through fact-based corporate and business intelligence.",
    items: [
      "Corporate investigations",
      "Employee dishonesty",
      "Internal fact finding",
      "Business intelligence",
      "Market research",
      "Strategic information protection",
      "Information leakage/misuse assessment",
    ],
  },
  {
    slug: "background-verification",
    icon: ShieldCheck,
    title: "Background Verification",
    description:
      "Comprehensive verification support for hiring, onboarding and due-diligence decisions.",
    items: [
      "Pre-employment verification",
      "Post-employment verification",
      "Background searches",
      "Customer verification",
      "Document verification",
      "Site/address verification",
    ],
  },
  {
    slug: "insurance-investigation",
    icon: FileWarning,
    title: "Insurance Investigation",
    description:
      "Specialist survey, loss assessment and claim investigation across all major insurance lines.",
    items: [
      "Motor OD",
      "Motor TP",
      "Fire",
      "Engineering",
      "Marine",
      "Marine Cargo & Hull",
      "Burglary",
      "LOP",
      "Miscellaneous",
      "Flood-related claims",
    ],
  },
  {
    slug: "banking-financial-investigation",
    icon: Landmark,
    title: "Banking & Financial Investigation",
    description:
      "Verification and investigative support for banking, home finance and automobile finance requirements.",
    items: [
      "Banking investigation",
      "Home finance verification",
      "Automobile finance verification",
      "Customer verification",
      "Property/site verification",
      "Document verification",
    ],
  },
  {
    slug: "technical-investigation",
    icon: Wrench,
    title: "Technical Investigation",
    description:
      "Engineering-led inspection, valuation and assessment for technical and industrial matters.",
    items: [
      "Technical inspection",
      "Site inspection",
      "Building verification",
      "Machinery assessment",
      "Equipment valuation",
      "Motor vehicle valuation",
      "Heavy equipment assessment",
      "Factory inspection",
      "Pre-insurance inspection",
      "Break-in survey",
    ],
  },
];
