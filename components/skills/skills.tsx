import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { languages, libraries } from '../../config/skills';
import SkillSummary from './skillSummary';
import TabContentLayout from '../mainContainer/tabContentLayout';
import { cn } from '../../utils';

const IMAGE_SIZE_PX = 50;

interface Skill {
    name: string;
    src: StaticImageData;
}

interface SkillSectionProps {
    title: string;
    skills: Skill[];
    type: 'lang' | 'tool';
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills, type }) => {
    const isTool = type === 'tool';
    return (
        <div className={cn(isTool && 'mt-10')}>
            <h3 className="text-center mx-auto grow-1 flex justify-center text-2xl font-extrabold py-3 underline">
                {title}
            </h3>
            <div className="px-5 text-center grid grid-cols-3 lg:grid-cols-8">
                {skills.map((skill: Skill, index: number) => (
                    <div
                        className={cn(
                            `p-1`,
                            isTool && 'first:my-auto first:mt-5'
                        )}
                        key={`${type}-${skill.name}-${index}`}
                    >
                        <Image
                            src={skill.src}
                            key={`${type}-${skill.name}-img-${index}`}
                            alt={`${
                                type === 'lang' ? 'technology' : 'library'
                            } icon`}
                            width={IMAGE_SIZE_PX}
                            height={IMAGE_SIZE_PX}
                        />
                        <div className="text-xl">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills: React.FC = (): JSX.Element => {
    return (
        <TabContentLayout className="bg-windows-gray">
            <div className="grow">
                <SkillSummary />
                <SkillSection
                    title="Languages/Frameworks"
                    skills={languages}
                    type="lang"
                />
                <SkillSection
                    title="Tools/Libraries"
                    skills={libraries}
                    type="tool"
                />
            </div>
        </TabContentLayout>
    );
};

export default Skills;
