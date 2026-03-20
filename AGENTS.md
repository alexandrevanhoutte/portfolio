# AGENTS.md

Guidance for coding agents working in this repository.

## Project Snapshot

- Stack: Next.js 14 App Router + React 18 + TypeScript.
- Package manager: npm (package-lock.json is present).
- Linting: ESLint via `next/core-web-vitals`.
- Formatting: Prettier is used in editor settings (`.vscode/settings.json`).
- Styling: CSS Modules (`*.module.css`) + global styles in `src/app/globals.css`.
- Imports: `@/*` path alias maps to `src/*` (`tsconfig.json`).

## Source Layout

- App root: `src/app`.
- Route handlers: `src/app/api/**/route.tsx`.
- Dynamic routes: `src/app/projects/[id]/page.tsx`.
- Shared UI components: `src/app/_components/**`.
- Utility/data modules: `src/app/_libs/**`.
- Type definitions: `src/app/_interfaces/**`.
- Static assets: `public/**`.

## Install And Run

```bash
npm install
npm run dev
```

- Local dev URL: `http://localhost:3000`.
- Default workflow: run lint and build before submitting changes.

## Build, Lint, Test Commands

### Core commands

```bash
npm run dev      # start local dev server
npm run lint     # run ESLint (next/core-web-vitals)
npm run build    # production build (includes type checks)
npm run start    # run built app
```

### CI-style verification sequence

```bash
npm run lint && npm run build
```

### Tests in this repository

- There is currently no test runner configured in `package.json`.
- There are currently no `*.test.*` / `*.spec.*` files.
- Do not invent a test command in PR notes; state explicitly that tests are not configured.

### Running a single test (when a runner gets added)

- Jest example: `npx jest path/to/file.test.ts -t "test name"`
- Vitest example: `npx vitest run path/to/file.test.ts -t "test name"`
- Playwright example: `npx playwright test tests/file.spec.ts --grep "test name"`
- Until one of these is added to this repo, treat single-test execution as N/A.

## TypeScript Rules

- `strict: true` is enabled; keep all new code type-safe.
- Prefer explicit prop and return types for exported APIs.
- Use `interface` for object shapes that may be extended.
- Use `type` for unions, mapped types, and local prop aliases.
- Avoid `any`; use `unknown` and narrow when necessary.
- Keep nullability explicit (`T | null`, optional fields, guards).
- Parse route params into concrete types early (e.g., `Number(id)`, then validate).

## React And Next.js Conventions

- Use server components by default; add `"use client"` only when needed.
- Keep components focused and small; extract reusable UI into `_components`.
- Prefer functional components and hooks.
- For app routes, follow App Router conventions (`page.tsx`, `layout.tsx`, `not-found`).
- Use `next/image` for image rendering.
- Use `next/navigation` hooks in client components.
- For metadata, use typed `Metadata` exports in layout/page files.

## Imports And Module Organization

- Follow current import style:
  1. Internal absolute imports (`@/app/...`)
  2. Framework/library imports (`next/*`, `react`)
  3. Relative CSS module import last
- Keep one blank line after directives like `"use client"`.
- Prefer the `@/*` alias over long relative `../../..` paths.
- Keep file names and import paths consistent with existing casing.

## Naming Conventions

- Components: PascalCase (`ProjectSection`, `SectionTitle`).
- Component files: PascalCase for TSX component files.
- CSS modules: lowercase camel/kebab style used in repo (preserve existing pattern per folder).
- Variables/functions: camelCase.
- Interfaces/types: PascalCase (`Project`, `Skill`, `ProjectPageProps`).
- Booleans: prefix with `is/has/can` (`isLoading`, `hasFadedIn`).
- Event handlers: `handleX` naming (`handleSubmit`, `handleInputChange`).

## Formatting And Style

- Use Prettier-compatible formatting (2-space indentation, semicolons, double quotes).
- Keep line length readable; rely on formatter wrapping.
- Prefer concise JSX and early returns for guard cases.
- Avoid unnecessary comments; code should be self-explanatory.
- Preserve existing quote and spacing style in touched files.

## CSS And UI Styling

- Prefer CSS Modules for component-scoped styles.
- Keep class names descriptive and consistent with component intent.
- Use `styles.className` references from module imports.
- Use global CSS only for app-wide concerns.
- Preserve responsive behavior and existing visual language when editing UI.

## Data And State Patterns

- Keep fetch/data-loading logic close to route/component boundary.
- Use typed state with `useState<Type>()`.
- Guard optional state usage with conditional rendering (`?.`, checks).
- Keep client-side effects in `useEffect` with correct dependencies.
- Avoid unnecessary re-renders; derive minimal state.

## API Route And Error Handling Guidelines

- Validate all incoming request data before use.
- For expected failures, return structured JSON with explicit status codes.
- Do not leak secrets or raw error objects in responses.
- Read secrets from env vars only; never hardcode credentials.
- Keep CORS behavior explicit when required by route usage.
- Prefer `try/catch` at integration boundaries (email, external APIs, I/O).

## Security And Environment

- Expected env vars for contact route:
  - `NODEMAIL_EMAIL_USERNAME`
  - `NODEMAIL_EMAIL_PASSWORD`
  - `NODEMAIL_PERSONAL_EMAIL`
- Never commit `.env*` files or secret values.
- Treat user input as untrusted; sanitize/validate before processing.

## Agent Workflow Expectations

- Before finalizing: run `npm run lint` and `npm run build` when feasible.
- If commands cannot run locally, state what was not run and why.
- Keep diffs focused; avoid opportunistic refactors unrelated to the task.
- Update docs when behavior or commands change.
- Prefer minimal, reversible changes over broad rewrites.

## Repository-Specific Rule Files

- Checked for Cursor rules:
  - `.cursor/rules/` -> not present
  - `.cursorrules` -> not present
- Checked for Copilot instructions:
  - `.github/copilot-instructions.md` -> not present
- If any of these files are added later, treat them as higher-priority agent instructions and update this document.

## Quick Pre-PR Checklist

- Code builds with `npm run build`.
- Lint passes with `npm run lint`.
- Changes follow import/order/naming patterns used in `src/app`.
- No secrets or generated artifacts committed.
- Any command/test limitations are explicitly documented in handoff notes.
