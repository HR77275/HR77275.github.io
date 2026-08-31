import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/data/projects';
import { ProjectDiagram } from './ProjectDiagram';
import { ArrowUpRight } from './Icons';
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
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
      <div className="project-meta">
        <span className="eyebrow">
          {project.category}
          <span className="meta-divider">/</span>
          {project.status === 'draft' ? 'PROJECT OUTLINE' : 'CASE STUDY'}
        </span>
        <ArrowUpRight />
      </div>
      <h3>{project.title}</h3>
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
    </Link>
  );
}
