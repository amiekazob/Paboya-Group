"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { industries } from "@/lib/industry-data";
import { companies } from "@/lib/site-data";

const businessViews = ["Industries", "Group companies"] as const;

export default function HomeBusinessesFeature() {
  const [activeView, setActiveView] = useState<(typeof businessViews)[number]>(
    businessViews[0],
  );
  const [activeIndustry, setActiveIndustry] = useState(0);
  const selectedIndustry = industries[activeIndustry];

  return (
    <section
      aria-labelledby="home-businesses-title"
      className="home-businesses-feature"
      id="home-businesses"
    >
      <div className="container">
        <div className="home-businesses-feature__heading">
          <div>
            <p className="eyebrow">Our businesses</p>
            <h2 id="home-businesses-title">A portfolio built for progress.</h2>
          </div>
          <p>
            Explore the industries shaping Paboya Group and the companies
            building our shared ambition.
          </p>
        </div>

        <div
          aria-label="Choose a business view"
          className="home-businesses-feature__views"
        >
          {businessViews.map((view) => (
            <button
              aria-pressed={activeView === view}
              className={
                activeView === view
                  ? "home-businesses-feature__view is-active"
                  : "home-businesses-feature__view"
              }
              key={view}
              onClick={() => setActiveView(view)}
              type="button"
            >
              {view}
            </button>
          ))}
        </div>

        {activeView === "Industries" ? (
          <>
            <nav
              aria-label="Explore industries"
              className="home-businesses-feature__industry-nav"
            >
              {industries.map((industry, index) => (
                <button
                  aria-pressed={activeIndustry === index}
                  className={
                    activeIndustry === index
                      ? "home-businesses-feature__industry-choice is-active"
                      : "home-businesses-feature__industry-choice"
                  }
                  key={industry.name}
                  onClick={() => setActiveIndustry(index)}
                  type="button"
                >
                  <span className="home-businesses-feature__industry-label">
                    {industry.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="home-businesses-feature__industry-arrow"
                  >
                    ↗
                  </span>
                </button>
              ))}
            </nav>

            <article
              aria-live="polite"
              className="home-businesses-feature__spotlight"
            >
              <div className="home-businesses-feature__image">
                <Image
                  alt={selectedIndustry.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 52vw"
                  src={selectedIndustry.image}
                  unoptimized
                />
              </div>
              <div className="home-businesses-feature__spotlight-copy">
                <p className="eyebrow">Industry vertical</p>
                <h3>{selectedIndustry.name}</h3>
                <p>{selectedIndustry.description}</p>
                <Link
                  className="home-businesses-feature__explore"
                  href={`/industries/${selectedIndustry.slug}`}
                >
                  Explore industry <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          </>
        ) : (
          <div className="home-businesses-feature__companies">
            {companies.map((company) => (
              <article
                className="home-businesses-feature__company"
                key={company.name}
              >
                <div
                  className={
                    company.logoBackground === "dark"
                      ? "home-businesses-feature__company-logo is-dark"
                      : "home-businesses-feature__company-logo"
                  }
                >
                  <Image
                    alt={`${company.name} logo`}
                    className="company-card__logo-image"
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    src={company.logo}
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p>{company.sector}</p>
                <h3>{company.name}</h3>
                <span>{company.description}</span>
                <Link href="/companies">
                  View company <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
