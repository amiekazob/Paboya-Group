"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    eyebrow: "A vision built in Bangladesh",
    title: "A future of possibility.",
    description:
      "Paboya Group began with technology and is growing towards a broader vision across industries.",
    image: "/images/home/bangladesh-future.png",
    link: "/about",
    linkLabel: "Discover Paboya Group",
  },
  {
    eyebrow: "Technology & innovation",
    title: "From IT to the next frontier of technology.",
    description:
      "Our journey began in IT. Our long-term ambition reaches into advanced fields such as artificial intelligence and semiconductors.",
    image: "/images/history/semiconductors.webp",
    link: "/about/history",
    linkLabel: "Explore our story",
  },
  {
    eyebrow: "Pharmaceuticals",
    title: "Advancing access to quality medicines.",
    description:
      "We see an opportunity to advance quality, innovation and reliable access to essential medicines.",
    image: "/images/history/pharmaceuticals.webp",
    link: "/industries",
    linkLabel: "Explore pharmaceuticals",
  },
  {
    eyebrow: "Textile & leather",
    title: "Made with care. Ready for the world.",
    description:
      "We aim to build on Bangladesh’s manufacturing strengths through quality, responsible production and global ambition.",
    image: "/images/history/textile.webp",
    link: "/industries",
    linkLabel: "Explore our industries",
  },
  {
    eyebrow: "Agriculture & fisheries",
    title: "Growing value from land and water.",
    description:
      "We aspire to strengthen food systems through responsible agriculture, sustainable fisheries and modern processing.",
    image: "/images/history/agriculture.webp",
    link: "/industries",
    linkLabel: "Explore our industries",
  },
  {
    eyebrow: "Logistics",
    title: "Connecting industries to opportunity.",
    description:
      "Reliable logistics can help businesses move efficiently, serve local needs and reach new markets.",
    image: "/images/history/logistics.webp",
    link: "/industries",
    linkLabel: "Explore our industries",
  },
] as const;

const AUTO_ROTATE_MS = 6500;

export default function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const inputMode = useRef<"keyboard" | "pointer">("pointer");
  const touchStartX = useRef<number | null>(null);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (isPaused || hasFocus) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_ROTATE_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, hasFocus, isPaused]);

  useEffect(() => {
    const onKeyboardNavigation = (event: KeyboardEvent) => {
      if (event.key === "Tab") inputMode.current = "keyboard";
    };
    const onPointerInteraction = () => {
      inputMode.current = "pointer";
    };

    window.addEventListener("keydown", onKeyboardNavigation);
    window.addEventListener("pointerdown", onPointerInteraction);
    return () => {
      window.removeEventListener("keydown", onKeyboardNavigation);
      window.removeEventListener("pointerdown", onPointerInteraction);
    };
  }, []);

  const moveTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const moveFromControl = (index: number) => {
    moveTo(index);
    if (inputMode.current === "pointer") setHasFocus(false);
  };

  const togglePause = () => {
    setIsPaused((paused) => !paused);
    setHasFocus(false);
  };

  return (
    <section
      aria-label="Featured stories from Paboya Group"
      aria-roledescription="carousel"
      className="home-hero home-hero-slider"
      data-autoplay-paused={isPaused || hasFocus}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHasFocus(false);
        }
      }}
      onFocusCapture={() => {
        if (inputMode.current === "keyboard") {
          setHasFocus(true);
          setIsPaused(true);
        }
      }}
      onTouchEnd={(event) => {
        const startX = touchStartX.current;
        const endX = event.changedTouches[0]?.clientX;
        touchStartX.current = null;
        if (startX === null || endX === undefined) return;
        const distance = endX - startX;
        if (Math.abs(distance) < 48) return;
        moveFromControl(activeIndex + (distance < 0 ? 1 : -1));
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
    >
      <div aria-hidden="true" className="home-hero-slider__visual">
        <Image
          alt=""
          className="home-hero__image home-hero-slider__image"
          fill
          key={activeSlide.image}
          loading="eager"
          sizes="100vw"
          src={activeSlide.image}
        />
        <div className="home-hero-slider__overlay" />
      </div>

      <div className="container home-hero-slider__content">
        <div
          aria-label={`Slide ${activeIndex + 1} of ${slides.length}`}
          aria-roledescription="slide"
          className="home-hero-slider__copy"
          key={activeSlide.eyebrow}
          role="group"
        >
          <p className="eyebrow">{activeSlide.eyebrow}</p>
          <h1 id="home-title">{activeSlide.title}</h1>
          <p className="home-hero-slider__description">
            {activeSlide.description}
          </p>
          <Link className="button button--light home-hero-slider__link" href={activeSlide.link}>
            {activeSlide.linkLabel} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="container home-hero-slider__controls">
        <p aria-hidden="true" className="home-hero-slider__count">
          <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
          <span>/ {String(slides.length).padStart(2, "0")}</span>
        </p>

        <div aria-label="Choose a featured story" className="home-hero-slider__steps" role="group">
          {slides.map((slide, index) => (
            <button
              aria-current={index === activeIndex ? "step" : undefined}
              aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
              className={`home-hero-slider__step${index === activeIndex ? " is-active" : ""}`}
              key={slide.eyebrow}
              onClick={() => moveFromControl(index)}
              type="button"
            >
              <span aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="home-hero-slider__buttons">
          <button
            aria-label="Previous slide"
            className="home-hero-slider__button"
            onClick={() => moveFromControl(activeIndex - 1)}
            type="button"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M19 12H5m0 0 7-7m-7 7 7 7" />
            </svg>
          </button>
          <button
            aria-label={isPaused ? "Play slides" : "Pause slides"}
            aria-pressed={isPaused}
            className="home-hero-slider__button home-hero-slider__button--pause"
            onClick={togglePause}
            type="button"
          >
            {isPaused ? (
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m8 5 11 7-11 7z" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M9 5v14M15 5v14" />
              </svg>
            )}
          </button>
          <button
            aria-label="Next slide"
            className="home-hero-slider__button"
            onClick={() => moveFromControl(activeIndex + 1)}
            type="button"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M5 12h14m0 0-7-7m7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
