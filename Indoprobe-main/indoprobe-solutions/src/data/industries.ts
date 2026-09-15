import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Landmark,
  Home,
  Car,
  Briefcase,
  UserRound,
  Building,
} from "lucide-react";

export type Industry = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "insurance",
    icon: ShieldCheck,
    title: "Insurance",
    description:
      "Survey, loss assessment and claim investigation support across motor, fire, engineering and marine lines.",
  },
  {
    slug: "banking",
    icon: Landmark,
    title: "Banking",
    description:
      "Verification and investigative support for banking institutions and lending decisions.",
  },
  {
    slug: "home-finance",
    icon: Home,
    title: "Home Finance",
    description:
      "Property, site and document verification supporting home finance assessments.",
  },
  {
    slug: "automobile-finance",
    icon: Car,
    title: "Automobile Finance",
    description:
      "Verification and valuation support for automobile finance and lending institutions.",
  },
  {
    slug: "corporate-business",
    icon: Briefcase,
    title: "Corporate & Business",
    description:
      "Business intelligence, employee integrity and strategic information protection for organisations.",
  },
  {
    slug: "individuals",
    icon: UserRound,
    title: "Individuals",
    description:
      "Confidential personal investigation and fact-finding support for individual clients.",
  },
  {
    slug: "institutions-agencies",
    icon: Building,
    title: "Institutions & Agencies",
    description:
      "Investigative and analytical support for institutions, authorities and agencies.",
  },
];
