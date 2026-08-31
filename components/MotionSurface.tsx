'use client';
import { useEffect, useRef } from 'react';
export function MotionCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef(0);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);
  return (
    <article
      ref={ref}
      className="project-card interactive-project-card motion-card"
      onPointerMove={(event) => {
        if (
          event.pointerType !== 'mouse' ||
          window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
          return;
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
          element.style.setProperty('--card-rx', `${-y * 3}deg`);
          element.style.setProperty('--card-ry', `${x * 3}deg`);
        });
      }}
      onPointerLeave={() => {
        cancelAnimationFrame(frame.current);
        ref.current?.style.setProperty('--card-rx', '0deg');
        ref.current?.style.setProperty('--card-ry', '0deg');
      }}
    >
      {children}
    </article>
  );
}
export function Reveal({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (
      !node ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    )
      return;
    if (node.getBoundingClientRect().top < window.innerHeight * 0.95) return;
    node.classList.add('reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          node.classList.add('is-revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.06 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}
