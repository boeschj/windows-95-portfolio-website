import type {
    CollectionAfterChangeHook,
    CollectionAfterDeleteHook,
    CollectionConfig,
} from 'payload';
import type { Post } from '@/payload-types';
import {
    PUBLISH_STATUS,
    PUBLISH_STATUS_OPTIONS,
    readPublishedOrAuthenticated,
} from './publishing';

export { PUBLISH_STATUS as POST_STATUS };

export const POST_CATEGORY = {
    BLOG: 'blog',
    ABOUT: 'about',
} as const;

const POST_CATEGORY_OPTIONS = [
    { label: 'Blog post', value: POST_CATEGORY.BLOG },
    { label: 'About page', value: POST_CATEGORY.ABOUT },
];

const BLOG_INDEX_PATH = '/';

async function revalidatePostPaths(slug: string) {
    try {
        const { revalidatePath } = await import('next/cache');
        revalidatePath(BLOG_INDEX_PATH);
        revalidatePath('/llms.txt');
        revalidatePath(`/blog/${slug}`);
    } catch {
        // revalidatePath only works inside the Next.js request context (the
        // admin API routes); ignore when Payload runs elsewhere (CLI, seeds).
    }
}

const revalidateAfterChange: CollectionAfterChangeHook<Post> = async ({
    doc,
}) => {
    await revalidatePostPaths(doc.slug);
    return doc;
};

const revalidateAfterDelete: CollectionAfterDeleteHook<Post> = async ({
    doc,
}) => {
    await revalidatePostPaths(doc.slug);
    return doc;
};

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'status', 'publishedAt'],
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
            name: 'category',
            type: 'select',
            defaultValue: POST_CATEGORY.BLOG,
            options: POST_CATEGORY_OPTIONS,
            admin: {
                position: 'sidebar',
                description:
                    'About-page posts are rendered inline on the About tab and hidden from the blog listing.',
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
