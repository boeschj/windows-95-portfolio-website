import {
    BLOG_ROUTE,
    EXPERIENCE_ROUTE,
    HOME_ROUTE,
    SKILLS_ROUTE,
} from '../constants/application.constants';

export const TABS = [
    {
        key: 0,
        route: 'about',
        href: HOME_ROUTE,
        label: 'About Me',
    },
    {
        key: 1,
        route: 'experience',
        href: EXPERIENCE_ROUTE,
        label: 'Experience',
    },
    {
        key: 2,
        route: 'skills',
        href: SKILLS_ROUTE,
        label: 'Skills',
    },
    {
        key: 3,
        route: 'blog',
        href: BLOG_ROUTE,
        label: 'Blog',
    },
] as const satisfies readonly {
    key: number;
    route: string;
    href: string;
    label: string;
}[];

export type Tab = (typeof TABS)[number];
export type TabKey = Tab['key'];
export type TabRoute = Tab['route'];

export const DEFAULT_TAB = TABS[0];

export const LEGACY_TAB_QUERY_PARAM = 'tab';

const TAB_BY_HREF = new Map<string, Tab>(TABS.map((tab) => [tab.href, tab]));

export function getTabByPathname(pathname: string): Tab {
    return TAB_BY_HREF.get(pathname) ?? DEFAULT_TAB;
}
