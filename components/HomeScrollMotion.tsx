"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const revealSelector = [
  ".stat",
  ".about-preview__copy",
  ".about-preview__panel",
  ".section-heading",
  ".company-card",
  ".sector-feature__lead",
  ".sector-feature__list li",
  ".chairman-preview__image",
  ".chairman-preview__copy",
  ".responsibility-banner > div",
  ".news-card",
  ".cta-band > *",
].join(",");

export default function HomeScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.06,
      wheelMultiplier: 0.78,
    });

    const home = document.querySelector<HTMLElement>("[data-home-motion]");
    if (!home) return () => lenis.destroy();
    const hero = home.querySelector<HTMLElement>(".home-hero");
    const heroImage = home.querySelector<HTMLElement>(".home-hero__image");

    const updateScrollMotion = () => {
      home.style.setProperty("--home-scroll-progress", String(lenis.progress));

      if (hero && heroImage) {
        const heroScroll = Math.min(Math.max(lenis.scroll, 0), hero.offsetHeight);
        heroImage.style.setProperty("translate", `0 ${heroScroll * 0.08}px`);
      }
    };
    const unsubscribeScroll = lenis.on("scroll", updateScrollMotion);
    updateScrollMotion();

    const targets = home.querySelectorAll<HTMLElement>(revealSelector);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-reveal", "visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((target, index) => {
      target.setAttribute("data-reveal", "pending");
      target.style.setProperty("--home-reveal-delay", `${(index % 3) * 100}ms`);
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      unsubscribeScroll();
      home.style.removeProperty("--home-scroll-progress");
      heroImage?.style.removeProperty("translate");
      lenis.destroy();
    };
  }, []);

  return null;
}
