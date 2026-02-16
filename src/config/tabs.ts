export const TABS = [
    { key: 0, title: "Hi, I'm Jordan 👋", label: 'About Me' },
    { key: 1, title: 'My Work', label: 'Experience' },
    { key: 2, title: 'My Skills', label: 'Skills' },
] as const;

export type TabKey = (typeof TABS)[number]['key'];

const VALID_TAB_KEYS = new Set<number>(TABS.map((tab) => tab.key));

export function isValidTabKey(value: unknown): value is TabKey {
    return typeof value === 'number' && VALID_TAB_KEYS.has(value);
}
