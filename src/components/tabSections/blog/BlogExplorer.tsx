'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { fileCountLabel } from '@/data/postView';
import { cn } from '@/utils';
import { DocumentIcon } from './DocumentIcon';

import type { BlogListItem } from '@/data/postView';

const SORT_DIRECTION = { asc: 'asc', desc: 'desc' } as const;
type SortDirection = (typeof SORT_DIRECTION)[keyof typeof SORT_DIRECTION];

const COLUMNS = [
    { key: 'name', label: 'Name', className: 'flex-1 min-w-0', align: 'left' },
    { key: 'size', label: 'Size', className: 'w-[90px]', align: 'right' },
    { key: 'type', label: 'Type', className: 'w-[140px]', align: 'left' },
    { key: 'modified', label: 'Modified', className: 'w-[170px]', align: 'left' },
] as const satisfies readonly {
    key: string;
    label: string;
    className: string;
    align: 'left' | 'right';
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

const CELL_ALIGN = {
    left: 'text-left',
    right: 'text-right',
} as const;

interface BlogExplorerProps {
    items: BlogListItem[];
}

export function BlogExplorer({ items }: BlogExplorerProps) {
    const router = useRouter();
    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
    const [sortKey, setSortKey] = useState<ColumnKey>('name');
    const [sortDirection, setSortDirection] = useState<SortDirection>(
        SORT_DIRECTION.asc
    );

    const directionFactor = sortDirection === SORT_DIRECTION.asc ? 1 : -1;
    const sortedItems = [...items].sort(
        (a, b) => COMPARATORS[sortKey](a, b) * directionFactor
    );

    const handleSort = (key: ColumnKey) => {
        if (key === sortKey) {
            setSortDirection((previous) =>
                previous === SORT_DIRECTION.asc
                    ? SORT_DIRECTION.desc
                    : SORT_DIRECTION.asc
            );
            return;
        }

        setSortKey(key);
        setSortDirection(SORT_DIRECTION.asc);
    };

    const openPost = (slug: string) => {
        router.push(`/blog/${slug}`);
    };

    return (
        <div className="bg-windows-gray flex min-h-0 flex-1 flex-col">
            <div className="flex min-h-0 flex-1">
                <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                    <ColumnHeaderRow
                        sortKey={sortKey}
                        sortDirection={sortDirection}
                        onSort={handleSort}
                    />
                    <div className="hide-native-scrollbar min-h-0 flex-1 overflow-x-hidden overflow-y-auto bg-white">
                        <PostRows
                            items={sortedItems}
                            selectedSlug={selectedSlug}
                            onSelect={setSelectedSlug}
                            onOpen={openPost}
                        />
                    </div>
                    <HorizontalScrollbar />
                </div>
                <VerticalScrollbar />
            </div>
            <StatusBar count={items.length} />
        </div>
    );
}

interface ColumnHeaderRowProps {
    sortKey: ColumnKey;
    sortDirection: SortDirection;
    onSort: (key: ColumnKey) => void;
}

function ColumnHeaderRow({
    sortKey,
    sortDirection,
    onSort,
}: ColumnHeaderRowProps) {
    return (
        <div className="bg-windows-gray flex text-[15px]">
            {COLUMNS.map((column) => {
                const isActive = column.key === sortKey;

                return (
                    <button
                        key={column.key}
                        type="button"
                        onClick={() => {
                            onSort(column.key);
                        }}
                        className={cn(
                            'win95-header-button bg-windows-gray flex items-center gap-1 px-2 py-[3px]',
                            CELL_ALIGN[column.align],
                            column.align === 'right' && 'justify-end',
                            column.className
                        )}
                    >
                        <span className="truncate">{column.label}</span>
                        {isActive ? (
                            <SortCaret direction={sortDirection} />
                        ) : null}
                    </button>
                );
            })}
        </div>
    );
}

function SortCaret({ direction }: { direction: SortDirection }) {
    const glyph = direction === SORT_DIRECTION.asc ? '▲' : '▼';

    return (
        <span className="text-[9px] leading-none text-black" aria-hidden="true">
            {glyph}
        </span>
    );
}

interface PostRowsProps {
    items: BlogListItem[];
    selectedSlug: string | null;
    onSelect: (slug: string) => void;
    onOpen: (slug: string) => void;
}

function PostRows({ items, selectedSlug, onSelect, onOpen }: PostRowsProps) {
    if (items.length === 0) {
        return (
            <div className="flex h-full items-center justify-center p-6 text-[15px] text-black/60">
                No posts found.
            </div>
        );
    }

    return (
        <div role="listbox" aria-label="Blog posts">
            {items.map((item) => (
                <PostRow
                    key={item.slug}
                    item={item}
                    isSelected={item.slug === selectedSlug}
                    onSelect={onSelect}
                    onOpen={onOpen}
                />
            ))}
        </div>
    );
}

interface PostRowProps {
    item: BlogListItem;
    isSelected: boolean;
    onSelect: (slug: string) => void;
    onOpen: (slug: string) => void;
}

function PostRow({ item, isSelected, onSelect, onOpen }: PostRowProps) {
    return (
        <div
            role="option"
            aria-selected={isSelected}
            tabIndex={0}
            onClick={() => {
                onSelect(item.slug);
            }}
            onDoubleClick={() => {
                onOpen(item.slug);
            }}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    onOpen(item.slug);
                }
            }}
            className="blog-row flex cursor-default items-center text-[15px] text-black"
        >
            <div className="flex min-w-0 flex-1 items-center gap-1.5 px-2 py-[2px]">
                <DocumentIcon />
                <span
                    className={cn(
                        'inline-flex items-center whitespace-nowrap px-[3px]',
                        isSelected && 'blog-filename-selected'
                    )}
                >
                    {item.filename}
                </span>
            </div>
            <div className="w-[90px] px-2 py-[2px] text-right">{item.size}</div>
            <div className="w-[140px] px-2 py-[2px]">{item.type}</div>
            <div className="w-[170px] px-2 py-[2px]">{item.modified}</div>
        </div>
    );
}

function StatusBar({ count }: { count: number }) {
    return (
        <div className="flex flex-none gap-[2px] pt-[3px]">
            <div className="win95-status-panel flex-1 px-[10px] py-[2px] text-[15px]">
                {fileCountLabel(count)}
            </div>
            <div className="win95-status-panel flex-1 px-[10px] py-[2px]" />
            <div className="win95-status-panel relative w-[200px] px-[10px] py-[2px]">
                <ResizeGrip />
            </div>
        </div>
    );
}

const VERTICAL_SCROLL_THUMB_HEIGHT_PX = 80;
const HORIZONTAL_SCROLL_THUMB_WIDTH_PX = 70;

function VerticalScrollbar() {
    return (
        <div className="flex w-5 flex-none flex-col">
            <ScrollButton direction="up" />
            <div className="win95-scrollbar-track relative flex-1">
                <div
                    className="win95-thin-raised bg-windows-gray absolute inset-x-0 top-0"
                    style={{ height: VERTICAL_SCROLL_THUMB_HEIGHT_PX }}
                />
            </div>
            <ScrollButton direction="down" />
        </div>
    );
}

function HorizontalScrollbar() {
    return (
        <div className="flex h-5 flex-none">
            <ScrollButton direction="left" />
            <div className="win95-scrollbar-track relative flex-1">
                <div
                    className="win95-thin-raised bg-windows-gray absolute inset-y-0 left-0"
                    style={{ width: HORIZONTAL_SCROLL_THUMB_WIDTH_PX }}
                />
            </div>
            <ScrollButton direction="right" />
        </div>
    );
}

const TRIANGLE_STYLES = {
    up: {
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent',
        borderBottom: '5px solid #000',
    },
    down: {
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent',
        borderTop: '5px solid #000',
    },
    left: {
        borderTop: '4px solid transparent',
        borderBottom: '4px solid transparent',
        borderRight: '5px solid #000',
    },
    right: {
        borderTop: '4px solid transparent',
        borderBottom: '4px solid transparent',
        borderLeft: '5px solid #000',
    },
} as const;

type ScrollDirection = keyof typeof TRIANGLE_STYLES;

function ScrollButton({ direction }: { direction: ScrollDirection }) {
    return (
        <div className="win95-thin-raised bg-windows-gray flex size-5 flex-none items-center justify-center">
            <span className="block h-0 w-0" style={TRIANGLE_STYLES[direction]} />
        </div>
    );
}

function ResizeGrip() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            className="absolute right-[2px] bottom-[2px]"
            aria-hidden="true"
        >
            <path d="M13 5 L5 13 M13 9 L9 13 M13 1 L1 13" stroke="#808080" />
            <path
                d="M13 6 L6 13 M13 10 L10 13 M13 2 L2 13"
                stroke="#fff"
                transform="translate(1,1)"
            />
        </svg>
    );
}
