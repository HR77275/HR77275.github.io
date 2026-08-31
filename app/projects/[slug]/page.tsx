import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';
import { ProjectLayout } from '@/components/ProjectLayout';
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project not found' };
  const images = project.cover
    ? [
        {
          url: new URL(project.cover.src, profile.siteUrl).toString(),
          alt: project.cover.alt,
        },
      ]
    : [];
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
      images,
    },
    twitter: {
      card: project.cover ? 'summary_large_image' : 'summary',
      title: project.title,
      description: project.summary,
      images: images.map((i) => i.url),
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  return (
    <ProjectLayout
      project={projects[index]}
      nextProject={projects[(index + 1) % projects.length]}
    />
  );
}
