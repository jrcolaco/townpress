
'use client';
import Link from 'next/link';
import { Post } from '@/app/types';
import FeaturedPostCard from './FeaturedPostCard';
import PostCard from './PostCard';

export default function PostList({ posts }: { posts: Post[] }) {
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <div className="c-post-list m-has-icon">
      <div className="c-content-box">
        <div className="post-list-inner">
          <i className="ico-shadow tp tp-reading" />
          <h2 className="post-list-title">
            <i className="ico tp tp-reading" />
            <Link href="/post-list.html">
              TownPress <strong>News</strong>
            </Link>
          </h2>
          <div className="post-list-content">
            {featured ? <FeaturedPostCard post={featured} /> : null}
            {rest.map((p, i) => <PostCard key={i} post={p} />)}
            <p className="more-btn-holder"><Link href="/post-list.html">Read All Posts</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
