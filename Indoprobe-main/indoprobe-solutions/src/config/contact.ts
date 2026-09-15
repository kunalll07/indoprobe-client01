/**
 * Single source of truth for INDOPROBE contact details.
 * Update the values below to change the WhatsApp number / email
 * used across the entire website (header, hero, modal, footer, contact page).
 */
export const contactConfig = {
  whatsapp: "+91XXXXXXXXXX",
  email: "contact@indoprobe.in",
  companyName: "INDOPROBE SOLUTIONS PVT. LTD.",
  tagline: "An Intelligent & Dedicated Investigation Agency from Kerala",
  location: "Kerala, India",
};

/**
 * Official social profile URLs — not yet supplied by the client. Fill each
 * one in once the real profile exists and the Connect With Us section picks
 * it up automatically (an icon stays visible but inert until its URL is
 * set, so nothing links to a fake/placeholder account in the meantime).
 * WhatsApp is not listed here — it's already driven by `contactConfig.whatsapp`
 * above via buildWhatsAppUrl().
 */
export const socialLinks = {
  instagram: "",
  youtube: "",
  twitter: "",
};

export type Office = {
  id: string;
  label: string;
  lines: string[];
  /** Full postal address used for the map embed and directions link — no coordinates are guessed; Google resolves this string itself. */
  mapQuery: string;
};

/**
 * Registered and corporate office addresses, as provided by the client.
 * Edit here to update both the office cards and the map/directions links —
 * nothing else needs to change.
 */
export const offices: Office[] = [
  {
    id: "registered",
    label: "Regd. Office",
    lines: [
      "Room No. 1, Manalel Shopping Complex,",
      "Behind Khadi Bhavan, Main Road,",
      "Kaduthuruthy - 686604,",
      "Kottayam, Kerala.",
    ],
    mapQuery:
      "Manalel Shopping Complex, Behind Khadi Bhavan, Main Road, Kaduthuruthy, Kottayam, Kerala 686604",
  },
  {
    id: "corporate",
    label: "Corporate Office",
    lines: [
      "3rd Floor, City Point Building,",
      "Jos Jn., South,",
      "Ernakulam - 682016,",
      "Kerala.",
    ],
    mapQuery:
      "City Point Building, Jos Junction, South, Ernakulam, Kerala 682016",
  },
];

export const defaultWhatsappMessage =
  "Hello INDOPROBE, I would like to request a confidential consultation regarding your investigation services.";

export const defaultEmailSubject = "Confidential Consultation Request — INDOPROBE";

export const defaultEmailBody = `Hello INDOPROBE,

I would like to request a confidential consultation regarding your investigation services.

Please contact me to discuss the matter.

Thank you.`;
