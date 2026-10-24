import Image from "next/image";
import Link from "next/link";
import styles from "./related-content.module.css";

type AboutSegment =
  | "/about"
  | "/about/history"
  | "/about/vision-mission-values"
  | "/founder-message"
  | "/about/board-of-directors"
  | "/about/awards-and-recognitions";

type RelatedRoute = Exclude<AboutSegment, "/about">;

type RelatedCard = {
  href: RelatedRoute;
  kind: "history" | "vision" | "founder" | "board" | "awards";
  image: string;
  imageAlt: string;
  label: string;
  title: string;
  description: string;
};

const relatedCards: Record<RelatedRoute, RelatedCard> = {
  "/about/history": {
    href: "/about/history",
    kind: "history",
    image: "/images/history/it-industry.jpg",
    imageAlt: "Samiul Alam Shajal presenting to a group during Paboya Group's early IT chapter",
    label: "The journey",
    title: "Our History",
    description: "From a technology-led beginning in 2025 to a vision across industries.",
  },
  "/about/vision-mission-values": {
    href: "/about/vision-mission-values",
    kind: "vision",
    image: "/images/history/paboya-group-vision.webp",
    imageAlt: "Paboya Group identity and a shared vision for a wider horizon",
    label: "Our direction",
    title: "Vision, Mission & Values",
    description: "The principles guiding how Paboya Group intends to grow.",
  },
  "/founder-message": {
    href: "/founder-message",
    kind: "founder",
    image: "/images/history/founder-black-suit.jpg",
    imageAlt: "Samiul Alam Shajal, Founder and Managing Director of Paboya Group",
    label: "Leadership",
    title: "Our Founder",
    description: "Read the founder's perspective on building from Bangladesh and serving the world.",
  },
  "/about/board-of-directors": {
    href: "/about/board-of-directors",
    kind: "board",
    image: "/images/board/boardroom-black-chairs.png",
    imageAlt: "A boardroom prepared for a leadership meeting",
    label: "Governance",
    title: "Board of Directors",
    description: "Meet the leadership guiding Paboya Group's governance and direction.",
  },
  "/about/awards-and-recognitions": {
    href: "/about/awards-and-recognitions",
    kind: "awards",
    image: "/images/news/uap-english-carnival-2026.png",
    imageAlt: "Samiul Alam Shajal receiving a Crest of Appreciation at University of Asia Pacific",
    label: "Recognition",
    title: "Awards & Recognitions",
    description: "Explore the acknowledgements received by Paboya Group.",
  },
};

const cardSets: Record<AboutSegment, RelatedRoute[]> = {
  "/about": [
    "/about/history",
    "/founder-message",
    "/about/awards-and-recognitions",
  ],
  "/about/history": [
    "/about/vision-mission-values",
    "/founder-message",
    "/about/awards-and-recognitions",
  ],
  "/about/vision-mission-values": [
    "/about/history",
    "/founder-message",
    "/about/board-of-directors",
  ],
  "/founder-message": [
    "/about/history",
    "/about/vision-mission-values",
    "/about/board-of-directors",
  ],
  "/about/board-of-directors": [
    "/founder-message",
    "/about/vision-mission-values",
    "/about/awards-and-recognitions",
  ],
  "/about/awards-and-recognitions": [
    "/about/history",
    "/founder-message",
    "/about/vision-mission-values",
  ],
};

const introductions: Record<AboutSegment, string> = {
  "/about": "Discover the milestones, people, and recognition that are part of Paboya Group's story.",
  "/about/history": "Explore the direction, leadership, and recognition that have grown from the Group's beginnings.",
  "/about/vision-mission-values": "See how the Group's beginnings, founder, and leadership connect to its direction.",
  "/founder-message": "Explore the history, principles, and leadership connected to the founder's message.",
  "/about/board-of-directors": "Learn more about the founder, shared principles, and recognition connected to the Group.",
  "/about/awards-and-recognitions": "Discover the beginnings, leadership, and direction behind Paboya Group's work.",
};

const descriptionOverrides: Partial<Record<AboutSegment, Partial<Record<RelatedRoute, string>>>> = {
  "/about/history": {
    "/about/vision-mission-values": "The principles guiding how Paboya Group intends to grow.",
    "/founder-message": "Meet the founder whose belief in technology began the journey.",
  },
  "/about/vision-mission-values": {
    "/about/history": "Explore the 2025 beginnings that shaped the Group's wider ambition.",
    "/founder-message": "Read how the founder sees responsible growth and Made in Bangladesh.",
  },
  "/founder-message": {
    "/about/history": "See how a technology-led beginning grew into a broader ambition.",
    "/about/vision-mission-values": "Explore the principles behind the Group's long-term ambition.",
  },
  "/about/board-of-directors": {
    "/founder-message": "Read the founder's perspective on leadership and building from Bangladesh.",
    "/about/vision-mission-values": "Explore the principles that guide responsible leadership.",
  },
  "/about/awards-and-recognitions": {
    "/about/history": "Discover the beginnings and ambition behind Paboya Group's work.",
    "/founder-message": "Learn about the vision guiding Paboya Group's work.",
  },
};

export default function AboutRelatedContent({ segment }: { segment: AboutSegment }) {
  const items = cardSets[segment].map((href) => ({
    ...relatedCards[href],
    description: descriptionOverrides[segment]?.[href] ?? relatedCards[href].description,
  }));

  return (
    <section aria-labelledby="about-related-title" className={styles.related}>
      <div className="container">
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">Continue exploring</p>
            <h2 id="about-related-title">Related content</h2>
          </div>
          <p className={styles.intro}>{introductions[segment]}</p>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <Link className={styles.card} href={item.href} key={item.href}>
              <div className={styles.image} data-image-kind={item.kind}>
                <Image
                  alt={item.imageAlt}
                  className={styles.imageAsset}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  src={item.image}
                />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.label}>{item.label}</p>
                <h3>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <span className={styles.action}>
                  Learn more <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
