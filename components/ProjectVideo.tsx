'use client';
import { useEffect, useRef } from 'react';
import type { Media } from '@/data/projects';
export function ProjectVideo({
  media,
}: {
  media: Extract<Media, { type: 'video' }>;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video || !media.autoplay || !('IntersectionObserver' in window))
      return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => {
      if (preference.matches) video.pause();
    };
    preference.addEventListener('change', change);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !preference.matches) {
            video.play().catch(() => {});
          } else video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', change);
      video.pause();
    };
  }, [media.autoplay]);
  return (
    <video
      ref={ref}
      controls
      muted={media.autoplay}
      loop={media.autoplay}
      playsInline
      preload="none"
      poster={media.poster}
      aria-label={media.alt}
    >
      <source src={media.src} />
      <track
        kind="captions"
        src={media.captions}
        srcLang="en"
        label="English"
        default
      />
      Your browser does not support video.{' '}
      <a href={media.src}>Download the demonstration.</a>
    </video>
  );
}
