import { DiJava, DiHtml5, DiJavascript} from "react-icons/di";
import { SiGit,  SiCss3, SiMysql } from "react-icons/si";

export const Skills = [
    {
        slug: "Js",
        Component: DiJavascript,
        title: "JavaScript",
        Description: () => <>JavaScript adds interactivity and dynamic content.</>,
    },
    {
        slug: "java",
        Component: DiJava,
        title: "Java",
        Description: () => <>Android apps and Lambda functions</>,
    },
    {
        slug: "html",
        Component: DiHtml5,
        title: "HTML",
        Description: () => <>Static webpages and portfolio projects</>,
    },
    {
        slug: "css",
        Component: SiCss3,
        title: "CSS",
        Description: () => <>Styling of my webpages</>,
    },

    {
        slug: "sql",
        Component: SiMysql,
        title: "MySQL",
        Description: () => <>Storing client and user data</>,
    },
    {
        slug: "git",
        Component: SiGit,
        title: "Git",
        Description: () => <>Code management and open source contributions</>,
    },
];

export const projects = [
    {
        title: 'Forum',
        description: "Coder is a programming forum featuring numerous topics, posts, and messages, managed by admins and moderators to ensure smooth operation and community engagement.",
        image: '/Portfolio/images/forum.png',
        tags: ['Node.JS', 'Wampserver', 'SQL'],
        source: 'https://github.com/Juliendnte/forum.git',
        id: 0,
    },
    {
        title: 'Boutique JS',
        description: "Horo Haven is a watch e-commerce site developed in NodeJS, EJS, and a SQL database. The project is divided into two servers: a backend server for the API and a frontend server for the user interface. " ,
        image: '/Portfolio/images/boutique.png',
        tags: ['Node.JS', 'Wampserver', 'SQL'],
        source: 'https://github.com/Juliendnte/Boutique-JS.git',
        id: 1,
    },
    {
        title: 'Groupie Tracker',
        description: "Groupie tracker is a project using the Spotify API. It's a site where I try to re-make the spotify web-app in a site with also using Google and YouTube API. ",
        image: '/Portfolio/images/groupie_tracker.png',
        tags: ['Go', 'API', "JSON"],
        source: 'https://github.com/Juliendnte/Livrables_projet_groupie_tracker.git',
        id: 2,
    },
    {
        title: 'Project Blue',
        description: "Project Blue is the 2048 game with some changes, we add 3 mode: a mode that add a chrono, another that reverse the numbers, and a last one that add randomly a element on tile",
        image: '/Portfolio/images/projet-blue.png',
        tags: ['HTML/CSS', 'JS'],
        source: 'https://github.com/Epikdimond-N/Projet-Blue.git',
        id: 3,
    }
];