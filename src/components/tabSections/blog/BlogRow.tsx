import Link from 'next/link';
import { DocumentIcon } from '@/components/icons/Icons';
import { CELL_CLASS } from '@/components/explorer/explorerTable';
import { BLOG_ROUTE } from '@/constants/application.constants';

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
                    className="flex items-center gap-1.5 text-black no-underline"
                >
                    <DocumentIcon />
                    <span className="px-0.75">{item.filename}</span>
                </Link>
            </td>
            <td className={CELL_CLASS}>{item.size}</td>
            <td className={CELL_CLASS}>{item.type}</td>
            <td className={CELL_CLASS}>{item.modified}</td>
        </tr>
    );
}
