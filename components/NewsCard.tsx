import Image from "next/image";
import Link from "next/link";
import type { updates } from "@/lib/site-data";
import RecognitionMarks from "@/components/RecognitionMarks";
import { emphasizePresenter } from "@/lib/emphasize-presenter";

export type NewsCardUpdate = Pick<
  (typeof updates)[number],
  "slug" | "category" | "title" | "description" | "image" | "imageAlt"
> & {
  date?: string;
  recognition?: {
    presenterLogo: string;
    presenterName: string;
  };
  organizationName?: string;
};

type NewsCardProps = {
  update: NewsCardUpdate;
  compact?: boolean;
  listing?: boolean;
};

export default function NewsCard({
  update,
  compact = false,
  listing = false,
}: NewsCardProps) {
  const artworkImage = /graphic|logo/i.test(update.imageAlt);

  return (
    <Link
      aria-label={`Read story: ${update.title}`}
      className={`news-card${compact ? " news-card--compact" : ""}${listing ? " news-card--listing" : ""}`}
      href={`/news-insights/${update.slug}`}
    >
      <div
        className={
          update.recognition
            ? "news-card__media news-card__media--recognition"
            : "news-card__media"
        }
      >
        <Image
          alt={update.imageAlt}
          className={`news-card__image${artworkImage ? " news-card__image--artwork" : ""}${update.recognition ? " news-card__image--recognition" : ""}`}
          height={1600}
          src={update.image}
          unoptimized
          width={1600}
        />
        {update.recognition && <RecognitionMarks {...update.recognition} />}
      </div>
      <div className="news-card__body">
        <span className="news-card__category">{update.category}</span>
        {update.date && (
          <time className="news-card__date" dateTime={update.date}>
            {new Date(`${update.date}T12:00:00`).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
        )}
        <h3>{update.title}</h3>
        <p>
          {emphasizePresenter(
            update.description,
            update.recognition?.presenterName ?? update.organizationName,
          )}
        </p>
        <span aria-hidden="true" className="news-card__read">
          Read story <span>↗</span>
        </span>
      </div>
    </Link>
  );
}
