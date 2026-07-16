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

const asNode = (value: unknown): CodeNode | null =>
    typeof value === 'object' && value !== null ? value : null;

const asUploadMedia = (value: unknown): UploadMediaNode | null =>
    typeof value === 'object' && value !== null ? value : null;

export function collectCodeText(node: CodeNode): string {
    let text = '';

    for (const child of node.children ?? []) {
        const childNode = asNode(child);

        if (childNode?.type === 'linebreak') {
            text += '\n';
        } else if (typeof childNode?.text === 'string') {
            text += childNode.text;
        }
    }

    return text;
}

interface ResolvedUploadMedia {
    src: string;
    alt: string;
    width: number;
    height: number;
}

function resolveUploadMedia(value: unknown): ResolvedUploadMedia | null {
    const media = asUploadMedia(value);

    if (!media) {
        return null;
    }

    const hasRenderableImage =
        typeof media.url === 'string' &&
        typeof media.width === 'number' &&
        typeof media.height === 'number';

    if (!hasRenderableImage) {
        return null;
    }

    return {
        src: String(media.url),
        alt: typeof media.alt === 'string' ? media.alt : '',
        width: Number(media.width),
        height: Number(media.height),
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
