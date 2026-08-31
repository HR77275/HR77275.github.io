import Link from 'next/link';
import type { Project } from '@/data/projects';
import { ArchitectureExplorer } from './ArchitectureExplorer';
import { ProjectNavigation } from './ProjectNavigation';
import { MediaGallery } from './MediaGallery';
import { MediaBlock } from './MediaBlock';
import { ArrowRight, ArrowUpRight } from './Icons';
const sections = [
  ['overview', 'Overview'],
  ['problem', 'Problem'],
  ['approach', 'Approach'],
  ['architecture', 'System / Architecture'],
  ['contribution', 'My Contribution'],
  ['experiments', 'Experiments / Training'],
  ['results', 'Results'],
  ['demo', 'Demo'],
  ['technical', 'Technical Details'],
  ['links', 'Links'],
];
function Items({ items }: { items: string[] }) {
  return (
    <ul className="contribution-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
export function ProjectLayout({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  return (
    <div className="container">
      <header className="project-header">
        <Link href="/projects" className="text-link back-link">
          ← All projects
        </Link>
        <p className="eyebrow">
          {project.category} / PROJECT {project.number}
        </p>
        <h1>{project.title}</h1>
        <p className="project-lead">{project.summary}</p>
        <div className="tags">
          {project.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </header>
      {project.status === 'draft' && (
        <aside className="draft-notice">
          <span className="status-dot" />
          <strong>Project outline</strong>
          <span>
            Technical details, personal contributions, and results are being
            documented. Diagrams are illustrative.
          </span>
        </aside>
      )}
      {project.cover ? (
        <MediaBlock media={project.cover} />
      ) : (
        <ArchitectureExplorer project={project} />
      )}
      <div className="project-content">
        <ProjectNavigation
          sections={sections.filter(
            ([id]) => id !== 'technical' || project.technicalDetails?.length,
          )}
        />
        <article className="project-article">
          <section id="overview">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>
          <section id="problem">
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </section>
          <section id="approach">
            <h2>Approach</h2>
            <Items items={project.approach} />
          </section>
          <section id="architecture">
            <h2>System / Architecture</h2>
            <p>
              The conceptual flow below provides a starting point for the final
              architecture. Replace it with the verified system diagram when
              available.
            </p>
            {project.architecture ? (
              <MediaBlock media={project.architecture} />
            ) : (
              <ol className="architecture-steps">
                <li>
                  <span>01 / INPUT</span>
                  {project.diagram.inputs.join(' + ')}
                </li>
                <li>
                  <span>02 / MODEL</span>
                  {project.diagram.model}
                </li>
                <li>
                  <span>03 / OUTPUT</span>
                  {project.diagram.output}
                </li>
              </ol>
            )}
          </section>
          <section id="contribution">
            <h2>My Contribution</h2>
            <Items items={project.contribution} />
          </section>
          <section id="experiments">
            <h2>Experiments / Training</h2>
            <Items items={project.experiments} />
          </section>
          <section id="results">
            <h2>Results</h2>
            {project.metric && (
              <div className="result-metric">
                <strong>{project.metric.value}</strong>
                <span>{project.metric.label}</span>
              </div>
            )}
            <Items items={project.results} />
          </section>
          <section id="demo">
            <h2>Demo</h2>
            <MediaGallery key={project.slug} media={project.demo} />
          </section>
          {project.technicalDetails?.length ? (
            <section id="technical">
              <h2>Technical Details</h2>
              <Items items={project.technicalDetails} />
            </section>
          ) : null}
          <section id="links">
            <h2>Links</h2>
            {project.links.length ? (
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    className="button-outline"
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <ArrowUpRight />
                  </a>
                ))}
              </div>
            ) : (
              <p className="muted">
                Code, paper, and demo links will be added when available for
                public sharing.
              </p>
            )}
          </section>
        </article>
      </div>
      <Link href={`/projects/${nextProject.slug}`} className="next-project">
        <div>
          <p className="eyebrow">NEXT PROJECT</p>
          <h2>{nextProject.title}</h2>
        </div>
        <ArrowRight width={32} height={32} />
      </Link>
    </div>
  );
}
