
'use client';
import { useState } from 'react';
import HeaderBranding from './HeaderBranding';
import HeaderMenu from './HeaderMenu';
import HeaderTools from './HeaderTools';
import HeaderGMap from './HeaderGMap';
import HeaderImage from './HeaderImage';
import type { NavItem } from '@/app/types';

type Props = {
  nav: NavItem[];
  imgSlides: string[];
  gmapAddress: string;
};

export default function Header({ nav, imgSlides, gmapAddress }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <header id="header" className={`m-has-header-tools m-has-gmap ${menuOpen ? 'm-menu-open' : ''}`}>
      <div className="header-inner">

        {/* Header content */}
        <div className="header-content">
          <div className="c-container">
            <div className="header-content-inner">

              <HeaderBranding />

              {/* Header toggles */}
              <div className="header-toggle-holder">
                <button type="button" className="header-toggle" onClick={() => setMenuOpen(o => !o)}>
                  <i className="ico-open tp tp-menu" />
                  <i className="ico-close tp tp-cross" />
                  <span>Menu</span>
                </button>
              </div>

              {/* Menu used for both desktop & mobile */}
              <HeaderMenu items={nav} />

              {/* Tools: search + map toggle */}
              <HeaderTools mapOpen={mapOpen} onToggleMap={() => setMapOpen(o => !o)} />

            </div>
          </div>
        </div>

        {/* Map area */}
        <HeaderGMap
          show={mapOpen}
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
          address={gmapAddress}
          zoom={17}
          mapType="hybrid"
          enableWheel
        />
      </div>

      {/* Hero image background */}
      <HeaderImage images={imgSlides} autoplaySeconds={8} />
    </header>
  );
}
