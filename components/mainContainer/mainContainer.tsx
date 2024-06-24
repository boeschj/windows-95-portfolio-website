import { Dispatch, SetStateAction } from 'react';
import LinkButtons from './linkButtons';
import TabContentWindow from './tabContentWindow';
import { modalGradientBorders } from '../gradients/gradientStyles';
import GradientWrapper from '../gradients/gradientWrapper';

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
        <div className="w95-modal">
            <Header />
            <div className="bg-windows-gray flex grow flex-col md:p-5">
                <TabContentWindow
                    tabSelected={tabSelected}
                    setTabSelected={setTabSelected}
                />
                <LinkButtons style="py-2 w-96 self-end" />
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
