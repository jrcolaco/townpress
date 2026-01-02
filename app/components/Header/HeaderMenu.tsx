
'use client';
import Link from 'next/link';
import { NavItem } from '@/app/types';

type Props = { items: NavItem[] };

export default function HeaderMenu({ items }: Props) {
  return (
    <nav className="header-menu">
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.external ? (
              <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
            ) : (
              <Link href={item.href ?? '#'}>{item.label}</Link>
            )}
            {item.children?.length ? (
              <ul>
                {item.children.map((c, j) => (
                  <li key={j}>
                    {'external' in c && c.external ? (
                      <a href={c.href} target="_blank" rel="noreferrer">{c.label}</a>
                    ) : (
                      <Link href={c.href ?? '#'}>{c.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
