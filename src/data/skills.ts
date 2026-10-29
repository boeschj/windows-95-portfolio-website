import 'server-only';

import { cache } from 'react';
import { getPayload } from 'payload';
import config from '@payload-config';
import { TAGS_COLLECTION } from '@/collections/Tags';

import type { Skill, Tag } from '@/payload-types';

const SKILLS_GLOBAL = 'skills';
const TAG_ORDER_FIELD = '_order';
const MAX_SKILL_TAGS = 200;

export const getSkills = cache(async (): Promise<Skill> => {
    const payload = await getPayload({ config });

    return payload.findGlobal({ slug: SKILLS_GLOBAL });
});

export async function getTagsWithIcons(): Promise<Tag[]> {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: TAGS_COLLECTION,
        where: { icon: { exists: true } },
        sort: TAG_ORDER_FIELD,
        limit: MAX_SKILL_TAGS,
        depth: 1,
    });

    return docs;
}
