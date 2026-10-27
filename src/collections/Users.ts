import type { CollectionConfig } from 'payload';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        cookies: {
            secure: IS_PRODUCTION,
        },
    },
    admin: {
        useAsTitle: 'email',
    },
    access: {
        create: () => false,
        delete: () => false,
    },
    fields: [],
};
