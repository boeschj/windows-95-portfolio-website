import React from 'react';
import { TabContentLayout } from '../../welcomeView/TabContentLayout';
import { SkillSection } from './SkillSection';
import { SkillSummary } from './SkillSummary';
import { languages, libraries } from '../../../config/skills';

export const Skills: React.FC = (): JSX.Element => {
    return (
        <TabContentLayout className="flex grow overflow-auto bg-windows-gray px-0 md:px-5">
            <div className="flex h-screen flex-col">
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
