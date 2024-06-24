import React from 'react';
import { cn } from '../../utils';

interface IGradientWrapperProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    gradientBorders: string[];
}

const GradientWrapper: React.FC<IGradientWrapperProps> = (
    props: IGradientWrapperProps
): JSX.Element => {
    let childComp = props.children;
    for (let i = 0; i < props.gradientBorders.length; i++) {
        childComp = (
            <div
                className={cn(
                    `${props.gradientBorders[i]} h-full w-full`,
                    props.containerClassName
                )}
            >
                <>{childComp}</>
            </div>
        );
    }

    return props.className ? (
        <div className={props.className}>
            <>{childComp}</>
        </div>
    ) : (
        <>{childComp}</>
    );
};

export default GradientWrapper;
