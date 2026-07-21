import { RichText } from '@payloadcms/richtext-lexical/react';
import { createRichTextConverters } from './richTextConverters';

import type { RichTextContent } from '@/data/reader';

type PostArticleProps = {
    content: RichTextContent;
    emptyContentLabel: string;
} & (
    | {
          showHeader: true;
          title: string;
          metaLine: string;
          externalUrl?: string;
      }
    | { showHeader?: false }
);

export function PostArticle(props: PostArticleProps) {
    return (
        <article className="notepad-prose">
            {props.showHeader && (
                <ArticleHeader
                    title={props.title}
                    metaLine={props.metaLine}
                    externalUrl={props.externalUrl}
                />
            )}
            <ArticleBody
                content={props.content}
                emptyContentLabel={props.emptyContentLabel}
            />
        </article>
    );
}

interface ArticleHeaderProps {
    title: string;
    metaLine: string;
    externalUrl?: string;
}

function ArticleHeader({ title, metaLine, externalUrl }: ArticleHeaderProps) {
    return (
        <>
            <h1>{title}</h1>
            <p className="notepad-meta">
                {metaLine}
                {externalUrl && <MetaLink url={externalUrl} />}
            </p>
        </>
    );
}

function MetaLink({ url }: { url: string }) {
    return (
        <>
            {' · '}
            <a href={url} target="_blank" rel="noopener noreferrer">
                Website
            </a>
        </>
    );
}

interface ArticleBodyProps {
    content: RichTextContent;
    emptyContentLabel: string;
}

function ArticleBody({ content, emptyContentLabel }: ArticleBodyProps) {
    if (!content) {
        return <p>{emptyContentLabel}</p>;
    }

    return (
        <RichText
            data={content}
            disableContainer
            converters={createRichTextConverters()}
        />
    );
}
