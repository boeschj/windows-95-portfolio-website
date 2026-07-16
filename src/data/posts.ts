import 'server-only';

import { cache } from 'react';
import { getPayload } from 'payload';
import config from '@payload-config';
import { POST_CATEGORY, POST_STATUS } from '@/collections/Posts';

import type { Post } from '@/payload-types';

const POSTS_COLLECTION = 'posts';
const MAX_POSTS = 100;

export async function getBlogPosts(): Promise<Post[]> {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: POSTS_COLLECTION,
        where: {
            and: [
                { status: { equals: POST_STATUS.PUBLISHED } },
                { category: { equals: POST_CATEGORY.BLOG } },
            ],
        },
        sort: '-publishedAt',
        limit: MAX_POSTS,
        depth: 1,
    });

    return docs;
}

export async function getBlogSlugs(): Promise<string[]> {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: POSTS_COLLECTION,
        where: {
            and: [
                { status: { equals: POST_STATUS.PUBLISHED } },
                { category: { equals: POST_CATEGORY.BLOG } },
            ],
        },
        limit: MAX_POSTS,
        depth: 0,
        select: { slug: true },
    });

    return docs.map((doc) => doc.slug);
}

export const getAboutPost = cache(async (): Promise<Post | null> => {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: POSTS_COLLECTION,
        where: {
            and: [
                { status: { equals: POST_STATUS.PUBLISHED } },
                { category: { equals: POST_CATEGORY.ABOUT } },
            ],
        },
        limit: 1,
        depth: 1,
    });

    return docs[0] ?? null;
});

export const getPostBySlug = cache(
    async (slug: string): Promise<Post | null> => {
        const payload = await getPayload({ config });

        const { docs } = await payload.find({
            collection: POSTS_COLLECTION,
            where: {
                and: [
                    { slug: { equals: slug } },
                    { status: { equals: POST_STATUS.PUBLISHED } },
                    { category: { equals: POST_CATEGORY.BLOG } },
                ],
            },
            limit: 1,
            depth: 1,
        });

        return docs[0] ?? null;
    }
);
