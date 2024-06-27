import React from 'react';
import { ProgressBar } from './ProgressBar';
import { skills } from '../../../config/skills';

export const SkillSummary: React.FC = (): JSX.Element => {
    return (
        <div className="mb-10 flex flex-col-reverse justify-around lg:flex-row">
            <div className="h-full content-center lg:w-1/2">
                <h2 className="py-3 text-center text-xl font-extrabold underline sm:text-2xl md:text-3xl">
                    Skills Summary
                </h2>
                <div className="px-2 text-center text-lg sm:text-xl md:px-0 md:text-2xl">
                    {skills.p1}
                </div>
            </div>
            <div className="mx-auto h-full w-[300px] flex-col space-y-2 py-10 lg:py-0">
                <ProgressBar
                    skill={skills.topSkill1}
                    level={skills.topSkill1_rating}
                />
                <ProgressBar
                    skill={skills.topSkill2}
                    level={skills.topSkill2_rating}
                />
                <ProgressBar
                    skill={skills.topSkill3}
                    level={skills.topSkill3_rating}
                />
            </div>
        </div>
    );
};
