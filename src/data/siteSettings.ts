import 'server-only';

import { cache } from 'react';
import { getPayload } from 'payload';
import config from '@payload-config';

import type { SiteSetting } from '@/payload-types';

const SITE_SETTINGS_GLOBAL = 'site-settings';

export const getSiteSettings = cache(async (): Promise<SiteSetting> => {
    const payload = await getPayload({ config });

    return payload.findGlobal({ slug: SITE_SETTINGS_GLOBAL });
});
