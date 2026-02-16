import Image from 'next/image';
import { cn } from '@/utils';

import type { TechItem } from '@/types/configTypes';

const IMAGE_SIZE_PX = 50;

interface SkillSectionProps {
    title: string;
    skills: TechItem[];
    className?: string;
}

export function SkillSection({ title, skills, className }: SkillSectionProps) {
    return (
        <div className={className}>
            <h3 className="mx-auto flex grow justify-center py-3 text-center text-2xl font-extrabold underline">
                {title}
            </h3>
            <div className="grid grid-cols-3 px-5 text-center lg:grid-cols-8">
                {skills.map((skill) => (
                    <SkillIcon
                        key={`${skill.type}-${skill.name}`}
                        skill={skill}
                    />
                ))}
            </div>
        </div>
    );
}

interface SkillIconProps {
    skill: TechItem;
}

function SkillIcon({ skill }: SkillIconProps) {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center p-1',
                skill.type === 'tool' && 'first:my-auto first:mt-5'
            )}
        >
            <Image
                className="m-1"
                src={skill.imageUrl}
                alt={`${skill.name} icon`}
                width={IMAGE_SIZE_PX}
                height={IMAGE_SIZE_PX}
            />
            <div className="text-xl">{skill.name}</div>
        </div>
    );
}
