import React from "react";
import { aboutConfig } from "../../config/aboutMe";
import { modalGradientBorders, textAreaGradientBorder } from "../gradients/gradientStyles";
import GradientWrapper from "../gradients/gradientWrapper";
import devPhoto from "../../styles/assets/portfolioPhoto.png";
import Image from 'next/image';

const About: React.FC = (): JSX.Element => {

    const content: JSX.Element =
        (
            <main className="h-[370px] xs:h-[520px] overflow-y-auto w-full bg-windows-white p-2 md:p-5 lg:p-10 text-xl md:text-2xl tracking-wide text-center flex flex-row py-5 space-y-10 justify-center flex-wrap">
                <div className="p-5">
                    <Image src={devPhoto} width="300" height={"300"} />
                </div>
                <span>
                    {aboutConfig.p1}
                </span>
                <span>
                    {aboutConfig.p2}
                </span>
                <span>
                    {aboutConfig.p3}
                </span>
            </main>
        );

    return (
        <>
            <div className="text-3xl md:text-[50px] pb-3 md:pb-0 md:mt-3 font-extrabold w-full text-center">
                {aboutConfig.welcomeGreeting}
            </div>
            < GradientWrapper
                style="w-full md:p-7"
                gradientBorders={textAreaGradientBorder}
            >
                {content}
            </GradientWrapper>
        </>
    );
}

export default About