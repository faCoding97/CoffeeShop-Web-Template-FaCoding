// SEO: Structured data for LocalBusiness / Cafe
import { data } from "@/lib/data";

export default function JsonLd() {
  const c = data.cafeInfo;
  const json = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: c.name,
    image: `${data.siteUrl}/images/hero.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: c.location,
    },
    telephone: c.phone,
    url: data.siteUrl,
    openingHours: c.openingHours,
    sameAs: [c.instagram],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
