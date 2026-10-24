import type { Metadata } from "next";
import Image from "next/image";
import AboutRelatedContent from "@/app/about/AboutRelatedContent";
import AboutPremiumHero from "@/components/AboutPremiumHero";
import { createPageMetadata } from "@/lib/seo";
import "@/css/about-subpages.css";
import "@/css/about-premium-subpages.css";

export const metadata: Metadata = createPageMetadata({
  title: "Board of Directors",
  description:
    "Meet the leadership of Paboya Group, including Founder and Managing Director Samiul Alam Shajal and the Group’s directors.",
  path: "/about/board-of-directors",
});

const directors = [
  {
    name: "Mr. Samiul Alam Shajal",
    role: "Founder & Managing Director",
    image: "/images/managing-director.png",
    alt: "Mr. Samiul Alam Shajal, Founder and Managing Director of Paboya Group",
  },
  {
    name: "Fatema Begum",
    role: "Director",
    note: "(Proud Mother of Samiul Alam Shajal)",
  },
];

export default function BoardOfDirectorsPage() {
  return (
    <main className="about-subpage about-premium-page board-page" id="main-content">
      <AboutPremiumHero
        chapter="Governance / Leadership"
        current="Board of Directors"
        description="Responsible leadership for long-term value and dependable growth."
        eyebrow="About Us · Governance"
        title={<>Board of<br /><em>Directors.</em></>}
        variant="immersive"
      />

      <section className="board-page__content">
        <div className="container board-directors-grid">
          {directors.map((director) => (
            <article className="board-director-card" key={director.name}>
              <div className={`board-director-card__portrait${director.image ? "" : " board-director-card__portrait--placeholder"}`}>
                {director.image ? (
                  <Image
                    alt={director.alt ?? ""}
                    height={1448}
                    src={director.image}
                    unoptimized
                    width={1086}
                  />
                ) : (
                  <div aria-label="Fatema Begum portrait placeholder" className="board-director-card__initials">FB</div>
                )}
              </div>
              <div className="board-director-card__body">
                <h3>{director.name}</h3>
                <p>{director.role}</p>
                {director.note ? (
                  <span className="board-director-card__relation">{director.note}</span>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <AboutRelatedContent segment="/about/board-of-directors" />
    </main>
  );
}
