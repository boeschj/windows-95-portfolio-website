import React from 'react';
import Image, { StaticImageData } from 'next/image';
import SkillSummary from './skillSummary';
import { textAreaGradientBorder } from '../gradients/gradientStyles';
import GradientWrapper from '../gradients/gradientWrapper';
import { languages, libraries } from '../../config/skills';

interface ISkill {
    name: string;
    src: StaticImageData | any;
}

const Skills: React.FC = (): JSX.Element => {
    const languageSkills: JSX.Element = (
        <>
            <h3 className="text-center mx-auto grow-1 flex justify-center text-2xl font-extrabold py-3 underline">
                Languages/Frameworks
            </h3>
            <div className="px-5 text-center grid grid-cols-3 lg:grid-cols-8">
                <>
                    {languages.map((skill: ISkill, index: number) => {
                        return (
                            <div className="p-1" key={index}>
                                <Image
                                    src={skill.src}
                                    key={index}
                                    alt=""
                                    width="50"
                                    height="50"
                                />
                                <div className="text-xl">{skill.name}</div>
                            </div>
                        );
                    })}
                </>
            </div>
        </>
    );

    const toolSkills: JSX.Element = (
        <div className="mt-10">
            <h3 className="text-center mx-auto grow-1 flex justify-center text-2xl font-extrabold py-3 underline">
                Tools/Libraries
            </h3>
            <div className="px-5 text-center grid grid-cols-3 lg:grid-cols-8 py-1 space-y-5">
                <>
                    {libraries.map((skill: ISkill, index: number) => {
                        return (
                            <div
                                className={`p-1 ${
                                    index === 0 ? 'my-auto mt-5' : ''
                                }`}
                                key={index}
                            >
                                <Image
                                    src={skill.src}
                                    key={index}
                                    alt=""
                                    width="50"
                                    height="50"
                                />
                                <div className="text-xl">{skill.name}</div>
                            </div>
                        );
                    })}
                </>
            </div>
        </div>
    );

    return (
        <>
            <div className="text-3xl pb-3 md:pb-0 md:mt-3 md:text-[50px] font-extrabold w-full text-center">
                My Skills
            </div>
            <GradientWrapper
                style="w-full md:p-7"
                gradientBorders={textAreaGradientBorder}
            >
                <main className="xs:h-[500px] sm:h-[520px] overflow-y-auto w-full bg-windows-gray flex px-5 md:px-0 md:p-5 flex-wrap flex-row overflow-y-auto overflow-x-clip flex-initial w-42">
                    <div className="grow">
                        <SkillSummary />
                        {languageSkills}
                        {toolSkills}
                    </div>
                </main>
            </GradientWrapper>
        </>
    );
};

export default Skills;
