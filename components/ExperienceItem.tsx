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
        {!compact && (
          <>
            <p className="muted body-copy">{experience.context}</p>
            <ul className="contribution-list">
              {experience.contributions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
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
