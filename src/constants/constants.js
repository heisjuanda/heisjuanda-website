//logos
import gsap from '../assets/img/techStack/gsap.png';
import angular from '../assets/img/techStack/angular.png';
import css from '../assets/img/techStack/css.png';
import html from '../assets/img/techStack/html.png';
import java from '../assets/img/techStack/java.png';
import javaScript from '../assets/img/techStack/javaScript.png';
import netlify from '../assets/img/techStack/netlify.png';
import python from '../assets/img/techStack/python.png';
import racket from '../assets/img/techStack/racket.png';
import react from '../assets/img/techStack/react.png';
import sass from '../assets/img/techStack/sass.png';
import typeScript from '../assets/img/techStack/typeScript.png';
import vite from '../assets/img/techStack/vite.png';
import webpack from '../assets/img/techStack/webpack.png';

//0
import patatiasACasaLogo from '../assets/img/work/project/patitasACasa/patitasACasaLogo.webp';
import patitasACasaMain from '../assets/img/work/project/patitasACasa/patitasACasaMain.webp';
import patitasACasaDemo from '../assets/img/work/project/patitasACasa/patitasACasaDemo.webp';
import patitasACasaDetailsPC from '../assets/img/work/project/patitasACasa/patitasACasaDetailsPC.webp';
import patitasACasaDetailsMB from '../assets/img/work/project/patitasACasa/patitasACasaDetailsMB.webp';
//1
import programLanguageLogo from '../assets/img/work/project/programLanguage/programLanguageLogo.webp';
import programLanguageMain from '../assets/img/work/project/programLanguage/programLanguageMain.webp';
import programLanguageDemo from '../assets/img/work/project/programLanguage/programLanguageDemo.webp';
import programLanguageDetailsPC from '../assets/img/work/project/programLanguage/programLanguageDetailsPC.webp';
import programLanguageDetailsMB from '../assets/img/work/project/programLanguage/programLanguageDetailsMB.webp';
/*2
import portfolioLogo from './assets/images/projects/heisjuandaLogo.webp';
import portfolioMain from './assets/images/projects/portfolioMain.webp';
import portfolioDemo from './assets/images/projects/portfolioDemo.webp';
import portfolioDetailsPC from './assets/images/projects/portfolioDetailsPC.webp';
import portfolioDetailsMB from './assets/images/projects/portfolioDetailsMB.webp';*/

export const PROJECTS = [
    {
        id: '1',
        title: 'Patitas a Casa ',
        images: [
            patitasACasaMain,
            patatiasACasaLogo,
        ],
        description: `
        Through Patitas a Casa, users can easily navigate a world of wagging tails and whiskered wonders, 
        discovering profiles of pets in need of a caring home. Our app showcases comprehensive information about each pet,
        including their breed, age, personality traits, and heartwarming stories, enabling potential adopters to make well-informed decisions.
        `,
        intro: `
        "Patitas a Casa" is a professional and user-friendly website dedicated to the reporting and recovery of missing pets. Help us reunite lost dogs with their loving owners.
        `,
        about: {
            objetive: [
                `Facilitate pet adoption through detailed profiles and information, promoting loving homes for animals in need.`,
                `Create a pet reporting platform for swift reunions through community support and information sharing.`,
                `Provide resources for responsible pet ownership, promoting well-being and happiness for pets.`,
                `Partner with shelters, rescue groups, and clinics to streamline adoptions and expand app outreach.`,
            ],
            goal: [
                `Aim for successful pet adoptions, reaching a specific goal within a defined timeframe.`,
                `Promote successful reunifications, striving to reconnect lost pets with owners within a specific timeframe.`,
                `Continuously enhance app based on user input, aiming for specific updates within cycles.`,
                `Expand app's reach to new areas, targeting specific releases in set timeframes.`,
            ],
            tech: {
                main: [
                    react,
                    typeScript,
                    vite,
                    html,
                    css
                ],
                libraries: [
                    `aos ^2.3.4`,
                    `axios ^1.4.0`,
                    `react ^18.2.0`,
                    `react-slick ^0.29.0`,
                    `typescript ^5.0.2`,
                    `vite ^4.3.2`,
                ],
            },
        },
        demo: patitasACasaDemo,
        detailsImg: [
            patitasACasaDetailsPC,
            patitasACasaDetailsMB
        ],
        date: '2023',
        gitLink: 'https://github.com/adanj27/Patitas-a-casa/tree/frontend-development',
    },
    {
        id: '2',
        title: 'Program Language ',
        images: [
            programLanguageMain,
            programLanguageLogo,

        ],
        description: `
        The new program language, called "Fundamentals of Programming Languages" (FPL), is a functional programming language that is designed to help users understand how program languages work. 
        FPL is based on the lambda calculus, a formal system of computation that is used to study the semantics of programming languages. 
        FPL provides a number of features that make it well-suited for understanding program languages
        `,
        intro: `
        Set off on a journey of exploration with "FPL", learning about the inner workings of programming languages.
        `,
        about: {
            objetive: [
                `Develop a user-friendly functional programming language for exploring diverse programming paradigms.`,
                `Integrate lambda calculus in FPL's core for fundamental computing insights.`,
            ],
            goal: [
                `Implement core language features (higher-order functions, closures, pattern matching, recursion) in FPL effectively.`,
                `Develop a sustainable long-term strategy for global accessibility and maintenance.`
            ],
            tech: {
                main: [
                    racket
                ],
                libraries: [
                    `racket - scheme ^8.6`,
                    `eopl ^8.6`,
                    `sllgen ^1.0`
                ],
            },
        },
        demo: programLanguageDemo,
        detailsImg: [
            programLanguageDetailsPC,
            programLanguageDetailsMB
        ],
        date: '2022',
        gitLink: 'https://github.com/heisjuanda/Program-language',
    },
    {
        id: '3',
        title: 'Personal Portfolio ',
        images: [
            'portfolioMain',
            'portfolioLogo',
        ],
        description: `
        Welcome to my personal portfolio, a showcase of my experience as a professional and passionate web developer. My goal with this website is to provide a diverse collection of projects, experiences, and accomplishments that reflect my commitment to excellence and innovation.`,
        intro: `
        This "Personal Portfolio" provides an overview of my many efforts and accomplishments. Each project illustrates my dedication to constant improvement and keeping at the forefront of cutting-edge technology.`,
        about: {
            objetive: [
                `Craft an attractive, organized portfolio showcasing diverse projects.`,
                `Showcase technical prowess and creativity via concise project descriptions and case studies on the website.`,
                `Craft a responsive website with seamless user experience across multiple devices and screen sizes.`,
                `Showcase core competencies and unique selling points to facilitate quick recognition by potential employers or collaborators.`,
                `Present a polished and professional image by following industry standards and best practices in website design, style, and content.`
            ],
            goal: [
                `Illustrate problem-solving ability and value offered through concise project descriptions, images, and results.`,
                `Design visually appealing, professional website aligned with my brand and industry standards.`,
                `Ensure easy navigation for users to access different areas, projects, and contact information.`,
                `Build a responsive website for a consistent user experience on all devices (PCs, tablets, smartphones).`,
                `Monitor website traffic, user interaction, and portfolio success with web analytics.`
            ],
            tech: {
                main: [
                    react,
                    vite,
                    gsap,
                    netlify,
                    html,
                    css
                ],
                libraries: [
                `react ^18.2.0`,
                `vite ^4.3.9`,
                `gsap ^3.11.5`,
                `locomotive scroll ^4.1.4`,
                `lodash ^4.17.21`,
                `lottie react ^2.4.0`,
                `split-type ^0.3.3`,
                `matter ^0.19.0`
                ],
            },
        },
        demo: 'portfolioDemo',
        detailsImg: [
            'portfolioDetailsPC',
            'portfolioDetailsMB'
        ],
        date: '2023',
        gitLink: 'https://github.com/heisjuanda/porfolio-react',
    },
];

export const SOCIAL = [
    {
        id: 0,
        name: 'GitHub',
        link: 'https://github.com/heisjuanda',
    },
    {
        id: 1,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/juan-david-moreno-883a46233/',
    },
    {
        id: 2,
        name: 'Instagram',
        link: 'https://www.instagram.com/heisjuanda/',
    },
];

export const TECHSTACK = [
    gsap,
    angular,
    css,
    html,
    java,
    javaScript,
    netlify,
    python,
    racket,
    react,
    sass,
    typeScript,
    vite,
    webpack
];