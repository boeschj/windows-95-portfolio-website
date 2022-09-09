import React from "react"
import GradientWrapper from "./gradientWrapper";

const About: React.FC = (): JSX.Element => {

    const textAreaGradientBorder = [
        'border border-l-text-l-1 border-r-text-r-1 border-t-text-t-1 border-b-text-b-1',
        'border border-l-text-l-2 border-r-text-r-2 border-t-text-t-2 border-b-text-b-2',
        'border border-l-text-l-3 border-r-text-r-3 border-t-text-t-3 border-b-text-b-3',
        'border border-l-text-l-4 border-r-text-r-4 border-t-text-t-4 border-b-text-b-4',
    ]

    const content: JSX.Element =
        (
            <main className="h-[500px] w-full bg-windows-white p-10 text-2xl tracking-wide text-center flex flex-col space-y-10 justify-center overflow-auto">
                <span>
                    I am a software developer who enjoys building new and innovative products from the ground up.
                    I am also fascinated by the intersection of creativity and engineering, which has led me to focus on building in the crypto/web3 space.
                </span>

                <span>
                    I've worked as a full-stack developer on 3 early stage companies, including my own that I founded in 2021.
                </span>

                <span>
                    I'm experienced with JS frameworks such as React, Node.js (typescript), Next.js, and Python.
                    I also have experience working with the full web3 stack on Ethereum.
                </span>
            </main>
        );

    return (
        <>

            <div className="text-[50px] font-extrabold w-full text-center">
                Hi, I'm Jordan 👋
            </div>

            < GradientWrapper
                style="w-full p-7"
                gradientBorders={textAreaGradientBorder}
                childComp={
                    content
                }
            />
        </>


    );
}

export default About