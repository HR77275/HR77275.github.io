import type { Publication } from '@/data/publications';
import { ArrowUpRight } from './Icons';
export function PublicationItem({
  publication: p,
}: {
  publication: Publication;
}) {
  return (
    <article className="publication-item">
      <p className="eyebrow">
        {p.venue} / {p.year}
      </p>
      <h3>{p.title}</h3>
      <p className="small muted">{p.authors.join(', ')}</p>
      <p>{p.description}</p>
      <div className="publication-links">
        {[
          ['Paper', p.paper],
          ['Code', p.code],
          ['Project', p.project],
        ]
          .filter(([, url]) => url)
          .map(([label, url]) => (
            <a className="text-link" href={url} key={label}>
              {label}
              <ArrowUpRight />
            </a>
          ))}
      </div>
      <details>
        <summary>Citation</summary>
        <pre>{p.citation}</pre>
      </details>
    </article>
  );
}
