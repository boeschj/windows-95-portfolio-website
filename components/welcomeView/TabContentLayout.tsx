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
                    'max-h-full overflow-y-auto w-full bg-white flex px-5 md:px-0 md:p-5 flex-wrap grow overflow-x-clip flex-initial',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};
