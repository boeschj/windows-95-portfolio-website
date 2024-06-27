import React from 'react';
import { Clock } from './Clock';
import { WindowsButton } from '../buttons/WindowsButton';

export const Footer: React.FC = (): JSX.Element => {
    return (
        <div className="fixed bottom-0 mx-auto hidden w-full content-center bg-windows-gray md:grid">
            <div className="win95-border-top">
                <div className="flex h-[35px] items-center justify-between">
                    <WindowsButton />
                    <div className="win95-border-sunken-light">
                        <Clock />
                    </div>
                </div>
            </div>
        </div>
    );
};
