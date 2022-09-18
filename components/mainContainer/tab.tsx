import { Dispatch, SetStateAction } from 'react';
import { tabGradientBorders } from '../gradients/gradientStyles';
import GradientWrapper from '../gradients/gradientWrapper';

interface ITabProps {
    tabSelected: number;
    setTabSelected: Dispatch<SetStateAction<number>>;
    text: string;
    tabNumber: number;
}

const Tab: React.FC<ITabProps> = ({
    tabSelected,
    setTabSelected,
    text,
    tabNumber,
}: ITabProps) => {
    return (
        <GradientWrapper
            style={`bg-windows-gray h-[35px] w-[100px] ${
                tabSelected === tabNumber ? 'mt-0' : 'mt-[3px]'
            }`}
            gradientBorders={tabGradientBorders}
        >
            <button
                className={'bg-windows-gray h-[30px] w-full'}
                onClick={() => setTabSelected(tabNumber)}
            >
                {text}
            </button>
        </GradientWrapper>
    );
};

export default Tab;
