import type { NextPage } from 'next';
import { useState } from 'react';
import Footer from '../components/footer/footer';
import NavMenu from '../components/footer/navMenu';
import { modalGradientBorders } from '../components/gradients/gradientStyles';
import GradientWrapper from '../components/gradients/gradientWrapper';
import { links } from '../config/aboutMe';
import MainContainer from '../components/mainContainer/mainContainer';

const HomePage: NextPage = (): JSX.Element => {
    const [tabSelected, setTabSelected] = useState(0);
    const [showNavMenu, setShowNavMenu] = useState(false);

    return (
        <div className="flex bg-windows-bg min-h-screen w-full flex-col justify-between content-center">
            <div className="flex bg-windows-bg w-full flex-col justify-center grow content-center">
                <GradientWrapper
                    gradientBorders={modalGradientBorders}
                    style={'mx-auto w-full md:w-10/12 md:mb-10'}
                >
                    <MainContainer
                        tabSelected={tabSelected}
                        setTabSelected={setTabSelected}
                    />
                </GradientWrapper>
            </div>
            <NavMenu
                showNavMenu={showNavMenu}
                setShowNavMenu={setShowNavMenu}
                setTabSelected={setTabSelected}
                links={links}
            />
            <Footer showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu} />
        </div>
    );
};

export default HomePage;
