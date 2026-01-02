
'use client';
import Link from 'next/link';
import { DirectoryItem as DItem } from '@/app/types';

export default function DirectoryItem({ item }: { item: DItem }) {
  return (
    <li>
      <Link href={item.href ?? '#'}>{item.label}</Link>
      {item.children?.length ? (
        <ul>
          {item.children.map((c, i) => (
            <li key={i}>
              <Link href={c.href}>{c.label}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
