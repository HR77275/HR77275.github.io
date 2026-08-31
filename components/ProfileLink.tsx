import { isPlaceholderLink } from '@/data/profile';
import { ArrowUpRight } from './Icons';
export function ProfileLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (isPlaceholderLink(href))
    return (
      <span
        className={`placeholder-link ${className}`}
        title="Profile URL will be added soon"
      >
        {children}
        <span className="sr-only"> — profile link coming soon</span>
        <ArrowUpRight />
      </span>
    );
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight />
    </a>
  );
}
