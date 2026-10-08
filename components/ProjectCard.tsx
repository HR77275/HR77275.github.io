import { MotionCard } from './MotionSurface';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/data/projects';
import { ProjectDiagram } from './ProjectDiagram';
import { ArrowUpRight } from './Icons';
import { PreviewDialog } from '@/components/ui/dialog';
export function ProjectCard({ project }: { project: Project }) {
  return (
    <MotionCard>
      <Link
        href={`/projects/${project.slug}`}
        className="project-card-visual"
        aria-label={`Read ${project.title}`}
      >
        {project.cover ? (
          <div className="project-cover">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="(max-width:700px) 100vw, 50vw"
              unoptimized={project.cover.type === 'gif'}
            />
          </div>
        ) : (
          <ProjectDiagram project={project} />
        )}
        <span className="visual-open">
          Open case study <ArrowUpRight />
        </span>
      </Link>
      <div className="card-copy">
        <div className="project-meta">
          <span className="eyebrow">
            {project.category}
            <span className="meta-divider">/</span>
            {project.status === 'draft' ? 'WORK IN PROGRESS' : 'CASE STUDY'}
          </span>
          <span className="project-number">{project.number}</span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <div className="tags">
          {project.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {project.metric && (
          <p className="project-metric">
            {project.metric.value} <span>{project.metric.label}</span>
          </p>
        )}
        <div className="project-card-actions">
          <Link className="text-link" href={`/projects/${project.slug}`}>
            Read case study <ArrowUpRight />
          </Link>
          <PreviewDialog
            triggerLabel="Quick look"
            title={project.title}
            description={project.summary}
          >
            <ProjectDiagram project={project} />
            <div className="quick-view-content">
              <p className="eyebrow">
                {project.category} /{' '}
                {project.status === 'draft' ? 'WORK IN PROGRESS' : 'CASE STUDY'}
              </p>
              <p>{project.overview}</p>
              <h3>The approach</h3>
              <ul className="contribution-list">
                {project.approach.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <div className="tags">
                {project.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="button-primary"
              >
                Open full case study <ArrowUpRight />
              </Link>
            </div>
          </PreviewDialog>
        </div>
      </div>
    </MotionCard>
  );
}
