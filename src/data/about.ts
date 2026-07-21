import 'server-only';

import { cache } from 'react';
import { getPayload } from 'payload';
import config from '@payload-config';

import type { About } from '@/payload-types';

const ABOUT_GLOBAL = 'about';

export const getAbout = cache(async (): Promise<About> => {
    const payload = await getPayload({ config });

    return payload.findGlobal({ slug: ABOUT_GLOBAL });
});
