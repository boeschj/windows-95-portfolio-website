'use client';
import React from 'react';

interface NavListItemProps {
    label: string;
    onClick: () => void;
}

export const NavListItem = React.forwardRef<HTMLLIElement, NavListItemProps>(
    ({ label, onClick }, ref) => (
        <li
            ref={ref}
            onClick={onClick}
            className="flex h-10 w-full cursor-pointer justify-center py-1 text-xl hover:bg-windows-blue hover:text-white"
        >
            {label}
        </li>
    )
);

NavListItem.displayName = 'ListItem';
