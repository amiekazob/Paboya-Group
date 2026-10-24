import Image from "next/image";
import Link from "next/link";

type Breadcrumb = {
  label: string;
  href?: string;
};

type ImageEssayPageProps = {
  breadcrumbs: Breadcrumb[];
  image: string;
  imageAlt: string;
  heroEyebrow: string;
  title: string;
  essayEyebrow: string;
  essayTitle: string;
  paragraphs: string[];
};

export default function ImageEssayPage({
  breadcrumbs,
  image,
  imageAlt,
  heroEyebrow,
  title,
  essayEyebrow,
  essayTitle,
  paragraphs,
}: ImageEssayPageProps) {
  return (
    <main className="image-essay-page" id="main-content">
      <section aria-labelledby="image-essay-title" className="image-essay-page__hero">
        <Image
          alt={imageAlt}
          className="image-essay-page__image"
          fill
          priority
          sizes="100vw"
          src={image}
        />
        <div aria-hidden="true" className="image-essay-page__overlay" />
        <div className="container image-essay-page__hero-content">
          <nav aria-label="Breadcrumb" className="image-essay-page__breadcrumb">
            {breadcrumbs.map((breadcrumb, index) => (
              <span className="image-essay-page__breadcrumb-item" key={`${breadcrumb.label}-${index}`}>
                {index > 0 && <span aria-hidden="true">›</span>}
                {breadcrumb.href ? (
                  <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                ) : (
                  <span aria-current="page">{breadcrumb.label}</span>
                )}
              </span>
            ))}
          </nav>
          <p className="eyebrow">{heroEyebrow}</p>
          <h1 id="image-essay-title">{title}</h1>
        </div>
      </section>

      <section aria-labelledby="image-essay-section-title" className="image-essay-page__essay">
        <div className="container image-essay-page__essay-inner">
          <p className="eyebrow">{essayEyebrow}</p>
          <h2 id="image-essay-section-title">{essayTitle}</h2>
          <div className="image-essay-page__essay-copy">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
