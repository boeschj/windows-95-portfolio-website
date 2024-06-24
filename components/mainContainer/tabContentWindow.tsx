import { Dispatch, SetStateAction } from 'react';
import About from '../about/about';
import Experience from '../experience/experience';
import {
    coverTabGradientBorders,
    modalGradientBorders,
    textAreaGradientBorder,
} from '../gradients/gradientStyles';
import GradientWrapper from '../gradients/gradientWrapper';
import Skills from '../skills/skills';
import Tab from './tab';

interface ITabsProps {
    tabSelected: number;
    setTabSelected: Dispatch<SetStateAction<number>>;
}

const TabContentWindow: React.FC<ITabsProps> = ({
    tabSelected,
    setTabSelected,
}: ITabsProps): JSX.Element => {
    const tabComponents: JSX.Element[] = [
        <About key={1} />,
        <Experience key={2} />,
        <Skills key={3} />,
    ];

    const tabBorderCovers: JSX.Element = (
        <div className="flex flex-row absolute -bottom-5 left-1">
            <GradientWrapper
                className={`bg-windows-gray h-[10px] w-[97px] -mt-[11px] -ml-[4px] ${
                    tabSelected === 0 ? '' : 'bg-opacity-0'
                }`}
                gradientBorders={coverTabGradientBorders}
                children={<div className={'h-[10px] w-[95px]'} />}
            />
            <div
                className={`bg-windows-gray h-[10px] w-[100px] border border-windows-gray ml-[3px] ${
                    tabSelected === 1 ? '-mt-[5px]' : 'mt-[5px]'
                }`}
            />
            <div
                className={`bg-windows-gray h-[10px] w-[100px] border border-windows-gray ${
                    tabSelected === 2 ? '-mt-[5px]' : 'mt-[5px]'
                }`}
            />
        </div>
    );

    return (
        <div className="flex grow flex-col">
            <div className="flex flex-row relative">
                <Tab
                    tabSelected={tabSelected}
                    setTabSelected={setTabSelected}
                    text={'About Me'}
                    tabNumber={0}
                />
                <Tab
                    tabSelected={tabSelected}
                    setTabSelected={setTabSelected}
                    text={'Experience'}
                    tabNumber={1}
                />
                <Tab
                    tabSelected={tabSelected}
                    setTabSelected={setTabSelected}
                    text={'Skills'}
                    tabNumber={2}
                />
                {tabBorderCovers}
            </div>
            <GradientWrapper
                containerClassName="flex flex-grow flex-col"
                gradientBorders={modalGradientBorders}
            >
                <div className="p-1 md:p-7">
                    <div className="text-3xl md:text-[50px] font-extrabold w-full text-center mb-2 md:mb-5">
                        My Work
                    </div>
                    <GradientWrapper
                        className="flex grow flex-col h-full"
                        containerClassName="flex flex-grow flex-col"
                        gradientBorders={textAreaGradientBorder}
                    >
                        {tabComponents[tabSelected]}
                    </GradientWrapper>
                </div>
            </GradientWrapper>
        </div>
    );
};

export default TabContentWindow;
