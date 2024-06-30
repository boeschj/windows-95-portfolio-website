'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '../../utils';
import { useNavMenu } from '../../hooks/useNavMenu';
import { IMAGE_PATH } from '../../constants/application.constants';

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
                className="flex h-[28px] items-center justify-center space-x-2 px-1 pb-1 text-lg font-[1100] tracking-wide"
            >
                <Image
                    src={`${IMAGE_PATH}/icons/win_95.svg`}
                    alt="Win95"
                    height="28"
                    width="28"
                />
                <div>Start</div>
            </button>
        </div>
    );
};
