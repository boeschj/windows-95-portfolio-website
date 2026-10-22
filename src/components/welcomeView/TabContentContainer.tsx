'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Tabs } from '@base-ui/react/tabs';
import {
    DEFAULT_TAB,
    TABS,
    TAB_QUERY_PARAM,
    getTabByRoute,
    hrefForTab,
} from '@/config/tabs';
import { cn } from '@/utils';

import type { Tab, TabRoute } from '@/config/tabs';
import type { BaseUIEvent } from '@base-ui/react/types';
import type { MouseEvent, ReactNode } from 'react';

const TAB_PANEL_CLASS = 'flex h-full min-h-0 w-full flex-col';

type TabPanels = Record<TabRoute, ReactNode>;

interface TabContentContainerProps {
    panels: TabPanels;
}

export function TabContentContainer({ panels }: TabContentContainerProps) {
    const prerenderedTabs = (
        <Win95Tabs panels={panels} selectedTab={DEFAULT_TAB} />
    );

    return (
        <Suspense fallback={prerenderedTabs}>
            <UrlSelectedWin95Tabs panels={panels} />
        </Suspense>
    );
}

function UrlSelectedWin95Tabs({ panels }: TabContentContainerProps) {
    const searchParams = useSearchParams();
    const selectedRoute = searchParams.get(TAB_QUERY_PARAM);
    const selectedTab = getTabByRoute(selectedRoute);

    return <Win95Tabs panels={panels} selectedTab={selectedTab} />;
}

interface Win95TabsProps {
    panels: TabPanels;
    selectedTab: Tab;
}

function Win95Tabs({ panels, selectedTab }: Win95TabsProps) {
    const handleValueChange = (value: unknown) => {
        const nextTab = TABS.find((tab) => tab.key === value);

        if (nextTab) {
            showTabInUrl(nextTab.route);
        }
    };

    return (
        <Tabs.Root
            value={selectedTab.key}
            onValueChange={handleValueChange}
            className="flex h-[calc(100%-90px)] flex-col"
        >
            <Tabs.List className="flex flex-row">
                {TABS.map((tab, index) => (
                    <Win95Tab
                        key={tab.key}
                        tab={tab}
                        isActive={selectedTab.key === tab.key}
                        isFirst={index === 0}
                        isLast={index === TABS.length - 1}
                    />
                ))}
            </Tabs.List>
            <div className="win95-border-raised flex h-full flex-col p-4 md:p-6">
                <h1 className="mb-2 h-10 w-full text-center text-3xl leading-10 font-extrabold md:mb-5 md:text-[50px]">
                    {selectedTab.title}
                </h1>
                <div className="win95-border-sunken flex h-[calc(100%-40px)] flex-col md:h-[calc(100%-60px)]">
                    {TABS.map((tab) => (
                        <Tabs.Panel
                            key={tab.key}
                            value={tab.key}
                            keepMounted
                            className={TAB_PANEL_CLASS}
                        >
                            {panels[tab.route]}
                        </Tabs.Panel>
                    ))}
                </div>
            </div>
        </Tabs.Root>
    );
}

const ACTIVE_TAB_BOTTOM_BORDER_COVER = `
    after:absolute
    after:bottom-[-4px]
    after:left-0
    after:z-30
    after:h-[7px]
    after:border-l-[1px]
    after:border-l-white
    after:bg-windows-gray
    after:content-[""]
`;

const ACTIVE_TAB_LEFT_EDGE = 'after:left-[1px]';

const ACTIVE_TAB_SEAM_OVERHANG = 'after:right-[-1px]';

const ACTIVE_TAB_RIGHT_EDGE =
    'after:right-0 after:[box-shadow:inset_-1px_0_var(--color-tab-b-3),inset_-2px_0_var(--color-tab-b-2),inset_-3px_0_var(--color-tab-b-1)]';

interface Win95TabProps {
    tab: Tab;
    isActive: boolean;
    isFirst: boolean;
    isLast: boolean;
}

function Win95Tab({ tab, isActive, isFirst, isLast }: Win95TabProps) {
    const activeLeftEdge = isFirst && ACTIVE_TAB_LEFT_EDGE;
    const activeRightEdge = isLast
        ? ACTIVE_TAB_RIGHT_EDGE
        : ACTIVE_TAB_SEAM_OVERHANG;
    const activeCover = cn(
        ACTIVE_TAB_BOTTOM_BORDER_COVER,
        activeLeftEdge,
        activeRightEdge
    );
    const tabHeight = isActive ? 'h-[38px]' : 'mt-[3px] h-[35px]';

    const handleTabClick = (event: BaseUIEvent<MouseEvent<HTMLElement>>) => {
        if (isModifiedClick(event)) {
            event.preventBaseUIHandler();
            return;
        }

        event.preventDefault();
    };

    return (
        <div
            className={cn(
                'win95-border-tab relative w-25 rounded-t',
                tabHeight,
                isActive && activeCover
            )}
        >
            <Tabs.Tab
                value={tab.key}
                nativeButton={false}
                render={<Link href={hrefForTab(tab.route)} prefetch={false} />}
                onClick={handleTabClick}
                className="bg-windows-gray flex h-7.5 w-full items-center justify-center text-black no-underline"
            >
                {tab.label}
            </Tabs.Tab>
        </div>
    );
}

function showTabInUrl(route: TabRoute) {
    window.history.replaceState(null, '', hrefForTab(route));
}

function isModifiedClick(event: MouseEvent) {
    return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}
