'use client';

import { useSyncExternalStore } from 'react';
import { TAB_QUERY_PARAM, getTabByRoute, hrefForTab } from '@/config/tabs';

import type { Tab, TabRoute } from '@/config/tabs';

interface UseTabRouteReturn {
    selectedTab: Tab;
    selectTab: (route: TabRoute) => void;
}

interface UseTabRouteOptions {
    initialRoute?: string | null;
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

export function useTabRoute({
    initialRoute = null,
}: UseTabRouteOptions = {}): UseTabRouteReturn {
    const route = useSyncExternalStore(
        subscribe,
        readRouteFromUrl,
        () => initialRoute
    );
    const selectedTab = getTabByRoute(route);

    const selectTab = (nextRoute: TabRoute) => {
        window.history.replaceState(null, '', hrefForTab(nextRoute));
        window.dispatchEvent(new Event(TAB_CHANGE_EVENT));
    };

    return { selectedTab, selectTab };
}
