
import { FooterLink, Gallery } from '@/app/types';

export const footerLinks: FooterLink[] = [
    { label: 'Home', href: '/index.html' },
    { label: 'Documentation', href: 'http://demos.lsvr.sk/townpress.html/documentation/', external: true },
    { label: 'Purchase', href: 'http://themeforest.net/user/LSVRthemes/portfolio', external: true },
];

export const featuredGallery: Gallery = {
    title: 'Streets of TownPress',
    href: '/gallery-detail.html',
    image: '/images/featured-gallery-01.jpg',
};
