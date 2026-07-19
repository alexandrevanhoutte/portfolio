import { CapabilityGroup } from "@/app/_libs/skills";
import styles from "./skills.module.css";

interface CapabilityNodeProps {
  capability: CapabilityGroup;
}

export default function CapabilityNode({ capability }: CapabilityNodeProps) {
  return (
    <article className={styles.capabilityNode}>
      <p className={styles.category}>{capability.category}</p>
      <h3 className={styles.nodeTitle}>{capability.title}</h3>
      <ul className={styles.technologyList}>
        {capability.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}
