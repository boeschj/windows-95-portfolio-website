import { getExperienceBySlug } from '@/data/experiences';
import { formatDateRange } from '@/data/experienceView';
import { SITE_AUTHOR } from '@/constants/application.constants';
import {
    OG_CONTENT_TYPE,
    OG_SIZE,
    renderNotepadOg,
} from '@/components/og/notepadOg';

export const revalidate = 3600;

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = `${SITE_AUTHOR}'s Experience`;

const META_SEPARATOR = ' · ';
const WINDOW_TITLE_SUFFIX = '  Notepad';

interface OgImageProps {
    params: Promise<{ slug: string }>;
}

export default async function ExperienceOgImage({ params }: OgImageProps) {
    const { slug } = await params;
    const experience = await getExperienceBySlug(slug);
    const metaLine = experience
        ? [experience.role, formatDateRange(experience)].join(META_SEPARATOR)
        : SITE_AUTHOR;

    return renderNotepadOg({
        windowTitle: `${slug}.txt${WINDOW_TITLE_SUFFIX}`,
        title: experience?.company ?? 'Experience',
        metaLine,
    });
}
