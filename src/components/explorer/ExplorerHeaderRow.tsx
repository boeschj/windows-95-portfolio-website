import { Button } from '@/components/buttons/Button';
import { cn } from '@/utils';

import { SORT_DIRECTION } from './explorerTable';

import type { ExplorerColumn, SortDirection } from './explorerTable';

const ARIA_SORT_BY_DIRECTION = {
    [SORT_DIRECTION.asc]: 'ascending',
    [SORT_DIRECTION.desc]: 'descending',
} as const satisfies Record<SortDirection, 'ascending' | 'descending'>;

const ARIA_SORT_INACTIVE = 'none';

interface ExplorerHeaderRowProps<TKey extends string> {
    columns: readonly ExplorerColumn<TKey>[];
    sortKey: TKey;
    sortDirection: SortDirection;
    onSort: (key: TKey) => void;
}

export function ExplorerHeaderRow<TKey extends string>({
    columns,
    sortKey,
    sortDirection,
    onSort,
}: ExplorerHeaderRowProps<TKey>) {
    const directionLabel =
        sortDirection === SORT_DIRECTION.asc ? 'ascending' : 'descending';

    return (
        <thead className="bg-windows-gray">
            <tr>
                {columns.map((column) => {
                    const isActive = column.key === sortKey;
                    const ariaLabel = isActive
                        ? `Sort by ${column.label}, currently ${directionLabel}`
                        : `Sort by ${column.label}`;
                    const ariaSort = isActive
                        ? ARIA_SORT_BY_DIRECTION[sortDirection]
                        : ARIA_SORT_INACTIVE;

                    return (
                        <th
                            key={column.key}
                            scope="col"
                            aria-sort={ariaSort}
                            className={cn(
                                'overflow-hidden p-0 whitespace-nowrap',
                                column.className
                            )}
                        >
                            <Button
                                type="button"
                                aria-label={ariaLabel}
                                onClick={() => {
                                    onSort(column.key);
                                }}
                                className="win95-header-button flex h-full w-full items-center gap-1 overflow-hidden px-2 py-0.75 text-left font-normal whitespace-nowrap"
                            >
                                <span className="truncate">{column.label}</span>
                            </Button>
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}
