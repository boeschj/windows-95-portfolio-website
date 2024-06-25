interface IJobListItemProps {
    skill: string;
    level: number;
}

const ProgressBar: React.FC<IJobListItemProps> = ({
    skill,
    level,
}): JSX.Element => {
    const progressBar = Array.from({ length: level }).map((_, index) => (
        <div key={index} className="bg-windows-blue w-5 h-8" />
    ));

    return (
        <div className="px-5">
            <div className="py-1 tracking-wide text-center text-2xl">
                {skill}
            </div>
            <div className="mx-auto w-[248px] win95-border-sunken">
                <div className="flex flex-row space-x-1 p-[2px] w-[248px] mx-auto">
                    {progressBar}
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
