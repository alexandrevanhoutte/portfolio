import HeaderSection from "@/app/_components/headerSection/HeaderSection";
import Seo from "@/app/_components/seo/seo";
import { Titillium_Web } from "next/font/google";
import "../app/globals.css";

const titilliumWeb = Titillium_Web({
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
      {/* <AboutMeSection />
      <SkillSection />
      <FooterSection /> */}
    </main>
  );
}
