import type { Project } from '../data/projects';
export function filterProjects(
  projects: Project[],
  category: string,
  query: string,
) {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return projects.filter((project) => {
    if (category !== 'All work' && project.category !== category) return false;
    const haystack = [
      project.title,
      project.summary,
      project.category,
      ...project.technologies,
    ]
      .join(' ')
      .toLocaleLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}
