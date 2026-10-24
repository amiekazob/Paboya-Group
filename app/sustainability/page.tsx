import type { Metadata } from "next";
import ImageEssayPage from "@/components/ImageEssayPage";
import { createPageMetadata } from "@/lib/seo";
import "@/css/image-essay-page.css";

export const metadata: Metadata = createPageMetadata({
  title: "Sustainability",
  description:
    "Explore Paboya Group’s sustainability work in Bangladesh, including a tree-planting initiative that has planted 20,000 trees.",
  path: "/sustainability",
  image: "/images/sustainability-tree-planting.png",
  imageAlt: "Tree planting and landscape restoration in Bangladesh",
});

export default function SustainabilityPage() {
  return (
    <ImageEssayPage
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sustainability" },
      ]}
      essayEyebrow="Our commitment"
      essayTitle="Practical steps, taken with care."
      heroEyebrow="Sustainability"
      image="/images/sustainability-tree-planting.png"
      imageAlt="A tree-planting landscape in Bangladesh at sunset"
      paragraphs={[
        "At Paboya Group, we are committed to taking practical steps towards a greener Bangladesh. We have planted 0.02 million trees as one part of this effort.",
        "Tree planting is a beginning, not the whole of our responsibility. As the Group grows, we will continue to consider the environmental impact of our work and look for thoughtful ways to care for the places and communities connected to it.",
      ]}
      title="Growing a greener future."
    />
  );
}
