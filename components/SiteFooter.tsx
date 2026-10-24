import Image from "next/image";
import Link from "next/link";
import { contactDetails, navigation } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <div className="site-footer__brand-block">
          <Link aria-label="Paboya Group home" className="brand brand--footer" href="/">
            <Image
              alt=""
              className="brand__logo"
              height={830}
              src="/images/logos/paboya-group.png"
              unoptimized
              width={1340}
            />
          </Link>
          <div className="site-footer__brand-copy">
            <p className="site-footer__brand-statement">
              Made in Bangladesh. <span>Built for the World.</span>
            </p>
          </div>
        </div>

        <div className="site-footer__column">
          <h2>Explore</h2>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/founder-message">Founder Message</Link>
        </div>

        <div className="site-footer__column site-footer__contact">
          <h2>Corporate office</h2>
          <address>
            {contactDetails.address.map((line, index) => (
              <span key={line}>
                {line}
                {index < contactDetails.address.length - 1 ? <br /> : null}
              </span>
            ))}
          </address>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          <a href={`tel:${contactDetails.phone.replaceAll("-", "")}`}>
            {contactDetails.phone}
          </a>
          <Link className="footer-map-link" href="/contact">
            Find our office <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Paboya Group. All rights reserved.</span>
        <span>Dhaka, Bangladesh</span>
      </div>

      <div aria-hidden="true" className="site-footer__curve">
        <svg height="100%" preserveAspectRatio="none" viewBox="0 0 1440 96" width="100%">
          <path
            d="M0 21 C190 9 354 16 526 39 C714 64 880 76 1058 49 C1212 25 1324 13 1440 24 L1440 96 L0 96 Z"
          />
        </svg>
      </div>
    </footer>
  );
}
