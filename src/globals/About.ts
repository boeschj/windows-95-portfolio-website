import type { GlobalAfterChangeHook, GlobalConfig } from 'payload';
import { revalidatePaths } from '@/lib/revalidate';

const revalidateAfterChange: GlobalAfterChangeHook = async () => {
    await revalidatePaths('/');
};

export const About: GlobalConfig = {
    slug: 'about',
    access: {
        read: () => true,
    },
    admin: {
        description: 'The About tab content, rendered inline on the home page.',
    },
    hooks: {
        afterChange: [revalidateAfterChange],
    },
    fields: [
        {
            name: 'content',
            type: 'richText',
        },
    ],
};
