'use client';

interface NavListItemProps {
    label: string;
    onClick: () => void;
}

export function NavListItem({ label, onClick }: NavListItemProps) {
    return (
        <li>
            <button
                type="button"
                onClick={onClick}
                className="hover:bg-windows-blue flex h-10 w-full cursor-pointer justify-center py-1 text-xl hover:text-white"
            >
                {label}
            </button>
        </li>
    );
}
