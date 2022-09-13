import React from "react";
import { skills } from "../../config/skills";
import ProgressBar from "./progressBar";

const SkillSummary: React.FC = (): JSX.Element => {

    return (
        <div className="min-w-full flex flex-col-reverse lg:flex-row justify-around mb-10">
            <div className="lg:w-1/2 content-center h-full mx-auto">
                <h2 className="text-center mx-auto text-3xl font-extrabold py-3 underline">
                    Skills Summary
                </h2>
                <span className="text-2xl text-center">
                    {skills.p1}
                </span>
            </div>
            <div className="flex-col space-y-2 w-[300px] h-full mx-auto py-10 lg:py-0">
                < ProgressBar skill={skills.topSkill1} level={skills.topSkill1_rating} />
                < ProgressBar skill={skills.topSkill2} level={skills.topSkill2_rating} />
                < ProgressBar skill={skills.topSkill3} level={skills.topSkill3_rating} />
            </div>
        </div>
    )
}

export default SkillSummary