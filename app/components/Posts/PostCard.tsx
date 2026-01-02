
'use client';
import Link from 'next/link';
import { Post } from '@/app/types';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="post">
      <h3 className="post-title">
        <Link href={post.href}>{post.title}</Link>
      </h3>
      {post.date ? <div className="post-date">{post.date}</div> : null}
    </article>
  );
}
