import { textAreaGradientBorder } from '../pages';
import GradientWrapper from './gradientWrapper';

interface IJobListItemProps {
    skill: string,
    level: number
}

const ProgressBar: React.FC<IJobListItemProps> = ({ skill, level }: IJobListItemProps): JSX.Element => {

    const bar: JSX.Element = <div className="bg-windows-blue w-5 h-8" />;
    const progress: JSX.Element[] = [];

    for (let i = 0; i < level; i++) {
        progress.push(bar);
    }

    return (
        <div className="px-5">
            <div className="py-1 tracking-wide text-center text-2xl">
                {skill}
            </div>
            <GradientWrapper
                style="mx-auto w-[248px]"
                gradientBorders={textAreaGradientBorder}
                children={
                    <div className="flex flex-row space-x-1 p-[2px] w-[248px] mx-auto">
                        {progress}
                    </div>
                } />
        </div>
    )
}

export default ProgressBar;