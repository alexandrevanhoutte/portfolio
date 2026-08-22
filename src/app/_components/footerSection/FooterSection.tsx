import ActionLink from "@/app/_components/actionLink/ActionLink";
import { githubUrl, linkedinUrl } from "@/app/_libs/socialLinks";
import styles from "./footerSection.module.css";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <hr className={styles.divider} aria-hidden="true" />
        <div className={styles.primaryRow}>
          <div className={styles.identity}>
            <p className={styles.name}>Alexandre Vanhoutte</p>
            <p className={styles.role}>Senior Backend Engineer</p>
            <p className={styles.focus}>
              Backend · Data Systems · Distributed Systems
            </p>
          </div>

          <ActionLink className={styles.backToTop} href="#top" icon="up">
            Back to top
          </ActionLink>
        </div>

        <div className={styles.secondaryRow}>
          <div className={styles.meta}>
            <span>© {currentYear} Alexandre Vanhoutte</span>
            <span>Seoul, South Korea</span>
          </div>

          <nav aria-label="Social links" className={styles.socialLinks}>
            <ActionLink
              href={linkedinUrl}
              external
              aria-label="Alexandre Vanhoutte on LinkedIn"
            >
              LinkedIn
            </ActionLink>
            <ActionLink
              href={githubUrl}
              external
              aria-label="Alexandre Vanhoutte on GitHub"
            >
              GitHub
            </ActionLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
