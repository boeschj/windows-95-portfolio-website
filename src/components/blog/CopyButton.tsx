'use client';

import { Button } from '@/components/buttons/Button';
import { cn } from '@/utils';

interface CopyButtonProps {
    code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
    const handleCopy = () => {
        void navigator.clipboard.writeText(code);
    };

    return (
        <Button
            type="button"
            onClick={handleCopy}
            aria-label="Copy code"
            className={cn(
                'bg-windows-gray absolute top-1.5 right-1.5 z-10 px-2 py-px text-[13px] text-black',
                'transition-transform duration-60 ease-out',
                'active:shadow-win95-sunken active:translate-x-px active:translate-y-px'
            )}
        >
            Copy
        </Button>
    );
}
