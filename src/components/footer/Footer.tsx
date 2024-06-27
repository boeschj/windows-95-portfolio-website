import React from 'react';
import { Clock } from './Clock';
import { WindowsButton } from '../buttons/WindowsButton';

export const Footer: React.FC = (): JSX.Element => {
    return (
        <div className="mx-auto w-full bg-windows-gray content-center hidden md:grid bottom-0 fixed">
            <div className="win95-border-top">
                <div className="h-[35px] flex items-center justify-between">
                    <WindowsButton />
                    <div className="win95-border-sunken-light">
                        <Clock />
                    </div>
                </div>
            </div>
        </div>
    );
};
