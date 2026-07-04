'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fileCountLabel } from '@/data/postView';
import { cn } from '@/utils';
import { Win95ScrollArea } from '@/components/Win95ScrollArea';
import { DocumentIcon } from './DocumentIcon';

import type { BlogListItem } from '@/data/postView';

const SORT_DIRECTION = { asc: 'asc', desc: 'desc' } as const;
type SortDirection = (typeof SORT_DIRECTION)[keyof typeof SORT_DIRECTION];

const COLUMNS = [
    { key: 'name', label: 'Name', className: 'flex flex-1 min-w-0' },
    { key: 'size', label: 'Size', className: 'hidden w-[90px] md:flex' },
    { key: 'type', label: 'Type', className: 'hidden w-[140px] md:flex' },
    { key: 'modified', label: 'Modified', className: 'flex w-[170px]' },
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
            <ColumnHeaderRow
                sortKey={sortKey}
                sortDirection={sortDirection}
                onSort={handleSort}
            />
            <div className="min-h-0 flex-1">
                <Win95ScrollArea viewportClassName="h-full w-full bg-white">
                    <PostRows
                        items={sortedItems}
                        selectedSlug={selectedSlug}
                        onSelect={setSelectedSlug}
                        onOpen={openPost}
                    />
                </Win95ScrollArea>
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
                const directionLabel =
                    sortDirection === SORT_DIRECTION.asc
                        ? 'ascending'
                        : 'descending';
                const sortLabel = isActive
                    ? `Sort by ${column.label}, currently ${directionLabel}`
                    : `Sort by ${column.label}`;

                return (
                    <button
                        key={column.key}
                        type="button"
                        aria-label={sortLabel}
                        onClick={() => {
                            onSort(column.key);
                        }}
                        className={cn(
                            'win95-header-button bg-windows-gray items-center gap-1 px-2 py-[3px] text-left',
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
    const listRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    if (items.length === 0) {
        return (
            <div className="flex h-full items-center justify-center p-6 text-[15px] text-black/60">
                No posts found.
            </div>
        );
    }

    const focusRowAt = (index: number) => {
        const clampedIndex = Math.max(0, Math.min(items.length - 1, index));
        setActiveIndex(clampedIndex);
        onSelect(items[clampedIndex].slug);
        const rows =
            listRef.current?.querySelectorAll<HTMLElement>('[role="option"]');
        rows?.[clampedIndex]?.focus();
    };

    const handleRowKeyDown =
        (index: number) => (event: React.KeyboardEvent) => {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                focusRowAt(index + 1);
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                focusRowAt(index - 1);
            } else if (event.key === 'Home') {
                event.preventDefault();
                focusRowAt(0);
            } else if (event.key === 'End') {
                event.preventDefault();
                focusRowAt(items.length - 1);
            } else if (event.key === 'Enter') {
                onOpen(items[index].slug);
            }
        };

    return (
        <div role="listbox" aria-label="Blog posts" ref={listRef}>
            {items.map((item, index) => (
                <PostRow
                    key={item.slug}
                    item={item}
                    isSelected={item.slug === selectedSlug}
                    isActive={index === activeIndex}
                    onSelect={() => {
                        setActiveIndex(index);
                        onSelect(item.slug);
                    }}
                    onOpen={onOpen}
                    onKeyDown={handleRowKeyDown(index)}
                />
            ))}
        </div>
    );
}

interface PostRowProps {
    item: BlogListItem;
    isSelected: boolean;
    isActive: boolean;
    onSelect: () => void;
    onOpen: (slug: string) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
}

function PostRow({
    item,
    isSelected,
    isActive,
    onSelect,
    onOpen,
    onKeyDown,
}: PostRowProps) {
    return (
        <div
            role="option"
            aria-selected={isSelected}
            tabIndex={isActive ? 0 : -1}
            onClick={onSelect}
            onDoubleClick={() => {
                onOpen(item.slug);
            }}
            onKeyDown={onKeyDown}
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
            <div className="hidden w-[90px] px-2 py-[2px] md:block">
                {item.size}
            </div>
            <div className="hidden w-[140px] px-2 py-[2px] md:block">
                {item.type}
            </div>
            <div className="w-[170px] px-2 py-[2px]">{item.modified}</div>
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
            <div className="win95-status-panel relative hidden w-[200px] px-[10px] py-[2px] md:block">
                <ResizeGrip />
            </div>
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
