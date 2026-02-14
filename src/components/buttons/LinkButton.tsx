import Link from 'next/link';

interface LinkButtonProps {
    profileUrl: string;
    text: string;
}

export function LinkButton({ profileUrl, text: buttonTitle }: LinkButtonProps) {
    return (
        <Link
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            passHref
        >
            <button className="win95-border-raised bg-windows-gray h-8 w-36">
                {buttonTitle}
            </button>
        </Link>
    );
}
