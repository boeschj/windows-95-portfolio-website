import { Dispatch, SetStateAction } from 'react';
import LinkButtons from './linkButtons';
import Tabs from './tabs';

interface IMainContainerProps {
    tabSelected: number;
    setTabSelected: Dispatch<SetStateAction<number>>;
}

const MainContainer: React.FC<IMainContainerProps> = ({
    tabSelected,
    setTabSelected,
}: IMainContainerProps): JSX.Element => {
    return (
        <div className="bg-windows-gray mx-auto h-fit w-full">
            <div className="bg-windows-blue px-1 flex items-center justify-between align-middle">
                <div className="text-lg font-bold text-white">Welcome</div>
            </div>

            <div className="flex flex-col p-5">
                <Tabs
                    tabSelected={tabSelected}
                    setTabSelected={setTabSelected}
                />
                <LinkButtons />
            </div>
        </div>
    );
};

export default MainContainer;
