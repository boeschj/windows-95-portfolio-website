import 'server-only';

import { cache } from 'react';
import { getPayload } from 'payload';
import config from '@payload-config';
import { POST_STATUS } from '@/collections/Posts';

import type { Post } from '@/payload-types';

const POSTS_COLLECTION = 'posts';
const MAX_POSTS = 100;

export async function getBlogPosts(): Promise<Post[]> {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: POSTS_COLLECTION,
        where: { status: { equals: POST_STATUS.PUBLISHED } },
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
        where: { status: { equals: POST_STATUS.PUBLISHED } },
        limit: MAX_POSTS,
        depth: 0,
        select: { slug: true },
    });

    return docs.map((doc) => doc.slug);
}

export const getPostBySlug = cache(
    async (slug: string): Promise<Post | null> => {
        const payload = await getPayload({ config });

        const { docs } = await payload.find({
            collection: POSTS_COLLECTION,
            where: {
                and: [
                    { slug: { equals: slug } },
                    { status: { equals: POST_STATUS.PUBLISHED } },
                ],
            },
            limit: 1,
            depth: 1,
        });

        return docs[0] ?? null;
    }
);
