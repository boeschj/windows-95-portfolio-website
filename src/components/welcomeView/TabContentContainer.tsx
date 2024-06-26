import React from 'react';
import { Tab } from './Tab';
import { TAB_CONFIG } from '../../config/main';

interface TabContentContainer {
    tabSelected: number;
    setTabSelected: React.Dispatch<React.SetStateAction<number>>;
}

export const TabContentContainer: React.FC<TabContentContainer> = ({
    tabSelected,
    setTabSelected,
}) => {
    const ActiveComponent = TAB_CONFIG[tabSelected].component;

    return (
        <div className="flex flex-col h-[calc(100%-90px)]">
            <div className="flex flex-row">
                {TAB_CONFIG.map((tab, index) => (
                    <Tab
                        key={index}
                        tabSelected={tabSelected}
                        setTabSelected={setTabSelected}
                        text={tab.text}
                        tabNumber={index}
                    />
                ))}
            </div>
            <div className="win95-border-raised p-4 md:p-6 flex flex-col h-full">
                <h1 className="text-3xl md:text-[50px] h-10 font-extrabold w-full text-center mb-2 md:mb-5">
                    {TAB_CONFIG[tabSelected].title}
                </h1>
                <div className="win95-border-sunken flex flex-col h-[calc(100%-40px)] md:h-[calc(100%-60px)]">
                    <ActiveComponent />
                </div>
            </div>
        </div>
    );
};
