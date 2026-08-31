'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
export function ReadingTools() {
  const path = usePathname();
  const [scroll, setScroll] = useState({ progress: 0, show: false });
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScroll({
        progress:
          height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0,
        show: window.scrollY > 650,
      });
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [path]);
  return (
    <>
      <div
        className="page-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${scroll.progress})` }}
      />
      {scroll.show && (
        <Button
          variant="outline"
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
                .matches
                ? 'instant'
                : 'smooth',
            })
          }
          aria-label="Back to top"
        >
          <span aria-hidden="true">↑</span>
          <span>Back to top</span>
        </Button>
      )}
    </>
  );
}
