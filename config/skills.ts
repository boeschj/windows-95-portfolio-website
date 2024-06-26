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
import figma from '../styles/assets/libraries/figma.svg';
import firebase from '../styles/assets/libraries/firebase.svg';
import github from '../styles/assets/libraries/github.svg';
import hardhat from '../styles/assets/libraries/hardhat.svg';
import ipfs from '../styles/assets/libraries/ipfs.svg';
import overmind from '../styles/assets/libraries/overmind.png';
import sass from '../styles/assets/libraries/sass.svg';
import tailwind from '../styles/assets/libraries/tailwind.svg';
import vercel from '../styles/assets/libraries/vercel.svg';
import vscode from '../styles/assets/libraries/vscode.svg';
import wagmi from '../styles/assets/libraries/wagmi.png';
import web3 from '../styles/assets/libraries/web3.svg';
import zora from '../styles/assets/libraries/zora.jpg';
import reactNative from '../styles/assets/languages/react-native.svg';

//Note that skill ratings are on a scale of 0-10, any value that exceeds this is definitely going to mess something up
export const skills = {
    p1: "I'm a product-focused fullstack developer and have expertise developing highly performant UIs and animations on web/mobile. My backend focus has primarily been on serverless architectures using Vercel and Firebase, though I do have some experience using AWS.",
    topSkill1: 'Frontend',
    topSkill1_rating: 7,
    topSkill2: 'Backend',
    topSkill2_rating: 5,
    topSkill3: 'DevOps and Infra',
    topSkill3_rating: 5,
};

export const languages = [
    {
        name: 'Typescript',
        src: typescript,
    },
    {
        name: 'JavaScript',
        src: javascript,
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
        name: 'Node.js',
        src: node,
    },
    {
        name: 'Python',
        src: python,
    },
    {
        name: 'React Native',
        src: reactNative,
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
        name: 'ethers.js',
        src: ethers,
    },
];
