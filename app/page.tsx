import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ProjectFilter } from '@/components/ProjectFilter';
import { SectionHeading } from '@/components/SectionHeading';
import { ExperienceExplorer } from '@/components/ExperienceExplorer';
import { SkillsSection } from '@/components/SkillsSection';
import { Reveal } from '@/components/MotionSurface';
import { ArrowUpRight } from '@/components/Icons';
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
        <Link href="/research" className="research-callout">
          <div>
            <p className="eyebrow">03 / RESEARCH DIRECTION</p>
            <h2>
              Learning to act
              <br />
              in an unstructured world.
            </h2>
            <p>
              Embodied intelligence. Multimodal perception.
              <br />
              Generalizable robot behavior.
            </p>
          </div>
          <span className="callout-link">
            Research &amp; interests <ArrowUpRight />
          </span>
        </Link>
      </Reveal>
      <Reveal>
        <SkillsSection />
      </Reveal>
    </div>
  );
}
