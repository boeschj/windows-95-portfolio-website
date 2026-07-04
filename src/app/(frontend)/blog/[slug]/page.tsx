import { notFound } from 'next/navigation';
import { getPostBySlug, getPublishedSlugs } from '@/data/posts';
import { BLOG_AUTHOR, postDescription } from '@/data/postView';
import { buildPostSchema } from '@/data/seoSchema';
import { JsonLd } from '@/components/JsonLd';
import { PostReader } from '@/components/blog/PostReader';

import type { Metadata } from 'next';

export const revalidate = 3600;

export async function generateStaticParams() {
    const slugs = await getPublishedSlugs();

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
    const canonicalUrl = `/blog/${slug}`;

    return {
        title: `${post.title} — ${BLOG_AUTHOR}`,
        description,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            type: 'article',
            title: post.title,
            description,
            url: canonicalUrl,
            siteName: `${BLOG_AUTHOR} — Blog`,
            publishedTime: post.publishedAt ?? undefined,
            modifiedTime: post.updatedAt,
            authors: [BLOG_AUTHOR],
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

    return (
        <>
            <JsonLd data={buildPostSchema(post)} />
            <PostReader post={post} />
        </>
    );
}
