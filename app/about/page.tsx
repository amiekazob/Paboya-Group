import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutRelatedContent from "./AboutRelatedContent";
import { createPageMetadata } from "@/lib/seo";
import "@/css/about-page.css";

export const metadata: Metadata = createPageMetadata({
  title: "About Paboya Group",
  description:
    "Discover Paboya Group, a Bangladesh-based conglomerate company founded by Samiul Alam Shajal in 2025, and its vision for building across industries.",
  path: "/about",
  image: "/images/hero-industrial.png",
  imageAlt: "Paboya Group colleagues working in an industrial facility",
});

export default function AboutPage() {
  return (
    <main className="about-overview-page" id="main-content">
      <div className="container about-overview__top">
        <nav aria-label="Breadcrumb" className="about-overview__breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">About Us</span>
        </nav>
      </div>

      <section aria-labelledby="about-hero-title" className="about-overview-hero">
        <div className="about-overview-hero__visual">
          <Image
            alt="Paboya Group branding with its logo and shared vision for a wider horizon"
            className="about-overview-hero__image"
            fill
            preload
            sizes="100vw"
            src="/images/history/paboya-group-vision.webp"
          />
          <div aria-hidden="true" className="about-overview-hero__shade" />
        </div>
        <div className="about-overview-hero__panel">
          <div className="about-overview-hero__copy">
            <h1 id="about-hero-title">About Paboya Group</h1>
            <p>
              A Bangladesh-rooted conglomerate, beginning in technology and
              looking beyond one industry.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-title" className="about-page section section--white">
        <div className="container about-page__inner">
          <div aria-hidden="true" className="about-page__curve about-page__curve--top">
            <svg height="100%" preserveAspectRatio="none" viewBox="0 0 1440 120" width="100%">
              <path
                d="M0 56 C170 18 326 13 486 38 C654 65 790 97 965 78 C1133 59 1275 96 1440 57"
                fill="none"
                stroke="currentColor"
                strokeDasharray="16 11"
                strokeLinecap="butt"
                strokeWidth="2.5"
              />
            </svg>
          </div>
          <p className="eyebrow">Our story</p>
          <h2 className="about-page__story-title" id="about-title">
            A vision that began with technology.
          </h2>
          <div className="about-page__text">
            <p>
              Founded by Samiul Alam Shajal in 2025, Paboya Group began as an
              information technology company. Its starting point was a belief
              that technology and enterprise could create new opportunities,
              solve meaningful problems, and contribute to long-term progress.
            </p>
            <p>
              That beginning shaped a wider ambition: to build a Bangladesh-rooted
              business group with the ability to explore opportunities across
              industries. Paboya Group is developing its vision across
              pharmaceuticals, textiles, leather, agriculture, fisheries,
              logistics, and information technology, while looking towards
              future possibilities in semiconductors and advanced technology.
            </p>
            <p>
              Across these areas, the Group aims to build capable, responsible
              enterprises that serve local needs and grow with a global outlook.
              Its long-term aspiration is to contribute to a stronger Bangladesh
              and help make Made in Bangladesh a mark of quality, innovation,
              and excellence around the world.
            </p>
          </div>
          <div aria-hidden="true" className="about-page__curve">
            <svg height="100%" preserveAspectRatio="none" viewBox="0 0 1440 120" width="100%">
              <path
                d="M0 56 C170 18 326 13 486 38 C654 65 790 97 965 78 C1133 59 1275 96 1440 57"
                fill="none"
                stroke="currentColor"
                strokeDasharray="16 11"
                strokeLinecap="butt"
                strokeWidth="2.5"
              />
            </svg>
          </div>
        </div>
      </section>

      <AboutRelatedContent segment="/about" />
    </main>
  );
}
