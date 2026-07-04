import Link from 'next/link';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { Footer } from '@/components/footer/Footer';
import { Win95ScrollArea } from '@/components/Win95ScrollArea';
import { toPostView } from '@/data/postView';
import { NotepadIcon } from './NotepadIcon';
import { hrefForTab } from '@/config/tabs';

import type { Post } from '@/payload-types';
import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react';

const BLOG_HREF = hrefForTab('blog');
const NOTEPAD_TITLE_SUFFIX = ' - Notepad';
const MENU_ITEMS = ['File', 'Edit', 'Search', 'Help'] as const;

interface PostReaderProps {
    post: Post;
}

export function PostReader({ post }: PostReaderProps) {
    const { filename, title, metaLine } = toPostView(post);
    const windowTitle = `${filename}${NOTEPAD_TITLE_SUFFIX}`;

    return (
        <div className="bg-windows-gray fixed inset-0 flex flex-col overflow-hidden md:pb-taskbar-height">
            <div className="win95-border-raised bg-windows-gray flex min-h-0 flex-1 flex-col">
                <TitleBar title={windowTitle} />
                <MenuBar />
                <div className="win95-border-sunken bg-windows-gray flex min-h-0 flex-1">
                    <Win95ScrollArea viewportClassName="h-full w-full bg-white px-6 py-8 md:px-12 md:py-9">
                        <article className="notepad-prose">
                            <h1>{title}</h1>
                            <p className="notepad-meta">{metaLine}</p>
                            <PostBody post={post} />
                        </article>
                    </Win95ScrollArea>
                </div>
            </div>
            <Footer>
                <NotepadTaskbarButton title={windowTitle} />
            </Footer>
        </div>
    );
}

function collectCodeText(node: unknown): string {
    if (
        typeof node !== 'object' ||
        node === null ||
        !('children' in node) ||
        !Array.isArray(node.children)
    ) {
        return '';
    }

    return node.children
        .map((child: unknown) => {
            if (typeof child !== 'object' || child === null) {
                return '';
            }
            if ('type' in child && child.type === 'linebreak') {
                return '\n';
            }
            if ('text' in child && typeof child.text === 'string') {
                return child.text;
            }
            return '';
        })
        .join('');
}

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
    ...defaultConverters,
    code: ({ node }) => <pre>{collectCodeText(node)}</pre>,
});

function PostBody({ post }: PostReaderProps) {
    if (!post.content) {
        return <p>This post has no content yet.</p>;
    }

    return (
        <RichText
            data={post.content}
            disableContainer
            converters={jsxConverters}
        />
    );
}

function TitleBar({ title }: { title: string }) {
    return (
        <div className="bg-windows-blue flex h-7 items-center justify-between pr-[2px] pl-1">
            <div className="flex items-center gap-1.5">
                <NotepadIcon />
                <span className="text-base font-bold text-white">{title}</span>
            </div>
            <div className="flex items-center gap-[2px]">
                <TitleBarButton kind="minimize" />
                <TitleBarButton kind="maximize" />
                <CloseButton />
            </div>
        </div>
    );
}

const TITLE_BUTTON_CLASS =
    'win95-thin-raised bg-windows-gray relative flex h-4 w-[18px] items-center justify-center';

function TitleBarButton({ kind }: { kind: 'minimize' | 'maximize' }) {
    return (
        <Link href={BLOG_HREF} aria-label={kind} className={TITLE_BUTTON_CLASS}>
            {kind === 'minimize' ? (
                <span className="absolute bottom-[3px] left-1 h-[2px] w-2 bg-black" />
            ) : (
                <span className="absolute top-[3px] left-1 h-2 w-[10px] border border-t-2 border-black" />
            )}
        </Link>
    );
}

function CloseButton() {
    return (
        <Link href={BLOG_HREF} aria-label="Close" className={TITLE_BUTTON_CLASS}>
            <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
                <path
                    d="M0.5 0.5 L7.5 7.5 M7.5 0.5 L0.5 7.5"
                    stroke="#000"
                    strokeWidth="1.3"
                />
            </svg>
        </Link>
    );
}

function MenuBar() {
    return (
        <div className="flex gap-[2px] px-[2px] pt-[3px] pb-[5px] text-[15px] text-black">
            {MENU_ITEMS.map((item) => (
                <span key={item} className="px-[7px] py-[2px]">
                    <u>{item.charAt(0)}</u>
                    {item.slice(1)}
                </span>
            ))}
        </div>
    );
}

function NotepadTaskbarButton({ title }: { title: string }) {
    return (
        <Link
            href={BLOG_HREF}
            className="win95-thin-sunken bg-windows-gray flex h-7 max-w-[320px] flex-none items-center gap-1.5 px-2.5 text-black no-underline"
        >
            <NotepadIcon size={14} />
            <span className="overflow-hidden text-[15px] font-bold text-ellipsis whitespace-nowrap">
                {title}
            </span>
        </Link>
    );
}

