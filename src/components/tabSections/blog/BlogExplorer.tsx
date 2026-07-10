'use client';

import { Win95ScrollArea } from '@/components/Win95ScrollArea';
import { useSortedPosts } from './useSortedPosts';
import { HeaderRow } from './HeaderRow';
import { PostRow } from './PostRow';
import { StatusBar } from './StatusBar';

import type { BlogListItem } from '@/data/postView';

interface BlogExplorerProps {
    items: BlogListItem[];
}

export function BlogExplorer({ items }: BlogExplorerProps) {
    const { sortedItems, sortKey, sortDirection, handleSort } =
        useSortedPosts(items);
    const hasPosts = sortedItems.length > 0;

    return (
        <div className="bg-windows-gray flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1">
                <Win95ScrollArea viewportClassName="h-full w-full bg-white">
                    <table className="w-full table-fixed text-[15px] text-black">
                        <HeaderRow
                            sortKey={sortKey}
                            sortDirection={sortDirection}
                            onSort={handleSort}
                        />
                        <tbody>
                            {sortedItems.map((item) => (
                                <PostRow key={item.slug} item={item} />
                            ))}
                        </tbody>
                    </table>
                    {hasPosts ? null : <EmptyState />}
                </Win95ScrollArea>
            </div>
            <StatusBar count={items.length} />
        </div>
    );
}

function EmptyState() {
    return (
        <div className="flex h-full items-center justify-center p-6 text-[15px] text-black/60">
            No posts found.
        </div>
    );
}
