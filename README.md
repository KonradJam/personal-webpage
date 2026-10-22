# Personal Portfolio Website

A bilingual, typography-focused personal portfolio that combines DTP and prepress experience with front-end development, AI, and workflow automation.

**Live website:** [konradjam.com](https://konradjam.com)  
**Languages:** Polish and English

## Overview

This website is built with semantic HTML, CSS, and vanilla JavaScript. Its visual style draws from editorial and print design: clear typographic hierarchy, generous whitespace, minimal decoration, and an electric-blue accent.

Project content is managed through Decap CMS and stored as Markdown files in GitHub. During deployment, a small Node.js build script converts the project metadata into static HTML. Visitors and search engines receive the project titles and descriptions directly in the page source; JavaScript is used for interactive filtering rather than content retrieval.

## Features

- **Bilingual pages:** Polish and English versions of the portfolio.
- **Build-time project generation:** Project cards are generated from Markdown/YAML data before deployment.
- **Interactive filtering:** Four multi-select filters — AI, Automation, DTP / Graphics, and Web / IoT — implemented in vanilla JavaScript.
- **Git-based content management:** Decap CMS with DecapBridge PKCE authentication; no content database required.
- **Automated deployment:** GitHub commits to `main` trigger Netlify builds and publication.
- **Contact form:** Netlify Forms handles submissions, with email notifications configured through Netlify.
- **SEO-friendly output:** Project content is included in the generated HTML, with language-specific canonical URLs and `hreflang` links.
- **Responsive layout:** A minimal, typography-first interface without a front-end framework.

## Technology Stack

| Area | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 |
| Browser interactions | Vanilla JavaScript |
| Build tooling | Node.js (ES modules) |
| Content parsing | `js-yaml` |
| CMS | Decap CMS + DecapBridge (PKCE) |
| Content storage | Markdown files in GitHub |
| Hosting and CI/CD | Netlify connected to GitHub |
| Contact handling | Netlify Forms |

## How It Works

```text
Decap CMS / DecapBridge
          |
          v
GitHub repository (Markdown content)
          |
          v
Netlify build: npm run build
          |
          v
Node.js generator (scripts/build-projects.mjs)
          |
          v
Static website in dist/
          |
          v
Netlify deployment -> konradjam.com
```

The project generator:

1. Copies the existing static website into `dist/`.
2. Reads Markdown files from `content/projects/pl/` and `content/projects/en/`.
3. Parses YAML front matter with `js-yaml`.
4. Inserts project cards into `projects.html` and `en/projects.html`.
5. Preserves the CSS classes and category attributes used by the browser-side filters.
6. Sets canonical URLs and Polish/English alternate-language links for the project pages.
7. Produces deployable HTML that does **not** need GitHub API requests to display projects.

**Important:** The project lists in the source HTML files are intentionally empty. The generated versions in `dist/` contain the actual project content. Do not edit files inside `dist/` manually: that directory is recreated on each build and excluded from Git.

## Repository Structure

```text
personal-webpage/
├── admin/
│   ├── index.html            # Decap CMS interface
│   └── config.yml            # CMS, DecapBridge and content schema
├── assets/
│   ├── css/                  # Website styles
│   ├── images/               # Website and CMS-uploaded images
│   └── js/
│       ├── filter.js         # Interactive category filtering
│       └── script.js         # Other browser-side behaviour
├── content/
│   └── projects/
│       ├── pl/               # Polish project Markdown files
│       └── en/               # English project Markdown files
├── en/                       # English pages
├── scripts/
│   └── build-projects.mjs    # Static project-page generator
├── index.html                # Polish home page
├── projects.html             # Polish projects template
├── contact.html              # Polish contact page
├── success.html              # Contact form confirmation
├── netlify.toml              # Netlify build settings
├── package.json              # npm build command and dependency
├── package-lock.json         # Dependency lockfile
└── README.md
```

This tree highlights the files relevant to the current build; it is not a complete inventory of every repository file.

## Local Development

### Requirements

- Node.js 22 (recommended; used in the Netlify build)
- npm
- Git

### Setup

Clone the repository:

```bash
git clone https://github.com/konradjam/personal-webpage.git
cd personal-webpage
```

Install dependencies and generate the site:

```bash
npm ci
npm run build
```

The generated website is located in `dist/`.

Preview it using a local HTTP server, for example:

```bash
npx serve dist
```

Open the local URL displayed in the terminal. Use the generated pages to test the actual deployed structure, including `/projects.html` and `/en/projects.html`.

A local preview does not reproduce Netlify's hosted form submission service or the DecapBridge authentication environment.

## Managing Projects

The CMS is available at [konradjam.com/admin/](https://konradjam.com/admin/). Authorized editors sign in through **DecapBridge**, which uses PKCE authentication and the Git-based CMS backend configured in `admin/config.yml`.

Each project has localized Markdown content with YAML front matter. Supported fields include:

- `title` — project title
- `project_url` — external project link
- `categories` — filter categories
- `technologies` — technology labels
- `problem`, `solution`, `impact` — project description sections

Category values defined by the CMS are `ai`, `automatisation`, `dtp`, `graphic`, `web`, and `iot`. Four filter buttons group these values in the UI. Multiple active buttons use **OR** matching: a project is shown if it matches at least one active category.

After a published content change is committed to `main`, Netlify starts a new build and generates updated HTML. No manual editing of the project pages is needed. Updates become visible after deployment finishes; search engines may refresh their indexes later.

## Deployment

The production site is hosted on **Netlify** and built from the `main` branch of this GitHub repository.

The `netlify.toml` configuration is:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

To deploy a change:

1. Make changes in a feature branch and test them locally.
2. Open a pull request to `main`.
3. Merge the pull request after verification.
4. Netlify builds the site and publishes the contents of `dist/`.

Build output and deployment status can be reviewed under **Netlify → Deploys → Deploy log**.

## Search Engine Accessibility

Project titles, descriptions, and links are generated directly into HTML at build time. The filtering controls remain interactive, but the project content does not depend on JavaScript execution or live GitHub API requests.

The build also sets canonical addresses for:

- [Polish projects](https://konradjam.com/projects)
- [English projects](https://konradjam.com/en/projects)

and adds `hreflang` references between these two versions. Indexing status can be checked with Google Search Console; generating crawlable HTML improves accessibility but does not guarantee indexing.

## Contact Form

The contact page uses **Netlify Forms** to collect submissions. The form is processed by Netlify on the deployed website and redirects to a confirmation page. Email notifications, including delivery to a Zoho Mail inbox, are managed through Netlify's notification settings rather than application-side code.

## Design Approach

The visual language borrows from editorial layouts and print typography. It emphasizes readable hierarchy, whitespace, understated rules, visible links, and functional controls. The aim is a restrained portfolio where projects and their technical details remain the focus.

## Author

**Konrad Jam** — Graphic Designer and DTP Operator focused on print production, prepress workflows, automation, and practical software tools.

- [Website](https://konradjam.com)
- [LinkedIn](https://www.linkedin.com/in/konradjam)
- [GitHub](https://github.com/KonradJam)

## License

This repository does not currently include a `LICENSE` file. No general reuse or redistribution license is granted by the README. For permission to reuse the source code or visual assets, please contact the author.
