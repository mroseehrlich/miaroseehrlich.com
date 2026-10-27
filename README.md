# miaroseehrlich.com

Personal website and developing multimedia archive for Mia Rose Ehrlich, a software engineer.

The site brings together software projects, writing, visual material, and experiments.

It is built as a personal archive with professional utility rather than a conventional developer portfolio.

## Tech Stack

- **Next.js** — App Router
- **React**
- **JavaScript / JSX**
- **Vanilla CSS**

Planned:
- **Sanity** — Headless CMS for projects, writing, and multimedia content

## Getting Started

### Prerequisites

- Node.js 20.9 or newer
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/mroseehrlich/miaroseehrlich.com.git
cd miaroseehrlich
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
├── app/
│   ├── layout.jsx       # Root layout and metadata
│   ├── page.jsx         # Homepage
│   ├── globals.css      # Global styles
│   ├── projects/
│   │   └── page.jsx
│   └── writing/
│       └── page.jsx
└── components/
    └── SiteFooter.jsx

public/                 # Static design assets
docs/
    project_context.md  # Design and architectural direction
AGENTS.md               # Coding-agent instructions
```

Next.js uses file-based routing through the `app` directory. Each `page.jsx` defines a route, while `layout.jsx` provides shared structure.

## Development Direction

The site is being developed incrementally.

Planned work includes:

- CMS-managed projects and writing
- A multimedia Cabinet for photographs, audio, fragments, and collected material
- Individual pages for published entries
- Draft and publishing workflows
- Responsive and accessible presentation of varied content types

The content system should make publishing possible without editing source files or manually managing media assets.

## Project Documentation

See [Project Context](docs/project_context.md) for the site's design direction, content philosophy, and architectural principles.

See [AGENTS.md](AGENTS.md) for repository development guidelines.

## Status

Work in progress.
