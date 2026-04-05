export const projects = [{
    title: 'Forum',
    description: "Un forum de programmation avec des topics et discussions variés, managé par des admins et modérateurs.",
    image: '/Portfolio/images/forum.png',
    tags: ['Node.JS', 'SQL'],
    source: 'https://github.com/Juliendnte/forum.git',
    id: 0,
}, {
    title: 'Boutique JS',
    description: "Un site E-commerce de montre réalisé avec NodeJS, EJS, et SQL.",
    image: '/Portfolio/images/boutique.png',
    tags: ['Node.JS', 'SQL'],
    source: 'https://github.com/Juliendnte/Boutique-JS.git',
    id: 1,
}, {
    title: 'Project Blue',
    description: "Le jeu du 2048 avec des modes timer, élément, et reverse.",
    image: '/Portfolio/images/projet-blue.png',
    tags: ['HTML/CSS', 'JS'],
    source: 'https://github.com/Epikdimond-N/Projet-Blue.git',
    website: 'https://projet-blue-2048.kantin-fagniart.fr/',
    id: 2,
}, {
    title: 'Groupie Tracker',
    description: "Reproduction du site de spotify avec l'utilisation des API Spotify, Google, et YouTube.",
    image: '/Portfolio/images/groupie_tracker.png',
    tags: ['Go', 'API'],
    source: 'https://github.com/Juliendnte/Livrables_projet_groupie_tracker.git',
    id: 3,
},{
    title: 'Vimchess',
    description: "Un jeu d'échec en WebSocket",
    image: '/Portfolio/images/vimchess.png',
    tags: ['NestJS', 'Prisma', 'WebSocket'],
    source: 'https://github.com/orgs/ProjetDevUF/repositories',
    id: 4
},{
    title: 'ML Prediction Energy',
    description: 'Un model de ML pour faire de la prédiction de demande énergétique électrique en Occitanie',
    image: '/Portfolio/images/ia_prediction_energy.png',
    tags: ['ML', 'Pandas'],
    source: 'https://huggingface.co/spaces/Juliendnte/Prediction_Energy_Electric/tree/main',
    website: 'https://huggingface.co/spaces/Juliendnte/Prediction_Energy_Electric',
    id: 5
}];

export const experience = [
    {
        title: "Ynov",
        date: "2023-2028",
        description: `
      <div>
        Je suis actuellement à Aix Ynov Campus en 3ème année, où je me focalise sur le développement back-end, la data science et l'intelligence artificielle.<br>
        J'ai pu travailler sur différents projets qui m'ont aidé à améliorer mes compétences de programmation et comprendre l'application de l'informatique dans la vie courante.<br>
        J'ai appris beaucoup sur le développement d'infrastructure d'API (en ExpressJs, NestJs, PhP), mais aussi dans la programmation de modèle de machine learning.<br>
        Et tous les jours, je continue de découvrir de nouveaux outils qui me font grandir en tant que développeur et étudiant.
      </div>`,
    },
    {
        title: "Nageur Sauveteur",
        date: "2023-2024",
        description: `
      <div>
     J'ai été nageur sauveteur à Marseille avec le Grand Bleu, où j'étais responsable de la sécurité d'enfants dans des piscines ou alors à la plage.<br>
    Ce rôle, que j'ai fait en période saisonnière m'a appris la responsabilité, la discipline, et le travail en équipe.<br>
    Cette expérience m'a aidé à grandir en maturité et m'a donné une compréhension claire de la signification d'avoir un travail à responsabilité.
      </div>`,
    },
    {
        title: "Vimtails",
        date: "2024-2025",
        description: `
      <div>
     J'ai fait mon stage chez Vimtails, une start-up dans l'événementiel. Mes tâches ont été de développer deux API en NestJS, une pour le site WEB contenant tout le système des articles, et l'autre du système d'abonnement.<br>
     Ma principale mission était l'API WEB dans la gestion d'articles, tags, des vues, de l'administration…<br>
     Être partie de l'équipe Vimtails a été une bonne expérience pour mon développement, vu qu'il a été ma première expérience dans le monde de l'informatique.
      </div>`,
    },
    {
        title: "GendSkills",
        date: "2025",
        description: `
      <div>
        J'ai aussi effectué un stage à la Gendarmerie. Dans ce stage, nous devions réaliser un site web en VueJS, et une API REST en Symfony avec une équipe d'étudiant.<br>
        L'API était dans le cadre de la gestion des réservistes faites par les gendarmes. Dans cette équipe j'ai effectué la base de donnée et travaillé dans le développement de l'API<br>
        Ce que j'ai le plus apprécié dans ce stage est que mes missions étaient concrètes.<br>
        Elle m'a aussi appris la gestion d'équipe et de projet dans une période d'un mois.
      </div>`,
    },
    {
        title: "France Travail",
        date: "2025-2026",
        description: `
      <div>
        Je suis en ce moment alternant à France Travail en tant que Data Analyst.<br>
        Dans le cadre de mes missions, j'ai dû apprendre à utiliser Power BI, Power Automate, Excel, Power Apps et d'autres outils de la suite Office. <br>
        Cette alternance est importante pour moi, car elle me sollicite dans des missions impactantes pour l'optimisation et le gain de temps de plusieurs équipes. <br>
        Ma principale tâche a été d'optimiser les processus de plusieurs équipes RH en apportant une perspective nouvelle et des solutions innovantes.<br>
        J'ai aussi du analyser des jeux de données majoritairement RH et du effectué sur certains de mes projets des prédictons (Régresson Linéaire)</div>`,
    },
];

export const skills = [
    {
        title: 'Backend',
        description: [
            {
                name: 'NestJS',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
            },
            {
                name: 'Symfony',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg',
            },
            {
                name: 'Python',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg',
            },
            {
                name: 'Rust',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg'
            }
        ],
    },
    {
        title: 'Data & IA',
        description: [
            {
                name: 'MySQL',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
            },
            {
                name: 'Power BI',
                path: '/Portfolio/images/powerbi.png'
            },
            {
                name: 'Pandas',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
            },
            {
                name: 'Jupyter',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
            },
            {
                name: 'Tensorflow',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
            }
        ],
    },
    {
        title: 'Outils',
        description: [
            {
                name: 'Docker',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg',
            },
            {
                name: 'Linux',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
            },
            {
                name: 'Git',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
            },
            {
                name: 'JetBrains',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg',
            },
            {
                name: 'Jupyter',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg'
            },
            {
                name: 'Excel',
                path: 'https://raw.githubusercontent.com/LelouchFR/skill-icons/main/assets/excel-auto.svg'
            }
        ],
    },
];

export const media = [
    {
        path: 'github',
        link: 'https://github.com/Juliendnte'
    },
    {
        path: 'linkedin',
        link: 'https://www.linkedin.com/in/julien-dante-783537260/'
    },
    {
        path: 'instagram',
        link: 'https://www.instagram.com/julien.dnte/'
    },
    {
        path: 'hugging',
        link: 'https://huggingface.co/Juliendnte'
    }
]
