
'use client';
import { useEffect, useRef } from 'react';
import Script from 'next/script';

type Props = {
  show: boolean;
  apiKey?: string; // optional if you want to load Maps
  address: string;
  zoom?: number;
  mapType?: 'roadmap' | 'terrain' | 'hybrid' | 'satellite';
  enableWheel?: boolean;
};

export default function HeaderGMap({
  show,
  apiKey,
  address,
  zoom = 17,
  mapType = 'hybrid',
  enableWheel = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Lazy init map after script loads
  const initMap = () => {
    if (!ref.current || !(window as any).google?.maps) return;
    const geocoder = new (window as any).google.maps.Geocoder();
    const map = new (window as any).google.maps.Map(ref.current, {
      zoom,
      mapTypeId: mapType,
      scrollwheel: enableWheel,
    });
    geocoder.geocode({ address }, (results: any, status: string) => {
      if (status === 'OK' && results[0]) {
        map.setCenter(results[0].geometry.location);
        new (window as any).google.maps.Marker({ map, position: results[0].geometry.location });
      }
    });
  };

  useEffect(() => {
    if (apiKey && show && (window as any).google?.maps) initMap();
  }, [show, apiKey]);

  return (
    <div className="header-gmap" style={{ display: show ? 'block' : 'none' }}>
      <div className="gmap-canvas" ref={ref} style={{ width: '100%', height: '360px' }} />
      {apiKey ? (
        <Script
          id="gmaps"
          src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
          strategy="afterInteractive"
          onLoad={initMap}
        />
      ) : (
        <div style={{ padding: '1rem', color: '#fff', background: 'rgba(0,0,0,0.4)' }}>
          <strong>Google Maps API key missing.</strong> Provide it via <code>process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY</code>
          and pass to <code>{'<HeaderGMap apiKey={...} />'}</code>.
        </div>
      )}
    </div>
  );
}
