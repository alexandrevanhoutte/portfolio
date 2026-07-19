"use client";

import type { Experience } from "@/app/_components/experienceSection/ExperienceSection";
import { useState } from "react";
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
  const contributions = experience.contributions ?? [];
  const technologies = experience.technologies ?? [];
  const visibleLimit = 3;
  const visibleContributions = contributions.slice(0, visibleLimit);
  const additionalContributions = contributions.slice(visibleLimit);
  const remainingCount = contributions.length - visibleLimit;
  const hasContributions = contributions.length > 0;
  const employmentDetails = [
    experience.employmentType,
    experience.workMode,
  ].filter(Boolean);
  const contributionsId = `contributions-${experience.id}`;

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
        {employmentDetails.length > 0 && (
          <p className={styles.employmentDetails}>
            {employmentDetails.join(" · ")}
          </p>
        )}
        {experience.location && (
          <p className={styles.location}>{experience.location}</p>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{experience.title}</h3>
        <p className={styles.summary}>{experience.summary}</p>
        {hasContributions && (
          <div className={styles.contributionGroup}>
            <h4 className={styles.contributionLabel}>Key contributions</h4>
            <ul className={styles.contributions}>
              {visibleContributions.map((contribution, index) => (
                <li key={`${experience.id}-contribution-${index}`}>
                  {contribution}
                </li>
              ))}
            </ul>
            {remainingCount > 0 && (
              <>
                <div
                  id={contributionsId}
                  className={`${styles.additionalContributionsWrapper} ${
                    isExpanded ? styles.additionalContributionsOpen : ""
                  }`}
                  aria-hidden={!isExpanded}
                >
                  <ul className={styles.additionalContributions}>
                    {additionalContributions.map((contribution, index) => (
                      <li key={`${experience.id}-additional-${index}`}>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className={styles.contributionToggle}
                  aria-controls={contributionsId}
                  aria-expanded={isExpanded}
                  onClick={() => setIsExpanded((expanded) => !expanded)}
                >
                  {isExpanded
                    ? "Show less"
                    : `View ${remainingCount} more contributions`}
                </button>
              </>
            )}
          </div>
        )}
        {technologies.length > 0 && (
          <ul
            className={styles.technologies}
            aria-label={`Technologies used at ${experience.company}`}
          >
            {technologies.map((technology, index) => (
              <li key={`${experience.id}-technology-${index}`}>{technology}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
