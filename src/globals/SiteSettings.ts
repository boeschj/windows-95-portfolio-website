import type { GlobalAfterChangeHook, GlobalConfig } from 'payload';
import { revalidatePaths } from '@/lib/revalidate';

const revalidateAfterChange: GlobalAfterChangeHook = async () => {
    await revalidatePaths(['/', 'layout']);
};

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    access: {
        read: () => true,
    },
    admin: {
        description: 'Site-wide settings that can be changed without a deploy.',
    },
    hooks: {
        afterChange: [revalidateAfterChange],
    },
    fields: [
        {
            name: 'githubUrl',
            type: 'text',
            required: true,
        },
        {
            name: 'linkedinUrl',
            type: 'text',
            required: true,
        },
    ],
};
