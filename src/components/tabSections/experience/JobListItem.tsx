import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils';

import type { WorkHistoryItem } from '@/types/configTypes';

const IMAGE_SIZE_PX = 75;

interface JobListItemProps {
    job: WorkHistoryItem;
}

export function JobListItem({ job }: JobListItemProps) {
    const {
        imageUrl,
        jobName,
        jobTitle,
        jobUrl,
        jobDescription,
        workSummary,
        datesWorked,
    } = job;

    const jobHeader = (
        <div className="flex flex-col items-center justify-center gap-4">
            <Image
                src={imageUrl}
                alt={`${jobName} company logo`}
                width={IMAGE_SIZE_PX}
                height={IMAGE_SIZE_PX}
                className={cn(
                    'h-auto w-14 md:w-[75px]',
                    jobUrl && 'cursor-pointer'
                )}
            />
            <div
                className={cn(
                    'mx-auto w-fit text-3xl leading-[50px] font-extrabold md:text-[50px]',
                    jobUrl &&
                        'hover:text-windows-blue cursor-pointer hover:underline'
                )}
            >
                {jobName}
            </div>
        </div>
    );

    return (
        <div className="mx-auto flex w-full grow flex-col items-center justify-center space-y-5 px-4 py-5 md:px-6">
            <div className="flex flex-col items-center gap-2">
                {jobUrl ? (
                    <Link
                        href={jobUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {jobHeader}
                    </Link>
                ) : (
                    jobHeader
                )}
                <div className="font-bold">{jobTitle}</div>
                <div>{datesWorked}</div>
            </div>
            <div>
                <div className="text-center">{jobDescription}</div>
                <br />
                <div className="text-center">{workSummary}</div>
            </div>
        </div>
    );
}
