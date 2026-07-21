import {
    BLOG_ROUTE,
    SITE_AUTHOR,
    SITE_SUMMARY,
    SITE_URL,
} from '@/constants/application.constants';
import { getBlogPosts } from '@/data/posts';
import { postDescription } from '@/data/postView';

export const revalidate = 3600;

export async function GET() {
    const posts = await getBlogPosts();

    const postLines = posts.map(
        (post) =>
            `- [${post.title}](${SITE_URL}${BLOG_ROUTE}/${post.slug}): ${postDescription(post)}`
    );

    const body = [
        `# ${SITE_AUTHOR}`,
        '',
        `> ${SITE_SUMMARY}`,
        '',
        '## Blog',
        '',
        ...postLines,
        '',
    ].join('\n');

    return new Response(body, {
        headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
    });
}
