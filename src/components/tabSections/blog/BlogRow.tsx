import Link from 'next/link';
import { DocumentIcon } from '@/components/icons/Icons';
import { cn } from '@/utils';
import {
    CELL_CLASS,
    HIDDEN_ON_MOBILE,
} from '@/components/explorer/explorerTable';
import { BLOG_ROUTE } from '@/constants/application.constants';

import { COLUMN_WIDTH_CLASS } from './blogColumns';

import type { BlogListItem } from '@/data/postView';

interface BlogRowProps {
    item: BlogListItem;
}

export function BlogRow({ item }: BlogRowProps) {
    const postHref = `${BLOG_ROUTE}/${item.slug}`;

    return (
        <tr>
            <td className={CELL_CLASS}>
                <Link
                    href={postHref}
                    className="flex min-w-0 items-center gap-1.5 text-black no-underline"
                >
                    <DocumentIcon />
                    <span className="block min-w-0 truncate px-0.75">
                        {item.filename}
                    </span>
                </Link>
            </td>
            <td
                className={cn(
                    HIDDEN_ON_MOBILE,
                    CELL_CLASS,
                    COLUMN_WIDTH_CLASS.size
                )}
            >
                {item.size}
            </td>
            <td
                className={cn(
                    HIDDEN_ON_MOBILE,
                    CELL_CLASS,
                    COLUMN_WIDTH_CLASS.type
                )}
            >
                {item.type}
            </td>
            <td className={cn(CELL_CLASS, COLUMN_WIDTH_CLASS.modified)}>
                {item.modified}
            </td>
        </tr>
    );
}
