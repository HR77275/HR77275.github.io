import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { ExperienceItem } from '@/components/ExperienceItem';
import { experiences } from '@/data/experience';
export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Robotics, embodied AI research, and ADAS perception experience at Persona AI, UMass Amherst, and Bosch.',
};
export default function Experience() {
  return (
    <div className="container">
      <PageIntro
        eyebrow="EXPERIENCE"
        title="Across research and industry."
        description="Building perception and learning systems, with a focus on the engineering that takes models into the physical world."
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
        Dates and detailed outcomes are placeholders. Only approved, verified
        contributions and measurements will be published.
      </p>
    </div>
  );
}
