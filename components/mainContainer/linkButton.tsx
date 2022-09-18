import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    buttonClickedBorders,
    modalGradientBorders,
} from '../gradients/gradientStyles';
import GradientWrapper from '../gradients/gradientWrapper';

interface ILinkButtonProps {
    profileUrl: string;
    text: string;
    isResume?: boolean;
}

const LinkButton: React.FC<ILinkButtonProps> = ({
    profileUrl,
    text: buttonTitle,
    isResume,
}: ILinkButtonProps): JSX.Element => {
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setButtonClicked(false);
        }, 400);
    }, [buttonClicked]);

    const button = (
        <button
            onClick={() => {
                setButtonClicked(true);
                if (!isResume)
                    window.open(profileUrl, '_blank', 'noopener,noreferrer');
            }}
            className={`${
                buttonClicked ? 'h-[28px]' : 'h-[30px]'
            } bg-windows-gray w-[150px] w-full`}
        >
            {buttonTitle}
        </button>
    );

    const resumeButton = (
        <Link href={profileUrl} target="_blank" download children={button} />
    );

    return (
        <GradientWrapper
            gradientBorders={
                buttonClicked ? buttonClickedBorders : modalGradientBorders
            }
        >
            {isResume ? resumeButton : button}
        </GradientWrapper>
    );
};

export default LinkButton;
