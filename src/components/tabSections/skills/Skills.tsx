import { Win95ScrollArea } from '@/components/Win95ScrollArea';
import { TAG_CATEGORY_OPTIONS } from '@/collections/Tags';
import { getSkills, getTagsWithIcons } from '@/data/skills';
import { SkillSection } from './SkillSection';
import { SkillSummary } from './SkillSummary';

import type { Tag } from '@/payload-types';

const EMPTY_SKILLS_LABEL = 'Skills coming soon.';

export async function Skills() {
    const [skills, tagsWithIcons] = await Promise.all([
        getSkills(),
        getTagsWithIcons(),
    ]);
    const summary = skills.summary;
    const categoryGroups = groupTagsByCategory(tagsWithIcons);
    const isEmpty = !summary && categoryGroups.length === 0;

    return (
        <div className="bg-windows-gray flex min-h-0 flex-1 flex-col">
            <Win95ScrollArea viewportClassName="h-full w-full bg-white px-6 py-8 md:px-12 md:py-9">
                <div className="notepad-prose">
                    {summary && <SkillSummary summary={summary} />}
                    {categoryGroups.map((group) => (
                        <SkillSection
                            key={group.category}
                            title={group.label}
                            tags={group.tags}
                        />
                    ))}
                    {isEmpty && <p>{EMPTY_SKILLS_LABEL}</p>}
                </div>
            </Win95ScrollArea>
        </div>
    );
}

interface SkillCategoryGroup {
    category: Tag['category'];
    label: string;
    tags: Tag[];
}

function groupTagsByCategory(tags: Tag[]): SkillCategoryGroup[] {
    const allGroups = TAG_CATEGORY_OPTIONS.map((option) => ({
        category: option.value,
        label: option.label,
        tags: tags.filter((tag) => tag.category === option.value),
    }));
    const populatedGroups = allGroups.filter(hasTags);

    return populatedGroups;
}

function hasTags(group: SkillCategoryGroup): boolean {
    return group.tags.length > 0;
}
