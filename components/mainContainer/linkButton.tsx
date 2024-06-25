import { useEffect, useState } from 'react';

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
        <button
            onClick={() => {
                setButtonClicked(true);

                window.open(profileUrl, '_blank', 'noopener,noreferrer');
            }}
            className={`bg-windows-gray h-8 win95-border-raised w-36`}
        >
            {buttonTitle}
        </button>
    );
};

export default LinkButton;
