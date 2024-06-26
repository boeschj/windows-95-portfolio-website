'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '../../utils';
import { useNavMenu } from '../../hooks/useNavMenu';

export const WindowsButton: React.FC = (): JSX.Element => {
    const { navMenuOpen, toggleMenu } = useNavMenu();

    return (
        <div
            id="windows-button"
            className={cn(
                navMenuOpen ? 'win95-border-sunken' : 'win95-border-raised'
            )}
        >
            <button
                onClick={toggleMenu}
                className="flex h-[28px] items-center justify-center pb-1 space-x-2 px-1 font-[1100] text-lg tracking-wide"
            >
                <Image
                    src={'/images/icons/win_95.svg'}
                    alt="Win95"
                    height="28"
                    width="28"
                />
                <div>Start</div>
            </button>
        </div>
    );
};
