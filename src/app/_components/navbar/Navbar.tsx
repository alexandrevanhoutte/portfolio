"use client";

import NavbarElement from "@/app/_components/navbarElement/NavbarElement";
import { CrossIcon } from "@/app/_svg/CrossIcon";
import { MenuIcon } from "@/app/_svg/MenuIcon";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";

interface NavbarElement {
  name: string;
  path: string;
  section: string;
}

export default function Navbar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const elements: NavbarElement[] = [
    { name: "About me", path: "#about-me", section: "about-me" },
    { name: "Skills", path: "#skills", section: "skills" },
    { name: "Experiences", path: "#experiences", section: "experiences" },
    { name: "Projects", path: "#projects", section: "projects" },
    { name: "Contact", path: "#contact", section: "contact" },
  ];

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      if (visibleSection) {
        setActiveLink(visibleSection.id);
      }
    });

    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => observer.current?.observe(section));
    return () => {
      sections.forEach((section) => observer.current?.unobserve(section));
    };
  }, []);

  const handleClick = (link: string) => {
    setActiveLink(link);
    router.push(`/#${link}`);
  };

  const handleIsVisible = (e: any) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div
        onClick={handleIsVisible}
        className={styles.filter}
        style={{ display: isMenuOpen ? "block" : "none" }}
      />

      <div
        className={styles.menuOpener}
        onClick={handleIsVisible}
        style={{ fill: "#2eb2d3" }}
      >
        {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
      </div>

      <ul
        className={styles.list}
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        {elements.map((element, index) => (
          <NavbarElement
            key={index}
            name={element.name}
            section={element.section}
            isActive={activeLink === element.section}
            onClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}
