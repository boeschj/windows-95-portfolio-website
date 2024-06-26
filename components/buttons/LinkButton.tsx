interface LinkButtonProps {
    profileUrl: string;
    text: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
    profileUrl,
    text: buttonTitle,
}): JSX.Element => {
    return (
        <button
            onClick={() =>
                window.open(profileUrl, '_blank', 'noopener,noreferrer')
            }
            className={`bg-windows-gray h-8 win95-border-raised w-36`}
        >
            {buttonTitle}
        </button>
    );
};
