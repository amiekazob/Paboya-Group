"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { aboutNavigation, navigation } from "@/lib/site-data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <nav aria-label="Main navigation" className="container site-nav">
          <Link
            aria-label="Paboya Group home — return to page start"
            className="brand"
            href="/#main-content"
            onClick={closeMenu}
          >
            <Image
              alt=""
              className="brand__logo"
              height={830}
              priority
              src="/images/logos/paboya-group.png"
              unoptimized
              width={1340}
            />
          </Link>

          <button
            aria-controls="primary-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
          </button>

          <div className={`site-nav__links${menuOpen ? " is-open" : ""}`} id="primary-menu">
            {navigation.map((item) => {
              const isAbout = item.href === "/about";
              const active = isAbout
                ? pathname === "/about" || pathname.startsWith("/about/") || pathname === "/founder-message"
                : pathname === item.href;

              if (isAbout) {
                return (
                  <div
                    className={`site-nav__dropdown${aboutOpen ? " is-open" : ""}`}
                    key={item.href}
                    onBlurCapture={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        setAboutOpen(false);
                      }
                    }}
                    onFocusCapture={(event) => {
                      if (
                        event.target instanceof HTMLElement &&
                        event.target.matches(":focus-visible")
                      ) {
                        setAboutOpen(true);
                      }
                    }}
                    onPointerEnter={(event) => {
                      if (event.pointerType === "mouse") {
                        setAboutOpen(true);
                      }
                    }}
                    onPointerLeave={(event) => {
                      if (event.pointerType !== "mouse") return;
                      if (event.currentTarget.querySelector(":focus-visible")) return;
                      setAboutOpen(false);
                    }}
                  >
                    <div className="site-nav__about-row">
                      <Link
                        aria-current={active ? "page" : undefined}
                        className={`site-nav__link${active ? " is-active" : ""}`}
                        href={item.href}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                      <button
                        aria-expanded={aboutOpen}
                        aria-label="Toggle About Us menu"
                        className="site-nav__about-toggle"
                        onClick={() => {
                          const supportsHover = window.matchMedia("(hover: hover)").matches;
                          setAboutOpen((open) => (supportsHover ? true : !open));
                        }}
                        type="button"
                      >
                        <span aria-hidden="true">⌄</span>
                      </button>
                    </div>
                    <div className="site-nav__submenu">
                      {aboutNavigation.map((subitem) => {
                        const subactive = pathname === subitem.href;
                        return (
                          <Link
                            aria-current={subactive ? "page" : undefined}
                            className={`site-nav__submenu-link${subactive ? " is-active" : ""}`}
                            href={subitem.href}
                            key={subitem.href}
                            onClick={closeMenu}
                          >
                            {subitem.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={`site-nav__link${active ? " is-active" : ""}`}
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link className="button button--small site-nav__contact" href="/contact" onClick={closeMenu}>
              Contact <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
