import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/data/profile';
import { ProfileLink } from './ProfileLink';
import { ArrowRight, ArrowUpRight } from './Icons';

export function Hero() {
  return (
    <section className="hero hero-interactive">
      <div className="hero-composition">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            MACHINE LEARNING <span>/</span> PERCEPTION <span>/</span> ROBOT
            LEARNING
          </p>
          <p className="hero-name">{profile.role}</p>
          <h1>
            Building intelligence
            <br />
            for the <span>physical world.</span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <Link href="/projects" className="button-primary">
              Explore projects <ArrowRight />
            </Link>
            <Link href="/experience" className="button-outline">
              Experience <ArrowRight />
            </Link>
            <Link href="/resume" className="button-outline">
              Resume <ArrowUpRight />
            </Link>
          </div>
          <div className="social-links hero-social">
            <ProfileLink href={profile.links.github}>GitHub</ProfileLink>
            <ProfileLink href={profile.links.linkedin}>LinkedIn</ProfileLink>
            <a href="#selected-work" className="scroll-cue">
              Scroll to selected work <span aria-hidden="true">down</span>
            </a>
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="hero-portrait-frame">
            <Image
              src="/images/himanshu-ranjan-portrait.webp"
              alt="Himanshu Ranjan standing in front of a snow-covered mountain landscape"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 44vw"
            />
            <span className="portrait-index" aria-hidden="true">
              01
            </span>
          </div>
          <figcaption>
            <span>
              <strong>Himanshu Ranjan</strong>
              <small>Machine Learning and Robotics Engineer</small>
            </span>
            <span>Research / Engineering</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
