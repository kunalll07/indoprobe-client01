import {
  contactConfig,
  defaultEmailBody,
  defaultEmailSubject,
  defaultWhatsappMessage,
} from "@/config/contact";

/** Strips everything except digits, keeping the WhatsApp API happy with country code. */
function sanitizePhone(phone: string): string {
  return phone.replace(/[^\d]/g, "");
}

export function buildWhatsAppUrl(message: string = defaultWhatsappMessage): string {
  const phone = sanitizePhone(contactConfig.whatsapp);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function buildEmailUrl(
  subject: string = defaultEmailSubject,
  body: string = defaultEmailBody
): string {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${contactConfig.email}?subject=${encodedSubject}&body=${encodedBody}`;
}

/**
 * Address-based Google Maps embed — no API key and no hand-entered
 * latitude/longitude required. Google geocodes the address string itself,
 * so the pin is only ever as accurate as the address text passed in.
 */
export function buildMapEmbedUrl(address: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

/** Official Google Maps "Get Directions" deep link, also address-based. */
export function buildDirectionsUrl(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}
