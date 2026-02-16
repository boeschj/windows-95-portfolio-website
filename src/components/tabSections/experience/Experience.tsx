import { TabContentLayout } from '@/components/welcomeView/TabContentLayout';
import { workHistory } from '@/config/experience';
import { JobListItem } from './JobListItem';

export function Experience() {
    return (
        <TabContentLayout className="flex flex-wrap content-start justify-around gap-10 overflow-auto text-center text-xl tracking-wide md:text-2xl">
            <ul className="h-screen divide-y-2 divide-dashed divide-black">
                {workHistory.map((job) => (
                    <li key={job.jobName}>
                        <JobListItem job={job} />
                    </li>
                ))}
            </ul>
        </TabContentLayout>
    );
}
