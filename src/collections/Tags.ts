import type {
    CollectionAfterChangeHook,
    CollectionAfterDeleteHook,
    CollectionConfig,
    Field,
} from 'payload';
import { revalidatePaths } from '@/lib/revalidate';

import type { Tag } from '@/payload-types';

export const TAGS_COLLECTION = 'tags';

export const TAG_CATEGORY = {
    LANGUAGE: 'language',
    FRONTEND: 'frontend',
    BACKEND: 'backend',
    AI: 'ai',
    INFRASTRUCTURE: 'infrastructure',
    TOOLING: 'tooling',
} as const;

export const TAG_CATEGORY_OPTIONS = [
    { label: 'Languages', value: TAG_CATEGORY.LANGUAGE },
    { label: 'Frontend', value: TAG_CATEGORY.FRONTEND },
    { label: 'Backend', value: TAG_CATEGORY.BACKEND },
    { label: 'AI', value: TAG_CATEGORY.AI },
    { label: 'Infrastructure', value: TAG_CATEGORY.INFRASTRUCTURE },
    { label: 'Tooling', value: TAG_CATEGORY.TOOLING },
];

const revalidateAfterChange: CollectionAfterChangeHook<Tag> = async ({
    doc,
}) => {
    await revalidatePaths(['/', 'layout']);
    return doc;
};

const revalidateAfterDelete: CollectionAfterDeleteHook<Tag> = async ({
    doc,
}) => {
    await revalidatePaths(['/', 'layout']);
    return doc;
};

export const Tags: CollectionConfig = {
    slug: TAGS_COLLECTION,
    orderable: true,
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'category', 'icon'],
        description:
            'Tags with an icon show on the Skills tab. Drag rows to set their order.',
    },
    hooks: {
        afterChange: [revalidateAfterChange],
        afterDelete: [revalidateAfterDelete],
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'category',
            type: 'select',
            required: true,
            options: TAG_CATEGORY_OPTIONS,
        },
        {
            name: 'icon',
            type: 'upload',
            relationTo: 'media',
        },
    ],
};

export const TAGS_FIELD: Field = {
    name: 'tags',
    type: 'relationship',
    relationTo: TAGS_COLLECTION,
    hasMany: true,
    admin: {
        position: 'sidebar',
        description: 'Tech used. Pick existing tags or create new ones.',
    },
};
