import type { Metadata } from "next";
import ImageEssayPage from "@/components/ImageEssayPage";
import { createBreadcrumbJsonLd, createPageMetadata, serializeJsonLd } from "@/lib/seo";
import "@/css/image-essay-page.css";

const image = "/images/companies/bipon-heritage-profile.png";
const imageAlt =
  "A contemporary Bangladeshi fashion portrait in a craft-inspired textile atelier";

export const metadata: Metadata = createPageMetadata({
  title: "Bipon | Fashion & Lifestyle",
  description:
    "Discover Bipon, Paboya Group’s Bangladesh-rooted fashion and lifestyle brand inspired by local craft and traditional design.",
  path: "/companies/bipon",
  image,
  imageAlt,
});

const breadcrumbStructuredData = createBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Companies", path: "/companies" },
  { name: "Bipon", path: "/companies/bipon" },
]);

export default function BiponCompanyPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbStructuredData) }}
        type="application/ld+json"
      />
      <ImageEssayPage
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Companies", href: "/companies" },
          { label: "Bipon" },
        ]}
        essayEyebrow="The brand"
        essayTitle="Bangladeshi heritage, expressed for modern life."
        heroEyebrow="Fashion & lifestyle"
        image={image}
        imageAlt={imageAlt}
        paragraphs={[
          "Bipon is Paboya Group’s fashion and lifestyle company, drawing on Bangladesh’s rich craft traditions and the character of traditional wear. Its design outlook brings heritage-inspired details into pieces intended for everyday life.",
          "With a contemporary point of view, Bipon aims to make local identity feel relevant to new generations. Its long-term direction is to build a distinctive Bangladeshi brand grounded in thoughtful design, quality and a strong connection to the culture that inspires it.",
        ]}
        title="Bipon"
      />
    </>
  );
}
