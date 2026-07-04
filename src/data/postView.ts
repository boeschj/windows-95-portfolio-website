import type { Post } from '@/payload-types';

export const MARKDOWN_FILE_TYPE = 'Markdown File';
export const BLOG_AUTHOR = 'Jordan Boesch';

const BYTES_PER_KILOBYTE = 1024;
const WORDS_PER_MINUTE = 200;
const META_SEPARATOR = ' · ';
const DESCRIPTION_MAX_LENGTH = 155;

export interface BlogListItem {
    slug: string;
    title: string;
    filename: string;
    size: string;
    sizeBytes: number;
    type: string;
    modified: string;
    modifiedTimestamp: number;
}

export interface PostView {
    filename: string;
    title: string;
    metaLine: string;
}

export function postFilename(post: Post): string {
    return `${post.slug}.md`;
}

export function toBlogListItem(post: Post): BlogListItem {
    const sizeBytes = contentSizeBytes(post);
    const modifiedIso = post.publishedAt ?? post.updatedAt;

    return {
        slug: post.slug,
        title: post.title,
        filename: postFilename(post),
        size: formatFileSize(sizeBytes),
        sizeBytes,
        type: MARKDOWN_FILE_TYPE,
        modified: formatExplorerDate(modifiedIso),
        modifiedTimestamp: new Date(modifiedIso).getTime(),
    };
}

export function toPostView(post: Post): PostView {
    const metaParts = [formatPostDate(post), BLOG_AUTHOR, formatReadTime(post)];

    return {
        filename: postFilename(post),
        title: post.title,
        metaLine: metaParts.join(META_SEPARATOR),
    };
}

export function fileCountLabel(count: number): string {
    return `${String(count)} file(s) found`;
}

export function postDescription(post: Post): string {
    const text = collectText(post.content?.root).replace(/\s+/g, ' ').trim();

    if (text.length <= DESCRIPTION_MAX_LENGTH) {
        return text;
    }

    return `${text.slice(0, DESCRIPTION_MAX_LENGTH).trimEnd()}…`;
}

function contentSizeBytes(post: Post): number {
    return JSON.stringify(post.content ?? {}).length;
}

function formatFileSize(bytes: number): string {
    const kilobytes = Math.max(1, Math.round(bytes / BYTES_PER_KILOBYTE));

    return `${String(kilobytes)}KB`;
}

function formatExplorerDate(isoDate: string): string {
    return new Intl.DateTimeFormat('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }).format(new Date(isoDate));
}

function formatPostDate(post: Post): string {
    const isoDate = post.publishedAt ?? post.createdAt;

    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(isoDate));
}

function formatReadTime(post: Post): string {
    const words = countWords(post.content?.root);
    const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

    return `${String(minutes)} min read`;
}

function countWords(node: unknown): number {
    return collectText(node).trim().split(/\s+/).filter(Boolean).length;
}

function collectText(node: unknown): string {
    if (typeof node !== 'object' || node === null) {
        return '';
    }

    let text = '';

    if ('text' in node && typeof node.text === 'string') {
        text += `${node.text} `;
    }

    if ('children' in node && Array.isArray(node.children)) {
        for (const child of node.children) {
            text += collectText(child);
        }
    }

    return text;
}
