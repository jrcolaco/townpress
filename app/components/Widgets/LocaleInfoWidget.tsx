
'use client';
import { LocaleInfo } from '@/app/types';

export default function LocaleInfoWidget({ info }: { info: LocaleInfo }) {
  const Row = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <li>
      <div className="row-title"><h4>{title}</h4></div>
      <div className="row-value">{children}</div>
    </li>
  );

  return (
    <div className="widget locale-info-widget m-has-bg">
      <div className="widget-inner">
        <h3 className="widget-title m-has-ico"><i className="widget-ico tp tp-map-marker" />Locale Info</h3>
        <div className="widget-content">
          <ul>
            <Row title="Country">{info.country}</Row>
            <Row title="State">{info.state}</Row>
            <Row title="County">{info.county}</Row>
            <Row title="Area">{info.area}</Row>
            <Row title="Population">{info.population}</Row>
            <Row title="Coordinates">
              {info.coordinates.latText}<br />{info.coordinates.lonText}
            </Row>
            <Row title="Time zone">{info.timeZone}</Row>
            <Row title="ZIP code">{info.zip}</Row>
          </ul>
        </div>
      </div>
    </div>
  );
}
