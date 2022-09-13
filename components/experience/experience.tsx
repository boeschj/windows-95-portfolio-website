import React from "react";
import ensembleImg from '../../styles/assets/jobs/ensemble.png';
import bitverifyImg from '../../styles/assets/jobs/bitverify.png';
import infovisaImg from '../../styles/assets/jobs/infovisa.jpg';
import sandhillsImg from '../../styles/assets/jobs/sandhills.jpg';
import tappImg from '../../styles/assets/jobs/tapp.png';
import JobListItem from "./JobListItem";
import { textAreaGradientBorder } from "../gradients/gradientStyles";
import GradientWrapper from "../gradients/gradientWrapper";

const workHistory = [
    {
        imageUrl: ensembleImg,
        jobName: "Ensemble",
        jobTitle: "Lead Software Engineer",
        jobUrl: "https://www.ensemble.works/",
        jobDescription: "Ensemble empowers artists to tell the story behind their creative process and sell the artifacts which come from it as NFTs.",
        workSummary: "I was contracted to build the backend of the application, including smart contract integration, metadata creation and uploading, and Firebase authentication using SIWE.",
        datesWorked: "June 2022 - October 2022"
    },
    {
        imageUrl: bitverifyImg,
        jobName: "BitVerify",
        jobUrl: "https://www.bitverify.net/",
        jobTitle: "Founder",
        jobDescription: "I raised $100,000 through a startup accelerator to found BitVerify, which provides live risk assessment and monitoring solutions to banks looking to integrate digital assets into their service offering.",
        workSummary: "While at BitVerify I built a blockchain data aggregation API and compliance solutions served via UI for the Bitcoin and Ethereum protocols.",
        datesWorked: "August 2021 - September 2022"
    },
    {
        imageUrl: tappImg,
        jobName: "tapp",
        jobUrl: "https://vizn-stats.web.app/",
        jobTitle: "Full-Stack Software Engineer",
        jobDescription: "tapp modernizes practice charting for baseball coaches.",
        workSummary: "While at tapp I contributed to many core features of the application, including payment integration, roster importing, automated onboarding and landing page design/analytics.",
        datesWorked: "January 2021 - May 2022"
    },
    {
        imageUrl: infovisaImg,
        jobName: "Infovisa",
        jobUrl: "https://www.infovisa.com/",
        jobTitle: "Software Engineer Intern",
        jobDescription: "Infovisa provides trust accounting software to banks.",
        workSummary: "At Infovisa I created visual data displays and account grouping, enabling clients to gain insights into their holdings.",
        datesWorked: "May 2021 - August 2021"
    },
    {
        imageUrl: sandhillsImg,
        jobName: "Sandhills Global",
        jobUrl: "https://point2ship.com/",
        jobTitle: "Software Engineer Intern",
        jobDescription: "While at Sandhills I worked on Point2Ship, which was a new internal product that aggregates shipping companies and allows the consumer to select the best rate for shipping.",
        workSummary: "I completed a refactor of the frontend application and integrated a new carrier to the platform during my time at Sandhills.",
        datesWorked: "August 2020 - May 2021"
    }
]

const Experience: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="text-[50px] font-extrabold w-full text-center">
                My Work
            </div>
            < GradientWrapper
                style="w-full md:p-7"
                gradientBorders={textAreaGradientBorder}
            >
                <main className="h-[500px] content-start w-full bg-windows-white text-2xl tracking-wide text-center justify-around flex gap-10 px-5 md:px-0 md:p-5 overflow-auto flex-wrap">
                    <ul className="divide-y-2 divide-black divide-dashed">
                        <>
                            {workHistory.map((job: any, index: number) => {
                                return (
                                    <li>
                                        <JobListItem
                                            imageUrl={job.imageUrl}
                                            jobName={job.jobName}
                                            jobTitle={job.jobTitle}
                                            jobUrl={job.jobUrl}
                                            jobDescription={job.jobDescription}
                                            workSummary={job.workSummary}
                                            datesWorked={job.datesWorked}
                                        />
                                    </li>
                                )
                            }
                            )}
                        </>
                    </ul>
                </main>
            </GradientWrapper>
        </>
    )
}

export default Experience