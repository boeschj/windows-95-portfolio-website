import { TABS } from '@/config/tabs';

import type { Tab } from '@/config/tabs';

const PATH_SEPARATOR = '/';

export const dynamicParams = false;

export function generateStaticParams() {
    return TABS.map(toTabParams);
}

export default function TabPage() {
    return null;
}

function toTabParams(tab: Tab) {
    const pathSegments = tab.href.split(PATH_SEPARATOR).filter(Boolean);

    return { tab: pathSegments };
}
