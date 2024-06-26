'use client';

import React from 'react';
import { NavListItem } from './NavListItem';
import { cn } from '../../utils';
import { useAtom } from 'jotai';
import { tabSelectedAtom } from '../../store';
import { useNavMenu } from '../../hooks/useNavMenu';

interface Links {
    github: string;
    linkedIn: string;
    resume: string;
}

interface FooterProps {
    links: Links;
}

export const NavMenuModal: React.FC<FooterProps> = ({ links }) => {
    const [_, setTabSelected] = useAtom(tabSelectedAtom);
    const { navMenuOpen, closeMenu } = useNavMenu();

    return (
        <div
            id="nav-menu"
            className={cn(
                `divide-y-2 divide-windows-gray bg-windows-gray flex flex-col w-72 h-fit absolute bottom-11 left-1`,
                navMenuOpen ? `display-flex` : `hidden`
            )}
        >
            <div className="win95-border-raised">
                <ul className="divide-y-2 divide-windows-gray bg-windows-gray h-fit">
                    <NavListItem
                        label="About Me"
                        onClick={() => {
                            setTabSelected(0);
                            closeMenu();
                        }}
                    />
                    <NavListItem
                        label="Experience"
                        onClick={() => {
                            setTabSelected(1);
                            closeMenu();
                        }}
                    />
                    <NavListItem
                        label="Skills"
                        onClick={() => {
                            setTabSelected(2);
                            closeMenu();
                        }}
                    />
                    <NavListItem
                        label="Github"
                        onClick={() => {
                            window.open(
                                links.github,
                                '_blank',
                                'noopener,noreferrer'
                            );
                            closeMenu();
                        }}
                    />
                    <NavListItem
                        label="LinkedIn"
                        onClick={() => {
                            window.open(
                                links.linkedIn,
                                '_blank',
                                'noopener,noreferrer'
                            );
                            closeMenu();
                        }}
                    />
                </ul>
            </div>
        </div>
    );
};
