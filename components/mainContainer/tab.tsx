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
        // <GradientWrapper
        //     className={cn(
        //         `bg-windows-gray w-[100px]`,
        //         isTabSelected ? 'mt-0 h-[38px]' : 'mt-[3px] h-[35px]'
        //     )}
        //     gradientBorders={tabGradientBorders}
        // >
        <div
            className={cn(
                ` w-[100px] w95-tab rounded-t relative `,
                isTabSelected ? 'h-[38px]' : 'mt-[3px] h-[35px]'
            )}
        >
            <button
                className={cn(
                    'bg-windows-gray h-[30px] w-full',
                    isTabSelected &&
                        'after:content-[""] after:absolute after:left-[1px] after:right-0 after:bottom-[-3px] after:w-[98px] after:border-x-[1px] after:border-white after:h-[3px] after:bg-windows-gray after:z-30'
                )}
                onClick={() => setTabSelected(tabNumber)}
            >
                {text}
            </button>
        </div>
        // </GradientWrapper>
    );
};

export default Tab;
