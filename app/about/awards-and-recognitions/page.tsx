import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutRelatedContent from "@/app/about/AboutRelatedContent";
import { createPageMetadata } from "@/lib/seo";
import "@/css/awards-and-recognitions.css";

export const metadata: Metadata = createPageMetadata({
  title: "Awards and Recognitions",
  description:
    "See recognitions presented to Paboya Group by institutions across food systems, climate resilience, child welfare, responsible AI and education.",
  path: "/about/awards-and-recognitions",
});

const recognizingFoundations = [
  {
    name: "International Agriculture, Fisheries and Food Systems Foundation",
    image: "/partners/2.jpeg",
  },
  {
    name: "The Global Climate and Environmental Resilience Foundation",
    image: "/partners/1.jpg",
  },
  {
    name: "International Children Welfare Foundation",
    image: "/partners/4.jpeg",
  },
  {
    name: "The Artificial Intelligence Foundation of Bangladesh",
    image: "/partners/6.jpg",
  },
];

const awards = [
  {
    year: "2026",
    title: "Recognition for Contribution to Food Systems",
    presentedBy: "International Agriculture, Fisheries and Food Systems Foundation",
    recipient: "Paboya Group",
  },
  {
    year: "2026",
    title: "Recognition for Agricultural Innovation",
    presentedBy: "International Agriculture, Fisheries and Food Systems Foundation",
    recipient: "Paboya Group",
  },
  {
    year: "2026",
    title: "Recognition for Sustainable Fisheries and Aquaculture",
    presentedBy: "International Agriculture, Fisheries and Food Systems Foundation",
    recipient: "Paboya Group",
  },
  {
    year: "2026",
    title: "Appreciation for Supporting Food Security",
    presentedBy: "International Agriculture, Fisheries and Food Systems Foundation",
    recipient: "Paboya Group",
  },
  {
    year: "2026",
    title: "Environmental Sustainability Certification",
    presentedBy: "The Global Climate and Environmental Resilience Foundation",
    recipient: "Paboya Group",
  },
  {
    year: "2026",
    title: "Climate Resilience Recognition",
    presentedBy: "The Global Climate and Environmental Resilience Foundation",
    recipient: "Paboya Group",
  },
  {
    year: "2026",
    title: "Environmental Performance Assessment",
    presentedBy: "The Global Climate and Environmental Resilience Foundation",
    recipient: "Paboya Group",
  },
  {
    year: "2026",
    title: "Child Welfare Excellence Award",
    presentedBy: "International Children Welfare Foundation",
    recipient: "Paboya Group",
  },
  {
    year: "2026",
    title: "Child Protection & Safeguarding Recognition",
    presentedBy: "International Children Welfare Foundation",
    recipient: "Paboya Group",
  },
  {
    year: "2026",
    title: "Children’s Education & Development Award",
    presentedBy: "International Children Welfare Foundation",
    recipient: "Paboya Group",
  },
  {
    year: "2026",
    title: "Responsible AI & Ethics Recognition",
    presentedBy: "The Artificial Intelligence Foundation of Bangladesh",
    recipient: "Paboya Group",
  },
  {
    year: "2026",
    title: "Crest of Appreciation",
    presentedBy: "University of Asia Pacific",
    recipient: "Paboya Group",
  },
];

export default function AwardsAndRecognitionsPage() {
  return (
    <main className="awards-page" id="main-content">
      <div className="container awards-page__top">
        <nav aria-label="Breadcrumb" className="awards-page__breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/about">About Us</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Awards and Recognitions</span>
        </nav>
      </div>
      <section aria-labelledby="awards-page-title" className="awards-hero">
        <div className="awards-hero__visual">
          <Image
            alt="Samiul Alam Shajal receiving a Crest of Appreciation from University of Asia Pacific"
            height={1365}
            priority
            src="/images/news/uap-english-carnival-2026.png"
            unoptimized
            width={2048}
          />
        </div>
        <div className="awards-hero__panel">
          <div className="awards-hero__copy">
            <h1 id="awards-page-title">Awards and Recognitions</h1>
            <p className="awards-page__lead">
              Paboya Group’s recognitions reflect its contributions and engagement with
              institutions and communities.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-recognition-title" className="awards-feature">
        <div className="container">
          <p className="awards-page__section-label">Our recognitions</p>
          <article className="awards-recognition-card">
            <div className="awards-recognition-card__intro">
              <div>
                <p className="eyebrow">Recognition for our contributions</p>
                <h2 id="featured-recognition-title">
                  Recognised by our foundation partners
                </h2>
              </div>
              <p>
                Paboya Group has been recognised for its contributions to food systems,
                climate resilience, child welfare, and responsible AI.
              </p>
            </div>
            <div className="awards-recognition-card__partners">
              {recognizingFoundations.map((foundation) => (
                <div className="awards-recognition-card__partner" key={foundation.name}>
                  <Image
                    alt={`${foundation.name} logo`}
                    height={600}
                    src={foundation.image}
                    unoptimized
                    width={600}
                  />
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="awards-record-title" className="awards-record">
        <div className="container">
          <div className="awards-record__heading">
            <div>
              <p className="eyebrow">A growing record</p>
              <h2 id="awards-record-title">Global recognition for Paboya Group’s contribution.</h2>
            </div>
            <p>
              Each acknowledgement reflects the value of constructive engagement with
              institutions and communities.
            </p>
          </div>

          <div className="awards-record__table-wrap">
            <table className="awards-record__table">
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Recognition</th>
                  <th scope="col">Presented by</th>
                  <th scope="col">Recipient</th>
                </tr>
              </thead>
              <tbody>
                {awards.map((award) => (
                  <tr key={award.title}>
                    <td data-label="Year">
                      <span className="awards-record__year">{award.year}</span>
                    </td>
                    <td data-label="Recognition">
                      <span className="awards-record__title">{award.title}</span>
                    </td>
                    <td data-label="Presented by">{award.presentedBy}</td>
                    <td data-label="Recipient">
                      <span className="awards-record__recipient">{award.recipient}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="awards-legacy-title" className="awards-legacy">
        <div className="container awards-legacy__inner">
          <p className="eyebrow">A continuing commitment</p>
          <h2 id="awards-legacy-title">
            Recognition reflects the work.
            <br />
            <em>The purpose continues.</em>
          </h2>
          <p>
            We remain committed to responsible contributions, meaningful partnerships, and
            long-term value for Bangladesh.
          </p>
        </div>
      </section>

      <AboutRelatedContent segment="/about/awards-and-recognitions" />
    </main>
  );
}
