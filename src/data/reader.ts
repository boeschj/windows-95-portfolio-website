import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext';

import type { Post } from '@/payload-types';

export type RichTextContent = Post['content'];

const DESCRIPTION_MAX_LENGTH = 155;

export interface ReaderDocument {
    filename: string;
    title: string;
    metaLine: string;
    content: RichTextContent;
    emptyContentLabel: string;
    externalUrl?: string;
}

export function richTextToPlainText(content: RichTextContent): string {
    if (!content) {
        return '';
    }

    return convertLexicalToPlaintext({ data: content });
}

export function hasRichTextContent(content: RichTextContent): boolean {
    return richTextToPlainText(content).trim().length > 0;
}

export function richTextDescription(content: RichTextContent): string {
    const plainText = richTextToPlainText(content);
    const collapsedWhitespace = plainText.replace(/\s+/g, ' ');
    const trimmedText = collapsedWhitespace.trim();

    if (trimmedText.length <= DESCRIPTION_MAX_LENGTH) {
        return trimmedText;
    }

    const truncated = trimmedText.slice(0, DESCRIPTION_MAX_LENGTH).trimEnd();

    return `${truncated}...`;
}
