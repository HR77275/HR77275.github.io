import Link from 'next/link';
import { ArrowRight } from './Icons';
export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  titleId,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  titleId?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
        {description && <p className="muted">{description}</p>}
      </div>
      {href && (
        <Link href={href} className="text-link">
          {linkLabel || 'Explore'}
          <ArrowRight />
        </Link>
      )}
    </div>
  );
}
