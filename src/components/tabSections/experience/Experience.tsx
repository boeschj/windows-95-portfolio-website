import React from 'react';
import { TabContentLayout } from '../../welcomeView/TabContentLayout';
import { workHistory } from '../../../config/experience';
import { JobListItem } from './JobListItem';

export const Experience: React.FC = (): JSX.Element => {
    return (
        <TabContentLayout className="flex flex-wrap content-start justify-around gap-10 overflow-auto text-center text-xl tracking-wide md:text-2xl">
            <ul className="h-screen divide-y-2 divide-dashed divide-black">
                {workHistory.map((job, index) => (
                    <li key={index}>
                        <JobListItem job={job} />
                    </li>
                ))}
            </ul>
        </TabContentLayout>
    );
};
