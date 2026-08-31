import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="container not-found">
      <p className="eyebrow">404 / OUT OF FRAME</p>
      <h1>This page is not here.</h1>
      <p>The project or note may have moved, or it may still be a draft.</p>
      <Link href="/projects" className="button-primary">
        Explore projects →
      </Link>
    </div>
  );
}
