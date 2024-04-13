import AboutMeSection from "@/app/_components/aboutMeSection/AboutMeSection";
import FooterSection from "@/app/_components/footerSection/FooterSection";
import HeaderSection from "@/app/_components/headerSection/HeaderSection";
import SkillSection from "@/app/_components/skillSection/SkillSection";
import "../app/globals.css";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <AboutMeSection />
      <SkillSection />
      <FooterSection />
    </main>
  );
}
