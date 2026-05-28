// Purpose: This file is the single source of truth for the firm's contact details, hours, and website URL.
/**
 * Single source of truth for NAP, hours, and site URL (schema, contact UI, sitemap).
 *
 * Owner checklist (off-site local + AI retrieval):
 * - Google Business Profile: match name/address/phone/hours to these constants; set service areas (Canada-wide + GTA + Niagara).
 * - Google Search Console + Bing Webmaster: verify property; submit sitemap `https://usdimmigration.ca/sitemap.xml` (or your `NEXT_PUBLIC_SITE_URL`).
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://usdimmigration.ca";

export const PHONE_DISPLAY = "403 971 0038";
export const PHONE_TEL = "+14039710038";
export const EMAIL = "info@usdimmigration.ca";
export const HOURS = "Mon-Fri 9-6";

export const ADDRESS_LINES = ["4838 Dorchester Rd", "Niagara Falls, ON L2E 6N9"] as const;
export const ADDRESS_FOR_MAPS =
  "4838 Dorchester Rd, Niagara Falls, ON L2E 6N9, Canada";

export const WHATSAPP_MESSAGE =
  "Hi USD Immigration, I am interested in your immigration services. Looking for more information about the process.";
export const WHATSAPP_URL = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_FOR_MAPS)}`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS_FOR_MAPS,
)}&z=14&output=embed`;

/** Human-readable regions for on-page copy and llms.txt */
export const SERVICE_AREAS_HEADLINE =
  "Clients across Canada, with an office in Niagara Falls, Ontario";
export const SERVICE_AREAS_CITIES = [
  "Niagara Falls",
  "St. Catharines",
  "Welland",
  "Fort Erie",
  "Grimsby",
  "Toronto",
  "Mississauga",
  "Brampton",
  "Hamilton",
  "Oakville",
  "Markham",
  "Vaughan",
] as const;

/**
 * JSON-LD for LocalBusiness (physical office + service areas).
 * @see https://schema.org/LocalBusiness
 */
export function buildLocalBusinessJsonLd(): Record<string, unknown> {
  const areaServed: string[] = [
    "Canada",
    "Niagara Region, Ontario, Canada",
    "Greater Toronto Area, Ontario, Canada",
    ...SERVICE_AREAS_CITIES,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "USD Immigration",
    description:
      "Canadian immigration consulting for Express Entry, OINP, work permits, study permits, family sponsorship, and related pathways — serving clients across Canada from our Niagara Falls office.",
    url: SITE_URL,
    telephone: PHONE_TEL,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "4838 Dorchester Rd",
      addressLocality: "Niagara Falls",
      addressRegion: "ON",
      postalCode: "L2E 6N9",
      addressCountry: "CA",
    },
    areaServed,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
  };
}
