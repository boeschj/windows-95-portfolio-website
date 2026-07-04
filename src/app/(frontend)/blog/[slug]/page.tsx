import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/data/posts';
import { PostReader } from '@/components/blog/PostReader';

import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

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

    return { title: `${post.title} — Jordan Boesch` };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return <PostReader post={post} />;
}
