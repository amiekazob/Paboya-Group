import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeScrollMotion from "@/components/HomeScrollMotion";
import HomeHeroSlider from "@/components/HomeHeroSlider";
import HomeBusinessesFeature from "@/components/HomeBusinessesFeature";
import NewsCard from "@/components/NewsCard";
import { createPageMetadata, SITE_DESCRIPTION } from "@/lib/seo";
import { updates } from "@/lib/site-data";
import "@/css/home.css";

export const metadata: Metadata = createPageMetadata({
  title: "Paboya Group",
  absoluteTitle: "Paboya Group | Made in Bangladesh. Built for the World.",
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  const latestUpdates = updates.slice(0, 3);

  return (
    <main data-home-motion id="main-content">
      <HomeScrollMotion />
      <HomeHeroSlider />

      <section
        aria-labelledby="founder-message-title"
        className="founder-message-feature"
      >
        <div className="container founder-message-feature__layout">
          <figure className="founder-message-feature__portrait">
            <Image
              alt="Samiul Alam Shajal, Founder and Managing Director of Paboya Group"
              height={1448}
              sizes="(max-width: 760px) 100vw, 40vw"
              src="/images/history/founder-black-suit.jpg"
              unoptimized
              width={1086}
            />
            <div aria-hidden="true" className="founder-message-feature__portrait-shade" />
          </figure>
          <div className="founder-message-feature__copy">
            <p className="eyebrow">A message from our Founder</p>
            <span aria-hidden="true" className="founder-message-feature__mark">“</span>
            <h2 id="founder-message-title">
              Serve the nation first, then compete with the world.
            </h2>
            <p className="founder-message-feature__lead">
              Paboya Group is being built from Bangladesh with a long-term
              ambition to develop capable enterprises, meet local needs, and
              help make Made in Bangladesh a global mark of quality, innovation,
              and excellence.
            </p>
            <div className="founder-message-feature__attribution">
              <strong>Samiul Alam Shajal</strong>
              <span>Founder &amp; Managing Director, Paboya Group</span>
            </div>
            <Link className="founder-message-feature__link" href="/founder-message">
              Read the full message <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <HomeBusinessesFeature />

      <section
        aria-labelledby="home-sustainability-title"
        className="home-sustainability"
      >
        <Image
          alt=""
          aria-hidden="true"
          className="home-sustainability__image"
          fill
          sizes="100vw"
          src="/images/sustainability-tree-planting.png"
        />
        <div aria-hidden="true" className="home-sustainability__overlay" />
        <div className="container home-sustainability__content">
          <div className="home-sustainability__copy">
            <p className="eyebrow">Sustainability</p>
            <h2 id="home-sustainability-title">Growing a greener future.</h2>
            <p>
              With 0.02 million trees planted, Paboya Group is taking a practical
              step towards a greener Bangladesh.
            </p>
            <Link className="home-sustainability__link" href="/sustainability">
              Explore our sustainability work <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div
            aria-label="0.02 million trees planted"
            className="home-sustainability__impact"
          >
            <span className="home-sustainability__impact-label">Our impact</span>
            <div className="home-sustainability__value">
              <strong>0.02</strong>
              <span>million</span>
            </div>
            <p>trees planted</p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">From across the group</p>
              <h2>News &amp; updates.</h2>
            </div>
            <Link className="arrow-link" href="/news-insights">
              More updates <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="news-grid">
            {latestUpdates.map((update) => (
              <NewsCard compact key={update.slug} update={update} />
            ))}
          </div>
        </div>
      </section>

      <section className="section--white">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Let&apos;s build what comes next.</h2>
            <p>
              Connect with our corporate office for business enquiries,
              partnerships and other questions.
            </p>
          </div>
          <Link className="button" href="/contact">
            Contact Paboya Group <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
