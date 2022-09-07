import type { NextPage } from 'next';
import Image from 'next/image';
import Modal from '../components/modal';
import Clock from 'react-live-clock';
import { useState, useEffect } from 'react';
// import '../styles/global.css'
// import 'tailwindcss/tailwind.css';

interface ParentCompProps {
  childComp: React.ReactNode,
  style?: string,
  gradientBorders: string[]
}

const Home: NextPage = (): JSX.Element => {


  //Would have been way easier to generate these dynamically, but sadly this doesn't work with tailwind: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  const modalGradientBorders = [
    'border border-t-modal-t-1 border-b-modal-b-1 border-l-modal-l-1 border-r-modal-r-1',
    'border border-t-modal-t-2 border-b-modal-b-2 border-l-modal-l-2 border-r-modal-r-2',
    'border border-t-modal-t-3 border-b-modal-b-3 border-l-modal-l-3 border-r-modal-r-3',
    'border border-t-modal-t-4 border-b-modal-b-4 border-l-modal-l-4 border-r-modal-r-4'
  ];

  const footerGradientBorders = [
    'border border-windows-gray border-t-footer-t-1',
    'border border-windows-gray border-t-footer-t-2',
    'border border-windows-gray border-t-footer-t-3',
    'border border-windows-gray border-t-footer-t-4'
  ];

  const buttonGradientBorders = [
    'border border-l-menu-btn-l-1 border-r-menu-btn-r-1 border-t-menu-btn-t-1 border-b-menu-btn-b-1',
    'border border-l-menu-btn-l-2 border-r-menu-btn-r-2 border-t-menu-btn-t-2 border-b-menu-btn-b-2',
    'border border-l-windows-gray border-r-menu-btn-r-3 border-t-windows-gray border-b-menu-btn-b-3',
    'border border-l-windows-gray border-r-menu-btn-r-4 border-t-windows-gray border-b-menu-btn-b-4',
  ];

  const timeGradientBorders = [
    'border border-l-time-l-1 border-r-time-r-1 border-t-time-t-1 border-b-time-b-1',
    'border border-l-time-l-2 border-r-time-r-2 border-t-time-t-2 border-b-time-b-2',
  ];

  const Footer: React.FC = () => {
    const [dateState, setDateState] = useState(new Date());
    // useEffect(() => {
    //   setInterval(() => setDateState(new Date()), 1000);
    // }, []);

    return (
      <div className='h-12 flex items-center justify-between'>
        <GradientWrapper style="w-24 text-center" gradientBorders={buttonGradientBorders} childComp={
          <button className="font-extrabold text-2xl">
            Start
          </button>

        } />
        <GradientWrapper style="w-auto h-10" gradientBorders={timeGradientBorders} childComp={
          <div className="h-10 text-center items-center text-lg grid content-center px-3">
            {dateState.toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: true,
            })}
          </div>
        } />
      </div>
    )
  }

  const WelcomeModal: React.FC = () => {
    return (
      <div className="bg-windows-gray mx-auto h-36">
        asdf
      </div>
    )
  }

  const GradientWrapper: React.FC<ParentCompProps> = ({ childComp, style, gradientBorders }): JSX.Element => {
    for (let i = 0; i < gradientBorders.length; i++) {
      childComp = (
        <div className={gradientBorders[i]}>
          {childComp}
        </div>
      )
    }

    return (
      style ?
        <div className={style}>
          {childComp}
        </div>
        :
        <>
          {childComp}
        </>
    )
  }

  return (
    <div className="flex bg-windows-bg min-h-screen w-full flex-col justify-between content-center">
      <div className="flex bg-windows-bg w-full flex-col justify-center grow content-center">

        {/* <Modal open={true} /> */}

        <GradientWrapper childComp={
          <WelcomeModal />

        }
          gradientBorders={modalGradientBorders}
          style={'2xl:container mb-10 bg-green-500'}
        />
      </div>

      <GradientWrapper style='mx-auto w-full bg-windows-gray content-center' childComp={<Footer />} gradientBorders={footerGradientBorders} />
    </div>
  )
}

export default Home
