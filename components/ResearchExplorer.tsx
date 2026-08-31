'use client';
import { useId, useState } from 'react';
import Link from 'next/link';
import { researchFocus } from '@/data/explorations';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from './Icons';
export function ResearchExplorer() {
  const [focus, setFocus] = useState(0);
  const [stage, setStage] = useState(0);
  const item = researchFocus[focus];
  const id = useId();
  return (
    <aside
      className="research-explorer"
      aria-label="Interactive research focus"
    >
      <div className="explorer-heading">
        <span className="eyebrow">EXPLORE MY WORK</span>
        <span className="explorer-live">
          <span />
          Interactive overview
        </span>
      </div>
      <fieldset className="focus-selector">
        <legend className="sr-only">Research focus</legend>
        {researchFocus.map((f, i) => (
          <Button
            variant="ghost"
            key={f.category}
            aria-pressed={focus === i}
            onClick={() => {
              setFocus(i);
              setStage(0);
            }}
            className={focus === i ? 'is-active' : ''}
          >
            {f.label}
          </Button>
        ))}
      </fieldset>
      <div className="focus-content" key={item.category}>
        <span className="focus-context">{item.context}</span>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="focus-flow">
          {item.stages.map((s, i) => (
            <Button
              key={s.label}
              variant="ghost"
              aria-pressed={stage === i}
              aria-controls={id}
              onClick={() => setStage(i)}
              className={stage === i ? 'stage-active' : ''}
            >
              <span>0{i + 1}</span>
              {s.label}
              {i < 2 && <i aria-hidden="true">→</i>}
            </Button>
          ))}
        </div>
        <div id={id} className="focus-explanation" aria-live="polite">
          <span className="focus-step-label">
            0{stage + 1} / {item.stages[stage].label}
          </span>
          <p key={item.stages[stage].label}>{item.stages[stage].detail}</p>
        </div>
        <Link href={`/projects/${item.projectSlug}`} className="explorer-link">
          Explore a related project <ArrowUpRight />
        </Link>
      </div>
      <p className="explorer-note">
        Select a focus. Tap a stage to look inside.
      </p>
    </aside>
  );
}
