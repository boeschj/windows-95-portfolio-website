import { cn } from '@/utils';

import type { ExperienceListItem } from '@/data/experienceView';
import type {
    ExplorerColumn,
    RowComparator,
} from '@/components/explorer/explorerTable';

export const COLUMN_WIDTH_CLASS = {
    role: 'w-[34%]',
    dates: 'w-[200px]',
} as const;

export const EXPERIENCE_COLUMNS = [
    { key: 'company', label: 'Company', className: 'w-full' },
    {
        key: 'role',
        label: 'Role',
        className: cn('hidden md:table-cell', COLUMN_WIDTH_CLASS.role),
    },
    {
        key: 'dates',
        label: 'Dates',
        className: COLUMN_WIDTH_CLASS.dates,
    },
] as const satisfies readonly ExplorerColumn<string>[];

export type ExperienceColumnKey = (typeof EXPERIENCE_COLUMNS)[number]['key'];

export const EXPERIENCE_DEFAULT_SORT_KEY: ExperienceColumnKey = 'dates';

export const EXPERIENCE_COMPARATORS = {
    company: (a, b) => a.company.localeCompare(b.company),
    role: (a, b) => a.role.localeCompare(b.role),
    dates: (a, b) => a.startTimestamp - b.startTimestamp,
} as const satisfies Record<
    ExperienceColumnKey,
    RowComparator<ExperienceListItem>
>;
