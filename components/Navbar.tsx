'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from './Icons';
import { profile } from '@/data/profile';
import { ProfileLink } from './ProfileLink';

const routes = [
  ['/', 'Home'],
  ['/projects', 'Research Projects'],
  ['/experience', 'Experience'],
  ['/research', 'Research'],
  ['/about', 'About'],
];

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link
          href="/"
          className="wordmark"
          aria-label="Himanshu Ranjan home"
          onClick={() => setOpen(false)}
        >
          <span className="wordmark-name">Himanshu Ranjan</span>
          <span className="wordmark-discipline">
            Machine Learning + Robotics
          </span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {routes.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                (href === '/' ? path === href : path.startsWith(href))
                  ? 'page'
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-social social-links">
          <ProfileLink href={profile.links.github}>GitHub</ProfileLink>
          <ProfileLink href={profile.links.linkedin}>LinkedIn</ProfileLink>
        </div>
        <Link href="/resume" className="nav-resume">
          Resume <ArrowUpRight />
        </Link>
        <Button
          variant="ghost"
          className="mobile-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}{' '}
          <span aria-hidden="true">{open ? '-' : '+'}</span>
        </Button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="mobile-nav"
        >
          {routes.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={
                (href === '/' ? path === href : path.startsWith(href))
                  ? 'page'
                  : undefined
              }
            >
              {label}
              <ArrowUpRight />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
