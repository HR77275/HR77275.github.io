'use client';
import { useEffect, useState } from 'react';
export function ProjectNavigation({ sections }: { sections: string[][] }) {
  const [active, setActive] = useState('overview');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (entry) setActive(entry.target.id);
      },
      { rootMargin: '-100px 0px -55% 0px', threshold: 0 },
    );
    for (const [id] of sections) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [sections]);
  return (
    <nav
      className="project-toc interactive-toc"
      aria-label="On this project page"
    >
      <p className="eyebrow">IN THIS PROJECT</p>
      {sections.map(([id, label], i) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={active === id ? 'location' : undefined}
        >
          <span>{String(i + 1).padStart(2, '0')}</span>
          {label}
        </a>
      ))}
    </nav>
  );
}
