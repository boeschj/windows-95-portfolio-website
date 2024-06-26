import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { cn } from '../../utils';

interface WindowsButtonProps {
    setShowNavMenu: Dispatch<SetStateAction<boolean>>;
    showNavMenu: boolean;
}

export const WindowsButton: React.FC<WindowsButtonProps> = ({
    setShowNavMenu,
    showNavMenu,
}): JSX.Element => {
    return (
        <div
            className={cn(
                showNavMenu ? 'win95-border-sunken' : 'win95-border-raised'
            )}
        >
            <button
                onClick={() => setShowNavMenu(!showNavMenu)}
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
