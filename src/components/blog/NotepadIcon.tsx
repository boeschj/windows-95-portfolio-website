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
