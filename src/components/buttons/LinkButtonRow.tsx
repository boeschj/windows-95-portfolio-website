import { links } from '../../config/aboutMe';
import { cn } from '../../utils';
import { LinkButton } from './LinkButton';

interface LinkButtonRowProps {
    className?: string;
}

export const LinkButtonRow: React.FC<LinkButtonRowProps> = ({
    className,
}): JSX.Element => {
    return (
        <div
            className={cn(
                `flex flex-row space-x-5 items-end justify-end pb-2 md:p-0`,
                className
            )}
        >
            <LinkButton profileUrl={links.github} text={'Github'} />
            <LinkButton profileUrl={links.linkedIn} text={'LinkedIn'} />
        </div>
    );
};
