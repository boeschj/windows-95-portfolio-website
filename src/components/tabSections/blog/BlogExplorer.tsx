'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/buttons/Button';
import { Win95ScrollArea } from '@/components/Win95ScrollArea';
import { fileCountLabel } from '@/data/postView';
import { cn } from '@/utils';

import type { BlogListItem } from '@/data/postView';
import { DocumentIcon } from '@/components/icons/Icons';

const SORT_DIRECTION = { asc: 'asc', desc: 'desc' } as const;
type SortDirection = (typeof SORT_DIRECTION)[keyof typeof SORT_DIRECTION];

const COLUMN_WIDTH_CLASS = {
    size: 'w-[90px]',
    type: 'w-[140px]',
    modified: 'w-[120px]',
} as const;
const CELL_CLASS = 'overflow-hidden px-2 py-0.5 whitespace-nowrap';

const COLUMNS = [
    { key: 'name', label: 'Name', className: 'w-full' },
    {
        key: 'size',
        label: 'Size',
        className: cn('hidden md:table-cell', COLUMN_WIDTH_CLASS.size),
    },
    {
        key: 'type',
        label: 'Type',
        className: cn('hidden md:table-cell', COLUMN_WIDTH_CLASS.type),
    },
    {
        key: 'modified',
        label: 'Modified',
        className: COLUMN_WIDTH_CLASS.modified,
    },
] as const satisfies readonly {
    key: string;
    label: string;
    className: string;
}[];

type ColumnKey = (typeof COLUMNS)[number]['key'];

const COMPARATORS = {
    name: (a, b) => a.filename.localeCompare(b.filename),
    size: (a, b) => a.sizeBytes - b.sizeBytes,
    type: (a, b) => a.type.localeCompare(b.type),
    modified: (a, b) => a.modifiedTimestamp - b.modifiedTimestamp,
} as const satisfies Record<
    ColumnKey,
    (a: BlogListItem, b: BlogListItem) => number
>;

interface BlogExplorerProps {
    items: BlogListItem[];
}

export function BlogExplorer({ items }: BlogExplorerProps) {
    const [sortKey, setSortKey] = useState<ColumnKey>('name');
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
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
                    {sortedItems.length === 0 ? <EmptyState /> : null}
                </Win95ScrollArea>
            </div>
            <StatusBar count={items.length} />
        </div>
    );
}

interface HeaderRowProps {
    sortKey: ColumnKey;
    sortDirection: SortDirection;
    onSort: (key: ColumnKey) => void;
}

function HeaderRow({ sortKey, sortDirection, onSort }: HeaderRowProps) {
    return (
        <thead className="bg-windows-gray">
            <tr>
                {COLUMNS.map((column) => {
                    const isActive = column.key === sortKey;
                    const directionLabel =
                        sortDirection === SORT_DIRECTION.asc
                            ? 'ascending'
                            : 'descending';

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
                                aria-label={
                                    isActive
                                        ? `Sort by ${column.label}, currently ${directionLabel}`
                                        : `Sort by ${column.label}`
                                }
                                onClick={() => {
                                    onSort(column.key);
                                }}
                                className="win95-header-button flex h-full w-full items-center gap-1 overflow-hidden px-2 py-[3px] text-left font-normal whitespace-nowrap"
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

interface PostRowProps {
    item: BlogListItem;
}

function PostRow({ item }: PostRowProps) {
    return (
        <tr>
            <td className={CELL_CLASS}>
                <Link
                    href={`/blog/${item.slug}`}
                    className="flex min-w-0 items-center gap-1.5 text-black no-underline"
                >
                    <DocumentIcon />
                    <span className="block min-w-0 truncate px-0.75">
                        {item.filename}
                    </span>
                </Link>
            </td>
            <td
                className={cn(
                    'hidden md:table-cell',
                    CELL_CLASS,
                    COLUMN_WIDTH_CLASS.size
                )}
            >
                {item.size}
            </td>
            <td
                className={cn(
                    'hidden md:table-cell',
                    CELL_CLASS,
                    COLUMN_WIDTH_CLASS.type
                )}
            >
                {item.type}
            </td>
            <td className={cn(CELL_CLASS, COLUMN_WIDTH_CLASS.modified)}>
                {item.modified}
            </td>
        </tr>
    );
}

function EmptyState() {
    return (
        <div className="flex h-full items-center justify-center p-6 text-[15px] text-black/60">
            No posts found.
        </div>
    );
}

function StatusBar({ count }: { count: number }) {
    return (
        <div className="flex flex-none gap-[2px] pt-[3px]">
            <div className="win95-status-panel flex-1 px-[10px] py-[2px] text-[15px] whitespace-nowrap">
                {fileCountLabel(count)}
            </div>
            <div className="win95-status-panel hidden flex-1 px-[10px] py-[2px] md:block" />
            <div className="win95-status-panel hidden w-50 px-2.5 py-0.5 md:block" />
        </div>
    );
}
