export interface NavigationItem {
  number: string;
  label: string;
  description: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  {
    number: "01",
    label: "About",
    description: "Background & approach",
    href: "#about-me",
  },
  {
    number: "02",
    label: "Experience",
    description: "Roles, systems & impact",
    href: "#experiences",
  },
  {
    number: "03",
    label: "Technical Expertise",
    description: "Stack & engineering focus",
    href: "#skills",
  },
  {
    number: "04",
    label: "Projects",
    description: "Selected work",
    href: "#projects",
  },
  {
    number: "05",
    label: "Contact",
    description: "Start a conversation",
    href: "#contact",
  },
];

export function navigateToSection(href: string) {
  const targetId = href.startsWith("#") ? href.slice(1) : href;
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  target.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth",
    block: "start",
  });

  const heading = target.querySelector<HTMLElement>(
    "h1, h2, h3, h4, h5, h6, [data-section-heading]",
  );

  if (heading && !heading.hasAttribute("tabindex")) {
    heading.setAttribute("tabindex", "-1");
  }

  (heading ?? target).focus({ preventScroll: true });

  const cleanUrl = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(null, "", cleanUrl);
}
