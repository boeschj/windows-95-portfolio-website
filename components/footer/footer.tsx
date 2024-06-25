import React, { Dispatch, SetStateAction } from 'react';
import WindowsButton from '../buttons/windowsButton';
import Clock from './clock';

interface IFooterProps {
    setShowNavMenu: Dispatch<SetStateAction<boolean>>;
    showNavMenu: boolean;
}

const Footer: React.FC<IFooterProps> = ({
    setShowNavMenu,
    showNavMenu,
}: IFooterProps): JSX.Element => {
    return (
        <div className="mx-auto w-full bg-windows-gray content-center hidden md:grid bottom-0 fixed">
            <div className="win95-border-top">
                <div className="h-[35px] flex items-center justify-between">
                    <WindowsButton
                        setShowNavMenu={setShowNavMenu}
                        showNavMenu={showNavMenu}
                    />

                    <div className="win95-border-sunken-light">
                        <Clock />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
