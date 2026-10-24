import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const SITE_URL = new URL(
  configuredSiteUrl || "https://www.paboyagroup.com",
).origin;
export const DEFAULT_SOCIAL_IMAGE = "/images/hero-industrial.png";
export const DEFAULT_SOCIAL_IMAGE_ALT =
  "Paboya Group professionals at work in an industrial setting";
export const SITE_DESCRIPTION =
  "Paboya Group is a Bangladesh-based conglomerate company founded in 2025 by Samiul Alam Shajal, building across technology, pharmaceuticals, textiles, agriculture and emerging sectors.";

type PageMetadataInput = {
  title: string;
  absoluteTitle?: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  absoluteTitle,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt = DEFAULT_SOCIAL_IMAGE_ALT,
  type = "website",
}: PageMetadataInput): Metadata {
  const socialTitle = absoluteTitle ?? `${title} | Paboya Group`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: "Paboya Group",
      locale: "en_BD",
      type,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
}
