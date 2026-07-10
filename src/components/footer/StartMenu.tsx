'use client';

import Image from 'next/image';
import { Menu } from '@base-ui/react/menu';
import { TABS } from '@/config/tabs';
import { useTabRoute } from '@/hooks/useTabRoute';
import { links } from '@/config/aboutMe';
import { IMAGE_PATH } from '@/constants/application.constants';
import { Button } from '@/components/buttons/Button';

import type { TabRoute } from '@/config/tabs';

const MENU_ITEM_CLASS =
    'data-[highlighted]:bg-windows-blue flex h-10 w-full cursor-pointer items-center justify-center text-xl data-[highlighted]:text-white';

const START_BUTTON_CLASS =
    'flex h-[28px] cursor-pointer items-center justify-center space-x-2 px-1 pb-1 text-lg font-[1100] tracking-wide';

function StartButtonContent() {
    return (
        <>
            <Image
                src={`${IMAGE_PATH}/icons/win_95.svg`}
                alt="Win95"
                height="28"
                width="28"
            />
            <div>Start</div>
        </>
    );
}

export function StartMenu() {
    const { selectTab } = useTabRoute();

    const handleTabSelection = (route: TabRoute) => () => {
        selectTab(route);
    };

    return (
        <Menu.Root>
            <Menu.Trigger
                render={(triggerProps, state) => (
                    <Button
                        {...triggerProps}
                        pressed={state.open}
                        className={START_BUTTON_CLASS}
                    >
                        <StartButtonContent />
                    </Button>
                )}
            />
            <Menu.Portal>
                <Menu.Positioner side="top" align="start" sideOffset={4}>
                    <Menu.Popup className="win95-border-raised bg-windows-gray w-72">
                        {TABS.map((tab) => (
                            <Menu.Item
                                key={tab.key}
                                onClick={handleTabSelection(tab.route)}
                                className={MENU_ITEM_CLASS}
                            >
                                {tab.label}
                            </Menu.Item>
                        ))}
                        <Menu.Separator className="bg-windows-gray border-raised-b-2 mx-1 h-px border-t" />
                        <Menu.Item className={MENU_ITEM_CLASS}>
                            <a
                                href={links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </Menu.Item>
                        <Menu.Item className={MENU_ITEM_CLASS}>
                            <a
                                href={links.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </Menu.Item>
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    );
}
