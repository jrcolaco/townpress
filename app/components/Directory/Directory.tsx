
'use client';
import DirectoryItem from './DirectoryItem';
import { DirectoryItem as DItem } from '@/app/types';

export default function Directory({ items }: { items: DItem[] }) {
  return (
    <div className="c-directory m-has-icon m-3-columns">
      <div className="c-content-box">
        <div className="directory-inner">
          <i className="ico-shadow tp tp-road-sign" />
          <h2 className="directory-title">
            <i className="ico tp tp-road-sign" /> Choose <strong>Your Interest</strong>
          </h2>
          <div className="directory-content">
            <nav className="directory-menu">
              <ul>
                {items.map((item, i) => <DirectoryItem key={i} item={item} />)}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
