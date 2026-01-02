
'use client';
import Link from 'next/link';
import { Post } from '@/app/types';

export default function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <article className="featured-post m-has-thumb">
      <div className="post-image">
        <Link href={post.href}><img src={post.image} alt="" /></Link>
      </div>
      <div className="post-core">
        <h3 className="post-title">
          <Link href={post.href}>{post.title}</Link>
        </h3>
        {post.date ? <div className="post-date"><i className="ico tp tp-clock2" />{post.date}</div> : null}
        {post.excerpt ? <div className="post-excerpt"><p>{post.excerpt}</p></div> : null}
      </div>
    </article>
  );
}
``
