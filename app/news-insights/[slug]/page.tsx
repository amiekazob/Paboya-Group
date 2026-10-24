import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RecognitionMarks from "@/components/RecognitionMarks";
import { emphasizePresenter } from "@/lib/emphasize-presenter";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  serializeJsonLd,
  SITE_URL,
} from "@/lib/seo";
import { updates } from "@/lib/site-data";

type NewsStoryPageProps = {
  params: Promise<{ slug: string }>;
};

async function getStory(params: NewsStoryPageProps["params"]) {
  const { slug } = await params;
  return updates.find((update) => update.slug === slug);
}

export async function generateMetadata({ params }: NewsStoryPageProps): Promise<Metadata> {
  const story = await getStory(params);

  if (!story) {
    return {
      title: "Story not found",
      robots: { index: false, follow: false },
    };
  }

  return createPageMetadata({
    title: story.title,
    description: story.description,
    path: `/news-insights/${story.slug}`,
    image: story.image,
    imageAlt: story.imageAlt,
    type: "article",
  });
}

export default async function NewsStoryPage({ params }: NewsStoryPageProps) {
  const story = await getStory(params);

  if (!story) notFound();

  const date = "date" in story ? story.date : undefined;
  const recognition = "recognition" in story ? story.recognition : undefined;
  const sources = story.sources ?? [];
  const organizationName =
    recognition?.presenterName ??
    ("organizationName" in story ? story.organizationName : undefined);
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: story.title,
    description: story.description,
    image: [`${SITE_URL}${story.image}`],
    mainEntityOfPage: `${SITE_URL}/news-insights/${story.slug}`,
    articleSection: story.category,
    inLanguage: "en-BD",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  const breadcrumbStructuredData = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "News & Insights", path: "/news-insights" },
    { name: story.title, path: `/news-insights/${story.slug}` },
  ]);

  return (
    <main className="news-story" id="main-content">
      <script
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleStructuredData) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbStructuredData) }}
        type="application/ld+json"
      />
      <div className="container">
        <Link className="news-story__back" href="/news-insights">
          <span aria-hidden="true">←</span> All news
        </Link>
        <header className="news-story__header">
          <div className="news-story__copy">
            <p className="eyebrow">{story.category}</p>
            <h1>{story.title}</h1>
            {date && (
              <time className="news-story__date" dateTime={date}>
                {new Date(`${date}T12:00:00`).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              </time>
            )}
            <p className="news-story__dek">
              {emphasizePresenter(story.description, organizationName)}
            </p>
          </div>
          <div
            className={`news-story__visual${recognition ? " news-story__visual--recognition" : ""}`}
          >
            <Image
              alt={story.imageAlt}
              className={`news-story__image${recognition ? " news-story__image--recognition" : ""}`}
              height={1600}
              priority
              src={story.image}
              unoptimized
              width={1600}
            />
            {recognition && <RecognitionMarks {...recognition} />}
          </div>
        </header>
        <article className="news-story__article">
          {story.body.map((paragraph) => (
            <p key={paragraph}>
              {emphasizePresenter(paragraph, organizationName)}
            </p>
          ))}
          {"sections" in story &&
            story.sections?.map((section) => (
              <section className="news-story__section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    {emphasizePresenter(paragraph, organizationName)}
                  </p>
                ))}
              </section>
            ))}
          {"about" in story && "tagline" in story && (
            <section className="news-story__about">
              <h2>About Paboya Group</h2>
              {story.about?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="news-story__tagline">{story.tagline}</p>
            </section>
          )}
          {"tagline" in story && !("about" in story) && (
            <p className="news-story__tagline">{story.tagline}</p>
          )}
          {story.reference && (
            <p className="news-story__source">
              Further reading: {" "}
              <a href={story.reference.href} rel="noreferrer" target="_blank">
                {story.reference.label} <span aria-hidden="true">↗</span>
              </a>
            </p>
          )}
          {sources.length > 0 && (
            <p className="news-story__source">
              Sources: {" "}
              {sources.map((source, index) => (
                <span key={source.href}>
                  {index > 0 && " · "}
                  <a href={source.href} rel="noreferrer" target="_blank">
                    {source.label} <span aria-hidden="true">↗</span>
                  </a>
                </span>
              ))}
            </p>
          )}
          <Link className="arrow-link" href="/news-insights">
            Back to news <span aria-hidden="true">↗</span>
          </Link>
        </article>
      </div>
    </main>
  );
}
