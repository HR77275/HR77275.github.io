'use client';
import { useId, useState } from 'react';
import Link from 'next/link';
import type { Experience } from '@/data/experience';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from './Icons';
export function ExperienceExplorer({
  experiences,
}: {
  experiences: Experience[];
}) {
  const [active, setActive] = useState(1);
  const id = useId();
  const selected = experiences[active] || experiences[0];
  return (
    <div className="experience-explorer">
      <fieldset className="experience-selector">
        <legend className="sr-only">Explore experience by organization</legend>
        {experiences.map((experience, i) => (
          <Button
            variant="ghost"
            className={`experience-option ${active === i ? 'is-active' : ''}`}
            aria-pressed={active === i}
            aria-controls={id}
            onClick={() => setActive(i)}
            key={experience.organization}
          >
            <span className="experience-option-number">0{i + 1}</span>
            <span>
              <strong>{experience.organization}</strong>
              <small>{experience.role}</small>
            </span>
            <span aria-hidden="true">↗</span>
          </Button>
        ))}
      </fieldset>
      <div id={id} className="experience-panel" aria-live="polite">
        <div key={selected.organization}>
          <p className="eyebrow">RESEARCH + ENGINEERING</p>
          <h3>{selected.role}</h3>
          <p className="experience-context">{selected.context}</p>
          <ul className="contribution-list">
            {selected.contributions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="tags">
            {selected.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <Link href="/experience" className="text-link">
            Full experience <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
