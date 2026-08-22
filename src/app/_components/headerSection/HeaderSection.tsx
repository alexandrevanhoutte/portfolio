"use client";

import ActionLink from "@/app/_components/actionLink/ActionLink";
import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import { navigateToSection } from "@/app/_libs/navigation";
import styles from "./headerSection.module.css";

export default function HeaderSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <hr className={styles.divider} />
        <div className={styles.heroBody}>
          <FadeIn duration="0.9s" y={12}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>BACKEND ENGINEERING</p>
              <h1 className={styles.name}>Alexandre Vanhoutte</h1>
              <p className={styles.title}>Senior Backend Engineer</p>
              <p className={styles.intro}>
                I build reliable backend systems, from APIs and
                business-critical workflows to distributed systems.
              </p>
              <p className={styles.meta}>
                Based in Seoul since 2019 · 6+ years of experience
              </p>
              <div className={styles.ctaRow}>
                <ActionLink
                  href="#about-me"
                  className={styles.ctaPrimary}
                  icon="internal"
                  onClick={(event) => {
                    event.preventDefault();
                    navigateToSection("#about-me");
                  }}
                >
                About me
              </ActionLink>
                <ActionLink
                  href="/files/alexandre-vanhoutte-cv.pdf"
                  download="Alexandre-Vanhoutte-CV.pdf"
                  className={styles.ctaSecondary}
                >
                  Download CV
                </ActionLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </header>
  );
}
