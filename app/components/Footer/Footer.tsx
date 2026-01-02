
'use client';
import FooterSocial from './FooterSocial';
import FooterMenu from './FooterMenu';
import FooterText from './FooterText';
import { FooterLink } from '@/app/types';
import BottomPanel from './BottomPanel';

export default function Footer({ links }: { links: FooterLink[] }) {
  return (
    <footer id="footer" className="m-has-bg">
      <div className="footer-bg">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="c-container">
              <div id="bottom-panel">
                <BottomPanel />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-inner">
              <div className="c-container">
                <FooterSocial />
                <FooterMenu links={links} />
                <FooterText />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
