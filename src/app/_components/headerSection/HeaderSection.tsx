import styles from "./headerSection.module.css";

export default function HeaderSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <nav className={styles.headerNav} aria-label="Primary">
          <span className={styles.navBrand}>AV / 2026</span>
          <ul className={styles.navLinks}>
            <li>
              <a className={styles.navLink} href="#about-me">
                About
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#experiences">
                Experience
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#skills">
                Technical Expertise
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <hr className={styles.divider} />
        <div className={styles.heroBody}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Senior Backend Engineer · Go</p>
            <h1 className={styles.name}>Alexandre Vanhoutte</h1>
            <p className={styles.title}>Senior Backend Engineer</p>
            <p className={styles.specialization}>Go · Distributed Systems</p>
          </div>
        </div>
        <hr className={styles.bottomDivider} />
      </div>
    </header>
  );
}
