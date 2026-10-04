import type { MediaSection } from '@/data/projects';
import { MediaBlock } from './MediaBlock';

export function ProjectMediaSections({
  sections,
}: {
  sections: MediaSection[];
}) {
  return (
    <div className="media-library">
      {sections.map((section, sectionIndex) => {
        const offset = sections
          .slice(0, sectionIndex)
          .reduce((sum, item) => sum + item.media.length, 0);

        return (
          <section className="media-library-section" key={section.title}>
            <div className="media-library-heading">
              <p className="eyebrow">VIDEO LIBRARY</p>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
            <div className="media-library-grid">
              {section.media.map((media, mediaIndex) => {
                const itemNumber = offset + mediaIndex + 1;

                return (
                  <article
                    className="media-library-card"
                    key={
                      media.type === 'placeholder'
                        ? media.label
                        : media.type === 'comparison'
                          ? media.before
                          : media.src
                    }
                  >
                    <div className="media-library-card-header">
                      <span>{String(itemNumber).padStart(2, '0')}</span>
                      <strong>
                        {'title' in media && media.title
                          ? media.title
                          : `${media.type} ${itemNumber}`}
                      </strong>
                    </div>
                    <MediaBlock media={media} />
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
