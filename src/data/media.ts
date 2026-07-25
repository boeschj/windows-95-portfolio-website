import type { Media } from '@/payload-types';

export interface ResolvedMedia {
    url: string | null;
    alt: string;
}

type MediaReference = number | Media | null | undefined;

function isPopulatedMedia(reference: MediaReference): reference is Media {
    return typeof reference === 'object' && reference !== null;
}

export function resolveMedia(reference: MediaReference): ResolvedMedia {
    if (!isPopulatedMedia(reference)) {
        return { url: null, alt: '' };
    }

    return { url: reference.url ?? null, alt: reference.alt ?? '' };
}
