import React, { Dispatch, SetStateAction } from "react"
import Clock from "./clock";
import Image from 'next/image';
import win95 from '../../styles/win_95.svg';
import { footerGradientBorders, buttonClickedBorders, modalGradientBorders, timeGradientBorders } from "../gradients/gradientStyles";
import GradientWrapper from "../gradients/gradientWrapper";

interface IFooterProps {
    setShowNavMenu: Dispatch<SetStateAction<boolean>>,
    showNavMenu: boolean
}

const Footer: React.FC<IFooterProps> = ({ setShowNavMenu, showNavMenu }: IFooterProps): JSX.Element => {
    return (
        <GradientWrapper
            style='mx-auto w-full bg-windows-gray content-center'
            gradientBorders={footerGradientBorders}>
            <div className='h-[35px] flex items-center justify-between'>
                <GradientWrapper
                    style="h-8 w-24 text-center items-center flex"
                    gradientBorders={showNavMenu ? buttonClickedBorders : modalGradientBorders}>
                    <button
                        onClick={() => setShowNavMenu(!showNavMenu)
                        }
                        className="flex h-[28px] items-center space-x-2 px-1 font-[1100] text-lg tracking-wide">
                        <Image src={win95} alt="Win95" height="28" width="28" />
                        <div>
                            Start
                        </div>
                    </button>
                </GradientWrapper>
                <GradientWrapper
                    style="w-auto h-8"
                    gradientBorders={timeGradientBorders}>
                    < Clock />
                </GradientWrapper>
            </div>
        </GradientWrapper>
    )
}

export default Footer