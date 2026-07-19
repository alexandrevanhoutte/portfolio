"use client";

import type { Experience } from "@/app/_components/experienceSection/ExperienceSection";
import { useId, useState } from "react";
import styles from "./experienceElement.module.css";

interface ExperienceElementProps {
  experience: Experience;
  isLast: boolean;
}

export default function ExperienceElement({
  experience,
  isLast,
}: ExperienceElementProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const additionalContributionsId = useId();
  const visibleContributions = experience.contributions.slice(0, 3);
  const additionalContributions = experience.contributions.slice(3);

  return (
    <article
      className={`${styles.experience} ${isLast ? styles.lastExperience : ""}`}
      data-experience-entry
    >
      <div
        className={styles.timelineMarker}
        data-timeline-marker
        aria-hidden="true"
      />
      <div className={styles.metadata}>
        <p className={styles.period}>{experience.period}</p>
        <p className={styles.company}>{experience.company}</p>
        {experience.location && (
          <p className={styles.location}>{experience.location}</p>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{experience.title}</h3>
        <p className={styles.summary}>{experience.summary}</p>
        {visibleContributions.length > 0 && (
          <div className={styles.contributionGroup}>
            <h4 className={styles.contributionLabel}>Key contributions</h4>
            <ul className={styles.contributions}>
              {visibleContributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
            {additionalContributions.length > 0 && (
              <>
                <ul
                  id={additionalContributionsId}
                  className={`${styles.additionalContributions} ${
                    isExpanded ? styles.additionalContributionsOpen : ""
                  }`}
                  aria-hidden={!isExpanded}
                >
                  {additionalContributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={styles.contributionToggle}
                  aria-controls={additionalContributionsId}
                  aria-expanded={isExpanded}
                  onClick={() => setIsExpanded((expanded) => !expanded)}
                >
                  {isExpanded
                    ? "Show less"
                    : `View ${additionalContributions.length} more contributions`}
                </button>
              </>
            )}
          </div>
        )}
        {experience.technologies && experience.technologies.length > 0 && (
          <p className={styles.technologies}>
            {experience.technologies.join(" / ")}
          </p>
        )}
      </div>
    </article>
  );
}
