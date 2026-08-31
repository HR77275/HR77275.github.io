import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { ExperienceItem } from '@/components/ExperienceItem';
import { SkillsSection } from '@/components/SkillsSection';
import { ArrowUpRight } from '@/components/Icons';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';
export default function Home() {
  return (
    <div className="container">
      <Hero />
      <section className="section">
        <SectionHeading
          eyebrow="01 / SELECTED WORK"
          title="Intelligence, put to work."
          href="/projects"
          linkLabel="All projects"
        />
        <div className="preview-grid">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      </section>
      <section className="section home-experience">
        <SectionHeading
          eyebrow="02 / EXPERIENCE"
          title="Research meets deployment."
          href="/experience"
          linkLabel="View experience"
        />
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.organization}
            experience={experience}
            compact
          />
        ))}
      </section>
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
      <SkillsSection />
    </div>
  );
}
