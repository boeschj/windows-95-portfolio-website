import type { NextPage } from 'next';
import { useState } from 'react';
import Footer from '../components/footer/footer';
import NavMenuModal from '../components/footer/navMenuModal';
import MainContainer from '../components/mainContainer/mainContainer';
import { links } from '../config/aboutMe';

const HomePage: NextPage = (): JSX.Element => {
    const [tabSelected, setTabSelected] = useState(0);
    const [showNavMenu, setShowNavMenu] = useState(false);

    return (
        <div className="flex flex-col min-h-screen justify-center items-center w-full bg-windows-bg">
            <div className="flex grow flex-col md:p-12 h-36 items-center justify-center max-w-screen-2xl">
                <MainContainer
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
