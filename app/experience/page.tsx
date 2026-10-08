import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { ExperienceItem } from '@/components/ExperienceItem';
import { SectionHeading } from '@/components/SectionHeading';
import { researchExperiences, workExperiences } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Work and research experience in machine learning, perception, world modeling, and autonomous systems at Persona AI, UMass Amherst, Bosch, and LG Soft India.',
};

export default function Experience() {
  return (
    <div className="container">
      <PageIntro
        eyebrow="EXPERIENCE"
        title="Work and research experience."
        description="A broad view of the teams, technical areas, and systems I have contributed to across industry and university research."
      />

      <section
        className="section experience-group"
        aria-labelledby="professional-experience-heading"
      >
        <SectionHeading
          eyebrow="01 / WORK EXPERIENCE"
          title="Professional experience."
          description="Applied machine learning work across autonomy, ADAS perception, multimodal systems, and visual matching."
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

      <section
        className="section experience-group"
        aria-labelledby="research-experience-heading"
      >
        <SectionHeading
          eyebrow="02 / RESEARCH EXPERIENCE"
          title="University research."
          description="Research in robot learning, multimodal navigation, digital twins, and sim-to-real evaluation at UMass Amherst."
          titleId="research-experience-heading"
        />
        <div className="experience-list">
          {researchExperiences.map((experience) => (
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
