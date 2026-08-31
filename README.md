# Himanshu Ranjan — ML & Robotics portfolio

A complete Next.js App Router portfolio for embodied AI, robot learning, computer vision, and autonomous systems. The content reflects the supplied Persona AI, UMass Amherst, and Bosch experience. Unknown dates, metrics, links, and individual contributions are deliberately not invented.

## Local development

Requires Node.js 22.13+ and npm. Dependencies are already installed in this workspace.

```bash
cd /home/himanshu/go2_ws/src/portfolio
bash scripts/run.sh dev
```

Open http://localhost:3000. The helper uses an installed Node runtime or the isolated runtime downloaded to ../.portfolio-tools/node-v22.22.0-linux-x64. It does not install anything.

On another computer with Node already installed:

```bash
npm ci
npm run dev
```

Validation and production:

```bash
bash scripts/run.sh lint
bash scripts/run.sh typecheck
bash scripts/run.sh build
bash scripts/run.sh start
```

The normal build and start scripts use real Next.js, not a compatibility layer. No external fonts, analytics, image CDN, database, API keys, or CMS are required. Existing local installs can develop and build offline. A fresh npm ci requires internet.

## Structure

```text
app/                    Pages, dynamic project/note routes, global styling, metadata
  projects/[slug]/      Reusable detailed case studies
  notes/[slug]/         Published technical notes
components/             Shared layout, cards, media, experience, publications
  ui/                   Only the reused button and slider primitives
data/                   Typed profile, projects, experience, skills, publications
content/notes.ts         Lightweight article data; no CMS or MDX runtime
public/                 Static assets and generated social card
  media/                Add real images, GIFs, diagrams, video, posters, captions
scripts/                Offline-friendly local launcher and content checks
PHASES.md               Persistent progress and resume checkpoint
```

## What to edit

| Content                                                               | File                                          |
| --------------------------------------------------------------------- | --------------------------------------------- |
| Name, role, biography, current focus, background, education, location | data/profile.ts                               |
| Email, GitHub, LinkedIn, Hugging Face, resume URL                     | data/profile.ts                               |
| Jobs, research experience, dates, contributions, outcomes             | data/experience.ts                            |
| Projects, technologies, metrics, case-study sections, media           | data/projects.ts                              |
| Skills                                                                | data/skills.ts                                |
| Papers, authors, venue, year, links, citation                         | data/publications.ts                          |
| Articles and planned topics                                           | content/notes.ts                              |
| Colors, typography, spacing, responsive styles                        | app/globals.css                               |
| Resume PDF                                                            | public/resume.pdf                             |
| Photos, figures, GIFs, videos, posters, VTT captions                  | public/media/                                 |
| Site-wide title and social metadata                                   | app/layout.tsx                                |
| Social preview card                                                   | public/og.png                                 |
| Final site origin                                                     | NEXT_PUBLIC_SITE_URL in .env.local and Vercel |

Set resumeAvailable to true in data/profile.ts after adding the real PDF. Until then, /resume presents a useful empty state and does not offer a broken download.

Placeholder social URLs contain YOUR_USERNAME and are rendered as clearly unavailable text. They become working links automatically when replaced. The footer notice disappears once all contact details are filled in.

Set NEXT_PUBLIC_SITE_URL to your final trusted HTTPS origin before deploying. The default example.com is an intentional placeholder for sitemap, canonical URLs, and social-card URLs. Do not leave it in a public deployment.

## Add a project

Copy an entry in data/projects.ts, assign a unique lowercase hyphenated slug, and fill in its content. The project index, category filtering, detail route, and sitemap update automatically. Set featured to true to show it on the homepage. Set status to published only after checking claims and contributions.

Each project includes Overview, Problem, Approach, System / Architecture, My Contribution, Experiments / Training, Results, Demo, optional Technical Details, and Links. Add an optional metric only when its value and context are verified. Employer work should use only approved public information.

Illustrative pipeline diagrams are meaningful local placeholders, not measurements or evidence of implemented architecture. Replace them with actual project visuals as available.

## Media examples

Use local paths for offline operation. A cover uses next/image and responsive sizes:

```ts
cover: {
  type: "image",
  src: "/media/smolvla-cover.webp",
  alt: "Robot setup used for manipulation evaluation",
},
architecture: {
  type: "diagram",
  src: "/media/system.svg",
  alt: "Verified camera-to-policy-to-controller architecture",
},
demo: [
  {
    type: "video",
    src: "/media/rollout.mp4",
    poster: "/media/rollout-poster.webp",
    alt: "Robot completing a manipulation task",
    caption: "Describe the task and evaluation conditions.",
    autoplay: false,
    captions: "/media/rollout.vtt", // supply captions if the video has speech
  },
  {
    type: "gif",
    src: "/media/trajectory.gif",
    alt: "A visualized robot trajectory",
    width: 960,
    height: 540,
  },
  {
    type: "comparison",
    before: "/media/before.webp",
    after: "/media/after.webp",
    beforeLabel: "Baseline",
    afterLabel: "Updated pipeline",
    alt: "Detection output on the same camera frame",
    caption: "Use the same scene and comparable settings.",
  },
],
```

Videos use native controls, preload=none, and playsInline; autoplay is opt-in and muted. Compress videos and provide posters. Include meaningful alternative text, captions for speech, and written descriptions of visual findings. The comparison slider supports keyboard control. Keep actual files local, and keep confidential or unapproved footage out of public/.

Image optimization is handled by Next.js. GIFs and SVG diagrams bypass optimization to preserve animation and vector content. Remote images require an explicit next.config.ts images.remotePatterns allowlist; local assets are recommended.

## Publications and writing

The empty Research and Notes pages are intentional; no papers or articles are fabricated. Add verified Publication objects to data/publications.ts. Citations are expandable, selectable text.

Add a Note object to content/notes.ts with a unique slug, title, description, category, optional date, and sections. Only status: published notes are routed and included in the sitemap; drafts return 404. The simple paragraph-based model can later be upgraded to MDX without changing the page design.

## Vercel

1. Put this portfolio folder in its own Git repository, or set the Vercel Root Directory to portfolio if you intentionally keep it in a monorepo.
2. Import it into Vercel using the Next.js framework preset.
3. Use Node.js 22.x, npm ci, and npm run build. Leave Output Directory at its default.
4. Set NEXT_PUBLIC_SITE_URL to the final deployment origin and redeploy after changing it.
5. Add the real contact URLs and resume and verify all claims before sharing.

No Cloudflare configuration is needed for Vercel. The optional build:sites script and vite.config.ts are a separate Sites-compatible build path; the default scripts remain Next.js. Hosting tools are development dependencies and are not imported by the portfolio pages.

## Validation boundaries

TypeScript, lint, production compilation, route responses, metadata, and local content checks are used to validate the foundation. Browser visual testing and Lighthouse scoring have not been performed; no numerical performance claim is made.

See PHASES.md for the latest completed checks and remaining deployment steps.
