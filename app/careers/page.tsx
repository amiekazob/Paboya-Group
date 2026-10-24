import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/seo";
import "@/css/careers.css";

export const metadata: Metadata = createPageMetadata({
  title: "Careers",
  description:
    "Explore career opportunities at Paboya Group and learn about joining a growing Bangladesh-based group across multiple industries.",
  path: "/careers",
});

const opportunities = [
  "Manufacturing operations",
  "Quality and R&D",
  "Supply chain and logistics",
  "Corporate functions",
];

export default function CareersPage() {
  return (
    <main className="careers-page" id="main-content">
      <section aria-labelledby="careers-page-title" className="careers-hero">
        <div aria-hidden="true" className="careers-hero__pattern" />
        <div className="container careers-hero__container">
          <nav aria-label="Breadcrumb" className="careers-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Careers</span>
          </nav>

          <div className="careers-hero__panel">
            <p className="careers-hero__label">Careers · Join the group</p>
            <h1 id="careers-page-title">Careers</h1>
            <p className="careers-hero__tagline">Build your next chapter with us.</p>
          </div>
        </div>
        <div aria-hidden="true" className="careers-hero__wave" />
      </section>

      <section aria-label="Careers and applications" className="careers-content">
        <div className="container">
          <div className="careers-content__layout">
            <div className="careers-details">
              <section aria-labelledby="careers-overview-title" className="careers-overview">
                <h2 id="careers-overview-title">Work where capability meets opportunity.</h2>
                <p>
                  We build for the long term through strong governance,
                  meaningful work and practical learning. Structured programs,
                  hands-on experience and mentorship support inclusive,
                  merit-based growth.
                </p>
              </section>

              <section aria-labelledby="career-opportunities-title" className="career-opportunities">
                <h3 id="career-opportunities-title">Career opportunities</h3>
                <p>{opportunities.join(" · ")}</p>
              </section>
            </div>

            <aside aria-label="Apply to Paboya Group" className="careers-application">
              <ContactForm kind="careers" />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
