import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { ProjectFilter } from '@/components/ProjectFilter';
import { projects } from '@/data/projects';
export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Project outlines in robot learning, ADAS perception, and synthetic data generation.',
};
export default function Projects() {
  return (
    <div className="container">
      <PageIntro
        eyebrow={`PROJECT INDEX / ${String(projects.length).padStart(2, '0')} STUDIES`}
        title="From perception to action."
        description="Selected work across embodied AI, computer vision, and autonomous systems. Each case study connects the problem, the approach, and the engineering behind it."
      />
      <ProjectFilter projects={projects} />
      <p className="index-note">
        Project outlines are editable drafts. Metrics, media, and contribution
        details will be added as they are verified.
      </p>
    </div>
  );
}
