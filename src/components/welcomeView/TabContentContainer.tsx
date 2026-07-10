'use client';

import { Tabs } from '@base-ui/react/tabs';
import { TABS } from '@/config/tabs';
import { useTabRoute } from '@/hooks/useTabRoute';
import { cn } from '@/utils';

import type { TabRoute } from '@/config/tabs';
import type { ReactNode } from 'react';

const TAB_PANEL_CLASS = 'flex h-full min-h-0 w-full flex-col';

interface TabContentContainerProps {
    panels: Record<TabRoute, ReactNode>;
    initialRoute: string | null;
}

export function TabContentContainer({
    panels,
    initialRoute,
}: TabContentContainerProps) {
    const { selectedTab, selectTab } = useTabRoute({ initialRoute });

    const handleValueChange = (value: unknown) => {
        const nextTab = TABS.find((tab) => tab.key === value);

        if (nextTab) {
            selectTab(nextTab.route);
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
                        value={tab.key}
                        label={tab.label}
                        isActive={selectedTab.key === tab.key}
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

const ACTIVE_TAB_SEAM_OVERHANG = 'after:right-[-1px]';

const ACTIVE_TAB_RIGHT_EDGE =
    'after:right-0 after:[box-shadow:inset_-1px_0_var(--color-tab-b-3),inset_-2px_0_var(--color-tab-b-2),inset_-3px_0_var(--color-tab-b-1)]';

interface Win95TabProps {
    value: (typeof TABS)[number]['key'];
    label: string;
    isActive: boolean;
    isLast: boolean;
}

function Win95Tab({ value, label, isActive, isLast }: Win95TabProps) {
    const activeRightEdge = isLast
        ? ACTIVE_TAB_RIGHT_EDGE
        : ACTIVE_TAB_SEAM_OVERHANG;
    const activeCover = cn(ACTIVE_TAB_BOTTOM_BORDER_COVER, activeRightEdge);
    const tabHeight = isActive ? 'h-[38px]' : 'mt-[3px] h-[35px]';

    return (
        <div
            className={cn(
                'win95-border-tab relative w-25 rounded-t',
                tabHeight,
                isActive && activeCover
            )}
        >
            <Tabs.Tab value={value} className="bg-windows-gray h-7.5 w-full">
                {label}
            </Tabs.Tab>
        </div>
    );
}
