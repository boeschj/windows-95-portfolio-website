import { useState } from 'react';

import { SORT_DIRECTION } from './blogTable';

import type { BlogListItem } from '@/data/postView';
import type { ColumnKey, SortDirection } from './blogTable';

const COMPARATORS = {
    name: (a, b) => a.filename.localeCompare(b.filename),
    size: (a, b) => a.sizeBytes - b.sizeBytes,
    type: (a, b) => a.type.localeCompare(b.type),
    modified: (a, b) => a.modifiedTimestamp - b.modifiedTimestamp,
} as const satisfies Record<
    ColumnKey,
    (a: BlogListItem, b: BlogListItem) => number
>;

interface UseSortedPosts {
    sortedItems: BlogListItem[];
    sortKey: ColumnKey;
    sortDirection: SortDirection;
    handleSort: (key: ColumnKey) => void;
}

export function useSortedPosts(items: BlogListItem[]): UseSortedPosts {
    const [sortKey, setSortKey] = useState<ColumnKey>('name');
    const [sortDirection, setSortDirection] = useState<SortDirection>(
        SORT_DIRECTION.asc
    );

    const directionFactor = sortDirection === SORT_DIRECTION.asc ? 1 : -1;
    const sortedItems = [...items].sort(
        (a, b) => COMPARATORS[sortKey](a, b) * directionFactor
    );

    const handleSort = (key: ColumnKey) => {
        setSortDirection((current) =>
            key === sortKey && current === SORT_DIRECTION.asc
                ? SORT_DIRECTION.desc
                : SORT_DIRECTION.asc
        );
        setSortKey(key);
    };

    return { sortedItems, sortKey, sortDirection, handleSort };
}
