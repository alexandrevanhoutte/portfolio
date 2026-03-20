"use client";

import NavbarElement from "@/app/_components/navbarElement/NavbarElement";
import { CrossIcon } from "@/app/_svg/CrossIcon";
import { MenuIcon } from "@/app/_svg/MenuIcon";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";

interface NavigationItem {
  name: string;
  section: string;
}

export default function Navbar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string | null>(() => {
    if (typeof window === "undefined") {
      return "about-me";
    }

    return window.location.hash.replace("#", "") || "about-me";
  });
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const elements: NavigationItem[] = [
    { name: "About me", section: "about-me" },
    { name: "Skills", section: "skills" },
    { name: "Experiences", section: "experiences" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];

  const sectionObserver = useRef<IntersectionObserver | null>(null);
  const visibilityRatios = useRef<Record<string, number>>({});

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]")
    );

    if (!sections.length) {
      return;
    }

    sectionObserver.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityRatios.current[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });

        const highestVisibleSection = sections.reduce((bestSection, section) => {
          const currentRatio = visibilityRatios.current[section.id] ?? 0;
          const bestRatio = visibilityRatios.current[bestSection.id] ?? 0;

          return currentRatio > bestRatio ? section : bestSection;
        }, sections[0]);

        if ((visibilityRatios.current[highestVisibleSection.id] ?? 0) > 0) {
          setActiveLink(highestVisibleSection.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-25% 0px -45% 0px",
      }
    );

    sections.forEach((section) => sectionObserver.current?.observe(section));

    return () => {
      sections.forEach((section) => sectionObserver.current?.unobserve(section));
      sectionObserver.current?.disconnect();
      visibilityRatios.current = {};
    };
  }, []);

  const handleClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    router.push(`/#${link}`);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const handleCloseMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <nav className={styles.desktopNav} aria-label="Primary">
        <ul className={styles.desktopList}>
          {elements.map((element) => (
            <NavbarElement
              key={element.section}
              name={element.name}
              section={element.section}
              variant="desktop"
              isActive={activeLink === element.section}
              onClick={handleClick}
            />
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className={styles.menuOpener}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
      </button>

      <div
        className={`${styles.filter} ${isMenuOpen ? styles.filterVisible : ""}`}
        onClick={handleCloseMobileMenu}
      />

      <nav
        id="mobile-navigation"
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Mobile primary"
      >
        <ul className={styles.mobileList}>
          {elements.map((element) => (
            <NavbarElement
              key={element.section}
              name={element.name}
              section={element.section}
              variant="mobile"
              isActive={activeLink === element.section}
              onClick={handleClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
