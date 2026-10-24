import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutRelatedContent from "@/app/about/AboutRelatedContent";
import HistoryTimeline from "@/app/about/history/history-timeline";
import { createPageMetadata } from "@/lib/seo";
import "@/css/history-page.css";

const pageDescription =
  "Paboya Group began in 2025 as an IT company, founded by Samiul Alam Shajal. Discover the beginning of a vision that continues to grow.";
const shareImage = "/images/hero-industrial.png";

export const metadata: Metadata = createPageMetadata({
  title: "Our History",
  description: pageDescription,
  path: "/about/history",
  image: shareImage,
  imageAlt: "Illustrative industrial scene representing Paboya Group’s broader vision",
});

export default function HistoryPage() {
  return (
    <main className="paboya-history-page" id="main-content">
      <div className="history-breadcrumb-row">
        <nav aria-label="Breadcrumb" className="container history-breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/about">About Us</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Our History</span>
        </nav>
      </div>

      <section aria-labelledby="history-title" className="history-hero">
        <Image
          alt="Illustrative view of colleagues working in an industrial setting, reflecting Paboya Group's wider vision"
          className="history-hero__image"
          fill
          preload
          sizes="100vw"
          src="/images/hero-industrial.png"
        />
        <div aria-hidden="true" className="history-hero__shade" />
        <span className="history-hero__caption">Illustrative image</span>
      </section>

      <div className="container">
        <header className="history-title-card">
          <p className="history-title-card__eyebrow">Paboya Group</p>
          <h1 id="history-title">Our History</h1>
          <p>
            From a beginning in technology to a vision that looks beyond one
            industry.
          </p>
        </header>
      </div>

      <section aria-labelledby="history-beginning-title" className="history-beginning">
        <div className="container history-beginning__layout">
          <div className="history-beginning__heading">
            <p className="history-year">2025.</p>
            <h2 id="history-beginning-title">Where it all began</h2>
          </div>
          <div className="history-beginning__copy">
            <p>
              Paboya Group began its journey in 2025 as an IT company, founded
              by Samiul Alam Shajal. Technology was the starting point, shaped
              by a belief that it could create new opportunities and support
              future growth.
            </p>
            <p>
              From those beginnings came a broader ambition: to explore new
              fields, develop independent ventures, and build a diversified
              business group under a shared direction.
            </p>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="history-wave-divider">
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

      <HistoryTimeline />

      <div aria-hidden="true" className="history-founder-transition">
        <svg height="100%" preserveAspectRatio="none" viewBox="0 0 1440 240" width="100%">
          <path
            d="M0 126 C210 38 420 40 650 105 C880 170 1080 197 1440 95"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
      </div>

      <section
        aria-label="A message from the Founder and Managing Director"
        className="history-founder-quote"
      >
        <div className="history-founder-quote__portrait">
          <Image
            alt="Samiul Alam Shajal, Founder and Managing Director of Paboya Group"
            fill
            sizes="(max-width: 760px) 100vw, 52vw"
            src="/images/history/founder-quote.jpg"
          />
        </div>
        <div className="history-founder-quote__content">
          <span aria-hidden="true" className="history-founder-quote__mark">
            “
          </span>
          <blockquote>
            <p>Start with purpose. Grow with possibility.</p>
            <footer>
              <cite>Samiul Alam Shajal</cite>
              <span>Founder &amp; Managing Director, Paboya Group</span>
            </footer>
          </blockquote>
        </div>
      </section>

      <div aria-hidden="true" className="history-closing-curve">
        <svg height="100%" preserveAspectRatio="none" viewBox="0 0 1440 120" width="100%">
          <path
            d="M0 70 C220 20 430 18 660 49 C900 82 1130 105 1440 48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
      </div>

      <AboutRelatedContent segment="/about/history" />
    </main>
  );
}
