import { notFound } from 'next/navigation';
import { getPostBySlug, getBlogSlugs } from '@/data/posts';
import { postDescription, toReaderDocument } from '@/data/postView';
import { buildPostSchema } from '@/data/seoSchema';
import { BLOG_ROUTE, SITE_AUTHOR } from '@/constants/application.constants';
import { hrefForTab } from '@/config/tabs';
import { JsonLd } from '@/components/JsonLd';
import { NotepadReader } from '@/components/blog/NotepadReader';

import type { Metadata } from 'next';

const BLOG_HREF = hrefForTab('blog');

export const revalidate = 3600;

export async function generateStaticParams() {
    const slugs = await getBlogSlugs();

    return slugs.map((slug) => ({ slug }));
}

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {};
    }

    const description = postDescription(post);
    const canonicalUrl = `${BLOG_ROUTE}/${slug}`;

    return {
        title: post.title,
        description,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            type: 'article',
            title: post.title,
            description,
            url: canonicalUrl,
            siteName: `${SITE_AUTHOR}'s blog`,
            publishedTime: post.publishedAt ?? undefined,
            modifiedTime: post.updatedAt,
            authors: [SITE_AUTHOR],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description,
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const doc = toReaderDocument(post);

    return (
        <>
            <JsonLd data={buildPostSchema(post)} />
            <NotepadReader doc={doc} backHref={BLOG_HREF} />
        </>
    );
}
