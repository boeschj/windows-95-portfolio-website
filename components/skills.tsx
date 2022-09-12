import React from "react"
import Image, { StaticImageData } from 'next/image';
import GradientWrapper from "./gradientWrapper";
import graphql from "../styles/assets/languages/graphql.svg";
import javascript from "../styles/assets/languages/javascript.svg";
import next from "../styles/assets/languages/next.svg";
import node from "../styles/assets/languages/node.svg";
import python from "../styles/assets/languages/python.svg";
import react from "../styles/assets/languages/react.svg";
import solidity from "../styles/assets/languages/solidity.svg";
import typescript from "../styles/assets/languages/typescript.svg";

import alchemy from "../styles/assets/libraries/alchemy.jpg";
import apollo from "../styles/assets/libraries/apollo.svg";
import ethers from "../styles/assets/libraries/ethers.svg";
import firebase from "../styles/assets/libraries/firebase.svg";
import github from "../styles/assets/libraries/github.svg";
import hardhat from "../styles/assets/libraries/hardhat.png";
import overmind from "../styles/assets/libraries/overmind.png";
import sass from "../styles/assets/libraries/sass.svg";
import tailwind from "../styles/assets/libraries/tailwind.svg";
import vercel from "../styles/assets/libraries/vercel.svg";
import vscode from "../styles/assets/libraries/vscode.svg";
import wagmi from "../styles/assets/libraries/wagmi.png";
import web3 from "../styles/assets/libraries/web3.svg";
import zora from "../styles/assets/libraries/zora.jpg";
import ProgressBar from "./progressBar";
import { textAreaGradientBorder } from "../pages";

interface ISkill {
    name: string,
    src: StaticImageData | any,
}

const languages: ISkill[] = [
    {
        name: "Typescript",
        src: typescript
    },
    {
        name: "Node.js",
        src: node
    }, {
        name: "React",
        src: react
    }, {
        name: "Next.js",
        src: next
    }, {
        name: "GraphQL",
        src: graphql
    }, {
        name: "Python",
        src: python
    }, {
        name: "JavaScript(ES6)",
        src: javascript
    }, {
        name: "Solidity",
        src: solidity
    }
];

const libraries: ISkill[] = [
    {
        name: "Overmind",
        src: overmind
    },
    {
        name: "Tailwind",
        src: tailwind
    },
    {
        name: "CSS/SASS",
        src: sass
    },
    {
        name: "Firebase",
        src: firebase
    },
    {
        name: "ApolloGQL",
        src: apollo
    },
    {
        name: "Vercel",
        src: vercel
    },
    {
        name: "Git/Github",
        src: github
    },
    {
        name: "VS Code",
        src: vscode
    },
    {
        name: "Alcehmy",
        src: alchemy
    },
    {
        name: "web3.js",
        src: web3
    },
    {
        name: "ethers.js",
        src: ethers
    },
    {
        name: "WAGMI",
        src: wagmi
    },
    {
        name: "Zora ZDK",
        src: zora
    },
    {
        name: "Hardhat",
        src: hardhat
    }
];

const Skills: React.FC = (): JSX.Element => {

    type testing = {
        children: React.ReactNode
    }

    const Testasdf: React.FC<testing> = (props: testing): JSX.Element => {
        return <main className="h-[500px] w-full bg-windows-gray flex px-5 md:px-0 md:p-5 flex-wrap flex-row overflow-auto flex-initial w-42">
            <>
                {props.children}
            </>
        </main>
    }

    return (
        <>
            <div className="text-[50px] font-extrabold w-full text-center">
                My Skills
            </div>

            <GradientWrapper
                style="w-full md:p-7"
                gradientBorders={textAreaGradientBorder}
            >
                <main className="h-[500px] w-full bg-windows-gray flex px-5 md:px-0 md:p-5 flex-wrap flex-row overflow-auto flex-initial w-42">
                    <div className="grow">
                        <div className="min-w-full flex flex-col-reverse lg:flex-row justify-around mb-10">
                            <div className="lg:w-1/2 content-center h-full mx-auto">
                                <h2 className="text-center mx-auto text-3xl font-extrabold py-3 underline">
                                    Skills Summary
                                </h2>

                                <span className="text-2xl text-center">
                                    I enjoy full stack development and contributing to features in whichever part of the product they are most needed. I have experience creating responsive and pixel perfect UIs with React and Next.js frontend frameworks and creating REST APIs with node.js and Firebase.
                                </span>
                            </div>
                            <div className="flex-col space-y-2 w-[300px] h-full mx-auto py-10 lg:py-0">
                                < ProgressBar skill="React" level={7} />
                                < ProgressBar skill="Node.js" level={7} />
                                < ProgressBar skill="GraphQL" level={4} />
                            </div>
                        </div>

                        <h3 className="text-center mx-auto grow-1 flex justify-center text-2xl font-extrabold py-3 underline">
                            Languages/Frameworks
                        </h3>
                        <div className="px-5 text-center grid grid-cols-3 lg:grid-cols-8">
                            <>
                                {
                                    languages.map((skill: ISkill, index: number) => {
                                        return (
                                            <div className="p-1">
                                                <Image src={skill.src} key={index} width="50" height="50" />
                                                <div className="text-xl">
                                                    {skill.name}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        </div>
                        <div className="mt-10">
                            <h3 className="text-center mx-auto grow-1 flex justify-center text-2xl font-extrabold py-3 underline">
                                Tools/Libraries
                            </h3>
                            <div className="px-5 text-center grid grid-cols-3 lg:grid-cols-8 py-1 space-y-5">
                                <>
                                    {
                                        libraries.map((skill: ISkill, index: number) => {
                                            return (
                                                index === 0 ?
                                                    <div className="p-1 my-auto mt-5">
                                                        <Image src={overmind} alt="test" width="50" height="50" />
                                                        <div className="text-xl">
                                                            Overmind
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="p-1">
                                                        <Image src={skill.src} key={index} width="50" height="50" />
                                                        <div className="text-xl">
                                                            {skill.name}
                                                        </div>
                                                    </div>
                                            )
                                        })
                                    }
                                </>
                            </div>
                        </div>
                    </div>
                </main>

            </GradientWrapper>
        </>
    )
}

export default Skills