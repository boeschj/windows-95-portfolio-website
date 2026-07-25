import type {
    CollectionAfterChangeHook,
    CollectionAfterDeleteHook,
    CollectionConfig,
} from 'payload';
import type { Experience } from '@/payload-types';
import { revalidatePaths } from '@/lib/revalidate';
import {
    PUBLISH_STATUS,
    PUBLISH_STATUS_OPTIONS,
    readPublishedOrAuthenticated,
} from './publishing';

function revalidateExperience(slug: string) {
    return revalidatePaths('/', '/llms.txt', `/experience/${slug}`);
}

const revalidateAfterChange: CollectionAfterChangeHook<Experience> = async ({
    doc,
}) => {
    await revalidateExperience(doc.slug);
    return doc;
};

const revalidateAfterDelete: CollectionAfterDeleteHook<Experience> = async ({
    doc,
}) => {
    await revalidateExperience(doc.slug);
    return doc;
};

export const Experiences: CollectionConfig = {
    slug: 'experiences',
    admin: {
        useAsTitle: 'company',
        defaultColumns: ['company', 'role', 'startDate', 'status'],
    },
    access: {
        read: readPublishedOrAuthenticated,
    },
    hooks: {
        afterChange: [revalidateAfterChange],
        afterDelete: [revalidateAfterDelete],
    },
    fields: [
        {
            name: 'company',
            type: 'text',
            required: true,
        },
        {
            name: 'role',
            type: 'text',
            required: true,
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'url',
            type: 'text',
            admin: {
                description: 'Optional link to the company website.',
            },
        },
        {
            name: 'content',
            type: 'richText',
        },
        {
            name: 'startDate',
            type: 'date',
            required: true,
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'monthOnly',
                },
            },
        },
        {
            name: 'endDate',
            type: 'date',
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'monthOnly',
                },
                description: 'Leave empty for a current role ("Present").',
            },
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: PUBLISH_STATUS.DRAFT,
            options: PUBLISH_STATUS_OPTIONS,
            admin: {
                position: 'sidebar',
            },
        },
    ],
};
