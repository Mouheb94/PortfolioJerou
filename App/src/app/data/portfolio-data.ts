export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: string;
  level: number;
  experience: { fr: string };
  description: { fr: string };
  projects: { fr: string[] };
}

export interface Project {
  id: string;
  contextType: 'school' | 'company';
  context: { fr: string };
  title: { fr: string };
  shortDesc: { fr: string };
  fullDesc: { fr: string };
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
    experience: { fr: '4 ans' },
    description: {
      fr: "Framework front-end puissant pour le développement d'applications web monopage. Maîtrise avancée des modules, services, directives et du système de routage.",
    },
    projects: {
      fr: ['Plateforme E-Commerce', 'Application de Gestion', 'Dashboard Analytics'],
    },
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'TS',
    category: 'Langages',
    level: 92,
    experience: { fr: '5 ans' },
    description: {
      fr: 'Surcouche typée de JavaScript. Utilisée dans tous mes projets pour assurer la qualité du code, la maintenabilité et la productivité.',
    },
    projects: {
      fr: ['Tous les projets', 'Bibliothèques open-source'],
    },
  },
  {
    id: 'react',
    name: 'React',
    icon: 'R',
    category: 'Front-end',
    level: 88,
    experience: { fr: '3 ans' },
    description: {
      fr: "Bibliothèque JavaScript pour la création d'interfaces utilisateur. Expert en hooks, Context API et gestion d'état avancée.",
    },
    projects: {
      fr: ['Portfolio personnel', 'Application SaaS'],
    },
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: 'N',
    category: 'Back-end',
    level: 85,
    experience: { fr: '4 ans' },
    description: {
      fr: 'Environnement d’exécution JavaScript côté serveur. Création d’API RESTful, de microservices et de serveurs temps réel avec Express et NestJS.',
    },
    projects: {
      fr: ['API E-Commerce', 'Service de notification'],
    },
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: 'TW',
    category: 'Front-end',
    level: 95,
    experience: { fr: '3 ans' },
    description: {
      fr: 'Framework CSS utilitaire pour un développement rapide d’interfaces modernes et responsives. Utilisé avec des composants personnalisés.',
    },
    projects: {
      fr: ['Portfolio', 'Dashboard Analytics', 'Application SaaS'],
    },
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: 'PG',
    category: 'Back-end',
    level: 80,
    experience: { fr: '3 ans' },
    description: {
      fr: 'Système de gestion de base de données relationnelle. Conception de schémas optimisés, requêtes complexes et indexation.',
    },
    projects: {
      fr: ['Plateforme E-Commerce', 'Application de Gestion'],
    },
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: 'D',
    category: 'DevOps',
    level: 75,
    experience: { fr: '2 ans' },
    description: {
      fr: 'Conteneurisation d’applications. Création d’environnements de développement reproductibles et déploiement via Docker Compose.',
    },
    projects: {
      fr: ['Infrastructure CI/CD', 'Déploiement cloud'],
    },
  },
  {
    id: 'git',
    name: 'Git',
    icon: 'G',
    category: 'DevOps',
    level: 90,
    experience: { fr: '5 ans' },
    description: {
      fr: 'Système de gestion de versions distribué. Pratique du Git Flow, revue de code et collaboration en équipe.',
    },
    projects: {
      fr: ['Tous les projets'],
    },
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    icon: 'SB',
    category: 'Back-end',
    level: 78,
    experience: { fr: '2 ans' },
    description: {
      fr: 'Framework Java pour construire des API robustes et maintenables.',
    },
    projects: {
      fr: ['PMT - Project Management Tool', 'MNSI'],
    },
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: 'MY',
    category: 'Back-end',
    level: 76,
    experience: { fr: '2 ans' },
    description: {
      fr: 'Base relationnelle pour modéliser, stocker et requêter les données métier.',
    },
    projects: {
      fr: ['PMT - Project Management Tool', 'IHM-GED'],
    },
  },
  {
    id: 'autonomie',
    name: 'Autonomie',
    icon: 'AU',
    category: 'Soft Skills',
    level: 88,
    experience: { fr: '3 ans' },
    description: {
      fr: 'Capacité à piloter les tâches de bout en bout avec responsabilité.',
    },
    projects: {
      fr: ['Tous les projets'],
    },
  },
  {
    id: 'selenium-java',
    name: 'Selenium Java',
    icon: 'SJ',
    category: 'QA',
    level: 92,
    experience: { fr: '3 ans' },
    description: {
      fr: 'Automatisation des tests web fonctionnels et de non-régression.',
    },
    projects: {
      fr: ['MNSI', 'Octopus'],
    },
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    icon: 'JK',
    category: 'QA/CI',
    level: 88,
    experience: { fr: '2 ans' },
    description: {
      fr: 'Orchestration des pipelines CI et des exécutions de tests.',
    },
    projects: {
      fr: ['MNSI', 'Octopus'],
    },
  },
  {
    id: 'postman',
    name: 'Postman',
    icon: 'PM',
    category: 'QA/API',
    level: 86,
    experience: { fr: '2 ans' },
    description: {
      fr: 'Validation manuelle et automatisée des API.',
    },
    projects: {
      fr: ['MNSI', 'IHM-GED'],
    },
  },
  {
    id: 'travail-equipe',
    name: 'Travail d\'équipe',
    icon: 'TE',
    category: 'Soft Skills',
    level: 90,
    experience: { fr: '3 ans' },
    description: {
      fr: 'Collaboration transverse avec équipes métier et techniques.',
    },
    projects: {
      fr: ['IHM-GED', 'MNSI'],
    },
  },
  {
    id: 'organisation',
    name: 'Organisation et pilotage de projet',
    icon: 'OR',
    category: 'Soft Skills',
    level: 87,
    experience: { fr: '3 ans' },
    description: {
      fr: 'Planification, priorisation et pilotage des activités.',
    },
    projects: {
      fr: ['Octopus', 'PMT - Project Management Tool'],
    },
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: 'CO',
    category: 'Soft Skills',
    level: 85,
    experience: { fr: '3 ans' },
    description: {
      fr: 'Communication claire des risques et des résultats de test.',
    },
    projects: {
      fr: ['GameUp', 'MNSI'],
    },
  },
];

export const projects: Project[] = [
  {
    id: 'pmt',
    contextType: 'school',
    context: {
      fr: 'Projet école',
    },
    title: {
      fr: 'PMT - Project Management Tool',
    },
    shortDesc: {
      fr: 'Application web full-stack de gestion de projet (projets, tâches, statuts, priorités, attribution), conçue pour être maintenable, testable et industrialisable.',
    },
    fullDesc: {
      fr: 'Projet école réalisé pour mettre en pratique une architecture complète front-end/back-end. L\'application couvre la création de projets, la gestion des tâches, les statuts, les priorités et l\'attribution. Le projet intègre une exécution conteneurisée avec Docker, un versionnement Git, et des pratiques CI/CD/tests pour garantir la qualité logicielle.',
    },
    image: '/images/project-gestion.jpg',
    skills: ['spring-boot', 'git', 'angular', 'docker', 'autonomie', 'organisation'],
  },
  {
    id: 'mnsi',
    contextType: 'company',
    context: {
      fr: 'Projet entreprise',
    },
    title: {
      fr: 'MNSI',
    },
    shortDesc: {
      fr: 'Projet entreprise orienté qualité et fiabilité des parcours métier, avec automatisation des validations critiques.',
    },
    fullDesc: {
      fr: 'Projet entreprise mené dans un contexte de livraison continue, avec un fort enjeu de non-régression. Contribution à la stratégie de test, à la priorisation des scénarios critiques et au suivi des anomalies jusqu\'à résolution.',
    },
    image: '/images/project-dashboard.jpg',
    skills: ['selenium-java', 'jenkins', 'git', 'travail-equipe', 'autonomie', 'communication', 'organisation'],
  },
  {
    id: 'ihm-ged',
    contextType: 'company',
    context: {
      fr: 'Projet entreprise',
    },
    title: {
      fr: 'IHM-GED',
    },
    shortDesc: {
      fr: 'Mise en place de tests automatisés front-end avec Selenium et validation des API backend avec Postman pour fiabiliser une nouvelle plateforme GED unifiant les systèmes Mutex et Harmonie Mutuelle.',
    },
    fullDesc: {
      fr: 'Projet réalisé en environnement entreprise avec des exigences élevées de qualité front-end. Validation fonctionnelle des parcours IHM, contrôle des règles métier, tests API associés, et remontées d\'anomalies détaillées pour accélérer les corrections.',
    },
    image: '/images/project-ecommerce.jpg',
    skills: ['selenium-java', 'postman', 'git', 'travail-equipe', 'autonomie', 'communication', 'organisation'],
  },
  {
    id: 'octopus',
    contextType: 'company',
    context: {
      fr: 'Projet entreprise',
    },
    title: {
      fr: 'Octopus',
    },
    shortDesc: {
      fr: 'Mise en place d’un projet de tests automatisés avec Mr Suricate pour fiabiliser l’application Octopus, utilisée pour la gestion des absences, des présences et le suivi des mises en production, afin de sécuriser les parcours critiques métier.',
    },
    fullDesc: {
      fr: 'Projet entreprise avec cycles de livraison fréquents. Participation à l\'automatisation des tests critiques, à l\'exécution via pipelines CI, et à l\'analyse des résultats pour sécuriser les mises en production.',
    },
    image: '/images/project-saas.jpg',
    skills: ['mr-suricate', 'travail-equipe', 'autonomie', 'communication', 'organisation'],
  },
  {
    id: 'gameup',
    contextType: 'school',
    context: {
      fr: 'Projet école',
    },
    title: {
      fr: 'GameUp',
    },
    shortDesc: {
      fr: 'Refonte d’une API Spring obsolète, sécurisation avec Spring Security, amélioration de l’architecture backend et intégration d’un système de recommandation intelligent avec FastAPI et Machine Learning.',
    },
    fullDesc: {
      fr: 'Projet école développé pour travailler la conception d\'interfaces, la logique applicative et la qualité des parcours. Participation à la réalisation technique, aux tests de validation et à l\'amélioration continue après retours utilisateur.',
    },
    image: '/images/project-dashboard.jpg',
    skills: ['spring-boot', 'autonomie', 'organisation'],
  },
];
