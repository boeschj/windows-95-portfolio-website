import type { BlogListItem } from '@/data/postView';
import type {
    ExplorerColumn,
    RowComparator,
} from '@/components/explorer/explorerTable';

export const BLOG_COLUMNS = [
    { key: 'name', label: 'Name', className: 'w-full' },
    { key: 'size', label: 'Size', className: '' },
    { key: 'type', label: 'Type', className: '' },
    { key: 'modified', label: 'Modified', className: '' },
] as const satisfies readonly ExplorerColumn<string>[];

export type BlogColumnKey = (typeof BLOG_COLUMNS)[number]['key'];

export const BLOG_DEFAULT_SORT_KEY: BlogColumnKey = 'name';

export const BLOG_COMPARATORS = {
    name: (a, b) => a.filename.localeCompare(b.filename),
    size: (a, b) => a.sizeBytes - b.sizeBytes,
    type: (a, b) => a.type.localeCompare(b.type),
    modified: (a, b) => a.modifiedTimestamp - b.modifiedTimestamp,
} as const satisfies Record<BlogColumnKey, RowComparator<BlogListItem>>;
