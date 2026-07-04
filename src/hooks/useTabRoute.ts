'use client';

import { useSyncExternalStore } from 'react';
import { TAB_QUERY_PARAM, getTabByRoute, hrefForTab } from '@/config/tabs';

import type { Tab, TabRoute } from '@/config/tabs';

interface UseTabRoute {
    selectedTab: Tab;
    selectTab: (route: TabRoute) => void;
}

const TAB_CHANGE_EVENT = 'tabroutechange';

function subscribe(onChange: () => void): () => void {
    window.addEventListener('popstate', onChange);
    window.addEventListener(TAB_CHANGE_EVENT, onChange);

    return () => {
        window.removeEventListener('popstate', onChange);
        window.removeEventListener(TAB_CHANGE_EVENT, onChange);
    };
}

function readRouteFromUrl(): string | null {
    return new URLSearchParams(window.location.search).get(TAB_QUERY_PARAM);
}

// Tab state lives entirely in the URL and is read via the History API rather
// than useSearchParams, so the page stays static/ISR instead of being forced
// dynamic. Switching tabs is a client-only URL swap (all panels are already
// mounted), so it never triggers server work.
export function useTabRoute(): UseTabRoute {
    const route = useSyncExternalStore(subscribe, readRouteFromUrl, () => null);
    const selectedTab = getTabByRoute(route);

    const selectTab = (nextRoute: TabRoute) => {
        window.history.replaceState(null, '', hrefForTab(nextRoute));
        window.dispatchEvent(new Event(TAB_CHANGE_EVENT));
    };

    return { selectedTab, selectTab };
}
