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
            className="hover:bg-windows-blue hover:text-white h-10 text-xl flex w-full justify-center py-1 cursor-pointer"
        >
            {label}
        </li>
    )
);

NavListItem.displayName = 'ListItem';
