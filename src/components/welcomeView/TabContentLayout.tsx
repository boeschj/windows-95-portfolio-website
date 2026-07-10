import { Win95ScrollArea } from '@/components/Win95ScrollArea';
import { cn } from '@/utils';

interface TabContentLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export function TabContentLayout({
    children,
    className,
}: TabContentLayoutProps) {
    return (
        <Win95ScrollArea
            viewportClassName={cn(
                'flex max-h-full w-full flex-initial grow flex-wrap overflow-x-clip bg-white px-5 md:p-5 md:px-0',
                className
            )}
        >
            {children}
        </Win95ScrollArea>
    );
}
