import type { NextPage } from 'next';
import Image from 'next/image';
import Modal from '../components/experience';
import { useState, useEffect, useRef } from 'react';
import win95 from '../styles/win_95.svg'
// import resumeLink from '../styles/jboeschResume2021.pdf'
import closeBtn from '../styles/closeBtn.png'
import About from '../components/about';
import GradientWrapper from '../components/gradientWrapper';
import Clock from '../components/clock';
import Experience from '../components/experience';
import Link from 'next/link';
import Skills from '../components/skills';

// interface ParentCompProps {
//   childComp: React.ReactNode,
//   style?: string,
//   gradientBorders: string[]
// }

interface IButtonSelectionType {
  github: boolean,
  linkedIn: boolean,
  resume: boolean,
}

const defaultButtonState: IButtonSelectionType = {
  github: false,
  linkedIn: false,
  resume: false,
}

const Home: NextPage = (): JSX.Element => {
  const [tabSelected, setTabSelected] = useState(0);
  const [buttonClicked, setButtonClicked] = useState<IButtonSelectionType>(defaultButtonState);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const tabComps: JSX.Element[] = [
    <About />,
    <Experience />,
    <Skills />
  ];

  useEffect(() => {
    setTimeout(() => {
      setButtonClicked(defaultButtonState)
    }, 400);
  }, [buttonClicked])

  const impactRef = useRef<HTMLDivElement>(null);

  const useOutsideClick = (ref: any, callback: any) => {
    useEffect(() => {
      const handleClickOutside = (evt: any) => {
        if (ref.current && !ref.current.contains(evt.target)) {
          callback(); //Do what you want to handle in the callback
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    });
  };

  useOutsideClick(impactRef, () => setShowNavMenu(false));

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

  const buttonClickedBorders = [
    'border border-l-pressed-l-1 border-r-pressed-r-1 border-t-pressed-t-1 border-b-pressed-b-1',
    'border border-l-pressed-l-2 border-r-pressed-r-2 border-t-pressed-t-2 border-b-windows-gray',
    'border border-l-windows-gray border-r-windows-gray border-t-pressed-t-3 border-b-windows-gray',
    'border border-l-windows-gray border-r-windows-gray border-t-pressed-t-4 border-b-windows-gray',
    'border border-l-windows-gray border-r-windows-gray border-t-pressed-t-5 border-b-windows-gray',
  ];

  const Footer: React.FC = () => {

    return (
      <div className='h-[35px] flex items-center justify-between'>
        <GradientWrapper style="h-8 w-24 text-center items-center flex" gradientBorders={showNavMenu ? buttonClickedBorders : modalGradientBorders} childComp={
          <div className="flex h-[28px] items-center space-x-2 px-1">
            <Image src={win95} alt="Win95" height="28" width="28" />
            <button
              onClick={() => setShowNavMenu(true)}
              className="font-[1100] text-lg tracking-wide">
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
      <div className="bg-windows-gray mx-auto h-fit md:h-[824px] w-full">
        <div className="bg-windows-blue px-1 flex items-center justify-between align-middle">
          <div className="text-lg font-bold text-white">
            Welcome
          </div>
          <Image src={closeBtn} width="20" height="20" />
        </div>

        <div className="flex flex-col p-5">
          <div className="flex flex-row">
            <GradientWrapper style={`bg-windows-gray h-[35px] w-[100px] ${tabSelected === 0 ? 'mt-0' : 'mt-[3px]'}`} gradientBorders={tabGradientBorders} childComp={
              <button className={'bg-windows-gray h-[30px] w-full'} onClick={() => setTabSelected(0)}>
                About Me
              </button>
            } />
            <GradientWrapper style={`bg-windows-gray h-[35px] w-[100px] ${tabSelected === 1 ? 'mt-0' : 'mt-[3px]'}`} gradientBorders={tabGradientBorders} childComp={
              <button className={'bg-windows-gray h-[30px] w-full'} onClick={() => setTabSelected(1)}>
                Experience
              </button>
            } />
            <GradientWrapper style={`bg-windows-gray h-[35px] w-[100px] ${tabSelected === 2 ? 'mt-0' : 'mt-[3px]'}`} gradientBorders={tabGradientBorders} childComp={
              <button className={'bg-windows-gray h-[30px] w-full'} onClick={() => setTabSelected(2)}>
                Skills
              </button>
            } />
          </div>
          <GradientWrapper style={'w-full'} gradientBorders={modalGradientBorders} childComp={
            <div>
              <div className="flex flex-row">
                <GradientWrapper style={`bg-windows-gray h-[10px] w-[97px] -mt-[9px] -ml-[4px] ${tabSelected === 0 ? '' : 'bg-opacity-0'}`} gradientBorders={coverTabGradientBorders} childComp={
                  < div className={'h-[10px] w-[95px]'} />
                }
                />
                <div className={`bg-windows-gray h-[10px] w-[100px] border border-windows-gray ml-[3px] ${tabSelected === 1 ? '-mt-[5px]' : 'mt-[5px]'}`} />
                <div className={`bg-windows-gray h-[10px] w-[100px] border border-windows-gray ${tabSelected === 2 ? '-mt-[5px]' : 'mt-[5px]'}`} />
              </div>
              <div className="h-full">
                {tabComps[tabSelected]}
              </div>
            </div>
          } />

          <div className="flex flex-row space-x-5 pt-5 justify-end">
            <GradientWrapper gradientBorders={buttonClicked.github ? buttonClickedBorders : modalGradientBorders} childComp={
              <button
                onClick={() => {
                  setButtonClicked({
                    ...buttonClicked,
                    github: true
                  })
                  // window.open('https://github.com/boeschj', '_blank', 'noopener,noreferrer')
                }}
                className={`${buttonClicked.github ? 'h-[28px]' : 'h-[30px]'} bg-windows-gray w-[150px] w-full`}>Github</button>
            } />
            <GradientWrapper gradientBorders={buttonClicked.linkedIn ? buttonClickedBorders : modalGradientBorders} childComp={
              <button
                onClick={() => {
                  setButtonClicked({
                    ...buttonClicked,
                    linkedIn: true
                  })
                  window.open('https://www.linkedin.com/in/jordan-boesch-39570b20b', '_blank', 'noopener,noreferrer')
                }}
                className={`${buttonClicked.linkedIn ? 'h-[28px] translate-y-[2px] translate-x-px' : 'h-[30px]'} bg-windows-gray w-[150px] w-full`}>LinkedIn</button>
            } />
            <GradientWrapper style="hidden md:flex" gradientBorders={buttonClicked.resume ? buttonClickedBorders : modalGradientBorders} childComp={
              <Link href='jboeschResume2021.pdf' target="_blank" download>
                <button onClick={() => setButtonClicked({
                  ...buttonClicked,
                  resume: true
                })}
                  className={`${buttonClicked.resume ? 'h-[28px] translate-y-[2px] translate-x-px' : 'h-[30px]'} bg-windows-gray w-[150px] w-full`}>Resume</button>
              </Link>
            } />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex bg-windows-bg min-h-screen w-full flex-col justify-between content-center">
      <div className="flex bg-windows-bg w-full flex-col justify-center grow content-center">
        <GradientWrapper childComp={
          <ContentContainer />
        }
          gradientBorders={modalGradientBorders}
          style={'mx-auto w-full md:w-10/12 mb-10'}
        />
      </div>

      <div className={`${showNavMenu ? `display-flex` : `hidden`} divide-y-2 divide-windows-gray bg-windows-gray flex flex-col w-72 h-fit absolute bottom-10 left-1`} ref={impactRef}>
        <GradientWrapper
          childComp={
            <ul className="divide-y-2 divide-windows-gray bg-windows-gray h-fit">
              <li className="hover:bg-windows-blue hover:text-white h-10 text-xl h-full flex w-full justify-center py-1 cursor-pointer">
                About Me
              </li>
              <li className="hover:bg-windows-blue hover:text-white h-10 text-xl h-full flex w-full justify-center py-1 cursor-pointer">
                Experience
              </li>
              <li className="hover:bg-windows-blue hover:text-white h-10 text-xl h-full flex w-full justify-center py-1 cursor-pointer">
                Skills
              </li>
              <li className="hover:bg-windows-blue hover:text-white h-10 text-xl h-full flex w-full justify-center py-1 cursor-pointer">
                Github
              </li>
              <li className="hover:bg-windows-blue hover:text-white h-10 text-xl h-full flex w-full justify-center py-1 cursor-pointer">
                LinkedIn
              </li>
              <li className="hover:bg-windows-blue hover:text-white h-10 text-xl h-full flex w-full justify-center py-1 cursor-pointer">
                Resume
              </li>
            </ul>
          }
          gradientBorders={modalGradientBorders}
        />
      </div>

      <GradientWrapper style='mx-auto w-full bg-windows-gray content-center' childComp={<div className='h-[35px] flex items-center justify-between'>
        <GradientWrapper style="h-8 w-24 text-center items-center flex" gradientBorders={showNavMenu ? buttonClickedBorders : modalGradientBorders} childComp={
          <button
            onClick={() => setShowNavMenu(!showNavMenu)
            }
            className="flex h-[28px] items-center space-x-2 px-1 font-[1100] text-lg tracking-wide">
            <Image src={win95} alt="Win95" height="28" width="28" />
            <div>
              Start
            </div>
          </button>
        } />
        <GradientWrapper style="w-auto h-8" gradientBorders={timeGradientBorders} childComp={
          < Clock />
        } />
      </div>} gradientBorders={footerGradientBorders} />
    </div>
  )
}

export default Home
