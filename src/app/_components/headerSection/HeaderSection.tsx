"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./headerSection.module.css";

const navigationItems = [
  {
    number: "01",
    label: "About",
    description: "Background & approach",
    href: "#about-me",
  },
  {
    number: "02",
    label: "Experience",
    description: "Roles, systems & impact",
    href: "#experiences",
  },
  {
    number: "03",
    label: "Technical Expertise",
    description: "Stack & engineering focus",
    href: "#skills",
  },
  {
    number: "04",
    label: "Projects",
    description: "Selected work",
    href: "#projects",
  },
  {
    number: "05",
    label: "Contact",
    description: "Start a conversation",
    href: "#contact",
  },
];

export default function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const previousOverflowRef = useRef<string>("");

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      previousOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflowRef.current;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    const mql = window.matchMedia("(min-width: 769px)");
    const handleResize = () => {
      if (mql.matches) {
        closeMenu();
      }
    };
    mql.addEventListener("change", handleResize);

    return () => {
      document.body.style.overflow = previousOverflowRef.current;
      document.removeEventListener("keydown", handleKeyDown);
      mql.removeEventListener("change", handleResize);
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (menuOpen) {
      requestAnimationFrame(() => {
        const menu = document.getElementById("mobile-navigation");
        const firstLink = menu?.querySelector<HTMLAnchorElement>("a");
        firstLink?.focus();
      });
    } else if (menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "Tab") return;

    const menu = document.getElementById("mobile-navigation");
    if (!menu) return;

    const links = menu.querySelectorAll<HTMLAnchorElement>("a");
    if (links.length === 0) return;

    const first = links[0];
    const last = links[links.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <header id="top" className={styles.hero}>
      <div className={styles.mobileHeader}>
        <a href="#top" className={styles.mobileBrand}>
          AV / 2026
        </a>
        <button
          ref={menuButtonRef}
          type="button"
          className={styles.mobileMenuButton}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={handleMenuToggle}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className={styles.mobileMenu}
          aria-label="Mobile primary"
          onKeyDown={handleMenuKeyDown}
        >
          <div className={styles.mobileMenuList}>
            {navigationItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.mobileMenuLink}
                onClick={handleLinkClick}
                style={{ "--menu-index": index } as CSSProperties}
              >
                <span className={styles.mobileMenuNumber}>{item.number}</span>
                <span className={styles.mobileMenuContent}>
                  <span className={styles.mobileMenuLabel}>{item.label}</span>
                  <span className={styles.mobileMenuDescription}>
                    {item.description}
                  </span>
                </span>
              </a>
            ))}
          </div>
          <footer className={styles.mobileMenuFooter}>
            <span>Senior Backend Engineer</span>
            <span>Seoul, South Korea</span>
          </footer>
        </nav>
      )}

      <div className={styles.container}>
        <nav className={styles.headerNav} aria-label="Primary">
          <span className={styles.navBrand}>AV / 2026</span>
          <ul className={styles.navLinks}>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className={styles.navLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <hr className={styles.divider} />
        <div className={styles.heroBody}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Senior Backend Engineer · Go</p>
            <h1 className={styles.name}>Alexandre Vanhoutte</h1>
            <p className={styles.title}>Senior Backend Engineer</p>
            <p className={styles.specialization}>Go · Distributed Systems</p>
          </div>
        </div>
        <hr className={styles.bottomDivider} />
      </div>
    </header>
  );
}
