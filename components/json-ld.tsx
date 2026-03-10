import { siteConfig } from "@/lib/site";
import { contact } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Jawa Barat",
    addressLocality: "Bandung",
    addressCountry: "ID",
  },
  areaServed: [
    { "@type": "City", name: "Bandung" },
    { "@type": "Place", name: "Cikole" },
    { "@type": "Place", name: "Ciater" },
    { "@type": "Place", name: "Pangalengan" },
  ],
  priceRange: "Rp. 150.000 - Rp. 1.100.000",
  serviceType: [
    "Outing Bandung",
    "Outbound Bandung",
    "Team Building",
    "Paket Outbound",
    "Offroad",
    "Rafting",
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
