import type { Project } from '@/data/projects';
export function ProjectDiagram({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <div
      className={`project-visual theme-${project.color} ${large ? 'diagram-large' : ''}`}
      aria-label={`Illustrative architecture: ${project.diagram.inputs.join(' and ')} feed ${project.diagram.model}, producing ${project.diagram.output}.`}
    >
      <div className="diagram-top">
        <span className="visual-label">
          {project.category.toUpperCase()} / {project.number}
        </span>
        <span className="diagram-mark" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="system-diagram">
        <div className="diagram-inputs">
          {project.diagram.inputs.map((input) => (
            <div className="diagram-node" key={input}>
              <span className="node-dot" />
              {input}
            </div>
          ))}
        </div>
        <span className="diagram-connector" aria-hidden="true">
          →
        </span>
        <div className="diagram-model">
          <span className="model-index">POLICY / MODEL</span>
          <strong>{project.diagram.model}</strong>
          <div className="model-bars" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <span className="diagram-connector" aria-hidden="true">
          →
        </span>
        <div className="diagram-output">{project.diagram.output}</div>
      </div>
      <div className="diagram-bottom">
        <span>{project.diagram.note}</span>
        <span>ILLUSTRATIVE</span>
      </div>
    </div>
  );
}
