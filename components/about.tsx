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
            <main className="h-[500px] w-full bg-windows-white p-2 md:p-5 lg:p-10 text-2xl tracking-wide text-center flex flex-row space-y-10 justify-center overflow-auto flex-wrap">
                <span>
                    I'm a software developer who enjoys building new and innovative products from the ground up.
                    I am also fascinated by the intersection of creativity and engineering, which has led me to focus on building in the crypto/web3 space.
                </span>

                <span>
                    My interest in software development started in 2019 when I taught myself some Visual Basic to program an Excel macro script to automate parts of a data-entry job I was working at the time.
                    Flash forward to the present, and I've now worked as a full-stack developer on 3 early stage companies, including my own that I founded in 2021.
                </span>

                <span>
                    Most recently I've been working with React, Node.js (typescript), Next.js, and GraphQL.
                </span>
            </main>
        );

    return (
        <>

            <div className="text-[50px] font-extrabold w-full text-center">
                Hi, I'm Jordan 👋
            </div>

            < GradientWrapper
                style="w-full md:p-7"
                gradientBorders={textAreaGradientBorder}
                childComp={
                    content
                }
            />
        </>


    );
}

export default About