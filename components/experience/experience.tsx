import React from 'react';
import JobListItem from './JobListItem';
import { textAreaGradientBorder } from '../gradients/gradientStyles';
import GradientWrapper from '../gradients/gradientWrapper';
import { workHistory } from '../../config/experience';

const Experience: React.FC = (): JSX.Element => {
    const experienceContent = (
        <main className="xs:h-[500px] sm:h-[520px] overflow-y-auto content-start w-full bg-windows-white text-xl md:text-2xl tracking-wide text-center justify-around flex gap-10 px-5 md:px-0 md:p-5 overflow-auto flex-wrap">
            <ul className="divide-y-2 divide-black divide-dashed">
                <>
                    {workHistory.map((job: any, index: number) => {
                        return (
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
                        );
                    })}
                </>
            </ul>
        </main>
    );

    return (
        <>
            <div className="text-3xl md:text-[50px] pb-3 md:pb-0 md:mt-3 font-extrabold w-full text-center">
                My Work
            </div>
            <GradientWrapper
                style="w-full md:p-7"
                gradientBorders={textAreaGradientBorder}
            >
                {experienceContent}
            </GradientWrapper>
        </>
    );
};

export default Experience;
