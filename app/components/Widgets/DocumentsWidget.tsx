
'use client';
import { DocumentItem } from '@/app/types';

export default function DocumentsWidget({ docs }: { docs: DocumentItem[] }) {
  const iconClass = (type: DocumentItem['type']) =>
    type === 'pdf' ? 'fa fa-file-pdf-o' : 'fa fa-file-word-o';

  return (
    <div className="widget documents-widget">
      <div className="widget-inner">
        <h3 className="widget-title m-has-ico"><i className="widget-ico tp tp-papers" />Documents</h3>
        <div className="widget-content">
          <ul className="document-list m-has-icons">
            {docs.map((d, i) => (
              <li className="document" key={i}>
                <div className="document-inner">
                  <div className="document-icon" title={d.type === 'pdf' ? 'PDF File' : 'Word Document'}>
                    <i className={iconClass(d.type)} />
                  </div>
                  <h4 className="document-title">
                    <a href={d.href} target="_blank" rel="noreferrer">{d.title}</a>
                    {d.size ? <span className="document-filesize">({d.size})</span> : null}
                  </h4>
                </div>
              </li>
            ))}
          </ul>
          <p className="show-all-btn"><a href="/document-list.html">See All Documents</a></p>
        </div>
      </div>
    </div>
  );
}
