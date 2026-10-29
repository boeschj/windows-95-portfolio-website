import Link from 'next/link';
import { DocumentIcon } from '@/components/icons/Icons';
import {
    CELL_CLASS,
    ITEM_LINK_CLASS,
    LINK_ROW_CLASS,
} from '@/components/explorer/explorerTable';
import { BLOG_ROUTE } from '@/constants/application.constants';

import type { BlogListItem } from '@/data/postView';

interface BlogRowProps {
    item: BlogListItem;
}

export function BlogRow({ item }: BlogRowProps) {
    const postHref = `${BLOG_ROUTE}/${item.slug}`;

    return (
        <tr className={LINK_ROW_CLASS}>
            <td className={CELL_CLASS}>
                <Link href={postHref} className={ITEM_LINK_CLASS}>
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
