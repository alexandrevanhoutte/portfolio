"use client";

import ActionLink from "@/app/_components/actionLink/ActionLink";
import { navigateToSection, navigationItems } from "@/app/_libs/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./mobileNavigation.module.css";

const sectionHashes = new Set(navigationItems.map((item) => item.href));

export default function MobileNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const previousOverflowRef = useRef<string>("");
  const wasMenuOpenRef = useRef(false);
  const restoreFocusRef = useRef(true);
  const pendingNavigationRef = useRef<string | null>(null);

  const closeMenu = useCallback(({ restoreFocus = true } = {}) => {
    restoreFocusRef.current = restoreFocus;
    setMenuOpen(false);
  }, []);

  useLayoutEffect(() => {
    if (!sectionHashes.has(window.location.hash)) {
      return;
    }

    const cleanUrl = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, "", cleanUrl);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
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
      wasMenuOpenRef.current = true;

      requestAnimationFrame(() => {
        const menu = document.getElementById("mobile-navigation");
        const firstLink = menu?.querySelector<HTMLAnchorElement>("a");
        firstLink?.focus({ preventScroll: true });
      });

      return;
    }

    if (!wasMenuOpenRef.current) {
      return;
    }

    wasMenuOpenRef.current = false;

    if (restoreFocusRef.current) {
      requestAnimationFrame(() => {
        menuButtonRef.current?.focus({ preventScroll: true });
      });
    }
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      return;
    }

    const pendingHref = pendingNavigationRef.current;
    if (!pendingHref) {
      return;
    }

    pendingNavigationRef.current = null;

    requestAnimationFrame(() => {
      navigateToSection(pendingHref);
    });
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMobileNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    pendingNavigationRef.current = href;
    closeMenu({ restoreFocus: false });
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "Tab") return;

    const menu = document.getElementById("mobile-navigation");
    if (!menu) return;

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const navFocusables = menu.querySelectorAll<HTMLElement>(focusableSelector);
    const closeButton = menuButtonRef.current;

    const allFocusables: HTMLElement[] = closeButton
      ? [...navFocusables, closeButton]
      : [...navFocusables];

    if (allFocusables.length === 0) return;

    const first = allFocusables[0];
    const last = allFocusables[allFocusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <>
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
                onClick={(event) =>
                  handleMobileNavigation(event, item.href)
                }
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
            <ActionLink
              href="/files/alexandre-vanhoutte-cv.pdf"
              download="Alexandre-Vanhoutte-CV.pdf"
              aria-label="Download CV (PDF)"
              className={styles.mobileCvAction}
              onClick={() => closeMenu()}
            >
              Download CV
            </ActionLink>
            <div className={styles.mobileMenuFooterMeta}>
              <span>Senior Backend Engineer</span>
              <span>Seoul, South Korea</span>
            </div>
          </footer>
        </nav>
      )}
    </>
  );
}
