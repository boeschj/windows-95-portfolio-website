import { getPublishedPosts } from '@/data/posts';
import { toBlogListItem } from '@/data/postView';
import { BlogExplorer } from './BlogExplorer';

export async function Blog() {
    const posts = await getPublishedPosts();
    const items = posts.map(toBlogListItem);

    return <BlogExplorer items={items} />;
}
