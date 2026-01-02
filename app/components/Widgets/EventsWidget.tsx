
'use client';
import Link from 'next/link';
import { EventItem } from '@/app/types';

function monthShort(dateISO: string) {
  const d = new Date(dateISO);
  return d.toLocaleString('en', { month: 'short' });
}
function dayNum(dateISO: string) {
  return new Date(dateISO).getDate();
}

export default function EventsWidget({ events }: { events: EventItem[] }) {
  return (
    <div className="widget events-widget">
      <div className="widget-inner">
        <h3 className="widget-title m-has-ico"><i className="widget-ico tp tp-calendar-full" />Upcoming Events</h3>
        <div className="widget-content">
          <ul className="event-list">
            {events.map((e, i) => (
              <li className="event m-has-date" key={i}>
                <div className="event-inner">
                  <div className="event-date" title={new Date(e.dateISO).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' })}>
                    <span className="event-month">{monthShort(e.dateISO)}</span>
                    <span className="event-day">{dayNum(e.dateISO)}</span>
                  </div>
                  <h4 className="event-title"><Link href={e.href}>{e.title}</Link></h4>
                </div>
              </li>
            ))}
          </ul>
          <p className="show-all-btn"><Link href="/event-list.html">See All Events</Link></p>
        </div>
      </div>
    </div>
  );
}
