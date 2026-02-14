import { useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { showNavMenuAtom } from '@/store';

export const useNavMenu = () => {
    const [navMenuOpen, setNavMenuOpen] = useAtom(showNavMenuAtom);

    const toggleMenu = useCallback(() => {
        setNavMenuOpen((prev) => !prev);
    }, [setNavMenuOpen]);

    const closeMenu = useCallback(() => {
        setNavMenuOpen(false);
    }, [setNavMenuOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) return;

            if (
                !target.closest('#nav-menu') &&
                !target.closest('#windows-button')
            ) {
                closeMenu();
            }
        };

        if (navMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navMenuOpen, closeMenu]);

    return { navMenuOpen, toggleMenu, closeMenu };
};
