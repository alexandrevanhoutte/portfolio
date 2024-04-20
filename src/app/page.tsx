import AboutMeSection from "@/app/_components/aboutMeSection/AboutMeSection";
import ContactSection from "@/app/_components/contactSection/ContactSection";
import ExperienceSection from "@/app/_components/experienceSection/ExperienceSection";
import FooterSection from "@/app/_components/footerSection/FooterSection";
import HeaderSection from "@/app/_components/headerSection/HeaderSection";
import Seo from "@/app/_components/seo/seo";
import SkillSection from "@/app/_components/skillSection/SkillSection";
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
      <Seo
        pageTitle="Alexandre Vanhoutte's Portfolio"
        pageDescription="Portfolio Description"
      />
      <HeaderSection />
      <AboutMeSection />
      <SkillSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
