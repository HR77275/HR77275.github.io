import Link from 'next/link';
import { profile } from '@/data/profile';
import { ProfileLink } from './ProfileLink';
import { ArrowRight, ArrowUpRight } from './Icons';
export function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">
        <span className="status-dot" /> PERCEPTION. LEARNING. ACTION.
      </p>
      <div className="hero-top">
        <div>
          <p className="hero-name">{profile.name}</p>
          <h1>
            Machine Learning
            <br />
            &amp; <span>Robotics Engineer.</span>
          </h1>
        </div>
        <span className="hero-index">
          PORTFOLIO
          <br />
          RESEARCH + ENGINEERING
        </span>
      </div>
      <div className="hero-bottom">
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <Link href="/projects" className="button-primary">
            View projects <ArrowRight />
          </Link>
          <Link href="/resume" className="button-outline">
            Resume <ArrowUpRight />
          </Link>
          <div className="social-links">
            <ProfileLink href={profile.links.github}>GitHub</ProfileLink>
            <ProfileLink href={profile.links.linkedin}>LinkedIn</ProfileLink>
          </div>
        </div>
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
