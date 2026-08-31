'use client';
import { useState, useId } from 'react';
import Image from 'next/image';
import type { Media } from '@/data/projects';
import { Slider } from './ui/slider';
export function MediaComparison({
  media,
}: {
  media: Extract<Media, { type: 'comparison' }>;
}) {
  const [position, setPosition] = useState([50]);
  const id = useId();
  return (
    <figure className="media-block">
      <div className="comparison-frame">
        <Image
          src={media.after}
          alt={`${media.alt} — ${media.afterLabel}`}
          fill
          sizes="(max-width:700px) 100vw, 900px"
        />
        <div
          className="comparison-before"
          style={{ clipPath: `inset(0 ${100 - position[0]}% 0 0)` }}
        >
          <Image
            src={media.before}
            alt={`${media.alt} — ${media.beforeLabel}`}
            fill
            sizes="(max-width:700px) 100vw, 900px"
          />
        </div>
        <span
          className="comparison-line"
          style={{ left: `${position[0]}%` }}
          aria-hidden="true"
        />
        <div className="comparison-labels">
          <span>{media.beforeLabel}</span>
          <span>{media.afterLabel}</span>
        </div>
      </div>
      <p id={id} className="comparison-control-label">
        Compare before and after
      </p>
      <Slider
        aria-labelledby={id}
        value={position}
        onValueChange={(value) =>
          setPosition(Array.isArray(value) ? value : [value])
        }
        min={0}
        max={100}
        step={1}
      />
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>
  );
}
