import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { cn } from '../../../utils';

interface JobListItemProps {
    imageUrl: StaticImageData;
    jobName: string;
    jobTitle: string;
    jobUrl?: string;
    jobDescription: string;
    workSummary: string;
    datesWorked: string;
}

const JobListItem: React.FC<JobListItemProps> = (
    jobListItem: JobListItemProps
): JSX.Element => {
    return (
        <div className="flex flex-col space-y-5 grow py-5 w-full px-4 md:px-6 mx-auto">
            <div>
                <Image
                    src={jobListItem.imageUrl}
                    alt="company logo"
                    width="75"
                    height="75"
                    className={cn(jobListItem.jobUrl && 'cursor-pointer')}
                    onClick={() =>
                        jobListItem.jobUrl &&
                        window.open(
                            jobListItem.jobUrl,
                            '_blank',
                            'noopener,noreferrer'
                        )
                    }
                />
            </div>
            <div
                className={cn(
                    `text-3xl md:text-[50px] w-fit mx-auto font-extrabold leading-[50px]`,
                    jobListItem.jobUrl &&
                        'hover:text-windows-blue hover:underline cursor-pointer'
                )}
                onClick={() =>
                    jobListItem.jobUrl &&
                    window.open(
                        jobListItem.jobUrl,
                        '_blank',
                        'noopener,noreferrer'
                    )
                }
            >
                {jobListItem.jobName}
            </div>
            <div className={`font-bold`}>{jobListItem.jobTitle}</div>
            <div>{jobListItem.datesWorked}</div>
            <div>
                <div className="text-center">{jobListItem.jobDescription}</div>
                <br />
                <div className="text-center">{jobListItem.workSummary}</div>
            </div>
        </div>
    );
};

export default JobListItem;
