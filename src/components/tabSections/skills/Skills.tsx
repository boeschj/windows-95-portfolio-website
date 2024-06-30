import React from 'react';
import { TabContentLayout } from '../../welcomeView/TabContentLayout';
import { SkillSection } from './SkillSection';
import { SkillSummary } from './SkillSummary';
import { languages } from '../../../config/skills';

export const Skills: React.FC = (): JSX.Element => {
    return (
        <TabContentLayout className="flex grow overflow-auto bg-windows-gray px-0 md:px-5">
            <div className="flex h-full flex-col">
                <SkillSummary />
                <SkillSection
                    title="Top Languages/Frameworks"
                    skills={languages}
                />
                {/* TODO: Either redo the tooling section or just remove it-- don't want to advertise a bunch of tech I'm not actively using */}
                {/* <SkillSection
                    title="Tooling/Libraries"
                    skills={tools}
                    className="mt-10"
                /> */}
            </div>
        </TabContentLayout>
    );
};
