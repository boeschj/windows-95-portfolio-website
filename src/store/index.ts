import { atom } from 'jotai';

const INITIAL_TAB_SELECTED = 0;
const INITIAL_SHOW_NAV_MENU = false;

export const tabSelectedAtom = atom<number>(INITIAL_TAB_SELECTED);
export const showNavMenuAtom = atom<boolean>(INITIAL_SHOW_NAV_MENU);
