import Link from 'next/link';
import { DocumentIcon } from '@/components/icons/Icons';
import { cn } from '@/utils';

import { CELL_CLASS, COLUMN_WIDTH_CLASS } from './blogTable';

import type { BlogListItem } from '@/data/postView';

interface PostRowProps {
    item: BlogListItem;
}

export function PostRow({ item }: PostRowProps) {
    const postHref = `/blog/${item.slug}`;

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
                    'hidden md:table-cell',
                    CELL_CLASS,
                    COLUMN_WIDTH_CLASS.size
                )}
            >
                {item.size}
            </td>
            <td
                className={cn(
                    'hidden md:table-cell',
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
