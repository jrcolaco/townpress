
import { DocumentItem } from '@/app/types';

export const documents: DocumentItem[] = [
    { title: 'Council Agenda April 24, 2015', href: '/documents/dummy-document2.pdf', size: '27 kB', type: 'pdf' },
    { title: 'Town Report 2015', href: '/documents/dummy-document.pdf', size: '24 kB', type: 'pdf' },
    // In source HTML these use Word icon but point to PDF—keeping hrefs intact
    { title: 'Police Contract', href: '/documents/dummy-document2.pdf', size: '27 kB', type: 'word' },
    { title: 'Public Schools Contract', href: '/documents/dummy-document2.pdf', size: '27 kB', type: 'word' },
];
