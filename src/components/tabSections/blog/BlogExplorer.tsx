'use client';

import { Explorer } from '@/components/explorer/Explorer';
import { fileCountLabel } from '@/data/postView';
import {
    BLOG_COLUMNS,
    BLOG_COMPARATORS,
    BLOG_DEFAULT_SORT_KEY,
} from './blogColumns';
import { BlogRow } from './BlogRow';

import type { BlogListItem } from '@/data/postView';

const EMPTY_LABEL = 'No posts found.';

interface BlogExplorerProps {
    items: BlogListItem[];
}

export function BlogExplorer({ items }: BlogExplorerProps) {
    return (
        <Explorer
            columns={BLOG_COLUMNS}
            rows={items}
            comparators={BLOG_COMPARATORS}
            defaultSortKey={BLOG_DEFAULT_SORT_KEY}
            getRowKey={(item) => item.slug}
            renderRow={(item) => <BlogRow item={item} />}
            statusLabel={fileCountLabel(items.length)}
            emptyLabel={EMPTY_LABEL}
        />
    );
}
