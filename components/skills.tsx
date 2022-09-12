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
                My Work
            </div>

            < GradientWrapper
                style="w-full md:p-7"
                gradientBorders={textAreaGradientBorder}
                childComp={
                    <main className="h-[500px] content-start w-full bg-windows-gray justify-end flex px-5 md:px-0 md:p-5 overflow-auto flex-wrap">
                        <div className="flex-col space-y-2 w-auto">
                            < ProgressBar skill="React" level={7} />
                            < ProgressBar skill="Node.js" level={7} />
                            < ProgressBar skill="Firebase" level={5} />
                        </div>
                        <div>

                        </div>

                    </main>
                }
            />
        </>

    )
}

export default Skills