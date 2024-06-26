import React from 'react';
import { TabContentLayout } from '../../welcomeView/TabContentLayout';
import { SkillSection } from './SkillSection';
import { SkillSummary } from './SkillSummary';
import { languages, libraries } from '../../../config/skills';

export const Skills: React.FC = (): JSX.Element => {
    return (
        <TabContentLayout className="bg-windows-gray flex grow overflow-auto">
            <div className="flex flex-col h-screen">
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
