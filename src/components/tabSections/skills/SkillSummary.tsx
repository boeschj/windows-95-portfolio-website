interface SkillSummaryProps {
    summary: string;
}

export function SkillSummary({ summary }: SkillSummaryProps) {
    return (
        <>
            <h2>Skills Summary</h2>
            <p className="whitespace-pre-line">{summary}</p>
        </>
    );
}
