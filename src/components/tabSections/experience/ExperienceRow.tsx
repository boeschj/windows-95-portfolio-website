import Image from 'next/image';
import Link from 'next/link';
import { CELL_CLASS } from '@/components/explorer/explorerTable';
import { EXPERIENCE_ROUTE } from '@/constants/application.constants';

import type { ExperienceListItem } from '@/data/experienceView';

const LOGO_SIZE_PX = 16;
const COMPANY_LABEL_CLASS = 'flex items-center gap-1.5 text-black no-underline';

interface ExperienceRowProps {
    item: ExperienceListItem;
}

export function ExperienceRow({ item }: ExperienceRowProps) {
    return (
        <tr>
            <td className={CELL_CLASS}>
                <CompanyLabel item={item} />
            </td>
            <td className={CELL_CLASS}>{item.role}</td>
            <td className={CELL_CLASS}>{item.datesLabel}</td>
        </tr>
    );
}

function CompanyLabel({ item }: ExperienceRowProps) {
    const experienceHref = `${EXPERIENCE_ROUTE}/${item.slug}`;
    const label = (
        <>
            <ExperienceLogo item={item} />
            <span className="px-0.75">{item.company}</span>
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
