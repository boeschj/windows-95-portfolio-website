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
        <div className="flex flex-col justify-center items-center gap-4">
            <Image
                src={imageUrl}
                alt="company logo"
                width={75}
                height={75}
                className={cn(jobUrl && 'cursor-pointer')}
            />
            <div
                className={cn(
                    `text-3xl md:text-[50px] w-fit mx-auto font-extrabold leading-[50px]`,
                    jobUrl &&
                        'hover:text-windows-blue hover:underline cursor-pointer'
                )}
            >
                {jobName}
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-center justify-center space-y-5 grow py-5 w-full px-4 md:px-6 mx-auto">
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
