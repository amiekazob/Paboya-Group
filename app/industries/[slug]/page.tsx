import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ImageEssayPage from "@/components/ImageEssayPage";
import { getIndustryBySlug, industries } from "@/lib/industry-data";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  serializeJsonLd,
} from "@/lib/seo";
import "@/css/image-essay-page.css";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  return industry
    ? createPageMetadata({
        title: industry.name,
        description: industry.description,
        path: `/industries/${industry.slug}`,
        image: industry.image,
        imageAlt: industry.imageAlt,
      })
    : { title: "Industry not found", robots: { index: false, follow: false } };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  const breadcrumbStructuredData = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.name, path: `/industries/${industry.slug}` },
  ]);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbStructuredData) }}
        type="application/ld+json"
      />
      <ImageEssayPage
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
        essayEyebrow="Our direction"
        essayTitle={industry.essayTitle}
        heroEyebrow="Industry"
        image={industry.image}
        imageAlt={industry.imageAlt}
        paragraphs={industry.paragraphs}
        title={industry.name}
      />
    </>
  );
}
