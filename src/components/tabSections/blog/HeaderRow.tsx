import { Button } from '@/components/buttons/Button';
import { cn } from '@/utils';

import { COLUMNS, SORT_DIRECTION } from './blogTable';

import type { ColumnKey, SortDirection } from './blogTable';

interface HeaderRowProps {
    sortKey: ColumnKey;
    sortDirection: SortDirection;
    onSort: (key: ColumnKey) => void;
}

export function HeaderRow({ sortKey, sortDirection, onSort }: HeaderRowProps) {
    const directionLabel =
        sortDirection === SORT_DIRECTION.asc ? 'ascending' : 'descending';

    return (
        <thead className="bg-windows-gray">
            <tr>
                {COLUMNS.map((column) => {
                    const isActive = column.key === sortKey;
                    const ariaLabel = isActive
                        ? `Sort by ${column.label}, currently ${directionLabel}`
                        : `Sort by ${column.label}`;

                    return (
                        <th
                            key={column.key}
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
