import React from "react"

interface ParentCompProps {
    childComp: React.ReactNode,
    style?: string,
    gradientBorders: string[]
}

const GradientWrapper: React.FC<ParentCompProps> = ({ childComp, style, gradientBorders }): JSX.Element => {
    for (let i = 0; i < gradientBorders.length; i++) {
        childComp = (
            <div className={gradientBorders[i]}>
                {childComp}
            </div>
        )
    }

    return (
        style ?
            <div className={style}>
                {childComp}
            </div>
            :
            <>
                {childComp}
            </>
    )
}

export default GradientWrapper