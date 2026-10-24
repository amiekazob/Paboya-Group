import type { Metadata } from "next";
import GlobalStructuredData from "@/components/GlobalStructuredData";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";
import "@/css/style.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Paboya Group | Made in Bangladesh. Built for the World.",
    template: "%s | Paboya Group",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Paboya Group",
  publisher: "Paboya Group",
  creator: "Paboya Group",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Paboya Group",
    title: "Paboya Group | Made in Bangladesh. Built for the World.",
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_BD",
    images: [{ url: DEFAULT_SOCIAL_IMAGE, alt: DEFAULT_SOCIAL_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paboya Group | Made in Bangladesh. Built for the World.",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-BD">
      <body>
        <GlobalStructuredData />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
