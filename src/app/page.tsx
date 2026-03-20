"use client";

import AboutMeSection from "@/app/_components/aboutMeSection/AboutMeSection";
import ContactSection from "@/app/_components/contactSection/ContactSection";
import ExperienceSection from "@/app/_components/experienceSection/ExperienceSection";
import FooterSection from "@/app/_components/footerSection/FooterSection";
import HeaderSection from "@/app/_components/headerSection/HeaderSection";
import ProjectSection from "@/app/_components/projectSection/ProjectSection";
import SkillSection from "@/app/_components/skillSection/SkillSection";
import "../app/globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.content}>
        <HeaderSection />
        <AboutMeSection />
        <SkillSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
