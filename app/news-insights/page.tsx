import type { Metadata } from "next";
import NewsListing from "@/components/NewsListing";
import { createPageMetadata } from "@/lib/seo";
import { updates } from "@/lib/site-data";
import "@/css/news.css";

export const metadata: Metadata = createPageMetadata({
  title: "News & Insights",
  description:
    "Read the latest Paboya Group news, industry perspectives, company announcements and updates from across Bangladesh and its business sectors.",
  path: "/news-insights",
});

export default function NewsPage() {
  const newsCards = updates.map((update) => ({
    slug: update.slug,
    category: update.category,
    title: update.title,
    description: update.description,
    image: update.image,
    imageAlt: update.imageAlt,
    date: "date" in update ? update.date : undefined,
    recognition: "recognition" in update ? update.recognition : undefined,
    organizationName:
      "organizationName" in update ? update.organizationName : undefined,
  }));

  return (
    <main className="news-page" id="main-content">
      <NewsListing updates={newsCards} />
    </main>
  );
}
