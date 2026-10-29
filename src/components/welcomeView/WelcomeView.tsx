import { TabContentContainer } from './TabContentContainer';
import { LinkButtonRow } from '@/components/buttons/LinkButtonRow';
import { Header } from './Header';
import { About } from '@/components/tabSections/about/About';
import { Experience } from '@/components/tabSections/experience/Experience';
import { Skills } from '@/components/tabSections/skills/Skills';
import { Blog } from '@/components/tabSections/blog/Blog';

export function WelcomeView() {
    return (
        <div className="win95-border-raised bg-windows-gray flex h-full w-full flex-col">
            <Header />
            <div className="flex min-h-0 flex-1 flex-col justify-between gap-5 p-2 md:p-5">
                <TabContentContainer
                    panels={{
                        about: <About />,
                        experience: <Experience />,
                        skills: <Skills />,
                        blog: <Blog />,
                    }}
                />
                <LinkButtonRow />
            </div>
        </div>
    );
}
