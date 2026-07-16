import { format, parseISO } from 'date-fns';

import { richTextDescription } from './reader';

import type { ReaderDocument } from './reader';
import type { Experience, Media } from '@/payload-types';

const MONTH_YEAR_FORMAT = 'MM/yyyy';
const PRESENT_LABEL = 'Present';
const DATE_RANGE_SEPARATOR = ' - ';
const META_SEPARATOR = ' · ';

export interface ExperienceListItem {
    slug: string;
    company: string;
    role: string;
    datesLabel: string;
    startTimestamp: number;
    logoUrl: string | null;
    logoAlt: string;
}

export function formatDateRange(experience: Experience): string {
    const start = format(parseISO(experience.startDate), MONTH_YEAR_FORMAT);
    const end = experience.endDate
        ? format(parseISO(experience.endDate), MONTH_YEAR_FORMAT)
        : PRESENT_LABEL;

    return `${start}${DATE_RANGE_SEPARATOR}${end}`;
}

export function toExperienceListItem(
    experience: Experience
): ExperienceListItem {
    const logo = resolveLogo(experience.logo);

    return {
        slug: experience.slug,
        company: experience.company,
        role: experience.role,
        datesLabel: formatDateRange(experience),
        startTimestamp: new Date(experience.startDate).getTime(),
        logoUrl: logo.url,
        logoAlt: logo.alt,
    };
}

export function toExperienceReaderDocument(
    experience: Experience
): ReaderDocument {
    const metaLine = [experience.role, formatDateRange(experience)].join(
        META_SEPARATOR
    );

    return {
        filename: `${experience.slug}.txt`,
        title: experience.company,
        metaLine,
        content: experience.content,
    };
}

export function experienceDescription(experience: Experience): string {
    return richTextDescription(experience.content);
}

interface ResolvedLogo {
    url: string | null;
    alt: string;
}

function resolveLogo(logo: Experience['logo']): ResolvedLogo {
    if (!isPopulatedMedia(logo)) {
        return { url: null, alt: '' };
    }

    return { url: logo.url ?? null, alt: logo.alt ?? '' };
}

function isPopulatedMedia(logo: Experience['logo']): logo is Media {
    return typeof logo === 'object';
}
