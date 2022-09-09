import React from "react"
import Image from 'next/image';
import test from '../styles/win_95.svg'
import GradientWrapper from "./gradientWrapper";

const Experience: React.FC = (): JSX.Element => {

    interface IJobListItemProps {
        imageUrl: string,
        jobName: string,
        jobTitle: string,
        jobDescription: string,
        datesWorked: string
    }

    const textAreaGradientBorder = [
        'border border-l-text-l-1 border-r-text-r-1 border-t-text-t-1 border-b-text-b-1',
        'border border-l-text-l-2 border-r-text-r-2 border-t-text-t-2 border-b-text-b-2',
        'border border-l-text-l-3 border-r-text-r-3 border-t-text-t-3 border-b-text-b-3',
        'border border-l-text-l-4 border-r-text-r-4 border-t-text-t-4 border-b-text-b-4',
    ]

    const JobListItem: React.FC<IJobListItemProps> = ({ imageUrl, jobName, jobTitle, jobDescription, datesWorked }: IJobListItemProps): JSX.Element => {

        return (
            <div className="flex flex-col space-y-5 grow py-5 w-3/4 mx-auto">
                <div>
                    <Image src={imageUrl} alt="test" width="75" height="75" />
                </div>

                <div className="text-[50px] font-extrabold">
                    {jobName}
                </div>
                <div className="font-bold">
                    {jobTitle}
                </div>
                <div>
                    {datesWorked}
                </div>
                <div>
                    {jobDescription}
                </div>

            </div>
        )
    }

    return (
        <>
            <div className="text-[50px] font-extrabold w-full text-center">
                Experience
            </div>

            < GradientWrapper
                style="w-full p-7"
                gradientBorders={textAreaGradientBorder}
                childComp={
                    <main className="h-[500px] w-full bg-windows-white text-2xl tracking-wide text-center flex flex-col space-y-10 overflow-auto">
                        <div>
                            <Image src={test} alt="test" width="75" height="75" />
                            <div>
                                Ensemble
                            </div>
                        </div>

                        {/* <ul className="divide-y-2 divide-black divide-dashed">
                            <li>
                                <JobListItem
                                    imageUrl={test}
                                    jobName="Ensemble"
                                    jobTitle="Lead Software Engineer"
                                    jobDescription="Ensemble is a platform that empowers artists to tell the story behind their creative process and sell the artifacts which come from it as NFTs. I was hired to build the marketplace and the contracts that enable NFT minting and auctions."
                                    datesWorked="June 2022 - October 2022"
                                />
                            </li>
                            <li>
                                <JobListItem
                                    imageUrl={test}
                                    jobName="BitVerify"
                                    jobTitle="Founder"
                                    jobDescription="BitVerify "
                                    datesWorked="June 2022 - October 2022"
                                />
                            </li>
                            <li>
                                <JobListItem
                                    imageUrl={test}
                                    jobName="Ensemble"
                                    jobTitle="Lead Software Engineer"
                                    jobDescription="Ensemble is a platform that empowers artists to tell the story behind their creative process and sell the artifacts which come from it as NFTs. I was hired to build the marketplace and the contracts that enable NFT minting and auctions."
                                    datesWorked="June 2022 - October 2022"
                                />
                            </li>
                        </ul> */}
                    </main>
                }
            />
        </>

    )
}

export default Experience