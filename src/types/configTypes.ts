export interface AboutConfig {
    p1: string;
    p2: string;
    p3: string;
}

export interface Links {
    github: string;
    linkedIn: string;
}

export interface WorkHistoryItem {
    imageUrl: string;
    jobName: string;
    jobTitle: string;
    jobUrl: string;
    jobDescription: string;
    workSummary: string;
    datesWorked: string;
}

export interface TabItem {
    tabKey: number;
    title: string;
    label: string;
    component: React.FC;
}

//I'll admit that this isn't the most elegant solution (😅), but I found it more preferable than this madness (or something similar): https://dev.to/tylim88/typescript-numeric-range-type-15a5
type SkillLevelRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface SkillLevel {
    skill: string;
    level: SkillLevelRange;
}

export interface SkillSummary {
    summary: string;
    skillLevels: SkillLevel[];
}

export interface TechItem {
    name: string;
    imageUrl: string;
    type: 'language' | 'tool';
}
