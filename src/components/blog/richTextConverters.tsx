import { BlogImage } from './BlogImage';
import { CodeBlock } from './CodeBlock';

import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react';

interface CodeNode {
    type?: string;
    language?: unknown;
    root?: unknown;
    children?: unknown[];
    text?: unknown;
}

interface UploadMediaNode {
    url?: unknown;
    alt?: unknown;
    width?: unknown;
    height?: unknown;
}

type RenderableUploadMedia = UploadMediaNode & {
    url: string;
    width: number;
    height: number;
};

const asNode = (value: unknown): CodeNode | null =>
    typeof value === 'object' && value !== null ? value : null;

const asUploadMedia = (value: unknown): UploadMediaNode | null =>
    typeof value === 'object' && value !== null ? value : null;

function isLineBreak(node: CodeNode): boolean {
    return node.type === 'linebreak';
}

function isTextNode(node: CodeNode): node is CodeNode & { text: string } {
    return typeof node.text === 'string';
}

function childToText(child: unknown): string {
    const node = asNode(child);

    if (!node) {
        return '';
    }
    if (isLineBreak(node)) {
        return '\n';
    }
    if (isTextNode(node)) {
        return node.text;
    }
    return '';
}

export function collectCodeText(node: CodeNode): string {
    const childTexts = (node.children ?? []).map(childToText);

    return childTexts.join('');
}

interface ResolvedUploadMedia {
    src: string;
    alt: string;
    width: number;
    height: number;
}

function isRenderableUploadMedia(
    media: UploadMediaNode
): media is RenderableUploadMedia {
    return (
        typeof media.url === 'string' &&
        typeof media.width === 'number' &&
        typeof media.height === 'number'
    );
}

function resolveUploadMedia(value: unknown): ResolvedUploadMedia | null {
    const media = asUploadMedia(value);

    if (!media) {
        return null;
    }
    if (!isRenderableUploadMedia(media)) {
        return null;
    }

    const alt = typeof media.alt === 'string' ? media.alt : '';

    return {
        src: media.url,
        alt,
        width: media.width,
        height: media.height,
    };
}

export function createRichTextConverters(): JSXConvertersFunction {
    return ({ defaultConverters }) => ({
        ...defaultConverters,
        code: ({ node }) => {
            const codeNode = asNode(node) ?? {};
            const language =
                typeof codeNode.language === 'string'
                    ? codeNode.language
                    : undefined;

            return (
                <CodeBlock
                    code={collectCodeText(codeNode)}
                    language={language}
                />
            );
        },
        upload: ({ node }) => {
            const media = resolveUploadMedia(node.value);

            if (!media) {
                return null;
            }

            return (
                <BlogImage
                    src={media.src}
                    alt={media.alt}
                    width={media.width}
                    height={media.height}
                />
            );
        },
    });
}
