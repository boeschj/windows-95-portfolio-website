import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../../../utils';

interface JobListItemProps {
    imageUrl: string;
    jobName: string;
    jobTitle: string;
    jobUrl?: string;
    jobDescription: string;
    workSummary: string;
    datesWorked: string;
}

export const JobListItem = ({
    imageUrl,
    jobName,
    jobTitle,
    jobUrl,
    jobDescription,
    workSummary,
    datesWorked,
}: JobListItemProps): JSX.Element => {
    const JobContent = () => (
        <div className="flex flex-col items-center justify-center gap-4">
            <Image
                src={imageUrl}
                alt="company logo"
                width={75}
                height={75}
                className={cn(
                    'w-14 h-auto md:w-[75px]',
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
