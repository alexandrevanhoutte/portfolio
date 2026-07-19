"use client";

import { Project, getAllProjects } from "@/app/_libs/projects";
import Image from "next/image";
import {
  KeyboardEvent,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./projectSection.module.css";

const DESKTOP_ITEMS_PER_PAGE = 4;
const MOBILE_ITEMS_PER_PAGE = 2;

export default function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(DESKTOP_ITEMS_PER_PAGE);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    getAllProjects().then((loadedProjects) => {
      if (isMounted) {
        setProjects(loadedProjects);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateItemsPerPage = () => {
      setItemsPerPage(
        mediaQuery.matches
          ? MOBILE_ITEMS_PER_PAGE
          : DESKTOP_ITEMS_PER_PAGE,
      );
    };
    const updateReducedMotion = () => {
      setPrefersReducedMotion(reducedMotionQuery.matches);
    };

    updateItemsPerPage();
    updateReducedMotion();
    mediaQuery.addEventListener("change", updateItemsPerPage);
    reducedMotionQuery.addEventListener("change", updateReducedMotion);

    return () => {
      mediaQuery.removeEventListener("change", updateItemsPerPage);
      reducedMotionQuery.removeEventListener("change", updateReducedMotion);
    };
  }, []);

  const pageCount = Math.ceil(projects.length / itemsPerPage);
  const safeCurrentPage = Math.min(
    currentPage,
    Math.max(pageCount - 1, 0),
  );

  const goToPage = (nextPage: number) => {
    const boundedPage = Math.max(0, Math.min(nextPage, pageCount - 1));

    if (boundedPage === safeCurrentPage) {
      return;
    }

    setCurrentPage(boundedPage);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    if (
      target.closest("a, button, input, select, textarea") ||
      pageCount <= 1
    ) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPage(safeCurrentPage - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToPage(safeCurrentPage + 1);
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null || pageCount <= 1) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX;
    const distance =
      touchEndX === undefined ? 0 : touchEndX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 48) {
      return;
    }

    goToPage(safeCurrentPage + (distance < 0 ? 1 : -1));
  };

  const pages = Array.from({ length: pageCount }, (_, pageIndex) =>
    projects.slice(
      pageIndex * itemsPerPage,
      pageIndex * itemsPerPage + itemsPerPage,
    ),
  );

  return (
    <section
      data-section
      className={styles.projects}
      id="projects"
      aria-labelledby="projects-title"
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={pageCount > 1 ? 0 : undefined}
    >
      <div className={styles.container}>
        <hr className={styles.divider} aria-hidden="true" />
        <header className={styles.sectionIntro}>
          <span className={styles.number}>04</span>
          <h2 className={styles.heading} id="projects-title">
            Projects
          </h2>
          <p className={styles.intro}>
            A selection of backend systems, data-processing platforms, and
            product features I have designed and built.
          </p>
        </header>

        <div className={styles.sliderViewport}>
          <div
            className={styles.projectsTrack}
            style={{
              transform: `translate3d(-${safeCurrentPage * 100}%, 0, 0)`,
              transition: prefersReducedMotion
                ? "none"
                : undefined,
            }}
          >
            {pages.map((page, pageIndex) => (
              <div
                className={styles.projectsPage}
                key={`project-page-${pageIndex}`}
                aria-hidden={pageIndex !== safeCurrentPage}
              >
                <div className={styles.projectsGrid}>
                  {page.map((project) => (
                    <article className={styles.projectCard} key={project.id}>
                      <div className={styles.imageFrame}>
                        {project.pictureUrl ? (
                          <Image
                            className={styles.image}
                            src={project.pictureUrl}
                            fill
                            sizes="(max-width: 767px) 100vw, (max-width: 1380px) 50vw, 660px"
                            alt={`${project.name} project screenshot`}
                          />
                        ) : null}
                      </div>
                      <div className={styles.cardBody}>
                        <h3 className={styles.projectName}>{project.name}</h3>
                        <p className={styles.description}>
                          {project.description}
                        </p>
                        <p className={styles.technologies}>
                          {project.mainStacks.slice(0, 4).join(" / ")}
                        </p>
                        <div className={styles.links}>
                          {project.url ? (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`View ${project.name} project`}
                              tabIndex={
                                pageIndex === safeCurrentPage ? 0 : -1
                              }
                            >
                              View project ↗
                            </a>
                          ) : null}
                          <a
                            href={`/projects/${project.id}`}
                            aria-label={`View details for ${project.name}`}
                            tabIndex={
                              pageIndex === safeCurrentPage ? 0 : -1
                            }
                          >
                            Details ↗
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {pageCount > 1 ? (
          <nav className={styles.pagination} aria-label="Projects pagination">
            <button
              type="button"
              onClick={() => goToPage(safeCurrentPage - 1)}
              disabled={safeCurrentPage === 0}
              aria-label="Previous projects"
            >
              ←
            </button>
            <span aria-live="polite">
              {String(safeCurrentPage + 1).padStart(2, "0")} / {" "}
              {String(pageCount).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => goToPage(safeCurrentPage + 1)}
              disabled={safeCurrentPage === pageCount - 1}
              aria-label="Next projects"
            >
              →
            </button>
          </nav>
        ) : null}

        <hr className={styles.divider} aria-hidden="true" />
      </div>
    </section>
  );
}
