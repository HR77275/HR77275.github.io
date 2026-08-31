import Image from 'next/image';
import type { Media } from '@/data/projects';
import { MediaComparison } from './MediaComparison';
export function MediaBlock({ media }: { media: Media }) {
  if (media.type === 'placeholder')
    return (
      <figure className="media-placeholder">
        <div className="placeholder-frame">
          <span className="play-outline" aria-hidden="true">
            ▷
          </span>
          <h3>{media.label}</h3>
          <p>Demo to be added</p>
        </div>
        {media.caption && <figcaption>{media.caption}</figcaption>}
      </figure>
    );
  if (media.type === 'comparison') return <MediaComparison media={media} />;
  if (media.type === 'video')
    return (
      <figure className="media-block">
        <video
          controls
          muted={media.autoplay}
          autoPlay={media.autoplay}
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
        {media.caption && <figcaption>{media.caption}</figcaption>}
      </figure>
    );
  return (
    <figure className="media-block">
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width || 1440}
        height={media.height || 900}
        sizes="(max-width:700px) 100vw, 900px"
        unoptimized={media.type === 'gif' || media.src.endsWith('.svg')}
      />
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>
  );
}
