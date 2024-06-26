import type { NextPage } from 'next';
import { useState } from 'react';
import { Footer } from '../components/footer/Footer';
import { NavMenuModal } from '../components/footer/NavMenuModal';
import { WelcomeView } from '../components/welcomeView/WelcomeView';
import { links } from '../config/aboutMe';

export async function generateMetadata({ params }: { params: { id: string } }) {
    const title = "Jordan's Portfolio Site";
    const description = "Jordan's portfolio site.";
    const creator = 'Jordan Boesch';

    return {
        title,
        description,
        creator,
        icons: {
            icon: 'favicon-32x32.png',
            shortcut: 'favicon-32x32.png',
            apple: 'apple-touch-icon.png',
            other: {
                rel: 'favicon-32x32.png',
                url: 'favicon-32x32.png',
            },
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            creator,
        },
        openGraph: {
            title,
            description,
            type: 'website',
            authors: [creator],
        },
    };
}

const HomePage: NextPage = (): JSX.Element => {
    const [tabSelected, setTabSelected] = useState(0);
    const [showNavMenu, setShowNavMenu] = useState(false);

    return (
        <div className="flex flex-col min-h-screen justify-center items-center w-full bg-windows-bg">
            <div className="flex grow flex-col md:p-12 h-36 items-center justify-center max-w-screen-2xl">
                <WelcomeView
                    tabSelected={tabSelected}
                    setTabSelected={setTabSelected}
                />
            </div>

            <div className="w-full pt-[35px]">
                <NavMenuModal
                    showNavMenu={showNavMenu}
                    setShowNavMenu={setShowNavMenu}
                    setTabSelected={setTabSelected}
                    links={links}
                />
                <Footer
                    showNavMenu={showNavMenu}
                    setShowNavMenu={setShowNavMenu}
                />
            </div>
        </div>
    );
};

export default HomePage;
