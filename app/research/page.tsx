import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { PublicationItem } from '@/components/PublicationItem';
import { SectionHeading } from '@/components/SectionHeading';
import { publications } from '@/data/publications';
import { ArrowRight } from '@/components/Icons';
export const metadata: Metadata = {
  title: 'Research',
  description:
    'Research interests in embodied AI, vision-language-action policies, and multimodal perception.',
};
const interests = [
  [
    '01',
    'Learning from demonstrations',
    'How can robot policies use demonstrations and language to learn useful, transferable behavior?',
  ],
  [
    '02',
    'Perception for action',
    'How should visual and multimodal representations support manipulation, navigation, and autonomous systems?',
  ],
  [
    '03',
    'Policies on real hardware',
    'How do data quality, inference constraints, and evaluation design shape the behavior of deployed policies?',
  ],
];
export default function Research() {
  return (
    <div className="container">
      <PageIntro
        eyebrow="RESEARCH"
        title="Intelligence grounded in interaction."
        description="Exploring the connection between perception, language, and action—with real systems as the testing ground."
      />
      <div className="research-grid">
        {interests.map(([n, title, description]) => (
          <article key={n}>
            <span className="skill-number">{n}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <section className="section">
        <SectionHeading
          eyebrow="PUBLICATIONS"
          title="Papers & research artifacts."
        />
        {publications.length ? (
          publications.map((p) => (
            <PublicationItem key={p.slug} publication={p} />
          ))
        ) : (
          <div className="empty-publications">
            <span className="empty-symbol" aria-hidden="true">
              ↗
            </span>
            <div>
              <h3>Work takes shape here.</h3>
              <p>
                No publications are listed yet. This space will collect papers,
                code, project pages, and citations as they become available.
              </p>
              <Link className="text-link" href="/projects">
                Explore current project outlines <ArrowRight />
              </Link>
            </div>
          </div>
        )}
      </section>
      <Link href="/notes" className="notes-link-row">
        <span>Working notes on models, geometry, and robot learning.</span>
        <span className="text-link">
          Technical notes <ArrowRight />
        </span>
      </Link>
    </div>
  );
}
