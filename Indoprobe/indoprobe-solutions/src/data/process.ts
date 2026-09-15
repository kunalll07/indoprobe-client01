export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Confidential Consultation",
    description:
      "An initial, discreet discussion to understand the nature and sensitivity of your requirement.",
  },
  {
    number: "02",
    title: "Case Assessment",
    description:
      "Careful review of the matter to determine scope, approach and the relevant specialist expertise required.",
  },
  {
    number: "03",
    title: "Investigation Planning",
    description:
      "A structured plan is prepared, aligning investigators and specialists to the specifics of the case.",
  },
  {
    number: "04",
    title: "Information & Field Enquiry",
    description:
      "Ground-level enquiry, verification and information gathering carried out with professional discretion.",
  },
  {
    number: "05",
    title: "Analysis & Assessment",
    description:
      "Findings are analysed by relevant specialists to build a clear, evidence-based understanding of the matter.",
  },
  {
    number: "06",
    title: "Confidential Reporting",
    description:
      "A structured, factual report is delivered through controlled and confidential channels.",
  },
];

export type WhyCard = {
  title: string;
  description: string;
};

export const whyIndoprobe: WhyCard[] = [
  {
    title: "41+ Years Experience",
    description:
      "Decades of professional experience represented across the organisation's specialist expertise.",
  },
  {
    title: "Multidisciplinary Expertise",
    description:
      "Professionals from investigation, engineering, insurance, automobile and analytical backgrounds working together.",
  },
  {
    title: "Confidential Approach",
    description:
      "Discretion and controlled information handling built into every stage of the investigative process.",
  },
  {
    title: "Wide Information Network",
    description:
      "A broad network supporting field enquiry and verification across Kerala.",
  },
  {
    title: "Sector Knowledge",
    description:
      "Deep familiarity with insurance, banking, corporate and institutional requirements.",
  },
  {
    title: "Evidence-Based Investigation",
    description:
      "Conclusions grounded in verified facts, careful analysis and professional assessment.",
  },
];
