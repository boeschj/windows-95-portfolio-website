import { notFound } from 'next/navigation';
import { getExperienceBySlug, getExperienceSlugs } from '@/data/experiences';
import {
    experienceDescription,
    toExperienceReaderDocument,
} from '@/data/experienceView';
import { BLOG_AUTHOR } from '@/data/postView';
import { buildExperienceSchema } from '@/data/seoSchema';
import { hrefForTab } from '@/config/tabs';
import { JsonLd } from '@/components/JsonLd';
import { NotepadReader } from '@/components/blog/NotepadReader';

import type { Metadata } from 'next';

const EXPERIENCE_HREF = hrefForTab('experience');

export const revalidate = 3600;

export async function generateStaticParams() {
    const slugs = await getExperienceSlugs();

    return slugs.map((slug) => ({ slug }));
}

interface ExperiencePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({
    params,
}: ExperiencePageProps): Promise<Metadata> {
    const { slug } = await params;
    const experience = await getExperienceBySlug(slug);

    if (!experience) {
        return {};
    }

    const title = `${experience.company} — ${experience.role}`;
    const description = experienceDescription(experience);
    const canonicalUrl = `/experience/${slug}`;

    return {
        title,
        description,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            type: 'article',
            title,
            description,
            url: canonicalUrl,
            siteName: `${BLOG_AUTHOR}'s portfolio`,
            authors: [BLOG_AUTHOR],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
    const { slug } = await params;
    const experience = await getExperienceBySlug(slug);

    if (!experience) {
        notFound();
    }

    const doc = toExperienceReaderDocument(experience);

    return (
        <>
            <JsonLd data={buildExperienceSchema(experience)} />
            <NotepadReader doc={doc} backHref={EXPERIENCE_HREF} />
        </>
    );
}
