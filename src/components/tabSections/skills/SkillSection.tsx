import Image from 'next/image';
import { cn } from '../../../utils';
import { TechItem } from '../../../types/configTypes';

const IMAGE_SIZE_PX = 50;

interface SkillSectionProps {
    title: string;
    skills: TechItem[];
    className?: string;
}

export const SkillSection: React.FC<SkillSectionProps> = ({
    title,
    skills,
    className,
}) => {
    return (
        <div className={className}>
            <h3 className="grow-1 mx-auto flex justify-center py-3 text-center text-2xl font-extrabold underline">
                {title}
            </h3>
            <div className="grid grid-cols-3 px-5 text-center lg:grid-cols-8">
                {skills.map((skill: TechItem, index: number) => (
                    <div
                        className={cn(
                            `flex flex-col items-center justify-center p-1`,
                            skill.type === 'tool' && 'first:my-auto first:mt-5'
                        )}
                        key={`${skill.type}-${skill.name}-${index}`}
                    >
                        <Image
                            className="m-1"
                            src={skill.imageUrl}
                            key={`${skill.type}-${skill.name}-img-${index}`}
                            alt={`Tech icon`}
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
