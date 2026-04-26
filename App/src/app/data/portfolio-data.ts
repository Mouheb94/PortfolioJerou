export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: string;
  level: number;
  experience: { fr: string; en: string };
  description: { fr: string; en: string };
  projects: { fr: string[]; en: string[] };
}

export interface Project {
  id: string;
  contextType: 'school' | 'company';
  context: { fr: string; en: string };
  title: { fr: string; en: string };
  shortDesc: { fr: string; en: string };
  fullDesc: { fr: string; en: string };
  image: string;
  skills: string[];
  link?: string;
}

export const skills: Skill[] = [
  {
    id: 'angular',
    name: 'Angular',
    icon: 'A',
    category: 'Front-end',
    level: 90,
    experience: { fr: '4 ans', en: '4 years' },
    description: {
      fr: "Framework front-end puissant pour le développement d'applications web monopage. Maîtrise avancée des modules, services, directives et du système de routage.",
      en: 'Powerful front-end framework for single-page web application development. Advanced mastery of modules, services, directives, and the routing system.',
    },
    projects: {
      fr: ['Plateforme E-Commerce', 'Application de Gestion', 'Dashboard Analytics'],
      en: ['E-Commerce Platform', 'Management App', 'Analytics Dashboard'],
    },
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'TS',
    category: 'Langages',
    level: 92,
    experience: { fr: '5 ans', en: '5 years' },
    description: {
      fr: 'Surcouche typée de JavaScript. Utilisée dans tous mes projets pour assurer la qualité du code, la maintenabilité et la productivité.',
      en: 'Typed superset of JavaScript. Used in all projects to ensure code quality, maintainability, and productivity.',
    },
    projects: {
      fr: ['Tous les projets', 'Bibliotheques open-source'],
      en: ['All projects', 'Open-source libraries'],
    },
  },
  {
    id: 'react',
    name: 'React',
    icon: 'R',
    category: 'Front-end',
    level: 88,
    experience: { fr: '3 ans', en: '3 years' },
    description: {
      fr: "Bibliothèque JavaScript pour la création d'interfaces utilisateur. Expert en hooks, Context API et gestion d'état avancée.",
      en: 'JavaScript library for building user interfaces. Expert in hooks, context API, and advanced state management.',
    },
    projects: {
      fr: ['Portfolio personnel', 'Application SaaS'],
      en: ['Personal portfolio', 'SaaS Application'],
    },
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: 'N',
    category: 'Back-end',
    level: 85,
    experience: { fr: '4 ans', en: '4 years' },
    description: {
      fr: 'Environnement d’exécution JavaScript côté serveur. Création d’API RESTful, de microservices et de serveurs temps réel avec Express et NestJS.',
      en: 'Server-side JavaScript runtime. Building RESTful APIs, microservices, and real-time servers with Express and NestJS.',
    },
    projects: {
      fr: ['API E-Commerce', 'Service de notification'],
      en: ['E-Commerce API', 'Notification Service'],
    },
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: 'TW',
    category: 'Front-end',
    level: 95,
    experience: { fr: '3 ans', en: '3 years' },
    description: {
      fr: 'Framework CSS utilitaire pour un développement rapide d’interfaces modernes et responsives. Utilisé avec des composants personnalisés.',
      en: 'Utility-first CSS framework for rapid development of modern, responsive interfaces. Used with custom components.',
    },
    projects: {
      fr: ['Portfolio', 'Dashboard Analytics', 'Application SaaS'],
      en: ['Portfolio', 'Analytics Dashboard', 'SaaS Application'],
    },
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: 'PG',
    category: 'Back-end',
    level: 80,
    experience: { fr: '3 ans', en: '3 years' },
    description: {
      fr: 'Système de gestion de base de données relationnelle. Conception de schémas optimisés, requêtes complexes et indexation.',
      en: 'Relational database management system. Designing optimized schemas, complex queries, and indexing.',
    },
    projects: {
      fr: ['Plateforme E-Commerce', 'Application de Gestion'],
      en: ['E-Commerce Platform', 'Management App'],
    },
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: 'D',
    category: 'DevOps',
    level: 75,
    experience: { fr: '2 ans', en: '2 years' },
    description: {
      fr: 'Conteneurisation d’applications. Création d’environnements de développement reproductibles et déploiement via Docker Compose.',
      en: 'Application containerization. Creating reproducible dev environments and deployment via Docker Compose.',
    },
    projects: {
      fr: ['Infrastructure CI/CD', 'Deploiement cloud'],
      en: ['CI/CD Infrastructure', 'Cloud deployment'],
    },
  },
  {
    id: 'git',
    name: 'Git',
    icon: 'G',
    category: 'DevOps',
    level: 90,
    experience: { fr: '5 ans', en: '5 years' },
    description: {
      fr: 'Système de gestion de versions distribué. Pratique du Git Flow, revue de code et collaboration en équipe.',
      en: 'Distributed version control system. Git Flow practice, code review, and team collaboration.',
    },
    projects: {
      fr: ['Tous les projets'],
      en: ['All projects'],
    },
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    icon: 'SB',
    category: 'Back-end',
    level: 78,
    experience: { fr: '2 ans', en: '2 years' },
    description: {
      fr: 'Framework Java pour construire des API robustes et maintenables.',
      en: 'Java framework to build robust and maintainable APIs.',
    },
    projects: {
      fr: ['PMT - Project Management Tool', 'MNSI'],
      en: ['PMT - Project Management Tool', 'MNSI'],
    },
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: 'MY',
    category: 'Back-end',
    level: 76,
    experience: { fr: '2 ans', en: '2 years' },
    description: {
      fr: 'Base relationnelle pour modeliser, stocker et requeter les donnees metier.',
      en: 'Relational database to model, store, and query business data.',
    },
    projects: {
      fr: ['PMT - Project Management Tool', 'IHM-GED'],
      en: ['PMT - Project Management Tool', 'IHM-GED'],
    },
  },
  {
    id: 'autonomie',
    name: 'Autonomie',
    icon: 'AU',
    category: 'Soft Skills',
    level: 88,
    experience: { fr: '3 ans', en: '3 years' },
    description: {
      fr: 'Capacite a piloter les taches de bout en bout avec responsabilite.',
      en: 'Ability to drive tasks end-to-end with ownership.',
    },
    projects: {
      fr: ['Tous les projets'],
      en: ['All projects'],
    },
  },
  {
    id: 'selenium-java',
    name: 'Selenium Java',
    icon: 'SJ',
    category: 'QA',
    level: 92,
    experience: { fr: '3 ans', en: '3 years' },
    description: {
      fr: 'Automatisation des tests web fonctionnels et de non-regression.',
      en: 'Automation of functional and regression web tests.',
    },
    projects: {
      fr: ['MNSI', 'Octopus'],
      en: ['MNSI', 'Octopus'],
    },
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    icon: 'JK',
    category: 'QA/CI',
    level: 88,
    experience: { fr: '2 ans', en: '2 years' },
    description: {
      fr: 'Orchestration des pipelines CI et des executions de tests.',
      en: 'CI pipeline orchestration and test execution automation.',
    },
    projects: {
      fr: ['MNSI', 'Octopus'],
      en: ['MNSI', 'Octopus'],
    },
  },
  {
    id: 'postman',
    name: 'Postman',
    icon: 'PM',
    category: 'QA/API',
    level: 86,
    experience: { fr: '2 ans', en: '2 years' },
    description: {
      fr: 'Validation manuelle et automatisee des API.',
      en: 'Manual and automated API validation.',
    },
    projects: {
      fr: ['MNSI', 'IHM-GED'],
      en: ['MNSI', 'IHM-GED'],
    },
  },
  {
    id: 'travail-equipe',
    name: 'Travail d equipe',
    icon: 'TE',
    category: 'Soft Skills',
    level: 90,
    experience: { fr: '3 ans', en: '3 years' },
    description: {
      fr: 'Collaboration transverse avec equipes metier et techniques.',
      en: 'Cross-functional collaboration with business and technical teams.',
    },
    projects: {
      fr: ['IHM-GED', 'MNSI'],
      en: ['IHM-GED', 'MNSI'],
    },
  },
  {
    id: 'organisation',
    name: 'Organisation',
    icon: 'OR',
    category: 'Soft Skills',
    level: 87,
    experience: { fr: '3 ans', en: '3 years' },
    description: {
      fr: 'Planification, priorisation et pilotage des activites.',
      en: 'Planning, prioritization, and activity management.',
    },
    projects: {
      fr: ['Octopus', 'PMT - Project Management Tool'],
      en: ['Octopus', 'PMT - Project Management Tool'],
    },
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: 'CO',
    category: 'Soft Skills',
    level: 85,
    experience: { fr: '3 ans', en: '3 years' },
    description: {
      fr: 'Communication claire des risques et des resultats de test.',
      en: 'Clear communication of risks and test outcomes.',
    },
    projects: {
      fr: ['GameUp', 'MNSI'],
      en: ['GameUp', 'MNSI'],
    },
  },
];

export const projects: Project[] = [
  {
    id: 'pmt',
    contextType: 'school',
    context: {
      fr: 'Projet ecole',
      en: 'School project',
    },
    title: {
      fr: 'PMT - Project Management Tool',
      en: 'PMT - Project Management Tool',
    },
    shortDesc: {
      fr: 'Application web full-stack de gestion de projet (projets, taches, statuts, priorites, attribution), concue pour etre maintenable, testable et industrialisable.',
      en: 'Full-stack web app for project management (projects, tasks, statuses, priorities, assignment), designed to be maintainable, testable, and production-ready.',
    },
    fullDesc: {
      fr: 'Projet ecole realise pour mettre en pratique une architecture complete front-end/back-end. L application couvre la creation de projets, la gestion des taches, les statuts, les priorites et l attribution. Le projet integre une execution conteneurisee avec Docker, un versionnement Git, et des pratiques CI/CD/tests pour garantir la qualite logicielle.',
      en: 'School project built to practice a full front-end/back-end architecture. The app covers project creation, task management, status tracking, priorities, and assignment. It integrates Dockerized execution, Git versioning, and CI/CD/testing practices to ensure software quality.',
    },
    image: '/images/project-gestion.jpg',
    skills: ['angular', 'spring-boot', 'mysql', 'docker', 'git', 'autonomie'],
  },
  {
    id: 'mnsi',
    contextType: 'company',
    context: {
      fr: 'Projet entreprise',
      en: 'Company project',
    },
    title: {
      fr: 'MNSI',
      en: 'MNSI',
    },
    shortDesc: {
      fr: 'Projet entreprise oriente qualite et fiabilite des parcours metier, avec automatisation des validations critiques.',
      en: 'Company project focused on quality and reliability of business workflows, with automated validation of critical scenarios.',
    },
    fullDesc: {
      fr: 'Projet entreprise mene dans un contexte de livraison continue, avec un fort enjeu de non-regression. Contribution a la strategie de test, a la priorisation des scenarios critiques et au suivi des anomalies jusqu a resolution.',
      en: 'Company project delivered in a continuous delivery context, with strong non-regression requirements. Contributed to test strategy, prioritization of critical scenarios, and defect tracking until resolution.',
    },
    image: '/images/project-dashboard.jpg',
    skills: ['selenium-java', 'jenkins', 'postman', 'git', 'autonomie'],
  },
  {
    id: 'ihm-ged',
    contextType: 'company',
    context: {
      fr: 'Projet entreprise',
      en: 'Company project',
    },
    title: {
      fr: 'IHM-GED',
      en: 'IHM-GED',
    },
    shortDesc: {
      fr: 'Projet entreprise centre sur une interface de gestion electronique de documents et des parcours utilisateurs sensibles.',
      en: 'Company project centered on a document management interface and sensitive user journeys.',
    },
    fullDesc: {
      fr: 'Projet realise en environnement entreprise avec des exigences elevees de qualite front-end. Validation fonctionnelle des parcours IHM, controle des regles metier, tests API associes, et remontes d anomalies detaillees pour accelerer les corrections.',
      en: 'Project delivered in a company context with high front-end quality requirements. Functional validation of UI journeys, business rules checks, related API tests, and detailed bug reporting to speed up fixes.',
    },
    image: '/images/project-ecommerce.jpg',
    skills: ['angular', 'postman', 'mysql', 'git', 'travail-equipe'],
  },
  {
    id: 'octopus',
    contextType: 'company',
    context: {
      fr: 'Projet entreprise',
      en: 'Company project',
    },
    title: {
      fr: 'Octopus',
      en: 'Octopus',
    },
    shortDesc: {
      fr: 'Projet entreprise pilote en qualite logicielle, avec automatisation et suivi des campagnes de tests de non-regression.',
      en: 'Company project focused on software quality, with automation and regression campaign tracking.',
    },
    fullDesc: {
      fr: 'Projet entreprise avec cycles de livraison frequents. Participation a l automatisation des tests critiques, a l execution via pipelines CI, et a l analyse des resultats pour securiser les mises en production.',
      en: 'Company project with frequent release cycles. Contributed to automating critical tests, CI pipeline execution, and result analysis to secure production releases.',
    },
    image: '/images/project-saas.jpg',
    skills: ['selenium-java', 'jenkins', 'docker', 'git', 'organisation'],
  },
  {
    id: 'gameup',
    contextType: 'school',
    context: {
      fr: 'Projet ecole',
      en: 'School project',
    },
    title: {
      fr: 'GameUp',
      en: 'GameUp',
    },
    shortDesc: {
      fr: 'Projet ecole autour d une application orientee experience utilisateur, avec conception front-end et qualite fonctionnelle.',
      en: 'School project around a user-experience-oriented application, with front-end design and functional quality.',
    },
    fullDesc: {
      fr: 'Projet ecole developpe pour travailler la conception d interfaces, la logique applicative et la qualite des parcours. Participation a la realisation technique, aux tests de validation et a l amelioration continue apres retours utilisateur.',
      en: 'School project developed to practice interface design, application logic, and user journey quality. Contributed to implementation, validation tests, and iterative improvements after user feedback.',
    },
    image: '/images/project-dashboard.jpg',
    skills: ['angular', 'git', 'autonomie', 'communication'],
  },
];
