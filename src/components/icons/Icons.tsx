interface NotepadIconProps {
    size?: number;
}

const DEFAULT_SIZE_PX = 16;

export function NotepadIcon({ size = DEFAULT_SIZE_PX }: NotepadIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            className="flex-none"
            aria-hidden="true"
        >
            <rect x="2" y="1" width="9" height="13" fill="#fff" stroke="#000" />
            <rect x="3.5" y="1" width="1" height="13" fill="#0000a8" />
            <line x1="6" y1="4" x2="10" y2="4" stroke="#000" />
            <line x1="6" y1="6" x2="10" y2="6" stroke="#000" />
            <line x1="6" y1="8" x2="10" y2="8" stroke="#000" />
            <line x1="6" y1="10" x2="9" y2="10" stroke="#000" />
        </svg>
    );
}

export function XIcon({ size = DEFAULT_SIZE_PX }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="flex-none"
            aria-hidden="true"
        >
            <path
                d="M0.5 0.5 L7.5 7.5 M7.5 0.5 L0.5 7.5"
                stroke="#000"
                strokeWidth="1.3"
            />
        </svg>
    );
}

export function MinimizeButtonIcon() {
    return <span className="absolute bottom-0.75 left-1 h-0.5 w-2 bg-black" />;
}

export function MaximizeButtonIcon() {
    return (
        <span className="absolute top-0.75 left-1 h-2 w-2.5 border border-t-2 border-black" />
    );
}

export function DocumentIcon() {
    return (
        <svg
            width="16"
            height="18"
            viewBox="0 0 18 20"
            className="flex-none"
            aria-hidden="true"
        >
            <path d="M1 1 h11 l5 5 v13 h-16 z" fill="#fff" stroke="#808080" />
            <path d="M12 1 v5 h5" fill="#dfdfdf" stroke="#808080" />
            <line x1="4" y1="9" x2="14" y2="9" stroke="#0000a8" />
            <line x1="4" y1="12" x2="14" y2="12" stroke="#0000a8" />
            <line x1="4" y1="15" x2="10" y2="15" stroke="#0000a8" />
        </svg>
    );
}
