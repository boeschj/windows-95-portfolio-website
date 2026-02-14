import { About } from '@/components/tabSections/about/About';
import { Experience } from '@/components/tabSections/experience/Experience';
import { Skills } from '@/components/tabSections/skills/Skills';
import type { TabItem } from '@/types/configTypes';

export const TAB_CONFIG = [
    {
        tabKey: 0,
        title: "Hi, I'm Jordan 👋",
        label: 'About Me',
        component: About,
    },
    { tabKey: 1, title: 'My Work', label: 'Experience', component: Experience },
    { tabKey: 2, title: 'My Skills', label: 'Skills', component: Skills },
] as const satisfies readonly TabItem[];
