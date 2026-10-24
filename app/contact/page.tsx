import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { contactDetails } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";
import "@/css/contact.css";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Paboya Group in Dhaka, Bangladesh. Find corporate office details, email and phone information, or send a business enquiry.",
  path: "/contact",
});

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    contactDetails.address.join(", "),
  );

  return (
    <main className="contact-page" id="main-content">
      <section aria-labelledby="contact-page-title" className="contact-hero">
        <div aria-hidden="true" className="contact-hero__pattern" />
        <div className="container contact-hero__container">
          <nav aria-label="Breadcrumb" className="contact-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Contact</span>
          </nav>

          <div className="contact-hero__panel">
            <p className="eyebrow">We are here to help</p>
            <h1 id="contact-page-title">Contact</h1>
            <p className="contact-hero__tagline">Let’s start a conversation.</p>
            <p className="contact-hero__description">
              Get in touch with our corporate office and teams.
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="contact-hero__wave" />
      </section>

      <section aria-label="Contact Paboya Group" className="contact-content">
        <div className="container contact-content__layout">
          <ContactForm kind="contact" />
          <aside aria-label="Corporate office contact information" className="contact-details">
            <div className="contact-detail contact-detail--office">
              <p className="contact-detail__label">Corporate office</p>
              <address>
                {contactDetails.address.map((line, index) => (
                  <span key={line}>
                    {index === 0 ? <strong>{line}</strong> : line}
                    {index < contactDetails.address.length - 1 ? <br /> : null}
                  </span>
                ))}
              </address>
            </div>
            <div className="contact-detail contact-detail--reach">
              <p className="contact-detail__label">Reach our team</p>
              <a className="contact-detail__link" href={`mailto:${contactDetails.email}`}>
                <span>Email</span>
                <strong>{contactDetails.email}</strong>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                className="contact-detail__link"
                href={`tel:${contactDetails.phone.replaceAll("-", "")}`}
              >
                <span>Phone</span>
                <strong>{contactDetails.phone}</strong>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="contact-detail contact-detail--location">
              <div
                aria-label="Map illustration showing our office area"
                className="contact-detail__map"
                role="img"
              />
              <div className="contact-detail__location-footer">
                <div>
                  <p className="contact-detail__label">Visit us</p>
                  <strong>Kawran Bazar, Dhaka–1215</strong>
                </div>
                <a
                  className="map-link"
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  Directions <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
