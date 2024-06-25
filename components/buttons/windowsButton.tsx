import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import win95 from '../../styles/win_95.svg';
import {
    buttonClickedBorders,
    modalGradientBorders,
} from '../gradients/gradientStyles';
import GradientWrapper from '../gradients/gradientWrapper';
import { cn } from '../../utils';

interface IWindowsButtonProps {
    setShowNavMenu: Dispatch<SetStateAction<boolean>>;
    showNavMenu: boolean;
}

const WindowsButton: React.FC<IWindowsButtonProps> = ({
    setShowNavMenu,
    showNavMenu,
}): JSX.Element => {
    return (
        // <GradientWrapper
        //     className="h-8 w-24 text-center items-center flex justify-center"
        //     gradientBorders={
        //         showNavMenu ? buttonClickedBorders : modalGradientBorders
        //     }
        // >
        <div
            className={cn(
                showNavMenu ? 'w95-border-sunken' : 'w95-border-raised'
            )}
        >
            <button
                onClick={() => setShowNavMenu(!showNavMenu)}
                className="flex h-[28px] items-center justify-center pb-1 space-x-2 px-1 font-[1100] text-lg tracking-wide"
            >
                <Image src={win95} alt="Win95" height="28" width="28" />
                <div>Start</div>
            </button>
        </div>
        // </GradientWrapper>
    );
};

export default WindowsButton;
