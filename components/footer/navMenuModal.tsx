import Link from 'next/link';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { modalGradientBorders } from '../gradients/gradientStyles';
import GradientWrapper from '../gradients/gradientWrapper';
import NavListItem from './navListItem';
import { cn } from '../../utils';

interface ILinks {
    github: string;
    linkedIn: string;
    resume: string;
}

interface IFooterProps {
    setShowNavMenu: Dispatch<SetStateAction<boolean>>;
    showNavMenu: boolean;
    setTabSelected: Dispatch<SetStateAction<number>>;
    links: ILinks;
}

const NavMenuModal: React.FC<IFooterProps> = ({
    setShowNavMenu,
    showNavMenu,
    setTabSelected,
    links,
}) => {
    const impactRef = useRef<HTMLDivElement>(null);

    const useOutsideClick = (
        ref: React.RefObject<HTMLDivElement>,
        callback: { (): void }
    ) => {
        useEffect(() => {
            const handleClickOutside = (event: any) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    callback();
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        });
    };

    useOutsideClick(impactRef, () => setShowNavMenu(false));

    return (
        <div
            className={cn(
                `divide-y-2 divide-windows-gray bg-windows-gray flex flex-col w-72 h-fit absolute bottom-11 left-1`,
                showNavMenu ? `display-flex` : `hidden`
            )}
            ref={impactRef}
        >
            {/* <GradientWrapper gradientBorders={modalGradientBorders}> */}
            <div className="w95-border-raised">
                <ul className="divide-y-2 divide-windows-gray bg-windows-gray h-fit">
                    <NavListItem
                        label="About Me"
                        onClick={() => {
                            setTabSelected(0);
                            setShowNavMenu(!showNavMenu);
                        }}
                    />
                    <NavListItem
                        label="Experience"
                        onClick={() => {
                            setTabSelected(1);
                            setShowNavMenu(!showNavMenu);
                        }}
                    />
                    <NavListItem
                        label="Skills"
                        onClick={() => {
                            setTabSelected(2);
                            setShowNavMenu(!showNavMenu);
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
                            setShowNavMenu(!showNavMenu);
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
                            setShowNavMenu(!showNavMenu);
                        }}
                    />
                </ul>
            </div>
            {/* </GradientWrapper> */}
        </div>
    );
};

export default NavMenuModal;
