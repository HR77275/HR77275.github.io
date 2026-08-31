import type { SVGProps } from 'react';
export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  );
}
export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}
