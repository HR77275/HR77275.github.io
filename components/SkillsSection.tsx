import { skills } from '@/data/skills';
import { SectionHeading } from './SectionHeading';
export function SkillsSection() {
  return (
    <section className="section skills-section">
      <SectionHeading
        eyebrow="TOOLKIT"
        title="Across the stack."
        description="The methods and tools behind the work."
      />
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={skill.category}>
            <span className="skill-number">0{i + 1}</span>
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
