import React from "react"
import Image from 'next/image';
import test from '../styles/win_95.svg'
import GradientWrapper from "./gradientWrapper";

const Experience: React.FC = (): JSX.Element => {

    interface IJobListItemProps {
        imageUrl: string,
        jobName: string,
        jobTitle: string,
        jobUrl?: string
        jobDescription: string,
        workSummary: string,
        datesWorked: string
    }

    const textAreaGradientBorder = [
        'border border-l-text-l-1 border-r-text-r-1 border-t-text-t-1 border-b-text-b-1',
        'border border-l-text-l-2 border-r-text-r-2 border-t-text-t-2 border-b-text-b-2',
        'border border-l-text-l-3 border-r-text-r-3 border-t-text-t-3 border-b-text-b-3',
        'border border-l-text-l-4 border-r-text-r-4 border-t-text-t-4 border-b-text-b-4',
    ]

    const JobListItem: React.FC<IJobListItemProps> = ({ imageUrl, jobName, jobUrl, jobTitle, jobDescription, workSummary, datesWorked }: IJobListItemProps): JSX.Element => {

        return (
            <div className="flex flex-col space-y-5 grow py-5 w-full md:w-3/4 mx-auto">
                <div>
                    <Image src={imageUrl} alt="test" width="75" height="75" className={jobUrl ? 'cursor-pointer' : ''} onClick={() => jobUrl ? window.open(jobUrl, '_blank', 'noopener,noreferrer') : ''} />
                </div>

                <div className={`text-[50px] w-fit mx-auto font-extrabold leading-[50px] ${jobUrl ? 'hover:text-windows-blue hover:underline cursor-pointer' : ''}`} onClick={() => jobUrl ? window.open(jobUrl, '_blank', 'noopener,noreferrer') : ''}>
                    {jobName}
                </div>
                <div className={`font-bold`}>
                    {jobTitle}
                </div>
                <div>
                    {datesWorked}
                </div>
                <div>
                    <div className="text-center">
                        {jobDescription}
                    </div>
                    <br />
                    <div className="text-center">
                        {workSummary}
                    </div>
                </div>

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
                    <main className="h-[500px] content-start w-full bg-windows-white text-2xl tracking-wide text-center justify-around flex gap-10 px-5 md:px-0 md:p-5 overflow-auto flex-wrap">
                        <ul className="divide-y-2 divide-black divide-dashed">
                            <li>
                                <JobListItem
                                    imageUrl={test}
                                    jobName="Ensemble"
                                    jobTitle="Lead Software Engineer"
                                    jobUrl="https://www.ensemble.works/"
                                    jobDescription="Ensemble empowers artists to tell the story behind their creative process and sell the artifacts which come from it as NFTs."
                                    workSummary="I was contracted to build the backend of the application, including smart contract integration, metadata creation and uploading, and Firebase authentication using SIWE."
                                    datesWorked="June 2022 - October 2022"
                                />
                            </li>
                            <li>
                                <JobListItem
                                    imageUrl={test}
                                    jobName="BitVerify"
                                    jobUrl="https://www.bitverify.net/"
                                    jobTitle="Founder"
                                    jobDescription="I raised $100,000 through a startup accelerator to found BitVerify, which provides live risk assessment and monitoring solutions to banks looking to integrate digital assets into their service offering."
                                    workSummary="While at BitVerify I built a blockchain data aggregation API and compliance solutions served via UI for the Bitcoin and Ethereum protocols."
                                    datesWorked="August 2021 - September 2022"
                                />
                            </li>
                            <li>
                                <JobListItem
                                    imageUrl={test}
                                    jobName="tapp"
                                    jobUrl="https://vizn-stats.web.app/"
                                    jobTitle="Full-Stack Software Engineer"
                                    jobDescription="tapp modernizes practice charting for baseball coaches."
                                    workSummary="While at tapp I contributed to many core features of the application, including payment integration, roster importing, automated onboarding and landing page design/analytics."
                                    datesWorked="January 2021 - May 2022"
                                />
                            </li>
                            <li>
                                <JobListItem
                                    imageUrl={test}
                                    jobName="Infovisa"
                                    jobUrl="https://www.infovisa.com/"
                                    jobTitle="Software Engineer Intern"
                                    jobDescription="Infovisa provides trust accounting software to banks."
                                    workSummary="At Infovisa I created visual data displays and account grouping, enabling clients to gain insights into their holdings."
                                    datesWorked="May 2021 - August 2021"
                                />
                            </li>
                            <li>
                                <JobListItem
                                    imageUrl={test}
                                    jobName="Sandhills Global"
                                    jobUrl="https://point2ship.com/"
                                    jobTitle="Software Engineer Intern"
                                    jobDescription="While at Sandhills I worked on Point2Ship, which was a new internal product that aggregates shipping companies and allows the consumer to select the best rate for shipping."
                                    workSummary="I completed a refactor of the frontend application and integrated a new carrier to the platform during my time at Sandhills."
                                    datesWorked="August 2020 - May 2021"
                                />
                            </li>
                        </ul>
                    </main>
                }
            />
        </>

    )
}

export default Experience