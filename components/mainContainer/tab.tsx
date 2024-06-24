import { Dispatch, SetStateAction } from 'react';
import { tabGradientBorders } from '../gradients/gradientStyles';
import GradientWrapper from '../gradients/gradientWrapper';
import { cn } from '../../utils';

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
    const isTabSelected = tabSelected === tabNumber;
    return (
        <GradientWrapper
            className={cn(
                `bg-windows-gray w-[100px]`,
                isTabSelected ? 'mt-0 h-[38px]' : 'mt-[3px] h-[35px]'
            )}
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
