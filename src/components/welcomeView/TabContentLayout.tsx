import { cn } from '../../utils';

interface TabContentLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export const TabContentLayout: React.FC<TabContentLayoutProps> = ({
    children,
    className,
}) => {
    return (
        <div className={cn('h-full w-full', className)}>
            <div
                className={cn(
                    'flex max-h-full w-full flex-initial grow flex-wrap overflow-y-auto overflow-x-clip bg-white px-5 md:p-5 md:px-0',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};
