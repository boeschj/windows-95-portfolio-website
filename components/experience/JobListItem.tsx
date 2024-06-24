import Image from 'next/image';
import React from 'react';

interface IJobListItemProps {
    imageUrl: any;
    jobName: string;
    jobTitle: string;
    jobUrl?: string;
    jobDescription: string;
    workSummary: string;
    datesWorked: string;
}

const JobListItem: React.FC<IJobListItemProps> = (
    jobListItem: IJobListItemProps
): JSX.Element => {
    return (
        <div className="flex flex-col space-y-5 grow py-5 w-full md:w-3/4 mx-auto">
            <div>
                <Image
                    src={jobListItem.imageUrl}
                    alt="test"
                    width="75"
                    height="75"
                    className={jobListItem.jobUrl ? 'cursor-pointer' : ''}
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
                className={`text-3xl md:text-[50px] w-fit mx-auto font-extrabold leading-[50px] ${
                    jobListItem.jobUrl
                        ? 'hover:text-windows-blue hover:underline cursor-pointer'
                        : ''
                }`}
                onClick={() =>
                    jobListItem.jobUrl
                        ? window.open(
                              jobListItem.jobUrl,
                              '_blank',
                              'noopener,noreferrer'
                          )
                        : ''
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
