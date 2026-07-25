import styles from "./headerSection.module.css";

export default function HeaderSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
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
