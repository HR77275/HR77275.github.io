import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { ProjectFilter } from '@/components/ProjectFilter';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Research Projects',
  description:
    'Research project case studies in robot learning, multimodal perception, simulation, and autonomous systems.',
};

export default function Projects() {
  return (
    <div className="container">
      <PageIntro
        eyebrow={
          'RESEARCH PROJECTS / ' +
          String(projects.length).padStart(2, '0') +
          ' STUDIES'
        }
        title="Research through working systems."
        description="Selected projects in robot learning, multimodal perception, simulation, and autonomy. Each case study presents the question, approach, implementation, and evidence available for public discussion."
      />
      <ProjectFilter projects={projects} />
      <p className="index-note">
        Project descriptions include only verified and publishable information.
        Private data, proprietary implementation details, and results under
        review are intentionally excluded.
      </p>
    </div>
  );
}
