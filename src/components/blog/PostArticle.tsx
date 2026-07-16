import { RichText } from '@payloadcms/richtext-lexical/react';
import { createRichTextConverters } from './richTextConverters';

import type { RichTextContent } from '@/data/reader';

interface PostArticleProps {
    content: RichTextContent;
    title?: string;
    metaLine?: string;
    showHeader?: boolean;
}

export function PostArticle({
    content,
    title,
    metaLine,
    showHeader = false,
}: PostArticleProps) {
    return (
        <article className="notepad-prose">
            {showHeader ? (
                <ArticleHeader title={title} metaLine={metaLine} />
            ) : null}
            <ArticleBody content={content} />
        </article>
    );
}

interface ArticleHeaderProps {
    title?: string;
    metaLine?: string;
}

function ArticleHeader({ title, metaLine }: ArticleHeaderProps) {
    return (
        <>
            <h1>{title}</h1>
            <p className="notepad-meta">{metaLine}</p>
        </>
    );
}

function ArticleBody({ content }: { content: RichTextContent }) {
    if (!content) {
        return <p>This post has no content yet.</p>;
    }

    return (
        <RichText
            data={content}
            disableContainer
            converters={createRichTextConverters()}
        />
    );
}
