import 'server-only';

import { cache } from 'react';
import { getPayload } from 'payload';
import config from '@payload-config';
import { PUBLISH_STATUS } from '@/collections/publishing';

import type { Experience } from '@/payload-types';

const EXPERIENCES_COLLECTION = 'experiences';
const MAX_EXPERIENCES = 100;

export async function getPublishedExperiences(): Promise<Experience[]> {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: EXPERIENCES_COLLECTION,
        where: { status: { equals: PUBLISH_STATUS.PUBLISHED } },
        sort: '-startDate',
        limit: MAX_EXPERIENCES,
        depth: 1,
    });

    return docs;
}

export async function getExperienceSlugs(): Promise<string[]> {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: EXPERIENCES_COLLECTION,
        where: { status: { equals: PUBLISH_STATUS.PUBLISHED } },
        limit: MAX_EXPERIENCES,
        depth: 0,
        select: { slug: true },
    });

    return docs.map((doc) => doc.slug);
}

export const getExperienceBySlug = cache(
    async (slug: string): Promise<Experience | null> => {
        const payload = await getPayload({ config });

        const { docs } = await payload.find({
            collection: EXPERIENCES_COLLECTION,
            where: {
                and: [
                    { slug: { equals: slug } },
                    { status: { equals: PUBLISH_STATUS.PUBLISHED } },
                ],
            },
            limit: 1,
            depth: 1,
        });

        return docs[0] ?? null;
    }
);
