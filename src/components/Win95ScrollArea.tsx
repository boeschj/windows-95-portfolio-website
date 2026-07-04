'use client';

import { useRef } from 'react';

import { ScrollArea } from '@base-ui/react/scroll-area';

import { cn } from '@/utils';

const SCROLL_STEP_PX = 40;
const SCROLL_BUTTON_SIZE_PX = 24;

const ARROW = {
    up: {
        position: 'top-0 inset-x-0',
        style: {
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
            borderBottom: '4px solid black',
        },
    },
    down: {
        position: 'bottom-0 inset-x-0',
        style: {
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
            borderTop: '4px solid black',
        },
    },
    left: {
        position: 'left-0 inset-y-0',
        style: {
            borderTop: '4px solid transparent',
            borderBottom: '4px solid transparent',
            borderRight: '4px solid black',
        },
    },
    right: {
        position: 'right-0 inset-y-0',
        style: {
            borderTop: '4px solid transparent',
            borderBottom: '4px solid transparent',
            borderLeft: '4px solid black',
        },
    },
} as const;

type ArrowDirection = keyof typeof ARROW;

const THUMB_CLASS = 'win95-scroll-thumb win95-border-raised bg-windows-gray flex-1';

interface Win95ScrollAreaProps {
    children: React.ReactNode;
    viewportClassName?: string;
    horizontal?: boolean;
}

export function Win95ScrollArea({
    children,
    viewportClassName,
    horizontal = false,
}: Win95ScrollAreaProps) {
    const viewportRef = useRef<HTMLDivElement>(null);

    const scrollVerticalBy = (pixels: number) => {
        viewportRef.current?.scrollBy({ top: pixels, behavior: 'instant' });
    };

    const scrollHorizontalBy = (pixels: number) => {
        viewportRef.current?.scrollBy({ left: pixels, behavior: 'instant' });
    };

    return (
        <ScrollArea.Root className="h-full w-full">
            <ScrollArea.Viewport ref={viewportRef} className={viewportClassName}>
                <ScrollArea.Content>{children}</ScrollArea.Content>
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
                <ScrollArea.Thumb className={THUMB_CLASS} />
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

            {horizontal ? (
                <>
                    <ScrollArea.Scrollbar
                        keepMounted
                        orientation="horizontal"
                        className="win95-scrollbar-track m-0 flex h-6 touch-none select-none"
                        style={{
                            paddingLeft: SCROLL_BUTTON_SIZE_PX,
                            paddingRight: SCROLL_BUTTON_SIZE_PX,
                        }}
                    >
                        <ScrollArea.Thumb className={THUMB_CLASS} />
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
                    <ScrollArea.Corner className="bg-windows-gray" />
                </>
            ) : null}
        </ScrollArea.Root>
    );
}

interface ScrollArrowButtonProps {
    direction: ArrowDirection;
    onClick: () => void;
}

function ScrollArrowButton({ direction, onClick }: ScrollArrowButtonProps) {
    const arrow = ARROW[direction];

    return (
        <button
            type="button"
            aria-label={`Scroll ${direction}`}
            onClick={onClick}
            className={cn(
                'win95-border-raised bg-windows-gray absolute flex items-center justify-center',
                arrow.position
            )}
            style={{ width: SCROLL_BUTTON_SIZE_PX, height: SCROLL_BUTTON_SIZE_PX }}
        >
            <span className="block h-0 w-0" style={arrow.style} />
        </button>
    );
}
