import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../../../utils';
import { WorkHistoryItem } from '../../../types/configTypes';

const IMAGE_SIZE_PX = 75;

interface JobListItemProps {
    job: WorkHistoryItem;
}

export const JobListItem = ({ job }: JobListItemProps): JSX.Element => {
    const {
        imageUrl,
        jobName,
        jobTitle,
        jobUrl,
        jobDescription,
        workSummary,
        datesWorked,
    } = job;

    const JobContent = () => (
        <div className="flex flex-col items-center justify-center gap-4">
            <Image
                src={imageUrl}
                alt="company logo"
                width={IMAGE_SIZE_PX}
                height={IMAGE_SIZE_PX}
                className={cn(
                    'h-auto w-14 md:w-[75px]',
                    jobUrl && 'cursor-pointer'
                )}
            />
            <div
                className={cn(
                    `mx-auto w-fit text-3xl font-extrabold leading-[50px] md:text-[50px]`,
                    jobUrl &&
                        'cursor-pointer hover:text-windows-blue hover:underline'
                )}
            >
                {jobName}
            </div>
        </div>
    );

    return (
        <div className="mx-auto flex w-full grow flex-col items-center justify-center space-y-5 px-4 py-5 md:px-6">
            {jobUrl ? (
                <Link href={jobUrl} target="_blank" rel="noopener noreferrer">
                    <JobContent />
                </Link>
            ) : (
                <JobContent />
            )}
            <div className="font-bold">{jobTitle}</div>
            <div>{datesWorked}</div>
            <div>
                <div className="text-center">{jobDescription}</div>
                <br />
                <div className="text-center">{workSummary}</div>
            </div>
        </div>
    );
};
