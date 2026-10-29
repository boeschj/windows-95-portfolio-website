import Image from 'next/image';
import { resolveMedia } from '@/data/media';

import type { Tag } from '@/payload-types';

const ICON_SIZE_PX = 48;

interface SkillSectionProps {
    title: string;
    tags: Tag[];
}

export function SkillSection({ title, tags }: SkillSectionProps) {
    return (
        <>
            <h2>{title}</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] gap-x-2 gap-y-6 pt-2">
                {tags.map((tag) => (
                    <SkillIcon key={tag.id} tag={tag} />
                ))}
            </div>
        </>
    );
}

interface SkillIconProps {
    tag: Tag;
}

function SkillIcon({ tag }: SkillIconProps) {
    const icon = resolveMedia(tag.icon);

    if (!icon.url) {
        return null;
    }

    return (
        <div className="flex flex-col items-center gap-2 text-center">
            <Image
                src={icon.url}
                alt=""
                width={ICON_SIZE_PX}
                height={ICON_SIZE_PX}
                className="size-12 object-contain"
            />
            <span className="text-lg leading-tight">{tag.name}</span>
        </div>
    );
}
