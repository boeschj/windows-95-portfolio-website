'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tabs } from '@base-ui/react/tabs';
import { TABS, getTabByPathname } from '@/config/tabs';
import { cn } from '@/utils';

import type { Tab, TabRoute } from '@/config/tabs';
import type { ReactNode } from 'react';

const TAB_PANEL_CLASS = 'flex min-h-0 w-full flex-1 flex-col';

interface TabContentContainerProps {
    panels: Record<TabRoute, ReactNode>;
}

export function TabContentContainer({ panels }: TabContentContainerProps) {
    const pathname = usePathname();
    const selectedTab = getTabByPathname(pathname);

    return (
        <Tabs.Root
            value={selectedTab.key}
            className="flex min-h-0 flex-1 flex-col"
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
            <div className="win95-border-raised flex min-h-0 flex-1 flex-col p-4 md:p-6">
                <div className="win95-border-sunken flex min-h-0 flex-1 flex-col">
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
                render={<Link href={tab.href} scroll={false} />}
                className="bg-windows-gray flex h-7.5 w-full items-center justify-center text-black no-underline"
            >
                {tab.label}
            </Tabs.Tab>
        </div>
    );
}
