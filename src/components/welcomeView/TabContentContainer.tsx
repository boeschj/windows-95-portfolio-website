'use client';

import { Tabs } from '@base-ui/react/tabs';
import { useAtom } from 'jotai';
import { tabSelectedAtom } from '@/store';
import { About } from '@/components/tabSections/about/About';
import { Experience } from '@/components/tabSections/experience/Experience';
import { Skills } from '@/components/tabSections/skills/Skills';
import { cn } from '@/utils';

export const TABS = [
    { key: 0, title: "Hi, I'm Jordan 👋", label: 'About Me' },
    { key: 1, title: 'My Work', label: 'Experience' },
    { key: 2, title: 'My Skills', label: 'Skills' },
] as const;

export type TabKey = (typeof TABS)[number]['key'];

const VALID_TAB_KEYS = new Set<number>(TABS.map((tab) => tab.key));

function isValidTabKey(value: unknown): value is TabKey {
    return typeof value === 'number' && VALID_TAB_KEYS.has(value);
}

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
                    <Tabs.Panel
                        value={0}
                        className="flex h-full min-h-0 w-full flex-col"
                    >
                        <About />
                    </Tabs.Panel>
                    <Tabs.Panel
                        value={1}
                        className="flex h-full min-h-0 w-full flex-col"
                    >
                        <Experience />
                    </Tabs.Panel>
                    <Tabs.Panel
                        value={2}
                        className="flex h-full min-h-0 w-full flex-col"
                    >
                        <Skills />
                    </Tabs.Panel>
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
    value: TabKey;
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
