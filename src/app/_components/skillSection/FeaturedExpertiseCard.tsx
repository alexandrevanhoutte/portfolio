import { FeaturedExpertise, SkillEvidence, getSkillEvidenceHref } from "@/app/_libs/skills";
import Link from "next/link";
import styles from "./skills.module.css";

interface FeaturedExpertiseCardProps {
  expertise: FeaturedExpertise;
}

interface EvidenceItemProps {
  evidence: SkillEvidence;
}

function EvidenceItem({ evidence }: EvidenceItemProps) {
  const href = getSkillEvidenceHref(evidence);

  if (!href) {
    return <span className={styles.proofLink}>{evidence.label}</span>;
  }

  const isExternal = href.startsWith("http");

  return (
    <Link
      className={styles.proofLink}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {evidence.label}
    </Link>
  );
}

export default function FeaturedExpertiseCard({
  expertise,
}: FeaturedExpertiseCardProps) {
  return (
    <article className={styles.featuredCard}>
      <div className={styles.featuredHeader}>
        <p className={styles.featuredBadge}>{expertise.badge}</p>
        <h3 className={styles.featuredTitle}>{expertise.title}</h3>
      </div>

      <p className={styles.featuredDescription}>{expertise.description}</p>

      <div className={styles.techGroup}>
        <p className={styles.groupLabel}>Key Technologies</p>
        <ul className={styles.prominentTechList}>
          {expertise.prominentTechnologies.map((technology) => (
            <li className={styles.prominentTech} key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.proofGroup}>
        <p className={styles.groupLabel}>Evidence</p>
        <div className={styles.proofList}>
          {expertise.evidence.map((item) => (
            <EvidenceItem evidence={item} key={item.id} />
          ))}
        </div>
      </div>
    </article>
  );
}
