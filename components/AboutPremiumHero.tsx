import type { ReactNode } from "react";
import Link from "next/link";

type AboutPremiumHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  chapter: string;
  current: string;
  variant?: "panel" | "immersive";
};

export default function AboutPremiumHero({
  eyebrow,
  title,
  description,
  chapter,
  current,
  variant = "panel",
}: AboutPremiumHeroProps) {
  return (
    <section
      aria-labelledby="about-subpage-title"
      className={`about-premium-hero${variant === "immersive" ? " about-premium-hero--immersive" : ""}`}
    >
      <div aria-hidden="true" className="about-premium-hero__backdrop" />
      <div aria-hidden="true" className="about-premium-hero__shade" />
      <div className="container about-premium-hero__container">
        <nav aria-label="Breadcrumb" className="about-premium-hero__breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/about">About Us</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">{current}</span>
        </nav>

        <div className="about-premium-hero__panel">
          <div className="about-premium-hero__copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1 id="about-subpage-title">{title}</h1>
            <p className="about-premium-hero__lead">{description}</p>
          </div>
          <div aria-hidden="true" className="about-premium-hero__mark-label">{chapter}</div>
        </div>
      </div>
    </section>
  );
}
