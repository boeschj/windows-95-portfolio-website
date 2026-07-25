'use client';

import { useRef } from 'react';

import { ScrollArea } from '@base-ui/react/scroll-area';

import { cn } from '@/utils';

const SCROLL_STEP_PX = 40;
const SCROLL_BUTTON_SIZE_PX = 24;

const ARROW = {
    up: {
        position: 'top-0',
        style: {
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
            borderBottom: '4px solid currentColor',
        },
    },
    down: {
        position: 'bottom-0',
        style: {
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
            borderTop: '4px solid currentColor',
        },
    },
    left: {
        position: 'left-0',
        style: {
            borderTop: '4px solid transparent',
            borderBottom: '4px solid transparent',
            borderRight: '4px solid currentColor',
        },
    },
    right: {
        position: 'right-0',
        style: {
            borderTop: '4px solid transparent',
            borderBottom: '4px solid transparent',
            borderLeft: '4px solid currentColor',
        },
    },
} as const;

type ArrowDirection = keyof typeof ARROW;

const VERTICAL_THUMB_CLASS =
    'win95-scroll-thumb win95-border-raised bg-windows-gray w-full';

const HORIZONTAL_THUMB_CLASS =
    'win95-scroll-thumb win95-border-raised bg-windows-gray h-full';

const ARROW_BUTTON_CLASS =
    'win95-scroll-arrow win95-border-raised bg-windows-gray absolute flex items-center justify-center';

function isVerticalArrow(direction: ArrowDirection): boolean {
    return direction === 'up' || direction === 'down';
}

interface Win95ScrollAreaProps {
    children: React.ReactNode;
    viewportClassName?: string;
}

export function Win95ScrollArea({
    children,
    viewportClassName,
}: Win95ScrollAreaProps) {
    const viewportRef = useRef<HTMLDivElement>(null);

    const scrollVerticalBy = (pixels: number) => {
        viewportRef.current?.scrollBy({ top: pixels, behavior: 'instant' });
    };

    const scrollHorizontalBy = (pixels: number) => {
        viewportRef.current?.scrollBy({ left: pixels, behavior: 'instant' });
    };

    return (
        <ScrollArea.Root className="grid h-full w-full grid-cols-[minmax(0,1fr)_1.5rem] grid-rows-[minmax(0,1fr)_1.5rem]">
            <ScrollArea.Viewport
                ref={viewportRef}
                className={cn('min-h-0 min-w-0', viewportClassName)}
            >
                <ScrollArea.Content className="win95-scroll-content">
                    {children}
                </ScrollArea.Content>
            </ScrollArea.Viewport>

            <ScrollArea.Scrollbar
                keepMounted
                orientation="vertical"
                className="win95-scrollbar-track m-0 flex w-6 touch-none select-none"
                style={{
                    paddingTop: SCROLL_BUTTON_SIZE_PX,
                    paddingBottom: SCROLL_BUTTON_SIZE_PX,
                }}
            >
                <ScrollArea.Thumb className={VERTICAL_THUMB_CLASS} />
                <ScrollArrowButton
                    direction="up"
                    onClick={() => {
                        scrollVerticalBy(-SCROLL_STEP_PX);
                    }}
                />
                <ScrollArrowButton
                    direction="down"
                    onClick={() => {
                        scrollVerticalBy(SCROLL_STEP_PX);
                    }}
                />
            </ScrollArea.Scrollbar>

            <ScrollArea.Scrollbar
                keepMounted
                orientation="horizontal"
                className="win95-scrollbar-track m-0 flex h-6 touch-none select-none"
                style={{
                    paddingLeft: SCROLL_BUTTON_SIZE_PX,
                    paddingRight: SCROLL_BUTTON_SIZE_PX,
                }}
            >
                <ScrollArea.Thumb className={HORIZONTAL_THUMB_CLASS} />
                <ScrollArrowButton
                    direction="left"
                    onClick={() => {
                        scrollHorizontalBy(-SCROLL_STEP_PX);
                    }}
                />
                <ScrollArrowButton
                    direction="right"
                    onClick={() => {
                        scrollHorizontalBy(SCROLL_STEP_PX);
                    }}
                />
            </ScrollArea.Scrollbar>

            <div className="bg-windows-gray" />
        </ScrollArea.Root>
    );
}

interface ScrollArrowButtonProps {
    direction: ArrowDirection;
    onClick: () => void;
}

function ScrollArrowButton({ direction, onClick }: ScrollArrowButtonProps) {
    const arrow = ARROW[direction];
    const isVertical = isVerticalArrow(direction);
    const crossAxisSpan = isVertical ? 'right-0 left-0' : 'top-0 bottom-0';
    const sizeStyle = isVertical
        ? { height: SCROLL_BUTTON_SIZE_PX }
        : { width: SCROLL_BUTTON_SIZE_PX };

    return (
        <button
            type="button"
            aria-label={`Scroll ${direction}`}
            onClick={onClick}
            className={cn(ARROW_BUTTON_CLASS, crossAxisSpan, arrow.position)}
            style={sizeStyle}
        >
            <span className="block h-0 w-0" style={arrow.style} />
        </button>
    );
}
