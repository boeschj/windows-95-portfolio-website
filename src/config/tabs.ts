export const TABS = [
    { key: 0, route: 'about', title: "Hi, I'm Jordan 👋", label: 'About Me' },
    { key: 1, route: 'experience', title: 'My Work', label: 'Experience' },
    { key: 2, route: 'skills', title: 'My Skills', label: 'Skills' },
    { key: 3, route: 'blog', title: 'My Blog', label: 'Blog' },
] as const satisfies readonly {
    key: number;
    route: string;
    title: string;
    label: string;
}[];

export type Tab = (typeof TABS)[number];
export type TabKey = Tab['key'];
export type TabRoute = Tab['route'];

export const DEFAULT_TAB = TABS[0];

export const TAB_QUERY_PARAM = 'tab';

const TAB_BY_ROUTE = new Map<string, Tab>(
    TABS.map((tab) => [tab.route, tab])
);

export function getTabByRoute(route: string | null | undefined): Tab {
    if (!route) {
        return DEFAULT_TAB;
    }

    return TAB_BY_ROUTE.get(route) ?? DEFAULT_TAB;
}

export function hrefForTab(route: TabRoute): string {
    if (route === DEFAULT_TAB.route) {
        return '/';
    }

    return `/?${TAB_QUERY_PARAM}=${route}`;
}
