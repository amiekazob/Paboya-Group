import type { Metadata } from "next";
import Image from "next/image";
import AboutRelatedContent from "@/app/about/AboutRelatedContent";
import AboutPremiumHero from "@/components/AboutPremiumHero";
import { createPageMetadata } from "@/lib/seo";
import "@/css/about-premium-subpages.css";

export const metadata: Metadata = createPageMetadata({
  title: "Message from the Founder & Managing Director",
  description:
    "Read a message from Samiul Alam Shajal, Founder and Managing Director of Paboya Group, on building responsible Bangladeshi businesses for global markets.",
  path: "/founder-message",
  image: "/images/history/founder-black-suit.jpg",
  imageAlt: "Samiul Alam Shajal, Founder and Managing Director of Paboya Group",
});

export default function FounderMessagePage() {
  return (
    <main className="about-premium-page chairman-page" id="main-content">
      <AboutPremiumHero
        chapter="Founder / Leadership"
        current="Message from the Founder & Managing Director"
        description="A founder’s perspective on building from Bangladesh, serving local needs and helping Made in Bangladesh earn global trust."
        eyebrow="Leadership · Founder"
        title={<>A message from our<br /><em>Managing Director.</em></>}
      />

      <section className="chairman-story">
        <div className="container chairman-story__layout">
          <figure className="chairman-portrait">
            <Image
              alt="Samiul Alam Shajal, Founder and Managing Director of Paboya Group"
              height={1448}
              src="/images/managing-director.png"
              unoptimized
              width={1086}
            />
            <figcaption className="chairman-portrait__caption">
              <div>
                <strong>Samiul Alam Shajal</strong>
                <span>Founder &amp; Managing Director</span>
              </div>
              <span>Paboya Group</span>
            </figcaption>
          </figure>

          <div className="chairman-copy">
            <div aria-hidden="true" className="chairman-copy__mark">“</div>
            <p>
              Paboya Group began with IT in 2025, built on my belief that
              technology could create opportunity and help solve real problems.
              That beginning grew into a wider ambition: to build responsible
              businesses that contribute to Bangladesh’s progress.
            </p>
            <p>
              To me, Made in Bangladesh should stand for quality, innovation
              and trust. Across the industries we explore, our aim is to serve
              needs at home, strengthen local capabilities and develop products
              and services that can earn confidence in global markets.
            </p>
            <p>
              I believe growth must be responsible and lasting. We aim to build
              with integrity and accountability, adopt useful technologies and
              consider our impact on people, communities and the environment.
            </p>
            <p>
              My ambition is to build from Bangladesh, contribute to the
              country’s progress and help Bangladeshi enterprise compete with
              confidence around the world.
            </p>
            <div className="chairman-signoff">
              <strong>Samiul Alam Shajal</strong>
              <span>Founder &amp; Managing Director, Paboya Group</span>
            </div>
          </div>
        </div>
      </section>

      <AboutRelatedContent segment="/founder-message" />
    </main>
  );
}
