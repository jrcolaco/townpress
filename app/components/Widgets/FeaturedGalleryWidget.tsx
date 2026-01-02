
'use client';
import Link from 'next/link';
import { Gallery } from '@/app/types';

export default function FeaturedGalleryWidget({ gallery }: { gallery: Gallery }) {
  return (
    <div className="widget featured-gallery-widget">
      <div className="widget-inner">
        <h3 className="widget-title m-has-ico"><i className="widget-ico tp tp-pictures" />Featured Gallery</h3>
        <div className="widget-content">
          <div className="gallery-image" title={gallery.title}>
            <Link href={gallery.href}>
              <img src={gallery.image} alt="" />
            </Link>
          </div>
          <p className="show-all-btn"><Link href="/gallery-list.html">See All Galleries</Link></p>
        </div>
      </div>
    </div>
  );
}
