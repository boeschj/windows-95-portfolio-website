import { useMemo } from 'react';
import { textAreaGradientBorder } from '../gradients/gradientStyles';
import GradientWrapper from '../gradients/gradientWrapper';

interface IJobListItemProps {
    skill: string;
    level: number;
}

const ProgressBar: React.FC<IJobListItemProps> = ({
    skill,
    level,
}): JSX.Element => {
    const progressBar = useMemo(() => {
        return Array.from({ length: level }).map((_, index) => {
            const bar: JSX.Element = (
                <div key={index} className="bg-windows-blue w-5 h-8" />
            );
            return bar;
        });
    }, [level]);

    return (
        <div className="px-5">
            <div className="py-1 tracking-wide text-center text-2xl">
                {skill}
            </div>
            <GradientWrapper
                className="mx-auto w-[248px]"
                gradientBorders={textAreaGradientBorder}
            >
                <div className="flex flex-row space-x-1 p-[2px] w-[248px] mx-auto">
                    {progressBar}
                </div>
            </GradientWrapper>
        </div>
    );
};

export default ProgressBar;
