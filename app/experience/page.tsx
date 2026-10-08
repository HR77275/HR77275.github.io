import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { ExperienceItem } from '@/components/ExperienceItem';
import { SectionHeading } from '@/components/SectionHeading';
import { workExperiences } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience in machine learning, perception, world modeling, and autonomous systems at Persona AI, Bosch, and LG Soft India.',
};

export default function Experience() {
  return (
    <div className="container">
      <PageIntro
        eyebrow="EXPERIENCE"
        title="Professional experience."
        description="Industry work across machine learning, autonomy, perception, multimodal systems, and visual understanding."
      />

      <section
        className="section experience-group"
        aria-labelledby="professional-experience-heading"
      >
        <SectionHeading
          eyebrow="CAREER"
          title="Intelligence put to work."
          description="A concise view of the teams and technical areas I have worked in, from industrial autonomy to production perception systems."
          titleId="professional-experience-heading"
        />
        <div className="experience-list">
          {workExperiences.map((experience) => (
            <ExperienceItem
              key={experience.organization}
              experience={experience}
            />
          ))}
        </div>
      </section>

      <p className="index-note">
        Descriptions focus on publishable responsibilities and technical scope.
        Proprietary implementation details, private data, and unpublished
        research results are intentionally excluded.
      </p>
    </div>
  );
}
