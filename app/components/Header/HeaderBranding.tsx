
'use client';
import Link from 'next/link';

export default function HeaderBranding() {
  return (
    <div className="header-branding m-large-logo">
      <Link href="/index.html">
        <span>
          <img
            src="/images/header-logo.png"
            data-hires="/images/header-logo.2x.png"
            alt="TownPress - Municipality HTML Template"
          />
        </span>
      </Link>
    </div>
  );
}
``
