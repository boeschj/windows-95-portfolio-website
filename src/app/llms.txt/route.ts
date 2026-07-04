import { getPublishedPosts } from '@/data/posts';
import { postDescription } from '@/data/postView';
import { SITE_URL } from '@/constants/application.constants';

export const revalidate = 3600;

const SITE_TITLE = 'Jordan Boesch';
const SITE_SUMMARY =
    'Founder and full-stack engineer writing about shipping secure, zero-to-one crypto products — wallet security, MPC, and early-stage engineering.';

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
