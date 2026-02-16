import { Progress } from '@base-ui/react/progress';

import type { SkillLevelRange } from '@/types/configTypes';

const MAX_SKILL_LEVEL = 10;
const PROGRESS_BAR_WIDTH_PX = 248;

interface ProgressBarProps {
    skill: string;
    level: SkillLevelRange;
}

export function ProgressBar({ skill, level }: ProgressBarProps) {
    const percentage = (level / MAX_SKILL_LEVEL) * 100;

    return (
        <Progress.Root
            value={percentage}
            aria-label={`${skill} skill level: ${level} out of ${MAX_SKILL_LEVEL}`}
            className="md:px-5"
        >
            <Progress.Label className="block py-1 text-center text-lg tracking-wide sm:text-xl md:text-2xl">
                {skill}
            </Progress.Label>
            <Progress.Track
                className="win95-border-sunken mx-auto"
                style={{ width: PROGRESS_BAR_WIDTH_PX }}
            >
                <Progress.Indicator className="flex flex-row space-x-1 p-[2px]">
                    {Array.from({ length: level }).map((_, index) => (
                        <div key={index} className="bg-windows-blue h-8 w-5" />
                    ))}
                </Progress.Indicator>
            </Progress.Track>
        </Progress.Root>
    );
}
