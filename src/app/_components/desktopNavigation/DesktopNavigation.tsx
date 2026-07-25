"use client";

import { useEffect, useState } from "react";

import {
  navigateToSection,
  navigationItems,
} from "@/app/_libs/navigation";
import styles from "./desktopNavigation.module.css";

export default function DesktopNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrolledState();

    window.addEventListener("scroll", updateScrolledState, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);

  return (
    <header
      className={`${styles.desktopHeader} ${
        isScrolled ? styles.desktopHeaderScrolled : ""
      }`}
    >
      <nav className={styles.navigation} aria-label="Primary navigation">
        <a
          href="#top"
          className={styles.brand}
          onClick={(event) => {
            event.preventDefault();
            navigateToSection("#top");
          }}
        >
          AV / 2026
        </a>

        <ul className={styles.navigationList}>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles.navigationLink}
                onClick={(event) => {
                  event.preventDefault();
                  navigateToSection(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
