import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { profile } from '@/data/profile';
import { ArrowUpRight } from '@/components/Icons';
export const metadata: Metadata = {
  title: 'About',
  description:
    'The academic background of Himanshu Ranjan, a graduate student in Computer Science at UMass Amherst.',
};
export default function About() {
  return (
    <div className="container">
      <PageIntro
        eyebrow="ABOUT"
        title="Academic background."
        description="My academic path combines graduate study in computer science with an undergraduate foundation in electrical engineering."
      />
      <section className="academic-history" aria-label="Education">
        {profile.education.map((education, index) => (
          <article className="academic-entry" key={education.school}>
            <div className="academic-index">0{index + 1}</div>
            <div className="academic-main">
              <p className="eyebrow">{education.period}</p>
              <div className="academic-school">
                <div className="academic-logo">
                  <Image
                    src={education.logo}
                    alt={education.logoAlt}
                    fill
                    sizes="72px"
                  />
                </div>
                <h2>{education.school}</h2>
              </div>
              <p className="academic-degree">{education.degree}</p>
              <p className="academic-study">{education.study}</p>
            </div>
            <div className="academic-gpa">
              <span>GPA</span>
              <strong>{education.gpa}</strong>
            </div>
          </article>
        ))}
      </section>
      <div className="about-resume-link">
        <p>
          Coursework, experience, and selected projects are detailed in my
          resume.
        </p>
        <Link href="/resume" className="button secondary-button">
          View resume <ArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
