import Link from 'next/link';
import { Button } from './Button';

interface LinkButtonProps {
    profileUrl: string;
    text: string;
}

export function LinkButton({ profileUrl, text }: LinkButtonProps) {
    return (
        <Button
            className="h-8 w-36 text-center"
            nativeButton={false}
            render={
                <Link
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                />
            }
        >
            {text}
        </Button>
    );
}
