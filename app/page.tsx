import { Hero } from '@/components/Hero';
import { ProjectFilter } from '@/components/ProjectFilter';
import { SectionHeading } from '@/components/SectionHeading';
import { ExperienceExplorer } from '@/components/ExperienceExplorer';
import { SkillsSection } from '@/components/SkillsSection';
import { Reveal } from '@/components/MotionSurface';
import { projects } from '@/data/projects';
import { workExperiences } from '@/data/experience';

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <Reveal>
        <section
          className="section home-experience"
          id="selected-work"
          aria-labelledby="work-experience-heading"
        >
          <SectionHeading
            eyebrow="01 / WORK EXPERIENCE"
            title="Intelligence, put to work."
            description="Professional experience applying machine learning across autonomy, perception, and intelligent systems."
            href="/experience"
            linkLabel="Full experience"
            titleId="work-experience-heading"
          />
          <ExperienceExplorer
            experiences={workExperiences}
            eyebrow="PROFESSIONAL EXPERIENCE"
          />
        </section>
      </Reveal>
      <Reveal>
        <section
          className="section"
          id="research-projects"
          aria-labelledby="research-projects-heading"
        >
          <SectionHeading
            eyebrow="02 / RESEARCH PROJECTS"
            title="Questions explored through systems."
            description="Selected research projects in robot learning, multimodal perception, simulation, and autonomy."
            href="/projects"
            linkLabel="All research projects"
            titleId="research-projects-heading"
          />
          <ProjectFilter
            projects={projects.filter((project) => project.featured)}
            compact
          />
        </section>
      </Reveal>
      <Reveal>
        <SkillsSection />
      </Reveal>
    </div>
  );
}
