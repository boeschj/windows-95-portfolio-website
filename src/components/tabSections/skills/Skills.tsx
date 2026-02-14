import { TabContentLayout } from '@/components/welcomeView/TabContentLayout';
import { SkillSection } from './SkillSection';
import { SkillSummary } from './SkillSummary';
import { languages } from '@/config/skills';

export function Skills() {
    return (
        <TabContentLayout className="bg-windows-gray flex grow overflow-auto px-0 md:px-5">
            <div className="flex h-full flex-col">
                <SkillSummary />
                <SkillSection
                    title="Top Languages/Frameworks"
                    skills={languages}
                />
            </div>
        </TabContentLayout>
    );
}
