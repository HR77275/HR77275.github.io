import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ProjectFilter } from '@/components/ProjectFilter';
import { SectionHeading } from '@/components/SectionHeading';
import { ExperienceExplorer } from '@/components/ExperienceExplorer';
import { SkillsSection } from '@/components/SkillsSection';
import { Reveal } from '@/components/MotionSurface';
import { ArrowUpRight } from '@/components/Icons';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';
export default function Home() {
  return (
    <div className="container">
      <Hero />
      <Reveal>
        <section className="section" id="selected-work">
          <SectionHeading
            eyebrow="01 / SELECTED WORK"
            title="Intelligence, put to work."
            description="Choose a field. Look inside a project. Follow the engineering."
            href="/projects"
            linkLabel="All projects"
          />
          <ProjectFilter
            projects={projects.filter((project) => project.featured)}
            compact
          />
        </section>
      </Reveal>
      <Reveal>
        <section className="section home-experience">
          <SectionHeading
            eyebrow="02 / EXPERIENCE"
            title="Research meets deployment."
            description="Explore the work across teams and disciplines."
            href="/experience"
            linkLabel="View experience"
          />
          <ExperienceExplorer experiences={experiences} />
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
