import Image from 'next/image';
import type { Media } from '@/data/projects';
import { MediaComparison } from './MediaComparison';
import { ProjectVideo } from './ProjectVideo';
export function MediaBlock({
  media,
  priority = false,
}: {
  media: Media;
  priority?: boolean;
}) {
  if (media.type === 'placeholder')
    return (
      <figure className="media-placeholder">
        <div className="placeholder-frame">
          <h3>{media.label}</h3>
          <p>Project media to be added</p>
        </div>
        {media.caption && <figcaption>{media.caption}</figcaption>}
      </figure>
    );
  if (media.type === 'comparison') return <MediaComparison media={media} />;
  if (media.type === 'video')
    return (
      <figure className="media-block">
        <ProjectVideo media={media} />
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
        loading={priority ? 'eager' : undefined}
        unoptimized={media.type === 'gif' || media.src.endsWith('.svg')}
      />
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>
  );
}
