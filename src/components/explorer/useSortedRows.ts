import { useState } from 'react';

import { SORT_DIRECTION } from './explorerTable';

import type { RowComparator, SortDirection } from './explorerTable';

interface UseSortedRows<TRow, TKey extends string> {
    sortedRows: TRow[];
    sortKey: TKey;
    sortDirection: SortDirection;
    handleSort: (key: TKey) => void;
}

export function useSortedRows<TRow, TKey extends string>(
    rows: TRow[],
    comparators: Record<TKey, RowComparator<TRow>>,
    defaultSortKey: TKey,
    defaultSortDirection: SortDirection = SORT_DIRECTION.asc
): UseSortedRows<TRow, TKey> {
    const [sortKey, setSortKey] = useState<TKey>(defaultSortKey);
    const [sortDirection, setSortDirection] =
        useState<SortDirection>(defaultSortDirection);

    const directionFactor = sortDirection === SORT_DIRECTION.asc ? 1 : -1;
    const sortedRows = [...rows].sort(
        (a, b) => comparators[sortKey](a, b) * directionFactor
    );

    const handleSort = (key: TKey) => {
        setSortDirection((current) =>
            key === sortKey && current === SORT_DIRECTION.asc
                ? SORT_DIRECTION.desc
                : SORT_DIRECTION.asc
        );
        setSortKey(key);
    };

    return { sortedRows, sortKey, sortDirection, handleSort };
}
