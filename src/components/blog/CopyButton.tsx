'use client';

import { useState } from 'react';

const RESET_DELAY_MS = 1500;

interface CopyButtonProps {
    code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        void navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, RESET_DELAY_MS);
        });
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy code"
            className="win95-thin-raised bg-windows-gray absolute top-[6px] right-[6px] z-10 px-2 py-[1px] text-[13px] text-black"
        >
            {copied ? 'Copied' : 'Copy'}
        </button>
    );
}
