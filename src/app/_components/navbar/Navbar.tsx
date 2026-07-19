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

const navigationItems: NavigationItem[] = [
  { name: "About me", section: "about-me" },
  { name: "Skills", section: "skills" },
  { name: "Experiences", section: "experiences" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string>("about-me");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isNavbarCompact, setIsNavbarCompact] = useState<boolean>(false);

  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const getSections = () =>
      navigationItems
        .map(({ section }) => document.getElementById(section))
        .filter((section): section is HTMLElement => Boolean(section));

    const updateNavigationState = () => {
      const sections = getSections();

      if (!sections.length) {
        return;
      }

      const activationLine = window.innerHeight * 0.35;
      const shouldCompactNavbar = window.scrollY > 24;

      setIsNavbarCompact((previousState) =>
        previousState !== shouldCompactNavbar ? shouldCompactNavbar : previousState
      );

      let nextActiveSection = sections[0].id;

      for (const section of sections) {
        const { top } = section.getBoundingClientRect();

        if (top - activationLine <= 0) {
          nextActiveSection = section.id;
          continue;
        }

        break;
      }

      const hasReachedPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (hasReachedPageBottom) {
        nextActiveSection = sections[sections.length - 1].id;
      }

      setActiveLink((previousLink) =>
        previousLink === nextActiveSection ? previousLink : nextActiveSection
      );
    };

    const scheduleNavigationUpdate = () => {
      if (animationFrame.current !== null) {
        return;
      }

      animationFrame.current = window.requestAnimationFrame(() => {
        updateNavigationState();
        animationFrame.current = null;
      });
    };

    scheduleNavigationUpdate();
    const initialTimeout = window.setTimeout(scheduleNavigationUpdate, 160);

    window.addEventListener("scroll", scheduleNavigationUpdate, { passive: true });
    window.addEventListener("resize", scheduleNavigationUpdate);
    window.addEventListener("hashchange", scheduleNavigationUpdate);

    return () => {
      window.clearTimeout(initialTimeout);
      window.removeEventListener("scroll", scheduleNavigationUpdate);
      window.removeEventListener("resize", scheduleNavigationUpdate);
      window.removeEventListener("hashchange", scheduleNavigationUpdate);

      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  const handleClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);

    const sectionElement = document.getElementById(link);

    if (!sectionElement) {
      router.push(`/#${link}`);
      return;
    }

    sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `/#${link}`);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const handleCloseMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`${styles.navbar} ${isNavbarCompact ? styles.navbarScrolled : ""}`}
    >
      <nav
        className={`${styles.desktopNav} ${
          isNavbarCompact ? styles.desktopNavScrolled : ""
        }`}
        aria-label="Primary"
      >
        <ul className={styles.desktopList}>
          {navigationItems.map((element) => (
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
        className={`${styles.menuOpener} ${
          isNavbarCompact ? styles.menuOpenerScrolled : ""
        }`}
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
          {navigationItems.map((element) => (
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
