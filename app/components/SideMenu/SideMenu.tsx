
'use client';
import Link from 'next/link';
import { NavItem } from '@/app/types';

export default function SideMenu({ items }: { items: NavItem[] }) {
  return (
    <nav className="side-menu m-left-side m-show-submenu">
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.href ?? '#'}>{item.label}</Link>
            {item.children?.length ? (
              <ul>
                {item.children.map((c, j) => (
                  <li key={j}><Link href={c.href ?? '#'}>{c.label}</Link></li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
