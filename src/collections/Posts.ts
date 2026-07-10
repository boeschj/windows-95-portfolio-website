import type {
    Access,
    CollectionAfterChangeHook,
    CollectionAfterDeleteHook,
    CollectionConfig,
} from 'payload';
import type { Post } from '@/payload-types';

export const POST_STATUS = {
    DRAFT: 'draft',
    PUBLISHED: 'published',
} as const;

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

const POST_STATUS_OPTIONS = [
    { label: 'Draft', value: POST_STATUS.DRAFT },
    { label: 'Published', value: POST_STATUS.PUBLISHED },
];

const readPublishedOrAuthenticated: Access = ({ req }) => {
    const isAuthenticated = Boolean(req.user);

    if (isAuthenticated) {
        return true;
    }

    return {
        status: {
            equals: POST_STATUS.PUBLISHED,
        },
    };
};

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
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
            defaultValue: POST_STATUS.DRAFT,
            options: POST_STATUS_OPTIONS,
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
