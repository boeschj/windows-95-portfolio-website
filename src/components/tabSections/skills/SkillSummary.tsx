import { ProgressBar } from './ProgressBar';
import { skillSummarySection } from '@/config/skills';

export function SkillSummary() {
    return (
        <div className="mb-10 flex flex-col-reverse items-center justify-around lg:flex-row">
            <div className="h-full content-center lg:w-1/2">
                <h2 className="py-3 text-center text-xl font-extrabold underline sm:text-2xl md:text-3xl">
                    Skills Summary
                </h2>
                <div className="px-2 text-center text-lg sm:text-xl md:px-0 md:text-2xl">
                    {skillSummarySection.summary}
                </div>
            </div>
            <div className="h-full w-[300px] space-y-2 py-10 lg:py-0">
                {skillSummarySection.skillLevels.map((skillLevel, index) => (
                    <ProgressBar
                        key={index}
                        skill={skillLevel.skill}
                        level={skillLevel.level}
                    />
                ))}
            </div>
        </div>
    );
}
