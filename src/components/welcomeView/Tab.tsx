'use client';

import { cn } from '../../utils';
import { useAtom } from 'jotai';
import { tabSelectedAtom } from '../../store';

interface TabProps {
    text: string;
    tabNumber: number;
}

export const Tab: React.FC<TabProps> = ({ text, tabNumber }: TabProps) => {
    const [tabSelected, setTabSelected] = useAtom(tabSelectedAtom);
    const isTabSelected = tabSelected === tabNumber;
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
                    isTabSelected &&
                        'after:absolute after:bottom-[-4px] after:left-[1px] after:right-0 after:z-30 after:h-[4px] after:w-[98px] after:border-x-[1px] after:border-white after:bg-windows-gray after:content-[""]'
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
