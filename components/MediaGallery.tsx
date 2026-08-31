'use client';
import { useState } from 'react';
import type { Media } from '@/data/projects';
import { MediaBlock } from './MediaBlock';
import { Button } from '@/components/ui/button';
import { PreviewDialog } from '@/components/ui/dialog';
function label(media: Media, index: number) {
  if (media.type === 'placeholder') return media.label;
  return (
    media.caption ||
    `${media.type === 'video' ? 'Video' : media.type === 'comparison' ? 'Comparison' : media.type === 'diagram' ? 'Architecture' : 'Image'} ${index + 1}`
  );
}
export function MediaGallery({ media }: { media: Media[] }) {
  const available = media.filter((item) => item.type !== 'placeholder');
  const [index, setIndex] = useState(0);
  if (!available.length)
    return (
      <div className="media-ready">
        <div className="media-ready-top">
          <span className="eyebrow">PROJECT MEDIA</span>
          <span className="media-pending">
            Footage &amp; images forthcoming
          </span>
        </div>
        <h3>The next layer of the story.</h3>
        <p>
          Real robot rollouts, system diagrams, and qualitative results will
          appear here as they become available.
        </p>
        <div className="media-ready-slots">
          <div>
            <span aria-hidden="true">01</span>
            <strong>Images &amp; figures</strong>
            <small>Setup, architecture, results</small>
          </div>
          <div>
            <span aria-hidden="true">02</span>
            <strong>Video demonstrations</strong>
            <small>Real hardware, real behavior</small>
          </div>
          <div>
            <span aria-hidden="true">03</span>
            <strong>Side-by-side comparisons</strong>
            <small>Baseline and updated output</small>
          </div>
        </div>
        {media
          .filter((m) => m.type === 'placeholder')
          .map((item, i) => (
            <details key={i}>
              <summary>
                {label(item, i)}
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                {item.caption ||
                  'A representative project demonstration will be added here.'}
              </p>
            </details>
          ))}
      </div>
    );
  const selected = available[Math.min(index, available.length - 1)];
  return (
    <div className="media-gallery">
      <div className="gallery-top">
        <p className="eyebrow">
          PROJECT MEDIA / {available.length}{' '}
          {available.length === 1 ? 'ITEM' : 'ITEMS'}
        </p>
        <output aria-live="polite">
          {index + 1} / {available.length}
        </output>
      </div>
      <div key={index} className="gallery-stage">
        <MediaBlock media={selected} />
      </div>
      <div className="gallery-controls">
        <Button
          variant="outline"
          disabled={index === 0}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          aria-label="Previous media"
        >
          ←
        </Button>
        <span>{label(selected, index)}</span>
        <Button
          variant="outline"
          disabled={index === available.length - 1}
          onClick={() => setIndex((i) => Math.min(available.length - 1, i + 1))}
          aria-label="Next media"
        >
          →
        </Button>
      </div>
      {selected.type !== 'video' && (
        <PreviewDialog
          wide
          title={label(selected, index)}
          description="Expanded project media. Use Escape or the close button to return."
          triggerLabel="View larger"
        >
          <MediaBlock media={selected} />
        </PreviewDialog>
      )}
      {available.length > 1 && (
        <fieldset className="gallery-selector">
          <legend className="sr-only">Choose project media</legend>
          {available.map((item, i) => (
            <Button
              variant="ghost"
              aria-pressed={index === i}
              className={index === i ? 'is-active' : ''}
              key={i}
              onClick={() => setIndex(i)}
            >
              {String(i + 1).padStart(2, '0')} / {item.type}
            </Button>
          ))}
        </fieldset>
      )}
    </div>
  );
}
