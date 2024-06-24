import React, { Dispatch, SetStateAction } from 'react';
import WindowsButton from '../buttons/windowsButton';
import {
    footerGradientBorders,
    timeGradientBorders,
} from '../gradients/gradientStyles';
import GradientWrapper from '../gradients/gradientWrapper';
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
        <GradientWrapper
            className="mx-auto w-full bg-windows-gray content-center hidden md:grid bottom-0 fixed"
            gradientBorders={footerGradientBorders}
        >
            <div className="h-[35px] flex items-center justify-between">
                <WindowsButton
                    setShowNavMenu={setShowNavMenu}
                    showNavMenu={showNavMenu}
                />
                <GradientWrapper
                    className="w-auto h-8"
                    gradientBorders={timeGradientBorders}
                >
                    <Clock />
                </GradientWrapper>
            </div>
        </GradientWrapper>
    );
};

export default Footer;
