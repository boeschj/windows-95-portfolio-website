import React from "react";
import ProgressBar from "./progressBar";

const SkillSummary: React.FC = (): JSX.Element => {

    return (
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
    )
}

export default SkillSummary