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
  const visibleLimit = contributions.some((contribution) => contribution.outcome)
    ? 4
    : 3;
  const visibleContributions = contributions.slice(0, visibleLimit);
  const additionalContributions = contributions.slice(visibleLimit);
  const remainingCount = contributions.length - visibleLimit;
  const hasContributions = contributions.length > 0;
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
        {experience.location && (
          <p className={styles.location}>{experience.location}</p>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{experience.title}</h3>
        <p className={styles.summary}>{experience.summary}</p>
        {hasContributions && (
          <>
            <ul className={styles.contributions}>
              {visibleContributions.map((contribution, index) => (
                <li
                  key={`${experience.id}-contribution-${index}`}
                >
                  <span>{contribution.text}</span>
                  {contribution.outcome && (
                    <span className={styles.outcome}>
                      {" · "}
                      {contribution.outcome}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            {remainingCount > 0 && (
              <>
                <div
                  id={contributionsId}
                  className={`${styles.additionalWrapper} ${
                    isExpanded ? styles.additionalOpen : ""
                  }`}
                  aria-hidden={!isExpanded}
                >
                  <ul className={styles.additionalList}>
                    {additionalContributions.map((contribution, index) => (
                      <li key={`${experience.id}-additional-${index}`}>
                        <span>{contribution.text}</span>
                        {contribution.outcome && (
                          <span className={styles.outcome}>
                            {" · "}
                            {contribution.outcome}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className={styles.toggle}
                  aria-controls={contributionsId}
                  aria-expanded={isExpanded}
                  onClick={() => setIsExpanded((expanded) => !expanded)}
                >
                  {isExpanded ? (
                    <>
                      Show less <span aria-hidden="true">↑</span>
                    </>
                  ) : (
                    <>
                      See {remainingCount} more contributions{" "}
                      <span aria-hidden="true">↓</span>
                    </>
                  )}
                </button>
              </>
            )}
          </>
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
