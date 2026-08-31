'use client';
import { useId, useState } from 'react';
import type { Project } from '@/data/projects';
import { filterProjects } from '@/lib/project-search';
import { ProjectCard } from './ProjectCard';
import { Button } from '@/components/ui/button';
const filters = ['All work', 'Robotics', 'Perception', 'Generative AI'];
export function ProjectFilter({
  projects,
  compact = false,
}: {
  projects: Project[];
  compact?: boolean;
}) {
  const [active, setActive] = useState('All work');
  const [query, setQuery] = useState('');
  const [view, setView] = useState('grid');
  const id = useId();
  const visible = filterProjects(projects, active, query);
  return (
    <div className="project-explorer">
      <div className="explorer-toolbar">
        <div className="project-search">
          <label htmlFor={id} className="sr-only">
            Search projects by title, topic, or technology
          </label>
          <span aria-hidden="true">⌕</span>
          <input
            id={id}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics, models, or tools…"
            autoComplete="off"
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              ×
            </Button>
          )}
        </div>
        <fieldset className="view-switch">
          <legend className="sr-only">Project layout</legend>
          <Button
            variant="ghost"
            aria-pressed={view === 'grid'}
            onClick={() => setView('grid')}
            className={view === 'grid' ? 'is-active' : ''}
          >
            Grid
          </Button>
          <Button
            variant="ghost"
            aria-pressed={view === 'list'}
            onClick={() => setView('list')}
            className={view === 'list' ? 'is-active' : ''}
          >
            List
          </Button>
        </fieldset>
      </div>
      <div className="filter-bar">
        <fieldset className="filter-buttons">
          <legend className="sr-only">Filter projects by category</legend>
          {filters
            .filter(
              (filter) =>
                filter === 'All work' ||
                projects.some((project) => project.category === filter),
            )
            .map((filter) => (
              <Button
                key={filter}
                variant="ghost"
                className={`filter-button ${active === filter ? 'is-active' : ''}`}
                aria-pressed={active === filter}
                onClick={() => setActive(filter)}
              >
                {filter}
                <span className="filter-count">
                  {filter === 'All work'
                    ? projects.length
                    : projects.filter((p) => p.category === filter).length}
                </span>
              </Button>
            ))}
        </fieldset>
        <output className="result-count" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'project' : 'projects'}
        </output>
      </div>
      {visible.length ? (
        <div
          className={`preview-grid project-index ${view === 'list' ? 'project-list' : ''} ${compact ? 'compact-projects' : ''}`}
        >
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="project-empty">
          <span aria-hidden="true">⌕</span>
          <h3>No projects match that combination.</h3>
          <p>Try a broader term such as “robot”, “vision”, or “diffusion”.</p>
          <Button
            variant="outline"
            onClick={() => {
              setQuery('');
              setActive('All work');
            }}
          >
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
}
