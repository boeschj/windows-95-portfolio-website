import React from "react";
import JobListItem from "./JobListItem";
import { textAreaGradientBorder } from "../gradients/gradientStyles";
import GradientWrapper from "../gradients/gradientWrapper";
import { workHistory } from "../../config/experience";

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
                                    <li key={index}>
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