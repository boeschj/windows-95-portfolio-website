'use client';

import { Explorer } from '@/components/explorer/Explorer';
import { SORT_DIRECTION } from '@/components/explorer/explorerTable';
import { experienceCountLabel } from '@/data/experienceView';
import {
    EXPERIENCE_COLUMNS,
    EXPERIENCE_COMPARATORS,
    EXPERIENCE_DEFAULT_SORT_KEY,
} from './experienceColumns';
import { ExperienceRow } from './ExperienceRow';

import type { ExperienceListItem } from '@/data/experienceView';

const EMPTY_LABEL = 'No experience found.';

interface ExperienceExplorerProps {
    items: ExperienceListItem[];
}

export function ExperienceExplorer({ items }: ExperienceExplorerProps) {
    return (
        <Explorer
            columns={EXPERIENCE_COLUMNS}
            rows={items}
            comparators={EXPERIENCE_COMPARATORS}
            defaultSortKey={EXPERIENCE_DEFAULT_SORT_KEY}
            defaultSortDirection={SORT_DIRECTION.desc}
            getRowKey={(item) => item.slug}
            renderRow={(item) => <ExperienceRow item={item} />}
            statusLabel={experienceCountLabel(items.length)}
            emptyLabel={EMPTY_LABEL}
            ariaLabel="Work experience"
        />
    );
}
