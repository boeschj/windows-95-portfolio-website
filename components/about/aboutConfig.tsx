import React from "react";
import { aboutConfig } from "../../config/ABOUT";
import { textAreaGradientBorder } from "../gradients/gradientStyles";
import GradientWrapper from "../gradients/gradientWrapper";

const About: React.FC = (): JSX.Element => {

    const content: JSX.Element =
        (
            <main className="h-[500px] w-full bg-windows-white p-2 md:p-5 lg:p-10 text-2xl tracking-wide text-center flex flex-row lg:flex-col py-5 lg:py-0 space-y-10 justify-center overflow-auto flex-wrap">
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
            <div className="text-[50px] font-extrabold w-full text-center">
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