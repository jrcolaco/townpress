
export type NavItem = {
    label: string;
    href?: string;
    children?: NavItem[];
    external?: boolean;
};

export type DocumentItem = {
    title: string;
    href: string;
    size?: string;
    type: 'pdf' | 'word';
};

export type LocaleInfo = {
    country: string;
    state: string;
    county: string;
    area: string;
    population: string | number;
    coordinates: { latText: string; lonText: string };
    timeZone: string;
    zip: string;
};

export type Gallery = {
    title: string;
    href: string;
    image: string;
};

export type Notice = {
    title: string;
    href: string;
    date: string; // human string for now
};

export type EventItem = {
    title: string;
    href: string;
    dateISO: string; // e.g. "2016-06-03"
};

export type Post = {
    title: string;
    href: string;
    date?: string;
    image?: string;
    excerpt?: string;
    featured?: boolean;
};

export type DirectoryItem = {
    label: string;
    href?: string;
    children?: { label: string; href: string }[];
};

export type FooterLink = {
    label: string;
    href: string;
    external?: boolean;
};
