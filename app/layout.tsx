
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TownPress - Municipality HTML Template',
  icons: { icon: '/images/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic,700,700italic&subset=latin,latin-ext"
          rel="stylesheet"
        />

        {/* Original CSS preserved from your template */}
        <link rel="stylesheet" href="/library/css/style.css" />
        <link rel="stylesheet" href="/library/css/skin/red.css" />
        <link rel="stylesheet" href="/library/css/custom.css" />
        {/* Old IE CSS omitted by default */}

        {/* Font Awesome 4 (to keep fa-* classes working) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
