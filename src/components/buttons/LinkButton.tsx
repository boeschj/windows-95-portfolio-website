import Link from 'next/link';

interface LinkButtonProps {
    profileUrl: string;
    text: string;
}

export const LinkButton = ({
    profileUrl,
    text: buttonTitle,
}: LinkButtonProps): JSX.Element => {
    return (
        <Link
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            passHref
        >
            <button className="win95-border-raised h-8 w-36 bg-windows-gray">
                {buttonTitle}
            </button>
        </Link>
    );
};
