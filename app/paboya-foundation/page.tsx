import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PartnerLogoSlider from "@/components/PartnerLogoSlider";
import { createPageMetadata } from "@/lib/seo";
import "@/css/csr.css";

export const metadata: Metadata = createPageMetadata({
  title: "Paboya Foundation",
  description:
    "Learn about Paboya Foundation’s work in education, humanitarian assistance, health, climate, livelihoods, research and sustainable development in Bangladesh.",
  path: "/paboya-foundation",
  image: "/images/logos/paboya-foundation.jpg",
  imageAlt: "Paboya Foundation logo",
});

const programmes = [
  {
    category: "Climate",
    title: "Brikkhoropon Programme 2025",
    image: "/images/csr/climate-tree-planting.jpg",
    imageWidth: 1093,
    imageHeight: 1600,
    imageAlt:
      "Paboya Foundation Brikkhoropon Programme 2025 poster showing volunteers planting trees",
  },
  {
    category: "Education",
    title: "Books and learning support for children",
    image: "/images/csr/education.jpg",
    imageWidth: 1093,
    imageHeight: 1600,
    imageAlt:
      "Paboya Foundation education programme poster showing children receiving books",
  },
  {
    category: "Hunger Solution",
    title: "Community food support",
    image: "/images/csr/hunger-solution.jpg",
    imageWidth: 1130,
    imageHeight: 1600,
    imageAlt:
      "Paboya Foundation food programme poster showing volunteers distributing meals",
  },
];

export default function PaboyaFoundationPage() {
  return (
    <main className="csr-page" id="main-content">
      <section aria-labelledby="foundation-title" className="foundation-hero">
        <div aria-hidden="true" className="foundation-hero__pattern" />
        <div className="container foundation-hero__container">
          <nav aria-label="Breadcrumb" className="foundation-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Paboya Foundation</span>
          </nav>

          <div className="foundation-hero__panel">
            <p className="eyebrow">Corporate social responsibility</p>
            <h1 id="foundation-title">Paboya Foundation</h1>
            <p className="foundation-hero__lead">
              A Global Corporate Philanthropic Foundation for Education,
              Humanitarian Action and Sustainable Development
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="foundation-hero__wave" />
      </section>

      <section aria-label="Foundation overview" className="foundation-overview">
        <div className="foundation-overview__container">
          <div className="foundation-overview__layout">
          <div className="foundation-overview__copy">
            <div className="foundation-overview__description">
              <p>
                Paboya Foundation is a philanthropic foundation supported by
                Paboya Group, established to advance education, humanitarian
                action, healthcare, scientific research, technological
                innovation, and sustainable development. Guided by a long-term
                commitment to social impact, the Foundation seeks to expand
                opportunities, strengthen communities, and improve the quality of
                life of underserved and marginalized populations.
              </p>
              <p>
                Registered in Bangladesh under the applicable laws and
                regulations of the Government of the People’s Republic of
                Bangladesh, Paboya Foundation is committed to upholding human
                dignity, promoting equal opportunities, advancing social justice,
                and fostering sustainable development.
              </p>
              <p>
                The Foundation’s areas of work include education, humanitarian
                assistance, healthcare, climate and environmental sustainability,
                livelihood development, vocational training, responsible
                artificial intelligence, research and innovation, sports, arts
                and culture, human rights, and evidence-based policy development.
                Through collaboration with educational institutions, research
                organizations, civil society, development partners, and other
                legally recognized entities, the Foundation seeks to create
                meaningful and lasting social impact at national and international
                levels.
              </p>
              <p>
                <strong>Mr. Samiul Alam Shajal</strong>, Founder and Managing
                Director of Paboya Group, is the Founder and Chairman of Paboya
                Foundation. Under his founding leadership, the Foundation aims to
                advance its philanthropic mission through inclusive initiatives
                that promote education, humanitarian action, innovation, and
                sustainable social development.
              </p>
            </div>
          </div>
          <aside aria-label="Paboya Foundation identity" className="foundation-overview__identity">
            <span className="foundation-overview__identity-label">Our foundation</span>
            <div className="foundation-overview__logo-wrap">
              <Image
                alt="Paboya Foundation logo"
                className="foundation-overview__logo"
                height={1600}
                src="/images/logos/paboya-foundation.jpg"
                unoptimized
                width={1600}
              />
            </div>
            <p>Education · humanitarian action · sustainable development</p>
          </aside>
          </div>
        </div>
      </section>

      <section className="csr-programmes section--white">
        <div className="container">
          <h2 className="csr-programmes__heading">Featured work</h2>
          <div className="csr-program-grid">
            {programmes.map((programme, index) => (
              <article className="csr-program-card" key={programme.category}>
                <div className="csr-program-card__image-wrap">
                  <Image
                    alt={programme.imageAlt}
                    className="csr-program-card__image"
                    height={programme.imageHeight}
                    src={programme.image}
                    width={programme.imageWidth}
                  />
                </div>
                <div className="csr-program-card__body">
                  <p className="csr-program-card__category">
                    <span className="csr-program-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {programme.category}
                  </p>
                  <h3>{programme.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PartnerLogoSlider />
    </main>
  );
}
