import { BlogImage } from './BlogImage';
import { BlogVideo } from './BlogVideo';
import { CodeBlock } from './CodeBlock';
import { CODE_BLOCK_SLUG } from '@/config/codeLanguages';

import type {
    DefaultNodeTypes,
    SerializedBlockNode,
} from '@payloadcms/richtext-lexical';
import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react';

interface CodeBlockFields {
    blockType: typeof CODE_BLOCK_SLUG;
    blockName?: string | null;
    code?: string | null;
    language?: string | null;
}

type RichTextNode = DefaultNodeTypes | SerializedBlockNode<CodeBlockFields>;

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
    mimeType?: unknown;
}

type RenderableUploadMedia = UploadMediaNode & {
    url: string;
    width: number;
    height: number;
};

type RenderableUploadVideo = UploadMediaNode & {
    url: string;
    mimeType: string;
};

const VIDEO_MIME_TYPE_PREFIX = 'video/';

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

function isRenderableUploadVideo(
    media: UploadMediaNode
): media is RenderableUploadVideo {
    return (
        typeof media.url === 'string' &&
        typeof media.mimeType === 'string' &&
        media.mimeType.startsWith(VIDEO_MIME_TYPE_PREFIX)
    );
}

function readAltText(media: UploadMediaNode): string {
    return typeof media.alt === 'string' ? media.alt : '';
}

interface ResolvedUploadVideo {
    src: string;
    label: string;
}

function resolveUploadVideo(value: unknown): ResolvedUploadVideo | null {
    const media = asUploadMedia(value);

    if (!media) {
        return null;
    }
    if (!isRenderableUploadVideo(media)) {
        return null;
    }

    return { src: media.url, label: readAltText(media) };
}

function resolveUploadMedia(value: unknown): ResolvedUploadMedia | null {
    const media = asUploadMedia(value);

    if (!media) {
        return null;
    }
    if (!isRenderableUploadMedia(media)) {
        return null;
    }

    return {
        src: media.url,
        alt: readAltText(media),
        width: media.width,
        height: media.height,
    };
}

export function createRichTextConverters(): JSXConvertersFunction<RichTextNode> {
    return ({ defaultConverters }) => ({
        ...defaultConverters,
        blocks: {
            [CODE_BLOCK_SLUG]: ({ node }) => {
                const code = node.fields.code ?? '';
                const language = node.fields.language ?? undefined;

                return <CodeBlock code={code} language={language} />;
            },
        },
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
            const video = resolveUploadVideo(node.value);

            if (video) {
                return <BlogVideo src={video.src} label={video.label} />;
            }

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
