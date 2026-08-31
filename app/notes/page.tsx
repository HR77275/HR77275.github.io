import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { notes, plannedTopics } from '@/content/notes';
import { ArrowUpRight } from '@/components/Icons';
export const metadata: Metadata = {
  title: 'Technical Notes',
  description:
    'A future collection of technical notes on perception, robot learning, and model engineering.',
};
export default function Notes() {
  const published = notes.filter((n) => n.status === 'published');
  return (
    <div className="container">
      <PageIntro
        eyebrow="FIELD NOTES"
        title="Thinking through the details."
        description="Technical explanations and working notes on the methods behind intelligent systems."
      />
      {published.length ? (
        <div className="note-list">
          {published.map((n) => (
            <Link href={`/notes/${n.slug}`} key={n.slug}>
              <p className="eyebrow">{n.category}</p>
              <h2>{n.title}</h2>
              <p>{n.description}</p>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-publications">
          <span className="empty-symbol" aria-hidden="true">
            ↗
          </span>
          <div>
            <h3>A notebook in the making.</h3>
            <p>
              No articles have been published yet. Future notes will focus on
              clear explanations, implementation details, and lessons from
              experiments.
            </p>
          </div>
        </div>
      )}
      <section className="section">
        <p className="eyebrow">TOPICS ON THE RADAR</p>
        <div className="topic-grid">
          {plannedTopics.map((topic, i) => (
            <div key={topic}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <h3>{topic}</h3>
              <span className="small muted">Planned topic</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
