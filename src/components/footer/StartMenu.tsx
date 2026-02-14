'use client';

import Image from 'next/image';
import { Menu } from '@base-ui/react/menu';
import { useAtom } from 'jotai';
import { tabSelectedAtom } from '@/store';
import { TAB_CONFIG } from '@/config/main';
import { links } from '@/config/aboutMe';
import { IMAGE_PATH } from '@/constants/application.constants';
import { cn } from '@/utils';

import type { TabKey } from '@/types/application.types';

export function StartMenu() {
    const [, setTabSelected] = useAtom(tabSelectedAtom);

    const handleTabSelection = (tabKey: TabKey) => () => {
        setTabSelected(tabKey);
    };

    const handleExternalLink = (url: string) => () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Menu.Root>
            <Menu.Trigger
                className={(state) =>
                    cn(
                        state.open
                            ? 'win95-border-sunken'
                            : 'win95-border-raised',
                        'flex h-[28px] cursor-pointer items-center justify-center space-x-2 px-1 pb-1 text-lg font-[1100] tracking-wide'
                    )
                }
            >
                <Image
                    src={`${IMAGE_PATH}/icons/win_95.svg`}
                    alt="Win95"
                    height="28"
                    width="28"
                />
                <div>Start</div>
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Positioner
                    side="top"
                    align="start"
                    sideOffset={4}
                >
                    <Menu.Popup className="win95-border-raised bg-windows-gray w-72">
                        {TAB_CONFIG.map((tab) => (
                            <Menu.Item
                                key={tab.tabKey}
                                onClick={handleTabSelection(tab.tabKey)}
                                className="data-[highlighted]:bg-windows-blue flex h-10 w-full cursor-pointer items-center justify-center text-xl data-[highlighted]:text-white"
                            >
                                {tab.label}
                            </Menu.Item>
                        ))}
                        <Menu.Separator className="bg-windows-gray border-raised-b-2 mx-1 h-px border-t" />
                        <Menu.Item
                            onClick={handleExternalLink(links.github)}
                            className="data-[highlighted]:bg-windows-blue flex h-10 w-full cursor-pointer items-center justify-center text-xl data-[highlighted]:text-white"
                        >
                            Github
                        </Menu.Item>
                        <Menu.Item
                            onClick={handleExternalLink(links.linkedIn)}
                            className="data-[highlighted]:bg-windows-blue flex h-10 w-full cursor-pointer items-center justify-center text-xl data-[highlighted]:text-white"
                        >
                            LinkedIn
                        </Menu.Item>
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    );
}
