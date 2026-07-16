import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext';

import type { Post } from '@/payload-types';

export type RichTextContent = Post['content'];

const DESCRIPTION_MAX_LENGTH = 155;

export interface ReaderDocument {
    filename: string;
    title: string;
    metaLine: string;
    content: RichTextContent;
}

export function richTextToPlainText(content: RichTextContent): string {
    if (!content) {
        return '';
    }

    return convertLexicalToPlaintext({ data: content });
}

export function richTextDescription(content: RichTextContent): string {
    const text = richTextToPlainText(content).replace(/\s+/g, ' ').trim();

    if (text.length <= DESCRIPTION_MAX_LENGTH) {
        return text;
    }

    return `${text.slice(0, DESCRIPTION_MAX_LENGTH).trimEnd()}...`;
}
