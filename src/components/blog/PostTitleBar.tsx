import Link from 'next/link';
import {
    MaximizeButtonIcon,
    MinimizeButtonIcon,
    NotepadIcon,
    XIcon,
} from '../icons/Icons';
import { hrefForTab } from '@/config/tabs';

const BLOG_HREF = hrefForTab('blog');

export function TitleBar({ title }: { title: string }) {
    return (
        <div className="bg-windows-blue flex h-7 items-center justify-between pr-0.5 pl-1">
            <div className="flex items-center gap-1.5">
                <NotepadIcon />
                <span className="text-base font-bold text-white">{title}</span>
            </div>
            <div className="flex items-center gap-0.5">
                {TITLE_BAR_BUTTON_KINDS.map((kind) => (
                    <TitleBarButton key={kind} kind={kind} />
                ))}
                <CloseButton />
            </div>
        </div>
    );
}

const TITLE_BUTTON_CLASS =
    'win95-thin-raised bg-windows-gray relative flex h-4 w-[18px] items-center justify-center';

const TITLE_BAR_BUTTON_KINDS = ['minimize', 'maximize'] as const;
type TitleBarButtonKind = (typeof TITLE_BAR_BUTTON_KINDS)[number];

function TitleBarButton({ kind }: { kind: TitleBarButtonKind }) {
    const icon =
        kind === 'minimize' ? <MinimizeButtonIcon /> : <MaximizeButtonIcon />;

    return (
        <Link href={BLOG_HREF} aria-label={kind} className={TITLE_BUTTON_CLASS}>
            {icon}
        </Link>
    );
}

function CloseButton() {
    return (
        <Link
            href={BLOG_HREF}
            aria-label="Close"
            className={TITLE_BUTTON_CLASS}
        >
            <XIcon size={8} />
        </Link>
    );
}
