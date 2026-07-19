import { getSiteSettings } from '@/data/siteSettings';
import { cn } from '@/utils';
import { LinkButton } from './LinkButton';

interface LinkButtonRowProps {
    className?: string;
}

export async function LinkButtonRow({ className }: LinkButtonRowProps) {
    const { githubUrl, linkedinUrl } = await getSiteSettings();

    return (
        <div
            className={cn(
                'flex flex-row items-end justify-end space-x-5 pb-2 md:p-0',
                className
            )}
        >
            <LinkButton profileUrl={githubUrl} text={'Github'} />
            <LinkButton profileUrl={linkedinUrl} text={'LinkedIn'} />
        </div>
    );
}
