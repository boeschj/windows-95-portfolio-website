interface JobListItemProps {
    skill: string;
    level: number;
}

export const ProgressBar: React.FC<JobListItemProps> = ({
    skill,
    level,
}): JSX.Element => {
    const progressBar = Array.from({ length: level }).map((_, index) => (
        <div key={index} className="h-8 w-5 bg-windows-blue" />
    ));

    return (
        <div className="md:px-5">
            <div className="py-1 text-center text-lg tracking-wide sm:text-xl md:text-2xl">
                {skill}
            </div>
            <div className="win95-border-sunken mx-auto w-[248px]">
                <div className="mx-auto flex w-[248px] flex-row space-x-1 p-[2px]">
                    {progressBar}
                </div>
            </div>
        </div>
    );
};
