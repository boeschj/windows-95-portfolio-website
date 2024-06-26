import React from 'react';
import { TabContentLayout } from '../../welcomeView/TabContentLayout';
import { workHistory } from '../../../config/experience';
import { JobListItem } from './JobListItem';

export const Experience: React.FC = (): JSX.Element => {
    return (
        <TabContentLayout className="content-start text-xl md:text-2xl tracking-wide text-center justify-around flex gap-10 overflow-auto flex-wrap">
            <ul className="divide-y-2 divide-black divide-dashed h-screen">
                {workHistory.map((job, index) => (
                    <li key={index}>
                        <JobListItem
                            imageUrl={job.imageUrl}
                            jobName={job.jobName}
                            jobTitle={job.jobTitle}
                            jobUrl={job.jobUrl}
                            jobDescription={job.jobDescription}
                            workSummary={job.workSummary}
                            datesWorked={job.datesWorked}
                        />
                    </li>
                ))}
            </ul>
        </TabContentLayout>
    );
};
