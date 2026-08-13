# Ali Rashid — Portfolio

A premium, dark-mode-only personal portfolio for Ali Rashid — Computer Science student at UET Taxila, AI enthusiast, and full-stack developer. Built as a real multi-page React app: unlimited projects and certificates driven entirely by JSON data files, an interactive Three.js particle background, and Framer Motion animation throughout.

**Live pages:** Home · About · Skills · Projects · Certificates · Timeline · Resume · Contact

---

## Features

- **Unlimited Projects** — every project lives in `src/data/projects.json`. Add a new entry and it appears on the site automatically: no component changes needed. Includes search, category filtering, and sorting (newest / oldest / A–Z / featured first), 3D tilt-hover cards, and a details modal with Live Demo, GitHub, and Demo Video links.
- **Unlimited Certificates** — same pattern, in `src/data/certificates.json`. Search, category filtering, sorting, and a fullscreen keyboard-navigable lightbox (arrow keys / Escape) for viewing each certificate with its description and skills learned.
- **Skills page** — animated, scroll-triggered progress bars grouped by category (Programming Languages, Frameworks, AI & Tools, Currently Learning).
- **Timeline page** — a unified vertical timeline combining education, leadership roles, certificates, and achievements, each with its own icon and color.
- **Resume section** — inline PDF preview modal plus a direct download button.
- **Contact page** — Email, Phone, LinkedIn, and GitHub as clickable cards, a working contact form (see [Wiring the contact form](#wiring-the-contact-form)), and a map placeholder for your location.
- **GitHub stats** — animated counters (repos, stars, followers) and a top-languages breakdown, fetched live from the GitHub REST API at runtime with static fallback data if the request fails or is rate-limited.
- **Interactive Three.js background** — a mouse-reactive node network rendered with React Three Fiber, persistent across every page, with a reduced particle count on mobile for performance.
- **Full site chrome** — animated loading screen, scroll progress bar, back-to-top button, custom cursor (disabled on touch devices), route-based active-link highlighting in the nav, and a 404 page.
- **Responsive** — tested down to small mobile widths; the nav collapses to a slide-down menu below the `lg` breakpoint.
- **Accessible & performant** — respects `prefers-reduced-motion`, semantic headings, keyboard-operable lightbox and modals, lazy-loaded 3D background chunk.

---

## Tech Stack

| Layer        | Choice                                              |
|--------------|------------------------------------------------------|
| Framework    | React 19 + TypeScript + Vite                         |
| Routing      | React Router 7 (`BrowserRouter`)                      |
| Styling      | Tailwind CSS v4 (via `@tailwindcss/vite`)             |
| Animation    | Framer Motion                                         |
| 3D           | Three.js, React Three Fiber, Drei                     |
| Icons        | lucide-react                                          |
| Data         | Static JSON files, no backend/CMS required            |

---

## Getting Started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Build & preview

```bash
npm run build      # type-checks with tsc, then builds to dist/
npm run preview    # serve the production build locally
```

### Lint

```bash
npm run lint
```

---

## Folder Structure

```
public/
  assets/               Profile photo, resume PDF, favicon
  robots.txt, sitemap.xml, _redirects, 404.html   SEO / deployment helpers

src/
  data/
    projects.json        ← add/edit projects here
    certificates.json    ← add/edit certificates here
    skills.json           Skill groups + proficiency levels
    timeline.json          Education / leadership / certificate / achievement entries
    profile.json           Name, bio, socials, resume path
    types.ts                Shared TypeScript types for all of the above
    index.ts                 Central import point: `import { projects, certificates, ... } from '../data'`

  pages/                 One file per route (Home, AboutPage, SkillsPage, ProjectsPage,
                          CertificatesPage, TimelinePage, ResumePage, ContactPage, NotFound)

  components/            Shared UI: Hero, Navbar, Layout, Footer, GitHubStats,
                          ResumeSection, Timeline (list), ProjectCard
  components/three/      Background3D.tsx — the persistent particle background
  components/ui/         Reusable primitives: PageHeader, SearchInput, CategoryPills,
                          SortSelect, Lightbox

  hooks/useTypewriter.ts  Hero's rotating-role typing effect
```

---

## Customization Guide

Everything you're likely to update — projects, certificates, skills, timeline, resume, and contact info — lives in `src/data/*.json`. None of it requires touching a component or the UI: edit the data, save, and the site reflects it.

### Add a new project

Open `src/data/projects.json` and append an object — no component edits required:

```json
{
  "id": "unique-slug",
  "emoji": "🚀",
  "title": "Project Name",
  "description": "One-line summary shown on the card.",
  "longDescription": "Longer summary shown in the details modal.",
  "category": "AI",
  "tags": ["React", "Node.js"],
  "featured": true,
  "date": "2026-08-01",
  "status": "Completed",
  "images": [],
  "liveUrl": "https://...",
  "githubUrl": "https://github.com/...",
  "demoVideoUrl": ""
}
```

- `status` is one of `"Completed"`, `"In Progress"`, `"Archived"`.
- `images` accepts an array of image URLs/paths; the first entry is used as the card and modal hero image, any additional entries become a gallery grid inside the details modal. If `images` is empty, the card falls back to the `emoji`.
- Leave `liveUrl`, `githubUrl`, or `demoVideoUrl` as an empty string to hide that button.
- New `category` values are picked up automatically by the filter pills on the Projects page.

### Project hero images

Every current project already has a generated hero image at `public/assets/projects/<id>.svg` — premium abstract gradient/glassmorphism art in the site's own color palette, built entirely in code (no external AI image generator was used or is available in this environment, so these are original geometric compositions rather than photorealistic renders). Each is under 4KB, loads instantly, and is wired into `images: []` in `projects.json` already.

**To replace one with a real screenshot or a photorealistic AI render:** save the new file as `public/assets/projects/<id>.<ext>` (any web image format) and update that project's `images` array to point at it — e.g. `"images": ["/assets/projects/homevista-3d.png"]`. No component or UI code needs to change; `ProjectCard` and the details modal both just render whatever `images[0]` points to.

An extra `lifehub-ai.svg` also ships in that folder — generated in case that project comes back, but it isn't referenced by any entry in `projects.json` right now.

### Add a new certificate

Same idea in `src/data/certificates.json`:

```json
{
  "id": "unique-id",
  "title": "Certificate Name",
  "issuer": "Issuing Organization",
  "category": "AI",
  "date": "2026-08-01",
  "image": "",
  "credentialUrl": "",
  "description": "What the certificate covers.",
  "skillsLearned": ["Skill A", "Skill B"]
}
```

The category filter pills and certificate counter on the Certificates page update automatically — there's no limit on how many you add.

### Update skills, timeline, or your bio

- `src/data/skills.json` — grouped skills with a `level` (0–100) that drives the animated progress bars.
- `src/data/timeline.json` — each entry has a `type` of `education`, `leadership`, `certificate`, or `achievement`, which controls its icon and color on the Timeline page.
- `src/data/profile.json` — name, tagline, career goal, bio, and the resume file path (see below for socials).

### Update your contact information

Everything on the Contact page, in the footer, in the Hero's social buttons, and in the GitHub stats section comes from `src/data/profile.json` → `socials`:

```json
"socials": {
  "linkedin": "https://www.linkedin.com/in/your-handle/",
  "github": "https://github.com/your-username",
  "githubUsername": "your-username",
  "email": "you@example.com",
  "phone": "+1 555 000 0000",
  "location": "City, Country"
}
```

Edit these once and every page that references them updates automatically — no component changes needed.

### Update your resume

`public/assets/Ali_Rashid_Resume.pdf` is a real, generated one-page resume — built directly from `profile.json`, `skills.json`, `projects.json`, `certificates.json`, and `timeline.json`, so its content matches the site. It's not a "replace me" stub; it's ready to use as-is or as a base to polish further in any PDF editor. If you'd rather swap it for a resume you already have, drop in your own PDF under the same filename (or update `resumeUrl` in `profile.json` if you rename it).

### GitHub stats

`src/components/GitHubStats.tsx` reads the GitHub username from `profile.json` → `socials.githubUsername`. It fetches live public repo data and computes a top-languages breakdown from the GitHub REST API; if the request fails or is rate-limited, it falls back to static placeholder numbers so the section never breaks.

> The contribution-activity grid is a simulated visual, not real GitHub contribution data — the GitHub REST API doesn't expose the contribution calendar without authenticated GraphQL access. It's labeled "Simulated contribution activity" in the UI for transparency.

### Wiring the contact form

The contact form currently shows a "Message sent" confirmation locally but doesn't send anywhere. To make it functional, wire `handleSubmit` in `src/pages/ContactPage.tsx` to a form backend such as [Formspree](https://formspree.io), [Resend](https://resend.com), or your own API endpoint.

---

## Deployment

### Vercel (recommended)

1. Push this project to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new) — it auto-detects Vite (`npm run build`, output `dist`).
3. The included `vercel.json` handles SPA routing so deep links like `/projects` work on refresh.

Or via CLI: `npx vercel`.

### Netlify

1. Connect the repo at [app.netlify.com](https://app.netlify.com).
2. Build command: `npm run build`. Publish directory: `dist`.
3. The included `public/_redirects` file (copied into `dist` at build time) handles SPA routing.

### GitHub Pages

GitHub Pages doesn't natively support client-side routing. This project includes the standard `public/404.html` + `index.html` redirect trick (see [rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages)) so deep links still resolve — but for the simplest zero-config setup on GitHub Pages, consider switching `BrowserRouter` to `HashRouter` in `src/App.tsx`.

Steps either way:
```bash
npm run build
# then publish the dist/ folder to your gh-pages branch
```

### Before you go live

- Update the `Sitemap:` line in `public/robots.txt` and the URLs in `public/sitemap.xml` with your real domain.
- Update `<title>` / `<meta>` tags in `index.html` if your positioning changes.
- Double-check `src/data/profile.json` has your correct, current contact details.

---

## License

MIT — see [LICENSE](./LICENSE). Feel free to fork and adapt for your own portfolio.
