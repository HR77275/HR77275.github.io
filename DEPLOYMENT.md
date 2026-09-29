# GitHub + Vercel deployment checkpoint

Target: a private personal GitHub repository owned by HR77275 and a public portfolio on Vercel Hobby. No domain purchase, paid upgrade, or change to the existing private Sites preview is needed.

## Ready locally

- Next.js production build is the default; vercel.json explicitly selects Next.js, npm ci, and npm run build.
- Node.js is pinned to the 22.x major line.
- The verified GitHub profile link is https://github.com/HR77275.
- Canonical, sitemap, and social-image origins fall back to Vercel's production domain automatically. Explicit SITE_URL or NEXT_PUBLIC_SITE_URL values override this, so do not carry the private preview URL into Vercel.
- Local environment files, dependencies, and generated output are excluded from direct CLI uploads.
- The separate Sites build and its existing hosting configuration remain intact.

## Account steps

1. Create HR77275/himanshu-portfolio as a private repository with a README. Grant the connected GitHub app access to this repository. Do not reuse a robotics or coursework repository.
2. Upload this portfolio's source at the repository root, excluding ignored files. Keep the code private; the deployed site will be public.
3. Sign into Vercel with GitHub, select the personal Hobby account, and import this repository. Limit the Vercel GitHub app to this repository if possible.
4. Choose project name himanshu-ranjan-portfolio (availability is not yet checked), framework Next.js, and root directory ./; leave the output-directory override disabled. Keep Node.js 22.x and automatic system environment variables enabled. No application secrets are needed.
5. Deploy, then verify the actual assigned production URL, project detail routes, missing-page behavior, sitemap, and social-card URLs. Do not announce an example URL as live.
6. Subsequent pushes to the connected production branch deploy automatically. Vercel Hobby requires the commit author to be associated with the account owner; if Vercel reports an author authorization error, resolve account association rather than bypassing that check.

## Not yet completed

No GitHub portfolio repository or Vercel project has been created by this task, and no Vercel deployment has been verified. The GitHub connector can access existing repositories but has no repository-creation operation. Browser automation is currently unavailable in this session, and no authenticated GitHub or Vercel CLI was found.

The existing private Sites preview remains unchanged. Email, LinkedIn, location, resume PDF, and real project media still need user-supplied content. Placeholder links remain disabled. Review employer-related claims and media for public disclosure before broad sharing.

## Costs

Use the free Vercel address initially. Hobby is restricted to personal non-commercial use and has usage caps. A custom domain costs separately. Reassess hosting for commercial use or substantial traffic/video bandwidth.