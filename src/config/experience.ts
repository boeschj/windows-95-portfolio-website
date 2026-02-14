import { IMAGE_PATH } from '@/constants/application.constants';
import { WorkHistoryItem } from '@/types/configTypes';

const BASE_IMAGE_URL = `${IMAGE_PATH}/jobs`;

export const workHistory: WorkHistoryItem[] = [
    {
        imageUrl: `${BASE_IMAGE_URL}/fire.png`,
        jobName: 'Fire',
        jobTitle: 'Full Stack Engineer',
        jobUrl: 'https://www.joinfire.xyz/',
        jobDescription:
            'Fire is a chrome browser extension that simulates blockchain transactions, showing you exactly what will go in and out of your wallet before you sign a transaction.',
        workSummary:
            "At Fire, I've had the opportunity to work on a small team and contribute to all phases of developing a new product. As engineering hire #1, I've been responsible for everything from determining software architecture, establishing code patterns and best practices, writing documentation, conducting customer interviews, and, of course, building several incredible products! I've had the opportunity to make significant contributions towards a security-focused chrome extension, a MPC (Multi-Party Computation) crypto wallet, a dApp providing daily transactions, and a trading-focused mobile wallet.",
        datesWorked: 'November 2022 - Present',
    },
    {
        imageUrl: `${BASE_IMAGE_URL}/ensemble.png`,
        jobName: 'Ensemble',
        jobTitle: 'Lead Software Engineer',
        jobUrl: 'https://www.ensemble.works/',
        jobDescription:
            'Ensemble empowers artists to tell the story behind their creative process and sell the artifacts which come from it as NFTs.',
        workSummary:
            'I worked on Ensemble as a contract developer with a small team and led the development of the product on the blockchain integration side. At Ensemble I played a key role in everything from determining software architecture, setting up CI/CD and establishing best practices, to implementing a responsive and pixel-perfect UI along with vital features and workflows such as smart contract integration, metadata creation and uploading, and Firebase authentication using Sign In With Ethereum.',
        datesWorked: 'July 2022 - November 2022',
    },
    {
        imageUrl: `${BASE_IMAGE_URL}/bitverify.png`,
        jobName: 'BitVerify',
        jobUrl: 'https://www.bitverify.net/',
        jobTitle: 'Founder',
        jobDescription:
            "I started BitVerify as a side project to create an easy-to-use crypto trading platform for consumers. After a series of pivots, I raised a $100,000 pre-seed fundraising round through the NMotion Accelerator Studio program in 2021 to build a live risk assessment and monitoring solution for banks looking to integrate digital assets into their service offering, but couldn't build the infrastructure in-house.",
        workSummary:
            'While at BitVerify I experienced every phase of building and managing a product. I led a team and established the company vision, product roadmap, conducted customer interviews, and worked with top state and federal regulators to build a safe and compliant platform suited to customer needs. On the tech side I led the core development of the platform and built Figma wireframes, a React web application and GraphQL API to efficiently aggregate, process, and serve data to end-users, enabling underwriting teams to account for and manage digital assets while issuing loans.',
        datesWorked: 'April 2020 - September 2022',
    },
    {
        imageUrl: `${BASE_IMAGE_URL}/tapp.png`,
        jobName: 'tapp',
        jobUrl: 'https://vizn-stats.web.app/',
        jobTitle: 'Full-Stack Software Engineer',
        jobDescription:
            "Tapp Sports is an athletic evaluation tool that helps coaches input and analyze player performance data. Using Tapp's customizable evaluation templates, coaches can save hours each day spent aggregating, formatting, and comprehending data.",
        workSummary: `I joined the Tapp team in January of 2021 in a part-time capacity, later taking a more significant role in development as part of an Honors Design Studio program in college. 
            My focus at Tapp was helping the team scale the product to onboard new teams at scale. The existing onboarding process was very hands-on, and required considerable attention from the team which could instead be spent developing the product. 
            To optimize the process of scaling the product, I implemented several key feature including Stripe payment integration, automatic roster importing, account creation and landing page design/analytics, where I improved initial render time by 45% 
            and established product analytics to track conversions from the landing page. My contributions also fully automated the process of onboarding a new team, which allowed the company to easily scale.`,
        datesWorked: 'January 2021 - May 2022',
    },
    {
        imageUrl: `${BASE_IMAGE_URL}/infovisa.jpg`,
        jobName: 'Infovisa',
        jobUrl: 'https://www.infovisa.com/',
        jobTitle: 'Software Engineer Intern',
        jobDescription: 'Infovisa provides trust accounting software to banks.',
        workSummary:
            'At Infovisa I created highly performant, modular, and maintainable code following company best practices. I contributed a series of visual data-displays and account aggregation functions to the launch of their new flagship product.',
        datesWorked: 'May 2021 - August 2021',
    },
    {
        imageUrl: `${BASE_IMAGE_URL}/sandhills.jpg`,
        jobName: 'Sandhills Global',
        jobUrl: 'https://point2ship.com/',
        jobTitle: 'Software Engineer Intern',
        jobDescription:
            'While at Sandhills I worked on Point2Ship, which was a new internal product that aggregates shipping companies and allows the consumer to select the best rate for shipping.',
        workSummary:
            'I completed a refactor of the frontend application, refactored a large CSS file into modular SCSS classes (reducing file size by 75%), and integrated a new carrier to the platform during my time at Sandhills.',
        datesWorked: 'August 2020 - May 2021',
    },
];
