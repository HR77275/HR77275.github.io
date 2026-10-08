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
      <div>
        <h3>{experience.organization}</h3>
        <p className="experience-role">{experience.role}</p>
        <div className="experience-meta" aria-label="Role details">
          <span>{experience.location}</span>
          <span>{experience.employmentType}</span>
        </div>
        {!compact && (
          <>
            <p className="muted body-copy">{experience.context}</p>
          </>
        )}
        <div className="tags">
          {experience.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      {experience.status && (
        <span className="experience-status">{experience.status}</span>
      )}
    </article>
  );
}
