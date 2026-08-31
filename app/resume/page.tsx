import type { Metadata } from 'next';
import Link from 'next/link';
import { profile } from '@/data/profile';
import { PageIntro } from '@/components/PageIntro';
import { ArrowUpRight } from '@/components/Icons';
export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume and professional background for Himanshu Ranjan.',
};
export default function Resume() {
  return (
    <div className="container">
      <PageIntro
        eyebrow="RESUME"
        title="A closer look at the background."
        description="Machine learning, robotics, and perception—across research and industry."
      />
      <div className="resume-panel">
        <p className="eyebrow">{profile.name}</p>
        <h2>
          {profile.resumeAvailable
            ? 'Resume ready to download.'
            : 'Resume PDF coming soon.'}
        </h2>
        <p>
          {profile.resumeAvailable
            ? 'Download the latest resume for experience, education, and selected technical work.'
            : 'The PDF has not been added yet. You can explore the experience and project outlines in the meantime.'}
        </p>
        <div className="project-links">
          {profile.resumeAvailable ? (
            <a href={profile.links.resume} className="button-primary" download>
              Download resume <ArrowUpRight />
            </a>
          ) : (
            <Link href="/experience" className="button-primary">
              View experience <ArrowUpRight />
            </Link>
          )}
          <Link href="/projects" className="button-outline">
            Explore projects
          </Link>
        </div>
      </div>
    </div>
  );
}
