'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
    TAB_QUERY_PARAM,
    getTabByRoute,
    hrefForTab,
} from '@/config/tabs';

import type { Tab, TabRoute } from '@/config/tabs';

interface UseTabRoute {
    selectedTab: Tab;
    selectTab: (route: TabRoute) => void;
}

export function useTabRoute(): UseTabRoute {
    const router = useRouter();
    const searchParams = useSearchParams();

    const selectedTab = getTabByRoute(searchParams.get(TAB_QUERY_PARAM));

    const selectTab = (route: TabRoute) => {
        router.push(hrefForTab(route), { scroll: false });
    };

    return { selectedTab, selectTab };
}
