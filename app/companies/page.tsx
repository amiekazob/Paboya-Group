import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { companies } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";
import "@/css/companies.css";

export const metadata: Metadata = createPageMetadata({
  title: "Our Companies",
  description:
    "Meet Paboya Group’s operating companies across pharmaceuticals, textiles, leather, agriculture, fisheries, logistics, information technology and fashion.",
  path: "/companies",
});

export default function CompaniesPage() {
  return (
    <main className="companies-page" id="main-content">
      <section aria-labelledby="companies-page-title" className="companies-hero">
        <div aria-hidden="true" className="companies-hero__pattern" />
        <div className="container companies-hero__container">
          <nav aria-label="Breadcrumb" className="companies-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Companies</span>
          </nav>

          <div className="companies-hero__panel">
            <p className="eyebrow">The group</p>
            <h1 id="companies-page-title">
              Independent businesses. Shared ambition.
            </h1>
            <p className="companies-hero__description">
              Eight companies operating with shared governance, standards and
              systems across essential sectors.
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="companies-hero__wave" />
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="company-intro">
            <p>
              From medicines and materials to food, logistics, technology and
              heritage fashion, each company brings focused experience to the
              group’s wider portfolio.
            </p>
          </div>
          <div className="companies-page-grid">
            {companies.map((company) => (
              <article className="company-card" key={company.name}>
                <div
                  className={`company-card__logo companies-page-grid__logo${
                    company.logoBackground === "dark" ? " company-card__logo--dark" : ""
                  }`}
                >
                  <Image
                    alt={`${company.name} logo`}
                    className="companies-page-grid__logo-image"
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1050px) 42vw, 28vw"
                    src={company.logo}
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="company-card__sector">{company.sector}</p>
                <h3>{company.name}</h3>
                <p className="company-card__description">{company.description}</p>
                <Link
                  className="arrow-link"
                  href={company.profileHref}
                >
                  Explore industry <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Work with us</p>
            <h2>Interested in our businesses?</h2>
            <p>Contact our corporate office for enquiries and partnerships.</p>
          </div>
          <Link className="button" href="/contact">
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
