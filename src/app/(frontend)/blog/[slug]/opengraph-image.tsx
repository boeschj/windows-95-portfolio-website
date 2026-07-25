import { getPostBySlug } from '@/data/posts';
import { postFilename } from '@/data/postView';
import { SITE_AUTHOR } from '@/constants/application.constants';
import {
    OG_CONTENT_TYPE,
    OG_SIZE,
    renderNotepadOg,
} from '@/components/og/notepadOg';

export const revalidate = 3600;

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = `${SITE_AUTHOR}'s Blog`;

const FALLBACK_FILENAME = 'post.md';
const WINDOW_TITLE_SUFFIX = '  Notepad';

interface OgImageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostOgImage({ params }: OgImageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    const filename = post ? postFilename(post) : FALLBACK_FILENAME;

    return renderNotepadOg({
        windowTitle: `${filename}${WINDOW_TITLE_SUFFIX}`,
        title: post?.title ?? 'Blog',
        metaLine: SITE_AUTHOR,
    });
}
