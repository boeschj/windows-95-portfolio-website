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
                ` w-[100px] win95-border-tab rounded-t relative `,
                isTabSelected ? 'h-[38px]' : 'mt-[3px] h-[35px]'
            )}
        >
            <button
                className={cn(
                    'bg-windows-gray h-[30px] w-full',
                    isTabSelected &&
                        'after:content-[""] after:absolute after:left-[1px] after:right-0 after:bottom-[-3px] after:w-[98px] after:border-x-[1px] after:border-white after:h-[3px] after:bg-windows-gray after:z-30'
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
