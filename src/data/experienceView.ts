import { hasRichTextContent, richTextDescription } from './reader';

import type { ReaderDocument } from './reader';
import type { Experience, Media } from '@/payload-types';

const PRESENT_LABEL = 'Present';
const DATE_RANGE_SEPARATOR = ' - ';
const META_SEPARATOR = ' · ';
const EMPTY_EXPERIENCE_LABEL = 'No write-up for this role yet.';

export interface ExperienceListItem {
    slug: string;
    company: string;
    role: string;
    datesLabel: string;
    startTimestamp: number;
    endTimestamp: number | null;
    hasContent: boolean;
    logoUrl: string | null;
    logoAlt: string;
}

export function formatDateRange(experience: Experience): string {
    const start = formatMonthYear(experience.startDate);
    const end = experience.endDate
        ? formatMonthYear(experience.endDate)
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
        startTimestamp: toTimestamp(experience.startDate),
        endTimestamp: experience.endDate
            ? toTimestamp(experience.endDate)
            : null,
        hasContent: hasRichTextContent(experience.content),
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
        emptyContentLabel: EMPTY_EXPERIENCE_LABEL,
        externalUrl: experience.url ?? undefined,
    };
}

export function experienceDescription(experience: Experience): string {
    return richTextDescription(experience.content);
}

export function experienceCountLabel(count: number): string {
    return `${String(count)} item(s) found`;
}

function formatMonthYear(isoDate: string): string {
    const [year, month] = isoDate.slice(0, 7).split('-');

    return `${month}/${year}`;
}

function toTimestamp(isoDate: string): number {
    return new Date(isoDate).getTime();
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
