import { Dispatch, SetStateAction } from 'react';
import LinkButtons from './linkButtons';
import TabContentWindow from './tabContentWindow';

interface IMainContainerProps {
    tabSelected: number;
    setTabSelected: Dispatch<SetStateAction<number>>;
    className?: string;
}

const MainContainer: React.FC<IMainContainerProps> = ({
    tabSelected,
    setTabSelected,
    className,
}: IMainContainerProps): JSX.Element => {
    return (
        <div className="win95-border-raised h-full pb-6 bg-windows-gray">
            <Header />
            <div className="flex grow justify-between flex-col p-2 md:p-5 gap-5 h-full">
                <TabContentWindow
                    tabSelected={tabSelected}
                    setTabSelected={setTabSelected}
                />
                <LinkButtons />
            </div>
        </div>
    );
};

const Header = () => (
    <div className="bg-windows-blue px-1 flex items-center justify-between align-middle">
        <div className="text-lg font-bold text-white">Welcome</div>
    </div>
);

export default MainContainer;
