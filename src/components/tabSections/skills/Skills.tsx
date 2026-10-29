import { Win95ScrollArea } from '@/components/Win95ScrollArea';
import { getSkills, getTagsWithIcons } from '@/data/skills';
import { SkillSection } from './SkillSection';
import { SkillSummary } from './SkillSummary';

const SKILL_ICONS_TITLE = 'Top Languages/Frameworks';
const EMPTY_SKILLS_LABEL = 'Skills coming soon.';

export async function Skills() {
    const [skills, tagsWithIcons] = await Promise.all([
        getSkills(),
        getTagsWithIcons(),
    ]);
    const summary = skills.summary;
    const hasSkillIcons = tagsWithIcons.length > 0;
    const isEmpty = !summary && !hasSkillIcons;

    return (
        <div className="bg-windows-gray flex min-h-0 flex-1 flex-col">
            <Win95ScrollArea viewportClassName="h-full w-full bg-white px-6 py-8 md:px-12 md:py-9">
                <div className="notepad-prose">
                    {summary && <SkillSummary summary={summary} />}
                    {hasSkillIcons && (
                        <SkillSection
                            title={SKILL_ICONS_TITLE}
                            tags={tagsWithIcons}
                        />
                    )}
                    {isEmpty && <p>{EMPTY_SKILLS_LABEL}</p>}
                </div>
            </Win95ScrollArea>
        </div>
    );
}
