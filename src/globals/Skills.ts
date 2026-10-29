import type { GlobalAfterChangeHook, GlobalConfig } from 'payload';
import { revalidatePaths } from '@/lib/revalidate';

const revalidateAfterChange: GlobalAfterChangeHook = async () => {
    await revalidatePaths(['/', 'layout']);
};

export const Skills: GlobalConfig = {
    slug: 'skills',
    access: {
        read: () => true,
    },
    admin: {
        description:
            'The Skills tab summary. The icons below it come from tags that have an icon. Reorder them from the Tags list.',
    },
    hooks: {
        afterChange: [revalidateAfterChange],
    },
    fields: [
        {
            name: 'summary',
            type: 'textarea',
        },
    ],
};
