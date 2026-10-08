import Image from 'next/image';
import type { Experience } from '@/data/experience';

export function ExperienceItem({
  experience,
  compact = false,
}: {
  experience: Experience;
  compact?: boolean;
}) {
  return (
    <article className="experience-item">
      <div className="experience-period">{experience.period}</div>
      <div className="experience-copy">
        <h3>{experience.organization}</h3>
        <p className="experience-role">{experience.role}</p>
        <div className="experience-meta" aria-label="Role details">
          <span>{experience.location}</span>
          <span>{experience.employmentType}</span>
        </div>
        {!compact && <p className="muted body-copy">{experience.context}</p>}
        <div className="tags">
          {experience.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="experience-visual-column">
        {experience.status && (
          <span className="experience-status">{experience.status}</span>
        )}
        {!compact && experience.image && (
          <div
            className={`experience-image experience-logo experience-logo-${experience.image.theme ?? 'light'}`}
          >
            <Image
              src={experience.image.src}
              alt={experience.image.alt}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1050px) 70vw, 260px"
            />
          </div>
        )}
      </div>
    </article>
  );
}
