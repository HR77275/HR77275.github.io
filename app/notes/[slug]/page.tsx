import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { notes } from '@/content/notes';
export function generateStaticParams() {
  return notes
    .filter((n) => n.status === 'published')
    .map((n) => ({ slug: n.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug && n.status === 'published');
  if (!note) return { title: 'Note not found' };
  return {
    title: note.title,
    description: note.description,
    openGraph: {
      title: note.title,
      description: note.description,
      type: 'article',
      images: [],
    },
    twitter: {
      card: 'summary',
      title: note.title,
      description: note.description,
      images: [],
    },
  };
}
export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug && n.status === 'published');
  if (!note) notFound();
  return (
    <article className="container note-article">
      <Link href="/notes" className="text-link">
        ← All notes
      </Link>
      <header className="page-intro">
        <p className="eyebrow">
          {note.category}
          {note.date ? ` / ${note.date}` : ''}
        </p>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </header>
      {note.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>
      ))}
    </article>
  );
}
