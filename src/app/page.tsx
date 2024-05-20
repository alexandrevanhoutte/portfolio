import AboutMeSection from "@/app/_components/aboutMeSection/AboutMeSection";
import ContactSection from "@/app/_components/contactSection/ContactSection";
import ExperienceSection from "@/app/_components/experienceSection/ExperienceSection";
import FooterSection from "@/app/_components/footerSection/FooterSection";
import HeaderSection from "@/app/_components/headerSection/HeaderSection";
import Navbar from "@/app/_components/navbar/Navbar";
import ProjectSection from "@/app/_components/projectSection/ProjectSection";
import SkillSection from "@/app/_components/skillSection/SkillSection";
import { dataUrl } from "@/app/_svg/background";
import { Titillium_Web } from "next/font/google";
import "../app/globals.css";

const titilliumWeb = Titillium_Web({
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={titilliumWeb.className}>
      <Navbar />
      <div style={{ backgroundImage: `url("${dataUrl}")` }}>
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
