import { SITE_URL } from '@/constants/application.constants';
import { getPublishedPosts } from '@/data/posts';
import { postDescription } from '@/data/postView';

export const revalidate = 3600;

const SITE_TITLE = 'Jordan Boesch';
const SITE_SUMMARY =
    "Founder and product engineer writing about interesting things I've built.";

export async function GET() {
    const posts = await getPublishedPosts();

    const postLines = posts.map(
        (post) =>
            `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${postDescription(post)}`
    );

    const body = [
        `# ${SITE_TITLE}`,
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
