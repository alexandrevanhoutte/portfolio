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
              Go · Backend Systems · Distributed Systems
            </p>
          </div>

          <a className={styles.backToTop} href="#top">
            Back to top ↑
          </a>
        </div>

        <div className={styles.secondaryRow}>
          <div className={styles.meta}>
            <span>© {currentYear} Alexandre Vanhoutte</span>
            <span>Seoul, South Korea</span>
          </div>

          <nav aria-label="Social links" className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/alexandre-vanhoutte/"
              target="_blank"
              rel="noreferrer"
              aria-label="Alexandre Vanhoutte on LinkedIn"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/alexandrevanhoutte/"
              target="_blank"
              rel="noreferrer"
              aria-label="Alexandre Vanhoutte on GitHub"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
