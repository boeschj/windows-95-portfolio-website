'use client';

import { useRef } from 'react';

import { ScrollArea } from '@base-ui/react/scroll-area';

import { cn } from '@/utils';

const SCROLL_STEP_PX = 40;
const SCROLL_BUTTON_SIZE_PX = 24;
const ARROW_SIZE_PX = 4;

const ARROW_POSITION = {
    up: 'top-0',
    down: 'bottom-0',
} as const;

type ArrowDirection = keyof typeof ARROW_POSITION;

const ARROW_STYLES = {
    up: {
        borderLeft: `${ARROW_SIZE_PX}px solid transparent`,
        borderRight: `${ARROW_SIZE_PX}px solid transparent`,
        borderBottom: `${ARROW_SIZE_PX}px solid black`,
    },
    down: {
        borderLeft: `${ARROW_SIZE_PX}px solid transparent`,
        borderRight: `${ARROW_SIZE_PX}px solid transparent`,
        borderTop: `${ARROW_SIZE_PX}px solid black`,
    },
} as const;

interface TabContentLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export function TabContentLayout({
    children,
    className,
}: TabContentLayoutProps) {
    const viewportRef = useRef<HTMLDivElement>(null);

    const scrollBy = (pixels: number) => {
        viewportRef.current?.scrollBy({
            top: pixels,
            behavior: 'instant',
        });
    };

    return (
        <ScrollArea.Root className="h-full w-full">
            <ScrollArea.Viewport
                ref={viewportRef}
                className={cn(
                    'flex max-h-full w-full flex-initial grow flex-wrap overflow-x-clip bg-white px-5 md:p-5 md:px-0',
                    className
                )}
            >
                <ScrollArea.Content>{children}</ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                className="win95-scrollbar-track m-0 flex w-6 touch-none select-none"
                style={{
                    paddingTop: SCROLL_BUTTON_SIZE_PX,
                    paddingBottom: SCROLL_BUTTON_SIZE_PX,
                }}
            >
                <ScrollArea.Thumb className="win95-border-raised bg-windows-gray flex-1" />
                <ScrollArrowButton
                    direction="up"
                    onClick={() => {
                        scrollBy(-SCROLL_STEP_PX);
                    }}
                />
                <ScrollArrowButton
                    direction="down"
                    onClick={() => {
                        scrollBy(SCROLL_STEP_PX);
                    }}
                />
            </ScrollArea.Scrollbar>
        </ScrollArea.Root>
    );
}

interface ScrollArrowButtonProps {
    direction: ArrowDirection;
    onClick: () => void;
}

function ScrollArrowButton({ direction, onClick }: ScrollArrowButtonProps) {
    return (
        <button
            type="button"
            aria-label={`Scroll ${direction}`}
            onClick={onClick}
            className={cn(
                'win95-border-raised bg-windows-gray absolute right-0 left-0 flex items-center justify-center',
                ARROW_POSITION[direction]
            )}
            style={{ height: SCROLL_BUTTON_SIZE_PX }}
        >
            <span className="block h-0 w-0" style={ARROW_STYLES[direction]} />
        </button>
    );
}
