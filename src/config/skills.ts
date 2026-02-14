import { IMAGE_PATH } from '@/constants/application.constants';
import { SkillSummary, TechItem } from '@/types/configTypes';

const LANGUAGES_PATH = `${IMAGE_PATH}/languages`;
const LIBRARIES_PATH = `${IMAGE_PATH}/libraries`;

const languageItems = [
    { name: 'Typescript', imageUrl: `${LANGUAGES_PATH}/typescript.svg` },
    { name: 'JavaScript', imageUrl: `${LANGUAGES_PATH}/javascript.svg` },
    { name: 'React', imageUrl: `${LANGUAGES_PATH}/react.svg` },
    { name: 'Next.js', imageUrl: `${LANGUAGES_PATH}/next.svg` },
    { name: 'Node.js', imageUrl: `${LANGUAGES_PATH}/node.svg` },
    { name: 'Python', imageUrl: `${LANGUAGES_PATH}/python.svg` },
    { name: 'React Native', imageUrl: `${LANGUAGES_PATH}/react-native.svg` },
];

const toolItem = [
    { name: 'Overmind', imageUrl: `${LIBRARIES_PATH}/overmind.png` },
    { name: 'Tailwind', imageUrl: `${LIBRARIES_PATH}/tailwind.svg` },
    { name: 'SASS', imageUrl: `${LIBRARIES_PATH}/sass.svg` },
    { name: 'Firebase', imageUrl: `${LIBRARIES_PATH}/firebase.svg` },
    { name: 'ApolloGQL', imageUrl: `${LIBRARIES_PATH}/apollo.svg` },
    { name: 'Vercel', imageUrl: `${LIBRARIES_PATH}/vercel.svg` },
    { name: 'Git/Github', imageUrl: `${LIBRARIES_PATH}/github.svg` },
    { name: 'VS Code', imageUrl: `${LIBRARIES_PATH}/vscode.svg` },
    { name: 'ethers.js', imageUrl: `${LIBRARIES_PATH}/ethers.svg` },
];

export const languages: TechItem[] = languageItems.map((item) => ({
    ...item,
    type: 'language',
}));

export const tools: TechItem[] = toolItem.map((item) => ({
    ...item,
    type: 'tool',
}));

export const skillSummarySection: SkillSummary = {
    summary:
        "I'm a product-focused fullstack developer and have expertise building in all areas of a product. I have experience developing highly performant UIs and animations on web/mobile using React, RN and Next.js. My backend focus has primarily been on serverless architectures using Vercel and Firebase, though I do also have experience using AWS.",
    skillLevels: [
        { skill: 'Frontend', level: 8 },
        { skill: 'Backend', level: 7 },
        { skill: 'DevOps and Infra', level: 6 },
    ],
};
