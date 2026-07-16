import { getBlogPosts } from '@/data/posts';
import { toBlogListItem } from '@/data/postView';
import { BlogExplorer } from './BlogExplorer';

export async function Blog() {
    const posts = await getBlogPosts();
    const items = posts.map(toBlogListItem);

    return <BlogExplorer items={items} />;
}
