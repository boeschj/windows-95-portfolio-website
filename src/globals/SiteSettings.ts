import type { GlobalAfterChangeHook, GlobalConfig } from 'payload';

const revalidateAfterChange: GlobalAfterChangeHook = async () => {
    try {
        const { revalidatePath } = await import('next/cache');
        revalidatePath('/', 'layout');
    } catch {
        // revalidatePath only works inside the Next.js request context (the
        // admin API routes); ignore when Payload runs elsewhere (CLI, seeds).
    }
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
