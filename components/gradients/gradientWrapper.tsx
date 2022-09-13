import React from "react";

interface IGradientWrapperProps {
    children: React.ReactNode,
    style?: string,
    gradientBorders: string[]
}

const GradientWrapper: React.FC<IGradientWrapperProps> = (props: IGradientWrapperProps): JSX.Element => {
    let childComp = props.children;
    for (let i = 0; i < props.gradientBorders.length; i++) {
        childComp = (
            <div className={props.gradientBorders[i]}>
                <>
                    {childComp}
                </>
            </div>
        )
    }

    return (
        props.style ?
            <div className={props.style}>
                <>
                    {childComp}
                </>
            </div>
            :
            <>
                {childComp}
            </>
    )
}

export default GradientWrapper