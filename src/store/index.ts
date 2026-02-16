import { atom } from 'jotai';

import type { TabKey } from '@/config/tabs';

const INITIAL_TAB_SELECTED = 0;

export const tabSelectedAtom = atom<TabKey>(INITIAL_TAB_SELECTED);
