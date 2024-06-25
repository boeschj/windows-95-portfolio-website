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
}

const LinkButton: React.FC<ILinkButtonProps> = ({
    profileUrl,
    text: buttonTitle,
}): JSX.Element => {
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setButtonClicked(false);
        }, 400);
    }, [buttonClicked]);

    return (
        // <GradientWrapper
        //     gradientBorders={
        //         buttonClicked ? buttonClickedBorders : modalGradientBorders
        //     }
        // >
        <button
            onClick={() => {
                setButtonClicked(true);

                window.open(profileUrl, '_blank', 'noopener,noreferrer');
            }}
            className={`bg-windows-gray h-8 w95-border-raised w-36`}
        >
            {buttonTitle}
        </button>

        // </GradientWrapper>
    );
};

export default LinkButton;
