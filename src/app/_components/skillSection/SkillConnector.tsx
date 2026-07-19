import styles from "./skills.module.css";

interface ConnectorGroupProps {
  label: string;
}

export function ConnectorGroup({ label }: ConnectorGroupProps) {
  return (
    <div className={styles.connectorGroup}>
      <span className={styles.connectorLabel}>{label}</span>
      <span className={styles.flowConnector} aria-hidden="true" />
    </div>
  );
}

export function SequenceConnector() {
  return <span className={styles.mobileSequenceConnector} aria-hidden="true" />;
}

interface VerticalTransitionProps {
  label: string;
}

export function VerticalTransition({ label }: VerticalTransitionProps) {
  return (
    <div className={styles.verticalTransition}>
      <span className={styles.transitionLine} aria-hidden="true" />
      <span className={styles.transitionLabel}>{label}</span>
      <span className={styles.transitionArrow} aria-hidden="true" />
    </div>
  );
}

export function GroupTransition({ label }: VerticalTransitionProps) {
  return (
    <div className={styles.mobileGroupTransition}>
      <span className={styles.groupTransitionLine} aria-hidden="true" />
      <span className={styles.groupTransitionLabel}>{label}</span>
      <span className={styles.groupTransitionArrow} aria-hidden="true" />
    </div>
  );
}
