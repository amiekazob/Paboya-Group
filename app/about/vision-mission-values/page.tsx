import type { Metadata } from "next";
import Link from "next/link";
import AboutRelatedContent from "@/app/about/AboutRelatedContent";
import { createPageMetadata } from "@/lib/seo";
import "@/css/about-subpages.css";
import "@/css/vision-mission-values.css";

export const metadata: Metadata = createPageMetadata({
  title: "Vision, Mission & Values",
  description:
    "Explore Paboya Group’s vision, mission and international-minded values, grounded in building from Bangladesh for global markets.",
  path: "/about/vision-mission-values",
});

const values = ["Integrity", "Quality", "Innovation", "Accountability", "Sustainability"];

export default function VisionMissionValuesPage() {
  return (
    <main className="about-subpage vision-page" id="main-content">
      <section aria-labelledby="vision-title" className="vision-minimal-hero">
        <div aria-hidden="true" className="vision-minimal-hero__pattern" />
        <div className="container vision-minimal-hero__container">
          <nav aria-label="Breadcrumb" className="vision-minimal-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/about">About Us</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Vision, Mission &amp; Values</span>
          </nav>

          <div className="vision-minimal-hero__content">
            <p className="vision-minimal-hero__label">About Us · Our direction</p>
            <h1 id="vision-title">Vision, Mission <em>&amp;</em> Values</h1>
            <p>
              A clear direction for responsible growth and lasting value.
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="vision-minimal-hero__wave" />
      </section>

      <section className="vision-minimal-content">
        <div className="container vision-minimal-content__container">
          <article className="vision-minimal-block">
            <p className="vision-minimal-block__label">Vision</p>
            <div>
              <h2>To help make Made in Bangladesh a global mark of quality, innovation and excellence—supported by capable, responsible enterprises rooted in Bangladesh.</h2>
            </div>
          </article>

          <article className="vision-minimal-block">
            <p className="vision-minimal-block__label">Mission</p>
            <div>
              <h2>To build businesses in Bangladesh that serve local needs, strengthen local capabilities and bring Bangladeshi products and services to global markets with consistent quality.</h2>
            </div>
          </article>

          <section aria-labelledby="values-title" className="vision-minimal-values">
            <div className="vision-minimal-values__intro">
              <p className="vision-minimal-block__label">Values</p>
              <h2 id="values-title">The principles guiding our ambition to meet global expectations.</h2>
            </div>
            <ul aria-label="Paboya Group values">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </section>

          <div className="vision-minimal-content__back">
            <Link className="arrow-link" href="/about">Back to About Us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <AboutRelatedContent segment="/about/vision-mission-values" />
    </main>
  );
}
