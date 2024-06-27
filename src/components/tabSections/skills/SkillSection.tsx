import Image from 'next/image';
import { cn } from '../../../utils';

const IMAGE_SIZE_PX = 50;

interface Skill {
    name: string;
    src: string;
}

interface SkillSectionProps {
    title: string;
    skills: Skill[];
    type: 'lang' | 'tool';
}

export const SkillSection: React.FC<SkillSectionProps> = ({
    title,
    skills,
    type,
}) => {
    const isTool = type === 'tool';
    return (
        <div className={cn(isTool && 'mt-10')}>
            <h3 className="grow-1 mx-auto flex justify-center py-3 text-center text-2xl font-extrabold underline">
                {title}
            </h3>
            <div className="grid grid-cols-3 px-5 text-center lg:grid-cols-8">
                {skills.map((skill: Skill, index: number) => (
                    <div
                        className={cn(
                            `flex flex-col items-center justify-center p-1`,
                            isTool && 'first:my-auto first:mt-5'
                        )}
                        key={`${type}-${skill.name}-${index}`}
                    >
                        <Image
                            className="m-1"
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
