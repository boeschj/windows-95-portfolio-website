export const SORT_DIRECTION = { asc: 'asc', desc: 'desc' } as const;
export type SortDirection =
    (typeof SORT_DIRECTION)[keyof typeof SORT_DIRECTION];

export const CELL_CLASS = 'overflow-hidden px-2 py-0.5 whitespace-nowrap';

export interface ExplorerColumn<TKey extends string> {
    key: TKey;
    label: string;
    className: string;
}

export type RowComparator<TRow> = (a: TRow, b: TRow) => number;
