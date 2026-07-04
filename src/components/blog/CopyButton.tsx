'use client';

interface CopyButtonProps {
    code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
    const handleCopy = () => {
        void navigator.clipboard.writeText(code);
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy code"
            className="notepad-copy-button bg-windows-gray absolute top-[6px] right-[6px] z-10 px-2 py-[1px] text-[13px] text-black"
        >
            Copy
        </button>
    );
}
