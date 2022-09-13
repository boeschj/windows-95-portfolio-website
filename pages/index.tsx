import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import closeBtn from '../styles/closeBtn.png'
import Footer from '../components/footer/footer';
import NavMenu from '../components/footer/navMenu';
import Tabs from '../components/mainContainer/tabs';
import LinkButtons from '../components/mainContainer/linkButtons';
import { modalGradientBorders } from '../components/gradients/gradientStyles';
import GradientWrapper from '../components/gradients/gradientWrapper';
import { links } from '../config/ABOUT';

const Home: NextPage = (): JSX.Element => {
  const [tabSelected, setTabSelected] = useState(0);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const contentContainer: JSX.Element =
    (
      <div className="bg-windows-gray mx-auto h-fit md:h-[824px] w-full">
        <div className="bg-windows-blue px-1 flex items-center justify-between align-middle">
          <div className="text-lg font-bold text-white">
            Welcome
          </div>
          <Image src={closeBtn} width="20" height="20" />
        </div>

        <div className="flex flex-col p-5">
          <Tabs tabSelected={tabSelected} setTabSelected={setTabSelected} />
          <LinkButtons />
        </div>
      </div>
    );

  return (
    <div className="flex bg-windows-bg min-h-screen w-full flex-col justify-between content-center">
      <div className="flex bg-windows-bg w-full flex-col justify-center grow content-center">
        <GradientWrapper
          gradientBorders={modalGradientBorders}
          style={'mx-auto w-full md:w-10/12 mb-10'}>
          {contentContainer}
        </GradientWrapper>
      </div>
      <NavMenu showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu} setTabSelected={setTabSelected} links={links} />
      <Footer showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu} />
    </div>
  )
}

export default Home