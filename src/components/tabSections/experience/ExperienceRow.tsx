import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils';
import {
    CELL_CLASS,
    HIDDEN_ON_MOBILE,
} from '@/components/explorer/explorerTable';
import { EXPERIENCE_ROUTE } from '@/constants/application.constants';

import { COLUMN_WIDTH_CLASS } from './experienceColumns';

import type { ExperienceListItem } from '@/data/experienceView';

const LOGO_SIZE_PX = 16;
const COMPANY_LABEL_CLASS =
    'flex min-w-0 items-center gap-1.5 text-black no-underline';

interface ExperienceRowProps {
    item: ExperienceListItem;
}

export function ExperienceRow({ item }: ExperienceRowProps) {
    return (
        <tr>
            <td className={CELL_CLASS}>
                <CompanyLabel item={item} />
            </td>
            <td
                className={cn(
                    HIDDEN_ON_MOBILE,
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

function CompanyLabel({ item }: ExperienceRowProps) {
    const experienceHref = `${EXPERIENCE_ROUTE}/${item.slug}`;
    const label = (
        <>
            <ExperienceLogo item={item} />
            <span className="flex min-w-0 flex-col px-0.75">
                <span className="truncate">{item.company}</span>
                <span className="truncate text-black/60 md:hidden">
                    {item.role}
                </span>
            </span>
        </>
    );

    if (!item.hasContent) {
        return <div className={COMPANY_LABEL_CLASS}>{label}</div>;
    }

    return (
        <Link href={experienceHref} className={COMPANY_LABEL_CLASS}>
            {label}
        </Link>
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
