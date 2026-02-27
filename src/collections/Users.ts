import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email',
    },
    access: {
        create: () => false, //comment out to allow users to be created / deleted
        delete: () => false,
    },
    fields: [],
};
