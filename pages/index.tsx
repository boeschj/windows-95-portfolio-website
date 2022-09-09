import type { NextPage } from 'next';
import Image from 'next/image';
import Modal from '../components/experience';
import { useState, useEffect } from 'react';
import win95 from '../styles/win_95.svg'
// import resumeLink from '../styles/jboeschResume2021.pdf'
import closeBtn from '../styles/closeBtn.png'
import About from '../components/about';
import GradientWrapper from '../components/gradientWrapper';
import Clock from '../components/clock';
import Experience from '../components/experience';
import Link from 'next/link';

// interface ParentCompProps {
//   childComp: React.ReactNode,
//   style?: string,
//   gradientBorders: string[]
// }

const Home: NextPage = (): JSX.Element => {


  //Would have been way easier to generate these dynamically, but sadly this doesn't work with tailwind: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  const modalGradientBorders = [
    'border border-t-modal-t-1 border-b-modal-b-1 border-l-modal-l-1 border-r-modal-r-1',
    'border border-t-modal-t-2 border-b-modal-b-2 border-l-modal-l-2 border-r-modal-r-2',
    'border border-t-modal-t-3 border-b-modal-b-3 border-l-modal-l-3 border-r-modal-r-3',
    'border border-t-modal-t-4 border-b-modal-b-4 border-l-modal-l-4 border-r-modal-r-4'
  ];

  const tabGradientBorders = [
    'border rounded-t border-b-windows-gray border-t-modal-t-1 border-l-modal-l-1 border-r-modal-r-1',
    'border rounded-t border-b-windows-gray border-t-modal-t-2 border-l-modal-l-2 border-r-modal-r-2',
    'border rounded-t border-b-windows-gray border-t-modal-t-3 border-l-modal-l-3 border-r-modal-r-3',
    'border rounded-t border-b-windows-gray border-t-modal-t-4 border-l-modal-l-4 border-r-modal-r-4'
  ];

  const coverTabGradientBorders = [
    'border-l border-modal-l-1',
    'border-l border-modal-l-2',
    'border-l border-modal-l-3',
    'border-l border-modal-l-4'
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

  const textAreaGradientBorder = [
    'border border-l-text-l-1 border-r-text-r-1 border-t-text-t-1 border-b-text-b-1',
    'border border-l-text-l-2 border-r-text-r-2 border-t-text-t-2 border-b-text-b-2',
    'border border-l-text-l-3 border-r-text-r-3 border-t-text-t-3 border-b-text-b-3',
    'border border-l-text-l-4 border-r-text-r-4 border-t-text-t-4 border-b-text-b-4',
  ];

  const Footer: React.FC = () => {

    return (
      <div className='h-[35px] flex items-center justify-between'>
        <GradientWrapper style="h-8 w-24 text-center items-center flex" gradientBorders={buttonGradientBorders} childComp={
          <div className="flex h-[28px] items-center space-x-2 px-1">
            <Image src={win95} alt="Win95" height="28" width="28" />
            <button className="font-[1100] text-lg tracking-wide">
              Start
            </button>
          </div>

        } />
        <GradientWrapper style="w-auto h-8" gradientBorders={timeGradientBorders} childComp={
          < Clock />
        } />
      </div>
    )
  }

  const ContentContainer: React.FC = () => {
    return (
      <div className="bg-windows-gray mx-auto h-[810px] w-full">
        <div className="bg-windows-blue px-1 flex items-center justify-between align-middle">
          <div className="text-lg font-bold text-white">
            Welcome
          </div>
          <Image src={closeBtn} width="20" height="20" />
        </div>

        <div className="flex flex-col p-5">
          <div className="flex flex-row">
            <GradientWrapper style={'bg-windows-gray h-[35px] w-[100px]'} gradientBorders={tabGradientBorders} childComp={
              <button className={'bg-windows-gray h-[30px] w-full'}>
                About Me
              </button>
            } />
            <GradientWrapper style={'bg-windows-gray h-[35px] w-[100px]'} gradientBorders={tabGradientBorders} childComp={
              <button className={'bg-windows-gray h-[30px] w-full'}>
                Experience
              </button>
            } />
            <GradientWrapper style={'bg-windows-gray h-[35px] w-[100px]'} gradientBorders={tabGradientBorders} childComp={
              <button className={'bg-windows-gray h-[30px] w-full'}>
                Skills
              </button>
            } />
          </div>
          <GradientWrapper style={'w-full'} gradientBorders={modalGradientBorders} childComp={
            <div>
              <div className="flex flex-row">
                <GradientWrapper style={'bg-windows-gray h-[10px] w-[100px] -mt-[4px] -ml-[4px]'} gradientBorders={coverTabGradientBorders} childComp={
                  <div className={'h-[10px] w-[95px]'} />
                }
                />
                <div className={'bg-windows-gray h-[10px] w-[97px] border border-windows-gray mt-[5px] -ml-[1px]'} />
                <div className={'bg-windows-gray h-[10px] w-[97px] border border-windows-gray mt-[5px] -ml-[1px]'} />
              </div>



              <div className="h-full">
                <Experience />
                {/* <div className="text-[50px] font-extrabold w-full text-center">
                  Hi, I'm Jordan 👋
                </div>

                < GradientWrapper
                  style="w-full p-7"
                  gradientBorders={textAreaGradientBorder}
                  childComp={
                    <main className="h-[500px] w-full bg-windows-white p-10 text-2xl tracking-wide text-center flex flex-col space-y-10 justify-center overflow-auto">
                    </main>
                  }
                />
                
                
                
                */}
                {/* <div className="text-[50px] font-extrabold w-full text-center">
                  Hi, I'm Jordan 👋
                </div>

                < GradientWrapper
                  style="w-full p-7"
                  gradientBorders={textAreaGradientBorder}
                  childComp={
                    < About />
                  }
                /> */}
              </div>
            </div>
          } />
        </div>
        <div className="float-right flex flex-row space-x-5 px-5">
          <GradientWrapper gradientBorders={modalGradientBorders} childComp={
            <button
              onClick={() => window.open('https://github.com/boeschj', '_blank', 'noopener,noreferrer')}
              className={'bg-windows-gray h-[30px] w-[150px] w-full'}>Github</button>
          } />
          <GradientWrapper gradientBorders={modalGradientBorders} childComp={
            <button
              onClick={() => window.open('https://www.linkedin.com/in/jordan-boesch-39570b20b', '_blank', 'noopener,noreferrer')}
              className={'bg-windows-gray h-[30px] w-[150px] w-full'}>LinkedIn</button>
          } />
          <GradientWrapper gradientBorders={modalGradientBorders} childComp={
            <Link href='jboeschResume2021.pdf' target="_blank" download>
              <button className={'bg-windows-gray h-[30px] w-[150px] w-full'}>Resume</button>
            </Link>
          } />
        </div>
      </div>
    )
  }

  // const GradientWrapper: React.FC<ParentCompProps> = ({ childComp, style, gradientBorders }): JSX.Element => {
  //   for (let i = 0; i < gradientBorders.length; i++) {
  //     childComp = (
  //       <div className={gradientBorders[i]}>
  //         {childComp}
  //       </div>
  //     )
  //   }

  //   return (
  //     style ?
  //       <div className={style}>
  //         {childComp}
  //       </div>
  //       :
  //       <>
  //         {childComp}
  //       </>
  //   )
  // }

  return (
    <div className="flex bg-windows-bg min-h-screen w-full flex-col justify-between content-center">
      <div className="flex bg-windows-bg w-full flex-col justify-center grow content-center">

        {/* <Modal open={true} /> */}

        <GradientWrapper childComp={
          <ContentContainer />

        }
          gradientBorders={modalGradientBorders}
          style={'mx-auto w-11/12 mb-10'}
        />
      </div>

      <GradientWrapper style='mx-auto w-full bg-windows-gray content-center' childComp={<Footer />} gradientBorders={footerGradientBorders} />
    </div>
  )
}

export default Home
