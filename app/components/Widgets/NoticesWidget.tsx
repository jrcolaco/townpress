
'use client';
import Link from 'next/link';
import { Notice } from '@/app/types';

export default function NoticesWidget({ notices }: { notices: Notice[] }) {
  return (
    <div className="widget notices-widget">
      <div className="widget-inner">
        <h3 className="widget-title m-has-ico"><i className="widget-ico tp tp-bullhorn" />Town Notices</h3>
        <div className="widget-content">
          <ul className="notice-list">
            {notices.map((n, i) => (
              <li className="notice" key={i}>
                <div className="notice-inner">
                  <h4 className="notice-title"><Link href={n.href}>{n.title}</Link></h4>
                  <span className="notice-date">{n.date}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="show-all-btn"><Link href="/notice-list.html">See All Notices</Link></p>
        </div>
      </div>
    </div>
  );
}
