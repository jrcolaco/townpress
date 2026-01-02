
import { DirectoryItem } from '@/app/types';

export const directoryItems: DirectoryItem[] = [
    {
        label: 'Government',
        href: '/town-hall.html',
        children: [
            { label: 'Town Hall', href: '/town-hall.html' },
            { label: 'Town Council', href: '/town-council.html' },
        ],
    },
    {
        label: 'Community',
        href: '/post-list.html',
        children: [
            { label: 'TownPress News', href: '/post-list.html' },
            { label: 'Public Notices', href: '/post-list.html' },
            { label: 'Town Documents', href: '/document-list.html' },
        ],
    },
    {
        label: 'About Our Town',
        href: '/statistics.html',
        children: [
            { label: 'Statistics', href: '/statistics.html' },
            { label: 'Town History', href: '/town-history.html' },
            { label: 'Virtual Tour', href: '/virtual-tour.html' },
        ],
    },
    {
        label: 'Relax',
        href: '/event-list.html',
        children: [
            { label: 'Upcoming Events', href: '/event-list.html' },
            // FIX from HTML: "gallery-list-html" → "gallery-list.html"
            { label: 'Photo Galleries', href: '/gallery-list.html' },
            { label: 'Facebook Page', href: '#' },
        ],
    },
    {
        label: 'Get In Touch',
        href: '/contact.html',
        children: [
            { label: 'Write To Mayor', href: '/contact.html' },
            // Original used `phone-numbers.php` in one place; normalized to .html
            { label: 'Phone Numbers', href: '/phone-numbers.html' },
            { label: 'Twitter Profile', href: '#' },
        ],
    },
    {
        label: 'TownPress Template',
        href: 'http://themeforest.net/user/LSVRthemes/portfolio',
        children: [
            { label: 'Purchase TownPress', href: 'http://themeforest.net/user/LSVRthemes/portfolio' },
            { label: 'WordPress Version', href: 'http://themeforest.net/user/LSVRthemes/portfolio' },
            { label: 'Documentation', href: 'http://demos.lsvr.sk/townpress.html/documentation/' },
        ],
    },
];
