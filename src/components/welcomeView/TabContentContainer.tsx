'use client';

import React from 'react';
import { Tabs } from '@base-ui/react/tabs';
import { useAtom } from 'jotai';
import { tabSelectedAtom } from '@/store';
import { TABS, isValidTabKey } from '@/config/tabs';
import { cn } from '@/utils';

const TAB_PANEL_CLASS = 'flex h-full min-h-0 w-full flex-col';

interface TabContentContainerProps {
    children: React.ReactNode;
}

export function TabContentContainer({ children }: TabContentContainerProps) {
    const [tabSelected, setTabSelected] = useAtom(tabSelectedAtom);
    const childArray = React.Children.toArray(children);

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
                {TABS.map((tab) => (
                    <Win95Tab
                        key={tab.key}
                        value={tab.key}
                        label={tab.label}
                        isActive={tabSelected === tab.key}
                    />
                ))}
            </Tabs.List>
            <div className="win95-border-raised flex h-full flex-col p-4 md:p-6">
                <h1 className="mb-2 h-10 w-full text-center text-3xl leading-10 font-extrabold md:mb-5 md:text-[50px]">
                    {TABS[tabSelected].title}
                </h1>
                <div className="win95-border-sunken flex h-[calc(100%-40px)] flex-col md:h-[calc(100%-60px)]">
                    {TABS.map((tab, index) => (
                        <Tabs.Panel
                            key={tab.key}
                            value={tab.key}
                            keepMounted
                            className={TAB_PANEL_CLASS}
                        >
                            {childArray[index]}
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
    value: (typeof TABS)[number]['key'];
    label: string;
    isActive: boolean;
}

function Win95Tab({ value, label, isActive }: Win95TabProps) {
    return (
        <div
            className={cn(
                'win95-border-tab relative w-[100px] rounded-t',
                isActive ? 'h-[38px]' : 'mt-[3px] h-[35px]'
            )}
        >
            <Tabs.Tab
                value={value}
                className={cn(
                    'bg-windows-gray h-[30px] w-full',
                    isActive && ACTIVE_TAB_BOTTOM_BORDER_COVER
                )}
            >
                {label}
            </Tabs.Tab>
        </div>
    );
}
