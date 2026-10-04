import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { ExperienceItem } from '@/components/ExperienceItem';
import { experiences } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Robotics, world modeling, embodied AI research, and ADAS perception experience at Persona AI, UMass Amherst, Bosch, and LG Soft India.',
};

export default function Experience() {
  return (
    <div className="container">
      <PageIntro
        eyebrow="EXPERIENCE"
        title="Across research and industry."
        description="Building perception, simulation, and learning systems that connect models to autonomous machines in the physical world."
      />
      <div className="experience-list">
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.organization}
            experience={experience}
          />
        ))}
      </div>
      <p className="index-note">
        Descriptions focus on publishable responsibilities and technical scope.
        Proprietary implementation details, private data, and unpublished
        research results are intentionally excluded.
      </p>
    </div>
  );
}
