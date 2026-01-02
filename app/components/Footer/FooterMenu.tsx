
'use client';
import Link from 'next/link';
import { FooterLink } from '@/app/types';

export default function FooterMenu({ links }: { links: FooterLink[] }) {
  return (
    <nav className="footer-menu">
      <ul>
        {links.map((l, i) => (
          <li key={i}>
            {l.external ? (
              <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            ) : (
              <Link href={l.href}>{l.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
