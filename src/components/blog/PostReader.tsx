import Link from 'next/link';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { Footer } from '@/components/footer/Footer';
import { Win95ScrollArea } from '@/components/Win95ScrollArea';
import { NotepadIcon } from '@/components/icons/Icons';
import { toPostView } from '@/data/postView';
import { hrefForTab } from '@/config/tabs';
import { createCodeConverters } from './codeConverters';

import type { Post } from '@/payload-types';
import { TitleBar } from './PostTitleBar';

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
        <div className="bg-windows-gray md:pb-taskbar-height fixed inset-0 flex flex-col overflow-hidden">
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

interface PostBodyProps {
    post: Post;
}

function PostBody({ post }: PostBodyProps) {
    if (!post.content) {
        return <p>This post has no content yet.</p>;
    }

    return (
        <RichText
            data={post.content}
            disableContainer
            converters={createCodeConverters()}
        />
    );
}

function MenuBar() {
    return (
        <div className="flex gap-0.5 px-0.5 pt-0.75 pb-1.25 text-[15px] text-black">
            {MENU_ITEMS.map((item) => (
                <span
                    key={item}
                    className="px-1.75 py-0.5 first-letter:underline"
                >
                    {item}
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
