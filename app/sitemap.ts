import type { MetadataRoute } from "next";
import { industries } from "@/lib/industry-data";
import { SITE_URL } from "@/lib/seo";
import { updates } from "@/lib/site-data";

const staticPages: Array<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
  image?: string;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1, image: "/images/hero-industrial.png" },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about/history", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about/vision-mission-values", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about/board-of-directors", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about/awards-and-recognitions", changeFrequency: "monthly", priority: 0.6 },
  { path: "/companies", changeFrequency: "weekly", priority: 0.8 },
  {
    path: "/companies/bipon",
    changeFrequency: "monthly",
    priority: 0.6,
    image: "/images/companies/bipon-heritage-profile.png",
  },
  { path: "/industries", changeFrequency: "weekly", priority: 0.8 },
  { path: "/news-insights", changeFrequency: "daily", priority: 0.8 },
  { path: "/founder-message", changeFrequency: "monthly", priority: 0.6 },
  { path: "/paboya-foundation", changeFrequency: "monthly", priority: 0.6 },
  { path: "/sustainability", changeFrequency: "monthly", priority: 0.6 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.5 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map(({ path, changeFrequency, priority, image }) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency,
      priority,
      ...(image ? { images: [`${SITE_URL}${image}`] } : {}),
    })),
    ...industries.map((industry) => ({
      url: `${SITE_URL}/industries/${industry.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [`${SITE_URL}${industry.image}`],
    })),
    ...updates.map((update) => ({
      url: `${SITE_URL}/news-insights/${update.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: [`${SITE_URL}${update.image}`],
    })),
  ];
}
