"use client";

import { CrossIcon } from "@/app/_svg/CrossIcon";
import { MenuIcon } from "@/app/_svg/MenuIcon";
import { useState } from "react";
import styles from "./navbar.module.css";

interface NavbarElement {
  name: string;
  path: string;
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const elements: NavbarElement[] = [
    { name: "About me", path: "#about-me" },
    { name: "Skills", path: "#skills" },
    { name: "Experiences", path: "#experiences" },
    { name: "Contact", path: "#contact" },
  ];

  const handleClick = (link: string) => {
    setActiveLink(link);
    const element = document.getElementById(link);
  };

  const handleIsVisible = (e: any) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div
        className={styles.filter}
        style={{ display: isMenuOpen ? "block" : "none" }}
      />

      <div
        className={styles.menuOpener}
        onClick={handleIsVisible}
        style={{ fill: isMenuOpen ? "red" : "orange" }}
      >
        {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
      </div>

      <ul
        className={styles.list}
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        {elements.map((element, index) => (
          <li key={index} className={styles.element}>
            <a onClick={() => handleClick(element.path)}>{element.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
