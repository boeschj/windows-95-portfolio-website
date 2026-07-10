import { TabContentContainer } from './TabContentContainer';
import { LinkButtonRow } from '@/components/buttons/LinkButtonRow';
import { Header } from './Header';
import { About } from '@/components/tabSections/about/About';
import { Experience } from '@/components/tabSections/experience/Experience';
import { Skills } from '@/components/tabSections/skills/Skills';
import { Blog } from '@/components/tabSections/blog/Blog';

interface WelcomeViewProps {
    initialRoute: string | null;
}

export function WelcomeView({ initialRoute }: WelcomeViewProps) {
    return (
        <div className="win95-border-raised bg-windows-gray h-full w-full pb-6">
            <Header />
            <div className="flex h-full grow flex-col justify-between gap-5 p-2 md:p-5">
                <TabContentContainer
                    initialRoute={initialRoute}
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
