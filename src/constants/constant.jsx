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
},];

export const experience = [
    {
        title: "Lycée",
        date: "2020-2023",
        description: `
      <div>
     J'ai étudié à St Joseph de la Madeleine à Marseille, où j'ai obtenu mon Baccalauréat Européen en 2023.<br/>
     Pendant ce temps, j'ai développé une forte passion pour l'informatique et les mathématiques, qui m'a permis d'acquir de bonnes notions en programmation.<br/>
      J'ai aussi eu de l'expérience sur quelques langages de programmation (Python, HTML, CSS, et SQL).
      </div>`,
    },
    {
        title: "Ynov",
        date: "2023-2028",
        description: `
      <div>
      Je suis actuellement à Aix Ynov Campus, où je me focalise sur le développement back-end et la data science.<br>
        J'ai pu travailler sur différents projets qui m'ont aidé à améliorer mes compétences de programmation et comprendre l'application de l'informatique dans la vie courante.<br>
        J'ai appris beaucoup sur le développement d'infrastructure d'API (en ExpressJs, NestJs, PhP), mais aussi dans la programmation de modèle de machine learning.<br>
        Et tous les jours, je continue de découvrir de nouveau outils qui me font grandir en tant que développeur et étudiant.
      </div>`,
    },
    {
        title: "Nageur Sauveteur",
        date: "2023-2024",
        description: `
      <div>
     J'ai été nageur sauveteur à Marseille avec le Grand Bleu, où j'étais responsable de la sécurité d'enfants dans des piscines ou alors à la plage.<br>
    Ce rôle, que je fais pendants quelques étés pour avoir de l'argent, m'a appris la responsabilité, la discipline, et le travaille en équipe.<br>
    Cette expérience m'a aidé à grandir en maturité et m'a donné une compréhension claire de la signification d'avoir un travaille à responsabilité.

      </div>`,
    },
    {
        title: "Vimtails",
        date: "2024-2025",
        description: `
      <div>
     J'ai fait mon stage chez Vimtails, une start-up dans l'événementiel. Mes taches ont été de développer deux API, une pour le site WEB contenant tout le système des articles, et l'autre du système d'abonnement.<br>
Ma principale mission était l'API WEB dans la gestion d'articles, tags, des vues, de l'administration…<br>
Être partie de la team Vimtails a été une bonne expérience pour mon développement, vu qu'il a été mon premier vrai projet lucratif que j'ai réalisé.

      </div>`,
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
                name: 'PHP',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
            },
            {
                name: 'Python',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg',
            },
        ],
    },
    {
        title: 'Data & Tools',
        description: [
            {
                name: 'MySQL',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
            },
            {
                name: 'PostgreSQL',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
            },
            {
                name: 'Pandas',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
            },
            {
                name: 'Jupyter',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
            }
        ],
    },
    {
        title: 'DevOps & Others',
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
        ],
    },
];

export const base_url = import.meta.env.VITE_BASE_URL && import.meta.env.VITE_BASE_URL.trim() !== ''
    ? import.meta.env.VITE_BASE_URL
    : 'https://juliendnte.github.io/Portfolio';

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
        path: 'mail',
        link: 'mailto:julien.dante@ynov.com'
    }
]
