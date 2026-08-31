'use client';
import { useState } from 'react';
import type { Project, ProjectCategory } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { Button } from './ui/button';
const filters: ('All work' | ProjectCategory)[] = [
  'All work',
  'Robotics',
  'Perception',
  'Generative AI',
];
export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>('All work');
  const visible = projects.filter(
    (p) => active === 'All work' || p.category === active,
  );
  return (
    <>
      <div className="filter-bar">
        <fieldset className="filter-buttons">
          <legend className="sr-only">Filter projects by category</legend>
          {filters.map((filter) => (
            <Button
              key={filter}
              variant="ghost"
              className={`filter-button ${active === filter ? 'is-active' : ''}`}
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
            >
              {filter}
            </Button>
          ))}
        </fieldset>
        <output className="result-count" aria-live="polite">
          {visible.length} projects
        </output>
      </div>
      <div className="preview-grid project-index">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
