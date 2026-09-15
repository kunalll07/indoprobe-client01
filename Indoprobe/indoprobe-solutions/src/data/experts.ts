export type CareerEntry = {
  role: string;
  detail: string;
};

export type Expert = {
  slug: string;
  name: string;
  qualifications: string;
  identity: string;
  position: string[];
  summary: string;
  experienceHighlight: {
    metric: string;
    label: string;
  };
  /**
   * Path to the expert's photograph, e.g. "/images/experts/expert-01.jpg".
   * Drop the file into /public/images/experts using this exact path and it
   * replaces the placeholder automatically — no component changes needed.
   * Leave unset (or the file missing) and ExpertPortrait falls back to the
   * silhouette placeholder.
   */
  image?: string;
  /** Short chips shown in the profile view (3-5 items). */
  tags: string[];
  /** Full expertise list revealed in the profile modal. */
  expertise: string[];
  /** Structured career history, shown only in the profile modal (e.g. Dyne I.U.'s roles). */
  career?: CareerEntry[];
};

export const experts: Expert[] = [
  {
    slug: "kj-thankachan",
    image: "/images/experts/expert-01.jpg",
    name: "Sri. K. J. Thankachan",
    qualifications: "DAE, DME, DEE, FIIISLA, FIV",
    identity: "Engineer, Fellow Valuer, Investigator, Fellow Surveyor & Loss Assessor",
    position: ["Managing Partner", "INDOPROBE SOLUTIONS PVT. LTD."],
    summary:
      "Engineer, Fellow Valuer, Investigator, Fellow Surveyor & Loss Assessor with over four decades of multidisciplinary experience across engineering, valuation and investigation.",
    experienceHighlight: {
      metric: "41+ Years",
      label: "Experience",
    },
    tags: ["Survey & Loss Assessment", "Insurance Investigation", "Valuation", "Technical Inspection"],
    expertise: [
      "Survey & loss assessment",
      "Insurance investigation",
      "Motor OD & TP claims",
      "Fire claims",
      "Engineering claims",
      "Marine claims",
      "Burglary claims",
      "LOP claims",
      "Valuation",
      "Technical inspection",
      "Document verification",
      "Site inspection",
      "Pre-insurance inspection",
      "Break-in survey",
    ],
  },
  {
    slug: "k-radhakrishnan",
    image: "/images/experts/expert-02.jpg",
    name: "Sri. K. Radhakrishnan IPS (Rtd.)",
    qualifications: "IPS (Rtd.)",
    identity: "Former Kerala Police Officer",
    position: ["Former Kerala Police Officer"],
    summary:
      "Former Kerala Police officer with 34 years of experience in investigation, intelligence collection and analysis, industrial security, integrity verification and behavioural assessment.",
    experienceHighlight: {
      metric: "34 Years",
      label: "Investigation + Intelligence + Security",
    },
    tags: ["Intelligence Analysis", "Industrial Security", "Integrity Checking", "Behavioural Assessment"],
    expertise: [
      "Investigation of all varieties of cases",
      "Collection of intelligence",
      "Intelligence analysis",
      "Intelligence segregation",
      "Identification and decision making",
      "Industrial security auditing",
      "Safety & security at oil refineries",
      "Security & vigilance in organic and nutraceutical factories",
      "Personal antecedents and integrity checking",
      "Character analysis",
      "Identifying behavioural patterns of individuals",
    ],
  },
  {
    slug: "dyne-i-u",
    image: "/images/experts/expert-03.jpg",
    name: "Sri. Dyne I. U.",
    qualifications: "DME",
    identity: "Mechanical Engineer",
    position: ["Partner", "INDOPROBE SOLUTIONS PVT. LTD."],
    summary:
      "Mechanical engineering professional with extensive experience across industrial engineering, facility management, hospitality engineering, infrastructure projects, technical management and refinery-related environments.",
    experienceHighlight: {
      metric: "33+ Years",
      label: "Engineering + Facility + Industrial Expertise",
    },
    tags: ["Facility Engineering", "Industrial Projects", "Technical Management", "Infrastructure"],
    expertise: [
      "Mechanical & facility engineering",
      "Maintenance management",
      "Industrial and infrastructure (EPC) projects",
      "Hospitality engineering",
      "Technical management",
      "Refinery-related engineering environments",
    ],
    career: [
      {
        role: "Manager — Maintenance & Engineering",
        detail: "Lulu Tech Park Pvt. Ltd., Kerala — 8 years",
      },
      {
        role: "Manager — Facility Maintenance & Engineering",
        detail: "KIMS Group, Kerala — 3 years",
      },
      {
        role: "Technical Manager",
        detail: "Aster Medicity, DM Healthcare, Kerala — 1 year",
      },
      {
        role: "Chief Engineer",
        detail: "Hotel Le Meridien, Kochi — 4 years",
      },
      {
        role: "Sr. Manager, Service and Marketing",
        detail: "Sunitha Sales and Service, Cochin (dealer for Cummins Diesel Engines) — 2 years",
      },
      {
        role: "Manager (Mechanical)",
        detail: "Reliance Retail Limited, Infrastructure EPC projects, Kerala — 4 years",
      },
      {
        role: "Engineer in Charge (HOD)",
        detail: "Taj Kerala Hotels and Resorts Ltd., a Tata Enterprise — 11 years",
      },
      {
        role: "Earlier engineering & mechanical experience",
        detail:
          "Aban Construction, FACT Eloor, Fact Engineering Works Bangalore, New Kerala Engineering Works, AMA/Bapco Refinery Bahrain and others",
      },
    ],
  },
  {
    slug: "shihabudheen-p",
    image: "/images/experts/expert-04.jpg",
    name: "Sri. Shihabudheen P.",
    qualifications: "DAE",
    identity: "Automobile Engineer, Investigator & Automobile Market Analyst",
    position: [
      "Chief Investigator & Market Analyst, Probe India Kochi",
      "Partner, INDOPROBE SOLUTIONS PVT. LTD.",
    ],
    summary:
      "Automobile Engineer, Investigator & Automobile Market Analyst bringing specialist technical insight to motor and multi-line claim investigations.",
    experienceHighlight: {
      metric: "16+ Years",
      label: "Automobile + Investigation + Market Intelligence",
    },
    tags: ["Automobile Investigation", "Market Analysis", "Motor Claims", "Multi-line Claims"],
    expertise: [
      "Automobile investigation",
      "Automobile market analysis",
      "Motor OD & TP claims",
      "Fire claims",
      "Engineering claims",
      "Marine claims",
      "Miscellaneous claims",
      "Burglary claims",
      "Rubber claims",
      "Farm claims",
      "Cattle / duck claims",
      "Flood-related claims",
    ],
    career: [
      {
        role: "Automobile Market Analyst",
        detail: "Probe India Kochi — 9 years",
      },
      {
        role: "Chief Investigator",
        detail: "Probe India Kochi — 7 years",
      },
    ],
  },
];
