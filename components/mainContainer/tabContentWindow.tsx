import { Dispatch, SetStateAction } from 'react';
import About from '../about/about';
import Experience from '../experience/experience';
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
            </div>
            <div className="win95-border-raised">
                <div className="p-1 md:p-7">
                    <div className="text-3xl md:text-[50px] font-extrabold w-full text-center mb-2 md:mb-5">
                        My Work
                    </div>
                    <div className="win95-border-sunken">
                        {tabComponents[tabSelected]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabContentWindow;
