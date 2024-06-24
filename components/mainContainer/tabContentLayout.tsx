import { cn } from '../../utils';

interface TabContentLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const TabContentLayout: React.FC<TabContentLayoutProps> = ({
    children,
    className,
}) => {
    return (
        <main
            className={cn(
                'xs:h-[500px] sm:h-[520px] w-full bg-white flex px-5 md:px-0 md:p-5 flex-wrap overflow-y-auto grow overflow-x-clip flex-initial w-42',
                className
            )}
        >
            {children}
        </main>
    );
};

export default TabContentLayout;
