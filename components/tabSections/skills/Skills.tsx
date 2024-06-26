import React from 'react';
import { languages, libraries } from '../../../config/skills';
import { TabContentLayout } from '../../welcomeView/TabContentLayout';
import { SkillSection } from './SkillSection';
import { SkillSummary } from './SkillSummary';

const IMAGE_SIZE_PX = 50;

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
