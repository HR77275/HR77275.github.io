import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { notes } from '@/content/notes';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '/',
    '/projects',
    '/experience',
    '/about',
    '/notes',
    '/resume',
    ...projects.map((p) => `/projects/${p.slug}`),
    ...notes
      .filter((n) => n.status === 'published')
      .map((n) => `/notes/${n.slug}`),
  ].map((path) => ({ url: new URL(path, profile.siteUrl).toString() }));
}
