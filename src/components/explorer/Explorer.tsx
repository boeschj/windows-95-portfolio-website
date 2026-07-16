'use client';

import { Fragment } from 'react';
import { Win95ScrollArea } from '@/components/Win95ScrollArea';
import { ExplorerHeaderRow } from './ExplorerHeaderRow';
import { ExplorerStatusBar } from './ExplorerStatusBar';
import { useSortedRows } from './useSortedRows';

import type {
    ExplorerColumn,
    RowComparator,
    SortDirection,
} from './explorerTable';
import type { ReactNode } from 'react';

interface ExplorerProps<TRow, TKey extends string> {
    columns: readonly ExplorerColumn<TKey>[];
    rows: TRow[];
    comparators: Record<TKey, RowComparator<TRow>>;
    defaultSortKey: TKey;
    defaultSortDirection?: SortDirection;
    getRowKey: (row: TRow) => string;
    renderRow: (row: TRow) => ReactNode;
    statusLabel: string;
    emptyLabel: string;
}

export function Explorer<TRow, TKey extends string>({
    columns,
    rows,
    comparators,
    defaultSortKey,
    defaultSortDirection,
    getRowKey,
    renderRow,
    statusLabel,
    emptyLabel,
}: ExplorerProps<TRow, TKey>) {
    const { sortedRows, sortKey, sortDirection, handleSort } = useSortedRows(
        rows,
        comparators,
        defaultSortKey,
        defaultSortDirection
    );
    const hasRows = sortedRows.length > 0;

    return (
        <div className="bg-windows-gray flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1">
                <Win95ScrollArea viewportClassName="h-full w-full bg-white">
                    <table className="w-full table-fixed text-[15px] text-black">
                        <ExplorerHeaderRow
                            columns={columns}
                            sortKey={sortKey}
                            sortDirection={sortDirection}
                            onSort={handleSort}
                        />
                        <tbody>
                            {sortedRows.map((row) => (
                                <Fragment key={getRowKey(row)}>
                                    {renderRow(row)}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                    {hasRows ? null : <EmptyState label={emptyLabel} />}
                </Win95ScrollArea>
            </div>
            <ExplorerStatusBar label={statusLabel} />
        </div>
    );
}

function EmptyState({ label }: { label: string }) {
    return (
        <div className="flex h-full items-center justify-center p-6 text-[15px] text-black/60">
            {label}
        </div>
    );
}
