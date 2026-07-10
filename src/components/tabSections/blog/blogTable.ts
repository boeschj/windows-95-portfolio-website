import { cn } from '@/utils';

export const SORT_DIRECTION = { asc: 'asc', desc: 'desc' } as const;
export type SortDirection =
    (typeof SORT_DIRECTION)[keyof typeof SORT_DIRECTION];

export const COLUMN_WIDTH_CLASS = {
    size: 'w-[90px]',
    type: 'w-[140px]',
    modified: 'w-[120px]',
} as const;

export const CELL_CLASS = 'overflow-hidden px-2 py-0.5 whitespace-nowrap';

export const COLUMNS = [
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

export type ColumnKey = (typeof COLUMNS)[number]['key'];
