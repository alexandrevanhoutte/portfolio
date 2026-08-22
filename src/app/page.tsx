"use client";

import AboutMeSection from "@/app/_components/aboutMeSection/AboutMeSection";
import ContactSection from "@/app/_components/contactSection/ContactSection";
import DesktopNavigation from "@/app/_components/desktopNavigation/DesktopNavigation";
import ExperienceSection from "@/app/_components/experienceSection/ExperienceSection";
import FooterSection from "@/app/_components/footerSection/FooterSection";
import HeaderSection from "@/app/_components/headerSection/HeaderSection";
import MobileNavigation from "@/app/_components/mobileNavigation/MobileNavigation";
import ProjectSection from "@/app/_components/projectSection/ProjectSection";
import SkillSection from "@/app/_components/skillSection/SkillSection";
import "../app/globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <DesktopNavigation />
      <MobileNavigation />

      <main id="main-content" tabIndex={-1}>
        <div id="top" />
        <div className={styles.content}>
          <HeaderSection />
          <AboutMeSection />
          <ExperienceSection />
          <SkillSection />
          <ProjectSection />
          <ContactSection />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
