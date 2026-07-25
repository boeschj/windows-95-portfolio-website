export type SkillLevelRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

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
