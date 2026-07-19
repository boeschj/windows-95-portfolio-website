import { getSiteSettings } from '@/data/siteSettings';
import { Clock } from './Clock';
import { StartMenu } from './StartMenu';

interface FooterProps {
    children?: React.ReactNode;
}

export async function Footer({ children }: FooterProps) {
    const { githubUrl, linkedinUrl } = await getSiteSettings();

    return (
        <div className="bg-windows-gray fixed bottom-0 mx-auto hidden w-full content-center md:grid">
            <div className="win95-border-top">
                <div className="h-taskbar-height flex items-center justify-between gap-1.5">
                    <StartMenu
                        githubUrl={githubUrl}
                        linkedinUrl={linkedinUrl}
                    />
                    {children}
                    <div className="win95-border-sunken-light ml-auto">
                        <Clock />
                    </div>
                </div>
            </div>
        </div>
    );
}
