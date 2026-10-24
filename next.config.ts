import type { NextConfig } from "next";

const legacyPages = [
  ["/csr", "/paboya-foundation"],
  ["/news", "/news-insights"],
  ["/news/:slug*", "/news-insights/:slug*"],
  ["/index.html", "/"],
  ["/about.html", "/about"],
  ["/chairman-message.html", "/founder-message"],
  ["/companies.html", "/companies"],
  ["/industries.html", "/industries"],
  ["/csr.html", "/paboya-foundation"],
  ["/news.html", "/news-insights"],
  ["/careers.html", "/careers"],
  ["/contact.html", "/contact"],
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "192.168.0.194"],
  async redirects() {
    return legacyPages.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
