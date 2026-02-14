import { links } from '@/config/aboutMe';
import { cn } from '@/utils';
import { LinkButton } from './LinkButton';

interface LinkButtonRowProps {
    className?: string;
}

export function LinkButtonRow({ className }: LinkButtonRowProps) {
    return (
        <div
            className={cn(
                'flex flex-row items-end justify-end space-x-5 pb-2 md:p-0',
                className
            )}
        >
            <LinkButton profileUrl={links.github} text={'Github'} />
            <LinkButton profileUrl={links.linkedIn} text={'LinkedIn'} />
        </div>
    );
}
