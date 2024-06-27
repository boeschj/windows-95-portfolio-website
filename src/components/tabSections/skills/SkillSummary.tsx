import React from 'react';
import { ProgressBar } from './ProgressBar';
import { skills } from '../../../config/skills';

export const SkillSummary: React.FC = (): JSX.Element => {
    return (
        <div className="mb-10 flex flex-col-reverse justify-around lg:flex-row">
            <div className="h-full content-center lg:w-1/2">
                <h2 className=" py-3 text-center text-xl sm:text-2xl md:text-3xl font-extrabold underline">
                    Skills Summary
                </h2>
                <div className="text-center text-lg sm:text-xl md:text-2xl px-2 md:px-0">
                    {skills.p1}
                </div>
            </div>
            <div className="h-full w-[300px] flex-col space-y-2 py-10 lg:py-0 mx-auto">
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
