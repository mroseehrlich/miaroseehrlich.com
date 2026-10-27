# AGENTS.md — miaroseehrlich.com

## Project Context

Read `docs/project_context.md` before making significant architectural, visual, or content-related changes.

That document is the primary reference for the site's purpose, visual direction, content philosophy, and planned features.

This is a personal multimedia archive with professional utility, not a conventional developer portfolio.

## Technical Stack

Current:
- Next.js (App Router)
- React
- JavaScript / JSX
- Vanilla CSS

Planned:
- Sanity headless CMS
- CMS-managed projects, writing, and multimedia archive entries

Do not implement planned features unless they are part of the current task.

## Development Principles

- Prefer small, incremental, understandable changes.
- Preserve existing functionality and visual behavior.
- Avoid speculative abstractions and unnecessary dependencies.
- Follow Next.js App Router conventions.
- Prefer Server Components unless client-side interactivity is required.
- Use semantic HTML and accessible interaction patterns.
- Respect reduced-motion preferences.
- Keep styling maintainable and consistent with the existing CSS.
- Do not introduce Tailwind, component libraries, or animation frameworks without justification.

## Visual and Content Changes

The existing design is intentional.

Do not substantially alter typography, spacing, imagery, colors, or interaction behavior unless requested.

Consult `docs/project_context.md` when making design decisions.

Do not assume all content should be technical, professional, or formatted as conventional blog posts.

The site should accommodate writing, images, multimedia, experimental projects, and miscellaneous archival material.

Avoid adding decorative effects merely to reinforce the site's atmosphere.

## CMS and Content Architecture

Sanity is the planned content management system.

The public site should retain control over its presentation. The CMS should manage content, media, and publishing workflows.

When implementing CMS functionality:

- Prefer simple, flexible content models.
- Support visual editing and media uploads.
- Avoid requiring Markdown or manual asset management for routine publishing.
- Support draft and published states.
- Do not build custom authentication when managed CMS authentication is sufficient.
- Avoid forcing every content type into an article-shaped structure.

Keep CMS integration proportional to actual requirements.

## Working Practices

Before making significant changes:

1. Inspect the relevant existing files.
2. Identify the smallest reasonable implementation.
3. Explain architectural tradeoffs when introducing new patterns or dependencies.
4. Preserve existing behavior unless explicitly changing it.
5. Verify the affected functionality.

When applicable, run:

- `npm run lint`
- `npm run build`

Do not claim tests or checks passed unless they were actually run.

Keep changes focused and commits descriptive.

## Current Development Direction

The Next.js migration is underway or recently completed.

Immediate priorities are:

- Complete migration cleanup.
- Preserve and verify responsive layouts.
- Configure fonts and metadata.
- Integrate Sanity.
- Implement Projects, Writing, and Cabinet content models and pages.

Do not begin all of these simultaneously. Work incrementally, completing and verifying each stage before introducing the next.