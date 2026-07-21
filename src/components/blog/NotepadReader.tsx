import Link from 'next/link';
import { Footer } from '@/components/footer/Footer';
import { Win95ScrollArea } from '@/components/Win95ScrollArea';
import { NotepadIcon } from '@/components/icons/Icons';
import { PostArticle } from './PostArticle';
import { TitleBar } from './PostTitleBar';

import type { ReaderDocument } from '@/data/reader';

const NOTEPAD_TITLE_SUFFIX = ' - Notepad';
const MENU_ITEMS = ['File', 'Edit', 'Search', 'Help'] as const;

interface NotepadReaderProps {
    doc: ReaderDocument;
    backHref: string;
}

export function NotepadReader({ doc, backHref }: NotepadReaderProps) {
    const {
        filename,
        title,
        metaLine,
        content,
        emptyContentLabel,
        externalUrl,
    } = doc;
    const windowTitle = `${filename}${NOTEPAD_TITLE_SUFFIX}`;

    return (
        <div className="bg-windows-bg md:pb-taskbar-height fixed inset-0 flex flex-col overflow-hidden">
            <div className="win95-border-raised bg-windows-gray mx-auto flex min-h-0 w-full max-w-screen-2xl flex-1 flex-col">
                <TitleBar title={windowTitle} backHref={backHref} />
                <MenuBar />
                <div className="win95-border-sunken bg-windows-gray flex min-h-0 flex-1">
                    <Win95ScrollArea viewportClassName="h-full w-full bg-white px-6 py-8 md:px-12 md:py-9">
                        <PostArticle
                            content={content}
                            emptyContentLabel={emptyContentLabel}
                            showHeader
                            title={title}
                            metaLine={metaLine}
                            externalUrl={externalUrl}
                        />
                    </Win95ScrollArea>
                </div>
            </div>
            <Footer>
                <NotepadTaskbarButton title={windowTitle} backHref={backHref} />
            </Footer>
        </div>
    );
}

function MenuBar() {
    return (
        <div className="text-win95 flex gap-0.5 px-0.5 pt-0.75 pb-1.25 text-black">
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

interface NotepadTaskbarButtonProps {
    title: string;
    backHref: string;
}

function NotepadTaskbarButton({ title, backHref }: NotepadTaskbarButtonProps) {
    return (
        <Link
            href={backHref}
            className="win95-thin-sunken bg-windows-gray flex h-7 max-w-[320px] flex-none items-center gap-1.5 px-2.5 text-black no-underline"
        >
            <NotepadIcon size={14} />
            <span className="text-win95 overflow-hidden font-bold text-ellipsis whitespace-nowrap">
                {title}
            </span>
        </Link>
    );
}
