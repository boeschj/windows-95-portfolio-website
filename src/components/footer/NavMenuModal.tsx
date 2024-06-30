'use client';

import React from 'react';
import { NavListItem } from './NavListItem';
import { cn } from '../../utils';
import { useAtom } from 'jotai';
import { tabSelectedAtom } from '../../store';
import { useNavMenu } from '../../hooks/useNavMenu';
import { Links } from '../../types/configTypes';
import { TabKey } from '../../types/application.types';

interface FooterProps {
    links: Links;
}

export const NavMenuModal: React.FC<FooterProps> = ({ links }) => {
    const [_, setTabSelected] = useAtom(tabSelectedAtom);
    const { navMenuOpen, closeMenu } = useNavMenu();

    const handleTabSelection = (tabIndex: TabKey) => () => {
        setTabSelected(tabIndex);
        closeMenu();
    };

    const handleExternalLink = (url: string) => () => {
        window.open(url, '_blank', 'noopener,noreferrer');
        closeMenu();
    };

    return (
        <div
            id="nav-menu"
            className={cn(
                `absolute bottom-11 left-1 flex h-fit w-72 flex-col divide-y-2 divide-windows-gray bg-windows-gray`,
                navMenuOpen ? `display-flex` : `hidden`
            )}
        >
            <div className="win95-border-raised">
                <ul className="h-fit divide-y-2 divide-windows-gray bg-windows-gray">
                    <NavListItem
                        label="About Me"
                        onClick={handleTabSelection(0)}
                    />
                    <NavListItem
                        label="Experience"
                        onClick={handleTabSelection(1)}
                    />
                    <NavListItem
                        label="Skills"
                        onClick={handleTabSelection(2)}
                    />
                    <NavListItem
                        label="Github"
                        onClick={handleExternalLink(links.github)}
                    />
                    <NavListItem
                        label="LinkedIn"
                        onClick={handleExternalLink(links.linkedIn)}
                    />
                </ul>
            </div>
        </div>
    );
};
