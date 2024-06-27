'use client';

import React from 'react';
import { Tab } from './Tab';
import { TAB_CONFIG } from '../../config/main';
import { useAtom } from 'jotai';
import { tabSelectedAtom } from '../../store';

export const TabContentContainer: React.FC = () => {
    const [tabSelected] = useAtom(tabSelectedAtom);
    const ActiveComponent = TAB_CONFIG[tabSelected].component;

    return (
        <div className="flex h-[calc(100%-90px)] flex-col">
            <div className="flex flex-row">
                {TAB_CONFIG.map((tab, index) => (
                    <Tab key={index} text={tab.text} tabNumber={index} />
                ))}
            </div>
            <div className="win95-border-raised flex h-full flex-col p-4 md:p-6">
                <h1 className="mb-2 h-10 w-full text-center text-3xl font-extrabold md:mb-5 md:text-[50px]">
                    {TAB_CONFIG[tabSelected].title}
                </h1>
                <div className="win95-border-sunken flex h-[calc(100%-40px)] flex-col md:h-[calc(100%-60px)]">
                    <ActiveComponent />
                </div>
            </div>
        </div>
    );
};
