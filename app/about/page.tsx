import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { SkillsSection } from '@/components/SkillsSection';
import { profile } from '@/data/profile';
import { ArrowUpRight } from '@/components/Icons';
export const metadata: Metadata = {
  title: 'About',
  description:
    'Himanshu Ranjan: machine learning and robotics, from ADAS perception to embodied AI research.',
};
export default function About() {
  return (
    <div className="container">
      <PageIntro
        eyebrow="ABOUT"
        title="Models are only part of the system."
        description={profile.bio}
      />
      <div className="about-layout">
        <aside className="about-card">
          <div className="monogram" aria-hidden="true">
            hr<span>.</span>
          </div>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <span className="small muted">{profile.location}</span>
          <Link href="/resume" className="text-link">
            View resume <ArrowUpRight />
          </Link>
        </aside>
        <div className="about-sections">
          <section>
            <p className="eyebrow">01 / CURRENT FOCUS</p>
            <h2>Learning in the physical world.</h2>
            <p>{profile.currentFocus}</p>
          </section>
          <section>
            <p className="eyebrow">02 / BACKGROUND</p>
            <h2>From perception to autonomy.</h2>
            <p>{profile.background}</p>
          </section>
          <section>
            <p className="eyebrow">03 / RESEARCH INTERESTS</p>
            <div className="interest-tags">
              {profile.interests.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
          </section>
          <section>
            <p className="eyebrow">04 / EDUCATION</p>
            {profile.education.map((e) => (
              <div className="education-item" key={e.school}>
                <h3>{e.school}</h3>
                <p>{e.degree}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
      <SkillsSection />
    </div>
  );
}
