'use client';

import { cn } from '../../utils';
import { useAtom } from 'jotai';
import { tabSelectedAtom } from '../../store';
import { TabKey } from '../../types/application.types';

interface TabProps {
    text: string;
    tabNumber: TabKey;
}

export const Tab: React.FC<TabProps> = ({ text, tabNumber }: TabProps) => {
    const [tabSelected, setTabSelected] = useAtom(tabSelectedAtom);
    const isTabSelected = tabSelected === tabNumber;

    const activeTabBottomBorderCover = `
    after:absolute 
    after:bottom-[-4px] 
    after:left-[1px] 
    after:right-0 
    after:z-30 
    after:h-[4px] 
    after:w-[98px] 
    after:border-x-[1px] 
    after:border-white 
    after:bg-windows-gray 
    after:content-[""]
    `;

    return (
        <div
            className={cn(
                `win95-border-tab relative w-[100px] rounded-t`,
                isTabSelected ? 'h-[38px]' : 'mt-[3px] h-[35px]'
            )}
        >
            <button
                className={cn(
                    'h-[30px] w-full bg-windows-gray',
                    isTabSelected && activeTabBottomBorderCover
                )}
                onClick={() => {
                    setTabSelected(tabNumber);
                }}
            >
                {text}
            </button>
        </div>
    );
};
