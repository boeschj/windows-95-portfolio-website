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
            <button className="bg-windows-gray h-8 win95-border-raised w-36">
                {buttonTitle}
            </button>
        </Link>
    );
};
