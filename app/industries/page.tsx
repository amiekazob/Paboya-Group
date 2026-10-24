import type { Metadata } from "next";
import Link from "next/link";
import { coreIndustries, strategicSectorGroups } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";
import "@/css/industries.css";

export const metadata: Metadata = createPageMetadata({
  title: "Industries",
  description:
    "Explore Paboya Group’s industries, from pharmaceuticals and textiles to agriculture, logistics, information technology and semiconductors.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <main className="industries-page" id="main-content">
      <section aria-labelledby="industries-page-title" className="industries-hero">
        <div aria-hidden="true" className="industries-hero__pattern" />
        <div className="container industries-hero__container">
          <nav aria-label="Breadcrumb" className="industries-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Industries</span>
          </nav>

          <div className="industries-hero__panel">
            <p className="eyebrow">Where we work</p>
            <h1 id="industries-page-title">Industries</h1>
            <p className="industries-hero__tagline">
              A broad portfolio, built with focus.
            </p>
            <p className="industries-hero__description">
              A diversified Bangladesh-based group building capabilities across
              established businesses and wider strategic sectors.
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="industries-hero__wave" />
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="industry-group-overview">
            <div className="industry-group-overview__heading">
              <p className="eyebrow">About Paboya Group</p>
              <h2>Building capability across a broad portfolio.</h2>
            </div>
            <div className="industry-group-overview__copy">
              <p>
                Paboya Group is a diversified group rooted in Bangladesh,
                bringing together businesses across pharmaceuticals, textiles
                and apparel, leather, agro industries, fisheries, logistics,
                information technology and heritage fashion. The portfolio
                spans essential products, services and capabilities that
                support everyday life and economic activity. Across its
                businesses, the Group aims to build dependable operations,
                strengthen quality and serve customers and communities through
                a long-term approach.
              </p>
              <p>
                Alongside its operating businesses, Paboya Group identifies a
                broader set of strategic interests. These include jute and
                natural fibers, healthcare services, infrastructure and
                industrial construction, packaging solutions, green and
                renewable energy, climate and environmental initiatives,
                specialty chemicals, international import-export services and
                international human resource services. Together, these sectors
                reflect areas where the Group sees opportunities to develop new
                capabilities and participate in connected markets.
              </p>
              <p>
                The Group&apos;s direction is guided by long-term thinking,
                responsible leadership and a focus on creating lasting value.
                By drawing on experience across established industries and
                exploring emerging opportunities, Paboya Group seeks to
                contribute to resilient businesses, sustainable progress and
                wider economic development in Bangladesh and beyond.
              </p>
            </div>
          </div>

          <p className="eyebrow">Operating businesses</p>
          <h2 className="section-title">Capabilities across essential sectors.</h2>
          <ol className="industry-list">
            {coreIndustries.map((industry, index) => (
              <li
                className="industry-list__item"
                key={industry.name}
                style={{ animationDelay: `${index * 45}ms` }}
              >
                <div className="industry-list__copy">
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <section aria-labelledby="semiconductor-title" className="semiconductor-feature">
            <div className="semiconductor-feature__copy">
              <p className="eyebrow">Featured strategic sector</p>
              <h2 id="semiconductor-title">Semiconductor industry.</h2>
              <p>
                Semiconductors power modern electronics and digital
                infrastructure, supporting technologies used across computing,
                communications, healthcare, transport and industry.
              </p>
              <p>
                Paboya Group is expanding into the semiconductor sector, adding
                a future-facing technology focus to its diversified portfolio.
                The sector spans a global value chain that includes design,
                materials, manufacturing, packaging, testing and distribution.
              </p>
              <Link
                className="semiconductor-feature__link"
                href="/news-insights/paboya-group-enters-semiconductor-sector"
              >
                Read about the expansion <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div aria-hidden="true" className="semiconductor-feature__visual">
              <span className="semiconductor-feature__visual-label">
                SILICON / INTEGRATED CIRCUITS
              </span>
              <svg className="semiconductor-feature__circuit" viewBox="0 0 520 320" preserveAspectRatio="none">
                <g className="semiconductor-feature__trace-base" fill="none">
                  <path d="M0 70H66V104H126V128H190" />
                  <path d="M0 250H74V218H144V194H190" />
                  <path d="M52 0V44H112V68H164V90H206" />
                  <path d="M190 320V276H154V250H168V230" />
                  <path d="M520 70H454V104H394V128H330" />
                  <path d="M520 250H446V218H376V194H330" />
                  <path d="M468 0V44H408V68H356V90H314" />
                  <path d="M330 320V276H366V250H352V230" />
                </g>
                <g className="semiconductor-feature__trace-flow" fill="none">
                  <path d="M0 70H66V104H126V128H190" />
                  <path d="M0 250H74V218H144V194H190" />
                  <path d="M52 0V44H112V68H164V90H206" />
                  <path d="M190 320V276H154V250H168V230" />
                  <path d="M520 70H454V104H394V128H330" />
                  <path d="M520 250H446V218H376V194H330" />
                  <path d="M468 0V44H408V68H356V90H314" />
                  <path d="M330 320V276H366V250H352V230" />
                </g>
                <g className="semiconductor-feature__nodes">
                  <circle cx="66" cy="104" r="4" />
                  <circle cx="126" cy="128" r="4" />
                  <circle cx="74" cy="218" r="4" />
                  <circle cx="144" cy="194" r="4" />
                  <circle cx="454" cy="104" r="4" />
                  <circle cx="394" cy="128" r="4" />
                  <circle cx="446" cy="218" r="4" />
                  <circle cx="376" cy="194" r="4" />
                </g>
              </svg>
              <div className="semiconductor-feature__chip">
                <span>Si</span>
                <small>SEMICONDUCTOR</small>
              </div>
              <span className="semiconductor-feature__visual-caption">
                DESIGN · FABRICATION · TEST
              </span>
            </div>
          </section>

          <section aria-labelledby="strategic-sectors-title" className="strategic-sector-block">
            <div className="strategic-sector-block__intro">
              <p className="eyebrow">Wider portfolio</p>
              <h2 id="strategic-sectors-title">Additional strategic sectors.</h2>
              <p>
                Paboya Group also identifies the following sectors within its
                wider portfolio and strategic interests.
              </p>
            </div>
            <div className="strategic-sector-groups">
              {strategicSectorGroups.map((group, index) => (
                <section
                  className="strategic-sector-group"
                  key={group.title}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <h3>{group.title}</h3>
                  <ul>
                    {group.sectors.map((sector) => <li key={sector}>{sector}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
