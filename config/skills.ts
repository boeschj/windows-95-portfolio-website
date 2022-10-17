import graphql from '../styles/assets/languages/graphql.svg';
import javascript from '../styles/assets/languages/javascript.svg';
import next from '../styles/assets/languages/next.svg';
import node from '../styles/assets/languages/node.svg';
import python from '../styles/assets/languages/python.svg';
import react from '../styles/assets/languages/react.svg';
import solidity from '../styles/assets/languages/solidity.svg';
import typescript from '../styles/assets/languages/typescript.svg';
import alchemy from '../styles/assets/libraries/alchemy.jpg';
import apollo from '../styles/assets/libraries/apollo.svg';
import ethers from '../styles/assets/libraries/ethers.svg';
import firebase from '../styles/assets/libraries/firebase.svg';
import github from '../styles/assets/libraries/github.svg';
import hardhat from '../styles/assets/libraries/hardhat.svg';
import overmind from '../styles/assets/libraries/overmind.png';
import sass from '../styles/assets/libraries/sass.svg';
import tailwind from '../styles/assets/libraries/tailwind.svg';
import vercel from '../styles/assets/libraries/vercel.svg';
import vscode from '../styles/assets/libraries/vscode.svg';
import wagmi from '../styles/assets/libraries/wagmi.png';
import web3 from '../styles/assets/libraries/web3.svg';
import zora from '../styles/assets/libraries/zora.jpg';
import figma from '../styles/assets/libraries/figma.svg';
import ipfs from '../styles/assets/libraries/ipfs.svg';

//Note that skill ratings are on a scale of 0-10, any value that exceeds this is definitely going to mess something up
export const skills = {
    p1: "I'm primarily a frontend/product focused developer, but I also enjoy developing features that span the tech stack, adding value to a product where it's most needed. I have proven expertise taking product features from concept, to design, to implementation using React and Next.js frontend frameworks and creating REST APIs with node.js and Firebase.",
    topSkill1: 'React',
    topSkill1_rating: 8,
    topSkill2: 'Node.js',
    topSkill2_rating: 6,
    topSkill3: 'GraphQL',
    topSkill3_rating: 4,
};

export const languages = [
    {
        name: 'Typescript',
        src: typescript,
    },
    {
        name: 'Node.js',
        src: node,
    },
    {
        name: 'React',
        src: react,
    },
    {
        name: 'Next.js',
        src: next,
    },
    {
        name: 'GraphQL',
        src: graphql,
    },
    {
        name: 'Python',
        src: python,
    },
    {
        name: 'JavaScript (ES6)',
        src: javascript,
    },
    {
        name: 'Solidity',
        src: solidity,
    },
];

export const libraries = [
    {
        name: 'Overmind',
        src: overmind,
    },
    {
        name: 'Tailwind',
        src: tailwind,
    },
    {
        name: 'CSS/SASS',
        src: sass,
    },
    {
        name: 'Figma',
        src: figma,
    },
    {
        name: 'Firebase',
        src: firebase,
    },
    {
        name: 'ApolloGQL',
        src: apollo,
    },
    {
        name: 'Vercel',
        src: vercel,
    },
    {
        name: 'Git/Github',
        src: github,
    },
    {
        name: 'VS Code',
        src: vscode,
    },
    {
        name: 'Alchemy',
        src: alchemy,
    },
    {
        name: 'IPFS',
        src: ipfs,
    },
    {
        name: 'web3.js',
        src: web3,
    },
    {
        name: 'ethers.js',
        src: ethers,
    },
    {
        name: 'WAGMI',
        src: wagmi,
    },
    {
        name: 'Zora ZDK',
        src: zora,
    },
    {
        name: 'Hardhat',
        src: hardhat,
    },
];
