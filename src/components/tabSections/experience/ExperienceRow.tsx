import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils';
import { CELL_CLASS } from '@/components/explorer/explorerTable';

import { COLUMN_WIDTH_CLASS } from './experienceColumns';

import type { ExperienceListItem } from '@/data/experienceView';

const LOGO_SIZE_PX = 16;

interface ExperienceRowProps {
    item: ExperienceListItem;
}

export function ExperienceRow({ item }: ExperienceRowProps) {
    const experienceHref = `/experience/${item.slug}`;

    return (
        <tr>
            <td className={CELL_CLASS}>
                <Link
                    href={experienceHref}
                    className="flex min-w-0 items-center gap-1.5 text-black no-underline"
                >
                    <ExperienceLogo item={item} />
                    <span className="block min-w-0 truncate px-0.75">
                        {item.company}
                    </span>
                </Link>
            </td>
            <td
                className={cn(
                    'hidden md:table-cell',
                    CELL_CLASS,
                    COLUMN_WIDTH_CLASS.role
                )}
            >
                {item.role}
            </td>
            <td className={cn(CELL_CLASS, COLUMN_WIDTH_CLASS.dates)}>
                {item.datesLabel}
            </td>
        </tr>
    );
}

function ExperienceLogo({ item }: ExperienceRowProps) {
    if (!item.logoUrl) {
        return null;
    }

    return (
        <Image
            src={item.logoUrl}
            alt={item.logoAlt}
            width={LOGO_SIZE_PX}
            height={LOGO_SIZE_PX}
            className="size-4 flex-none object-contain"
        />
    );
}
