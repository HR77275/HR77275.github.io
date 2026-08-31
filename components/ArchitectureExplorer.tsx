'use client';
import { useId, useState } from 'react';
import type { Project } from '@/data/projects';
import { Button } from '@/components/ui/button';
export function ArchitectureExplorer({ project }: { project: Project }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const stages = [
    {
      label: 'Inputs',
      title: project.diagram.inputs.join(' + '),
      detail: `The system begins with ${project.diagram.inputs.join(' and ').toLowerCase()}. Input representation and quality shape the rest of the pipeline.`,
    },
    {
      label: 'Model',
      title: project.diagram.model,
      detail: project.approach.join(' '),
    },
    {
      label: 'Outputs',
      title: project.diagram.output,
      detail: `The output is ${project.diagram.output.toLowerCase()}. The case study below documents the evaluation protocol, observations, and verified results as they become available.`,
    },
  ];
  return (
    <section
      className={`architecture-explorer theme-${project.color}`}
      aria-label="Interactive conceptual system architecture"
    >
      <div className="architecture-heading">
        <p className="eyebrow">INSIDE THE SYSTEM</p>
        <span>Conceptual architecture · select a stage</span>
      </div>
      <div className="architecture-controls">
        {stages.map((stage, i) => (
          <Button
            key={stage.label}
            variant="ghost"
            aria-pressed={active === i}
            aria-controls={id}
            className={`architecture-stage ${active === i ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span>
              0{i + 1} / {stage.label}
            </span>
            <strong>{stage.title}</strong>
            <i aria-hidden="true">{i === 2 ? '↗' : '→'}</i>
          </Button>
        ))}
      </div>
      <div className="architecture-detail" id={id} aria-live="polite">
        <span>0{active + 1}</span>
        <div key={active}>
          <h3>
            {stages[active].label} / {stages[active].title}
          </h3>
          <p>{stages[active].detail}</p>
        </div>
      </div>
    </section>
  );
}
