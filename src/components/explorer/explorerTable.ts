export const SORT_DIRECTION = { asc: 'asc', desc: 'desc' } as const;
export type SortDirection =
    (typeof SORT_DIRECTION)[keyof typeof SORT_DIRECTION];

export const CELL_CLASS = 'px-2 py-0.5 whitespace-nowrap';

export const ITEM_CLASS = 'flex items-center gap-1.5 text-inherit no-underline';

const ROW_OVERLAY_CLASS =
    'after:absolute after:inset-0 after:border after:border-dotted after:border-transparent group-hover:after:border-highlight-outline';

export const ITEM_LINK_CLASS = `${ITEM_CLASS} ${ROW_OVERLAY_CLASS}`;

export const LINK_ROW_CLASS =
    'group relative hover:bg-windows-blue hover:text-white';

export interface ExplorerColumn<TKey extends string> {
    key: TKey;
    label: string;
    className: string;
}

export type RowComparator<TRow> = (a: TRow, b: TRow) => number;
