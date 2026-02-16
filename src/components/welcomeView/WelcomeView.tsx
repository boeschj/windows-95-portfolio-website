import { TabContentContainer } from './TabContentContainer';
import { LinkButtonRow } from '@/components/buttons/LinkButtonRow';
import { Header } from './Header';
import { About } from '@/components/tabSections/about/About';
import { Experience } from '@/components/tabSections/experience/Experience';
import { Skills } from '@/components/tabSections/skills/Skills';

export function WelcomeView() {
    return (
        <div className="win95-border-raised bg-windows-gray h-full pb-6">
            <Header />
            <div className="flex h-full grow flex-col justify-between gap-5 p-2 md:p-5">
                <TabContentContainer>
                    <About />
                    <Experience />
                    <Skills />
                </TabContentContainer>
                <LinkButtonRow />
            </div>
        </div>
    );
}
