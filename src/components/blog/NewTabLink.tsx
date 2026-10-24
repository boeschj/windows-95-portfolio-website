import type { ReactNode } from 'react';

const NEW_TAB_TARGET = '_blank';
const NEW_TAB_REL = 'noopener noreferrer';

interface NewTabLinkProps {
    href: string | undefined;
    children: ReactNode;
}

export function NewTabLink({ href, children }: NewTabLinkProps) {
    return (
        <a href={href} target={NEW_TAB_TARGET} rel={NEW_TAB_REL}>
            {children}
        </a>
    );
}
