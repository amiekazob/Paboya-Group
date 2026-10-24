"use client";

import { useCallback, useEffect, useRef, type KeyboardEvent, type PointerEvent } from "react";
import Image from "next/image";

const partners = [
  {
    image: "/partners/1.jpg",
    name: "Global Climate and Environmental Resilience Foundation",
  },
  {
    image: "/partners/2.jpeg",
    name: "International Agriculture, Fisheries and Food Systems Foundation",
  },
  { image: "/partners/3.jpg", name: "ICWF" },
  {
    image: "/partners/4.jpeg",
    name: "Center for South-West Economic and Human Development",
  },
  { image: "/partners/5.jpeg", name: "International Islamic Development Foundation" },
  {
    image: "/partners/6.jpg",
    name: "Center for Bangladesh and Globalization",
  },
  {
    image: "/partners/7.jpg",
    name: "Artificial Intelligence Foundation of Bangladesh",
  },
  { image: "/partners/8.jpg", name: "Bangladesh Semiconductor Society" },
  { image: "/partners/9.jpg", name: "Paboya Foundation" },
  { image: "/partners/10.jpg", name: "Institute of STEM Bangladesh" },
  {
    image: "/partners/11.jpg",
    name: "Probashsathi Migrant Welfare Foundation",
  },
];

export default function PartnerLogoSlider() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ pointerId: number; startX: number; startScrollLeft: number } | null>(null);

  const getTrackMetrics = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const group = track?.querySelector<HTMLElement>(".csr-partners__group");
    const firstCard = group?.querySelector<HTMLElement>(".csr-partner");
    if (!viewport || !track || !group || !firstCard) return null;

    const gap = Number.parseFloat(getComputedStyle(group).columnGap) || 0;
    return {
      viewport,
      step: firstCard.getBoundingClientRect().width + gap,
      cycleWidth: group.getBoundingClientRect().width,
    };
  }, []);

  const move = useCallback((direction: -1 | 1) => {
    const metrics = getTrackMetrics();
    if (!metrics || metrics.step <= 0 || metrics.cycleWidth <= 0) return;
    const { viewport, step, cycleWidth } = metrics;

    if (direction < 0 && viewport.scrollLeft < step / 2) {
      viewport.scrollLeft = cycleWidth;
    }

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    viewport.scrollBy({ left: direction * step, behavior });
  }, [getTrackMetrics]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let normalizeTimer = 0;
    const normalize = () => {
      const metrics = getTrackMetrics();
      if (metrics && metrics.viewport.scrollLeft >= metrics.cycleWidth) {
        metrics.viewport.scrollLeft %= metrics.cycleWidth;
      }
    };
    const scheduleNormalize = () => {
      window.clearTimeout(normalizeTimer);
      normalizeTimer = window.setTimeout(normalize, 140);
    };

    viewport.addEventListener("scroll", scheduleNormalize, { passive: true });
    return () => {
      viewport.removeEventListener("scroll", scheduleNormalize);
      window.clearTimeout(normalizeTimer);
    };
  }, [getTrackMetrics]);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const metrics = getTrackMetrics();
    if (!metrics || metrics.cycleWidth <= 0) return;

    const rawPosition = drag.startScrollLeft - (event.clientX - drag.startX);
    metrics.viewport.scrollLeft =
      ((rawPosition % metrics.cycleWidth) + metrics.cycleWidth) % metrics.cycleWidth;
  }

  function handlePointerEnd(event: PointerEvent<HTMLDivElement>) {
    if (dragRef.current?.pointerId !== event.pointerId) return;
    dragRef.current = null;
  }

  function handleTrackKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  return (
    <section className="csr-partners" aria-labelledby="csr-partners-title">
      <div className="container">
        <div className="csr-partners__header">
          <div>
            <p className="eyebrow">Our network</p>
            <h2 id="csr-partners-title">Our Partners</h2>
          </div>
          <div
            className="csr-partners__controls"
            aria-label="Partner logo controls"
            role="group"
          >
            <button
              aria-label="Show previous partner logos"
              className="csr-partners__control"
              onClick={() => move(-1)}
              type="button"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              aria-label="Show next partner logos"
              className="csr-partners__control"
              onClick={() => move(1)}
              type="button"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div
          aria-label="Partner logos, ordered by number"
          className="csr-partners__viewport"
          ref={viewportRef}
          role="group"
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onLostPointerCapture={handlePointerEnd}
          onKeyDown={handleTrackKeyDown}
        >
          <div className="csr-partners__track" ref={trackRef}>
            <div className="csr-partners__group">
              {partners.map((partner) => (
                <div className="csr-partner" key={partner.image}>
                  <div className="csr-partner__logo">
                    <Image
                      alt={`${partner.name} logo`}
                      height={1600}
                      src={partner.image}
                      unoptimized
                      width={1600}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="csr-partners__group">
              {partners.map((partner) => (
                <div className="csr-partner" key={`loop-${partner.image}`}>
                  <div className="csr-partner__logo">
                    <Image
                      alt=""
                      height={1600}
                      src={partner.image}
                      unoptimized
                      width={1600}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
