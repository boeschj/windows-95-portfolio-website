import React from "react"
import Image from 'next/image';
import test from '../styles/win_95.svg'
import GradientWrapper from "./gradientWrapper";

const Skills: React.FC = (): JSX.Element => {

    interface IJobListItemProps {
        skill: string,
        level: number
    }

    const textAreaGradientBorder = [
        'border border-l-text-l-1 border-r-text-r-1 border-t-text-t-1 border-b-text-b-1',
        'border border-l-text-l-2 border-r-text-r-2 border-t-text-t-2 border-b-text-b-2',
        'border border-l-text-l-3 border-r-text-r-3 border-t-text-t-3 border-b-text-b-3',
        'border border-l-text-l-4 border-r-text-r-4 border-t-text-t-4 border-b-text-b-4',
    ];

    const modalGradientBorders = [
        'border border-t-modal-t-1 border-b-modal-b-1 border-l-modal-l-1 border-r-modal-r-1',
        'border border-t-modal-t-2 border-b-modal-b-2 border-l-modal-l-2 border-r-modal-r-2',
        'border border-t-modal-t-3 border-b-modal-b-3 border-l-modal-l-3 border-r-modal-r-3',
        'border border-t-modal-t-4 border-b-modal-b-4 border-l-modal-l-4 border-r-modal-r-4'
    ];

    const ProgressBar: React.FC<IJobListItemProps> = ({ skill, level }: IJobListItemProps): JSX.Element => {

        const bar: JSX.Element = <div className="bg-windows-blue w-5 h-8" />;
        const progress: JSX.Element[] = [];

        for (let i = 0; i < level; i++) {
            progress.push(bar);
        }

        return (
            <div className="px-5">
                <div className="py-1 tracking-wide text-center text-2xl">
                    {skill}
                </div>
                <GradientWrapper
                    style="mx-auto w-[248px]"
                    gradientBorders={textAreaGradientBorder}
                    childComp={
                        <div className="flex flex-row space-x-1 p-[2px] w-[248px] mx-auto">
                            {progress}
                        </div>
                    } />
            </div>
        )
    }

    return (
        <>
            <div className="text-[50px] font-extrabold w-full text-center">
                My Skills
            </div>

            < GradientWrapper
                style="w-full md:p-7"
                gradientBorders={textAreaGradientBorder}
                childComp={
                    <main className="h-[500px] w-full bg-windows-gray flex px-5 md:px-0 md:p-5 flex-wrap flex-row overflow-auto flex-initial w-42">
                        <div className="grow">
                            <div>
                                <div className="min-w-full flex flex-col-reverse lg:flex-row justify-around mb-10">
                                    <div className="lg:w-1/2 content-center h-full mx-auto">
                                        <h2 className="text-center mx-auto text-3xl font-extrabold py-3 underline">
                                            Skills Summary
                                        </h2>

                                        <span className="text-2xl text-center">
                                            I enjoy full stack development and contributing to features in whichever part of the product they are most needed. I have experience creating responsive and pixel perfect UI with React and Next.js frontend frameworks and creating REST APIs with node.js and Firebase.
                                        </span>
                                    </div>
                                    <div className="flex-col space-y-2 w-[300px] h-full mx-auto py-10 lg:py-0">
                                        < ProgressBar skill="React" level={7} />
                                        < ProgressBar skill="Node.js" level={7} />
                                        < ProgressBar skill="Firebase" level={5} />
                                    </div>
                                </div>

                                <h3 className="text-center mx-auto grow-1 flex justify-center text-2xl font-extrabold py-3 underline">
                                    Languages/Frameworks
                                </h3>
                                <div className="px-5 text-center grid grid-cols-3 lg:grid-cols-10 ">
                                    {/* I enjoy writing highly performant, scalable, and maintanable code across all parts of a product.  */}
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Typescript
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Node.js
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            React
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Next.js
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            GraphQL
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Python
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            JavaScript (ES6)
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Solidity
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h3 className="text-center mx-auto grow-1 flex justify-center text-2xl font-extrabold py-3 underline">
                                    Tools/Libraries
                                </h3>
                                <div className="px-5 text-center grid grid-cols-3 lg:grid-cols-10">
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Overmind
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            TailwindCSS
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            CSS/SASS
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Express
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Firebase
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            ApolloGQL
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Vercel
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Express
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Git/Github
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            VS Code
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Alchemy
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            web3.js
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            ethers.js
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            WAGMI
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Zora ZDK
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <Image src={test} alt="test" width="50" height="50" />
                                        <div className="text-xl">
                                            Hardhat
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </main>
                }
            />
        </>

    )
}

export default Skills