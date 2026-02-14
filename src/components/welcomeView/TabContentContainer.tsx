'use client';

import { Tabs } from '@base-ui/react/tabs';
import { useAtom } from 'jotai';
import { tabSelectedAtom } from '@/store';
import { TAB_CONFIG } from '@/config/main';
import { cn } from '@/utils';

import type { TabKey } from '@/types/application.types';
import type { TabItem } from '@/types/configTypes';

export function TabContentContainer() {
    const [tabSelected, setTabSelected] = useAtom(tabSelectedAtom);

    const handleValueChange = (value: unknown) => {
        if (isValidTabKey(value)) {
            setTabSelected(value);
        }
    };

    return (
        <Tabs.Root
            value={tabSelected}
            onValueChange={handleValueChange}
            className="flex h-[calc(100%-90px)] flex-col"
        >
            <Tabs.List className="flex flex-row">
                {TAB_CONFIG.map((tab) => (
                    <Win95Tab
                        key={tab.tabKey}
                        tab={tab}
                        isActive={tabSelected === tab.tabKey}
                    />
                ))}
            </Tabs.List>
            <div className="win95-border-raised flex h-full flex-col p-4 md:p-6">
                <h1 className="mb-2 h-10 w-full text-center text-3xl leading-10 font-extrabold md:mb-5 md:text-[50px]">
                    {TAB_CONFIG[tabSelected].title}
                </h1>
                <div className="win95-border-sunken flex h-[calc(100%-40px)] flex-col md:h-[calc(100%-60px)]">
                    {TAB_CONFIG.map((tab) => (
                        <Tabs.Panel
                            key={tab.tabKey}
                            value={tab.tabKey}
                            className="flex h-full min-h-0 w-full flex-col"
                        >
                            <tab.component />
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
    after:left-[1px]
    after:right-0
    after:z-30
    after:h-[4px]
    after:w-[98px]
    after:border-x-[1px]
    after:border-white
    after:bg-windows-gray
    after:content-[""]
`;

interface Win95TabProps {
    tab: TabItem;
    isActive: boolean;
}

const VALID_TAB_KEYS = new Set<number>(TAB_CONFIG.map((tab) => tab.tabKey));

function isValidTabKey(value: unknown): value is TabKey {
    return typeof value === 'number' && VALID_TAB_KEYS.has(value);
}

function Win95Tab({ tab, isActive }: Win95TabProps) {
    return (
        <div
            className={cn(
                'win95-border-tab relative w-[100px] rounded-t',
                isActive ? 'h-[38px]' : 'mt-[3px] h-[35px]'
            )}
        >
            <Tabs.Tab
                value={tab.tabKey}
                className={cn(
                    'bg-windows-gray h-[30px] w-full',
                    isActive && ACTIVE_TAB_BOTTOM_BORDER_COVER
                )}
            >
                {tab.label}
            </Tabs.Tab>
        </div>
    );
}
