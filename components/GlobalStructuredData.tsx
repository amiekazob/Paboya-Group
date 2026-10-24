import { contactDetails } from "@/lib/site-data";
import { serializeJsonLd, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";

const organizationId = `${SITE_URL}/#organization`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Paboya Group",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      slogan: "Made in Bangladesh. Built for the World.",
      foundingDate: "2025",
      logo: `${SITE_URL}/images/logos/paboya-logo.jpg`,
      founder: {
        "@type": "Person",
        name: "Samiul Alam Shajal",
        jobTitle: "Founder & Managing Director",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: contactDetails.address.slice(0, 2).join(", "),
        addressLocality: "Dhaka",
        postalCode: "1215",
        addressCountry: "BD",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+8801830941595",
        email: contactDetails.email,
        contactType: "business enquiries",
        areaServed: "BD",
        availableLanguage: ["English", "Bengali"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Paboya Group",
      description: SITE_DESCRIPTION,
      inLanguage: "en-BD",
      publisher: { "@id": organizationId },
    },
  ],
};

export default function GlobalStructuredData() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      type="application/ld+json"
    />
  );
}
