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
      fr: ['Tous les projets', 'Bibliotheques open-source'],
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
      fr: ['Infrastructure CI/CD', 'Deploiement cloud'],
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
      fr: 'Base relationnelle pour modeliser, stocker et requeter les donnees metier.',
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
      fr: 'Capacite a piloter les taches de bout en bout avec responsabilite.',
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
      fr: 'Automatisation des tests web fonctionnels et de non-regression.',
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
      fr: 'Orchestration des pipelines CI et des executions de tests.',
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
      fr: 'Validation manuelle et automatisee des API.',
    },
    projects: {
      fr: ['MNSI', 'IHM-GED'],
    },
  },
  {
    id: 'travail-equipe',
    name: 'Travail d equipe',
    icon: 'TE',
    category: 'Soft Skills',
    level: 90,
    experience: { fr: '3 ans' },
    description: {
      fr: 'Collaboration transverse avec equipes metier et techniques.',
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
      fr: 'Planification, priorisation et pilotage des activites.',
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
      fr: 'Communication claire des risques et des resultats de test.',
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
      fr: 'Projet ecole',
    },
    title: {
      fr: 'PMT - Project Management Tool',
    },
    shortDesc: {
      fr: 'Application web full-stack de gestion de projet (projets, taches, statuts, priorites, attribution), concue pour etre maintenable, testable et industrialisable.',
    },
    fullDesc: {
      fr: 'Projet ecole realise pour mettre en pratique une architecture complete front-end/back-end. L application couvre la creation de projets, la gestion des taches, les statuts, les priorites et l attribution. Le projet integre une execution conteneurisee avec Docker, un versionnement Git, et des pratiques CI/CD/tests pour garantir la qualite logicielle.',
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
      fr: 'Projet entreprise oriente qualite et fiabilite des parcours metier, avec automatisation des validations critiques.',
    },
    fullDesc: {
      fr: 'Projet entreprise mene dans un contexte de livraison continue, avec un fort enjeu de non-regression. Contribution a la strategie de test, a la priorisation des scenarios critiques et au suivi des anomalies jusqu a resolution.',
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
      fr: 'Projet realise en environnement entreprise avec des exigences elevees de qualite front-end. Validation fonctionnelle des parcours IHM, controle des regles metier, tests API associes, et remontes d anomalies detaillees pour accelerer les corrections.',
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
      fr: 'Projet entreprise pilote en qualite logicielle, avec automatisation et suivi des campagnes de tests de non-regression.',
    },
    fullDesc: {
      fr: 'Projet entreprise avec cycles de livraison frequents. Participation a l automatisation des tests critiques, a l execution via pipelines CI, et a l analyse des resultats pour securiser les mises en production.',
    },
    image: '/images/project-saas.jpg',
    skills: ['mr-souricate', 'travail-equipe', 'autonomie', 'communication', 'organisation'],
  },
  {
    id: 'gameup',
    contextType: 'school',
    context: {
      fr: 'Projet ecole',
    },
    title: {
      fr: 'GameUp',
    },
    shortDesc: {
      fr: 'Refonte d’une API Spring obsolète, sécurisation avec Spring Security, amélioration de l’architecture backend et intégration d’un système de recommandation intelligent avec FastAPI et Machine Learning.',
    },
    fullDesc: {
      fr: 'Projet ecole developpe pour travailler la conception d interfaces, la logique applicative et la qualite des parcours. Participation a la realisation technique, aux tests de validation et a l amelioration continue apres retours utilisateur.',
    },
    image: '/images/project-dashboard.jpg',
    skills: ['spring-boot', 'autonomie', 'organisation'],
  },
];
