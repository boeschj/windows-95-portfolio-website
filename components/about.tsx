import React from "react"

const About: React.FC = (): JSX.Element => {

    return (
        <main className="h-[500px] w-full bg-windows-white p-10 text-3xl tracking-wide text-center flex flex-col space-y-10 justify-center overflow-auto">
            <span>
                I am a software developer who enjoys building new and innovative products from the ground up.
                I am also fascinated by the intersection of creativity and engineering, which has led me to focus on building in the crypto/web3 space.
            </span>

            <span>
                I've worked as a full-stack developer on 3 early stage companies, including my own that I founded in 2021.
            </span>

            <span>
                I am most familiar with JS frameworks such as React, Node.js (typescript), Next.js, and Python.
                I also have experience working with the full web3 stack on Ethereum.
            </span>
        </main>
    );
}

export default About