import Link from 'next/link';
import { profile } from '@/data/profile';
import { ProfileLink } from './ProfileLink';
import { ArrowRight, ArrowUpRight } from './Icons';
import { ResearchExplorer } from './ResearchExplorer';
export function Hero() {
  return (
    <section className="hero hero-interactive">
      <div className="hero-composition">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> PERCEPTION. LEARNING. ACTION.
          </p>
          <p className="hero-name">{profile.name}</p>
          <h1>
            Machine Learning
            <br />
            &amp;{' '}
            <span>
              Robotics
              <br className="hero-break" /> Engineer.
            </span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <Link href="/projects" className="button-primary">
              Explore projects <ArrowRight />
            </Link>
            <Link href="/resume" className="button-outline">
              Resume <ArrowUpRight />
            </Link>
          </div>
          <div className="social-links hero-social">
            <ProfileLink href={profile.links.github}>GitHub</ProfileLink>
            <ProfileLink href={profile.links.linkedin}>LinkedIn</ProfileLink>
            <a href="#selected-work" className="scroll-cue">
              Scroll to selected work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <ResearchExplorer />
      </div>
      <div className="focus-line">
        <span>{profile.focus}</span>
        <span>
          From models to real-world systems <ArrowRight />
        </span>
      </div>
    </section>
  );
}
