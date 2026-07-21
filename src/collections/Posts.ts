import type {
    CollectionAfterChangeHook,
    CollectionAfterDeleteHook,
    CollectionConfig,
} from 'payload';
import type { Post } from '@/payload-types';
import { revalidatePaths } from '@/lib/revalidate';
import {
    PUBLISH_STATUS,
    PUBLISH_STATUS_OPTIONS,
    readPublishedOrAuthenticated,
} from './publishing';

export { PUBLISH_STATUS as POST_STATUS };

function revalidatePost(slug: string) {
    return revalidatePaths('/', '/llms.txt', `/blog/${slug}`);
}

const revalidateAfterChange: CollectionAfterChangeHook<Post> = async ({
    doc,
}) => {
    await revalidatePost(doc.slug);
    return doc;
};

const revalidateAfterDelete: CollectionAfterDeleteHook<Post> = async ({
    doc,
}) => {
    await revalidatePost(doc.slug);
    return doc;
};

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'status', 'publishedAt'],
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
            name: 'title',
            type: 'text',
            required: true,
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
            name: 'content',
            type: 'richText',
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
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },
    ],
};
