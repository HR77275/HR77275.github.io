# Portfolio checkpoints

## Phase 1 — Complete

- Existing robotics projects left untouched; app isolated in portfolio/.
- Dependencies installed locally with a reproducible npm lockfile.
- Isolated Linux Node runtime saved in ../.portfolio-tools/.
- First meaningful Next.js homepage preview compiled and returned HTTP 200.
- No remote font or image dependency.

## Phase 2 — Complete

- Home, filterable Projects index, six full case studies, Experience, Research, About, Notes, Resume, and 404 pages.
- Content centered on supplied Persona AI, UMass Amherst, and Bosch experience.
- Typed project/media model; image, GIF, video, architecture, and comparison support.
- Accessible navigation and controls; responsive CSS; reduced-motion styling.
- Missing metrics, dates, social URLs, PDF, and real demo footage explicitly remain placeholders.
- Generated branded social preview stored locally.

## Phase 3 — Complete

- Next.js production build passed.
- TypeScript passed; lint passed with zero warnings/errors.
- Content checks passed for six projects and local media.
- Dependency audit reported zero known vulnerabilities.
- Optional Sites build passed.
- Production checks passed: 17 routes, 3 missing-route cases, 3 metadata pages, internal links, and placeholder-link safety.
- Browser automation unavailable due to a runtime startup error; no visual browser or Lighthouse results claimed.
- Private version 1 deployed successfully: https://himanshu-ranjan-ml-robotics.himanshu772002.chatgpt.site
- Final delivery checkpoint adds the confirmed deployment origin. Vercel is ready to deploy independently.
- Vercel deployment instructions are in README.md.

## Resume after interruption

Read this file and README.md. Do not reinitialize.
Run bash scripts/run.sh dev from portfolio/ in WSL.
The app and installed dependencies can run offline. Codex itself still needs its service connection.
Use the existing .openai/hosting.json project_id if completing private Sites hosting; never create a second Site.
Do not publish invented metrics or confidential employer data.
