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
    category: 'Frontend',
    level: 90,
    experience: { fr: '4 ans', en: '4 years' },
    description: {
      fr: "Framework front-end puissant pour le developpement d'applications web monopage. Maitrise avancee des modules, services, directives et du systeme de routing.",
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
    category: 'Languages',
    level: 92,
    experience: { fr: '5 ans', en: '5 years' },
    description: {
      fr: 'Surcouche typee de JavaScript. Utilise dans tous mes projets pour assurer la qualite du code, la maintenabilite et la productivite.',
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
    category: 'Frontend',
    level: 88,
    experience: { fr: '3 ans', en: '3 years' },
    description: {
      fr: "Bibliotheque JavaScript pour la creation d'interfaces utilisateur. Expert en hooks, context API, et gestion d'etat avancee.",
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
    category: 'Backend',
    level: 85,
    experience: { fr: '4 ans', en: '4 years' },
    description: {
      fr: 'Environnement d execution JavaScript cote serveur. Creation d APIs RESTful, de microservices et de serveurs temps reel avec Express et NestJS.',
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
    category: 'Frontend',
    level: 95,
    experience: { fr: '3 ans', en: '3 years' },
    description: {
      fr: 'Framework CSS utilitaire pour un developpement rapide d interfaces modernes et responsives. Utilise avec des composants personnalises.',
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
    category: 'Backend',
    level: 80,
    experience: { fr: '3 ans', en: '3 years' },
    description: {
      fr: 'Systeme de gestion de base de donnees relationnelle. Conception de schemas optimises, requetes complexes et indexation.',
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
      fr: 'Conteneurisation d applications. Creation d environnements de developpement reproductibles et deploiement via Docker Compose.',
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
      fr: 'Systeme de gestion de versions distribue. Pratique du Git Flow, revue de code et collaboration en equipe.',
      en: 'Distributed version control system. Git Flow practice, code review, and team collaboration.',
    },
    projects: {
      fr: ['Tous les projets'],
      en: ['All projects'],
    },
  },
];

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: {
      fr: 'Plateforme E-Commerce',
      en: 'E-Commerce Platform',
    },
    shortDesc: {
      fr: 'Application e-commerce complete avec gestion des produits et paiements.',
      en: 'Complete e-commerce application with product management and payments.',
    },
    fullDesc: {
      fr: 'Plateforme e-commerce complete construite avec Angular et Node.js. Fonctionnalites incluant un catalogue de produits dynamique, panier d achat en temps reel, integration de paiement Stripe, tableau de bord administrateur avec analytiques, et systeme de gestion des stocks.',
      en: 'Complete e-commerce platform built with Angular and Node.js. Features include a dynamic product catalog, real-time shopping cart, Stripe payment integration, admin dashboard with analytics, and inventory management system.',
    },
    image: '/images/project-ecommerce.jpg',
    skills: ['angular', 'typescript', 'nodejs', 'postgresql'],
  },
  {
    id: 'dashboard',
    title: {
      fr: 'Dashboard Analytics',
      en: 'Analytics Dashboard',
    },
    shortDesc: {
      fr: 'Tableau de bord interactif pour la visualisation de donnees en temps reel.',
      en: 'Interactive dashboard for real-time data visualization.',
    },
    fullDesc: {
      fr: 'Dashboard analytique construit avec React et TypeScript. Visualisation de donnees en temps reel avec des graphiques interactifs, filtrage avance, export de rapports et systeme de notifications personnalisables.',
      en: 'Analytics dashboard built with React and TypeScript. Real-time data visualization with interactive charts, advanced filtering, report export, and customizable notification system.',
    },
    image: '/images/project-dashboard.jpg',
    skills: ['react', 'typescript', 'tailwind', 'nodejs'],
  },
  {
    id: 'gestion',
    title: {
      fr: 'Application de Gestion',
      en: 'Management Application',
    },
    shortDesc: {
      fr: 'Outil de gestion de projet avec suivi des taches et collaboration.',
      en: 'Project management tool with task tracking and collaboration.',
    },
    fullDesc: {
      fr: 'Application de gestion de projets d entreprise construite avec Angular. Interface intuitive pour la gestion des taches, diagrammes de Gantt, suivi du temps, assignation de ressources et generation de rapports.',
      en: 'Enterprise project management app built with Angular. Intuitive interface for task management, Gantt charts, time tracking, resource allocation, and report generation.',
    },
    image: '/images/project-gestion.jpg',
    skills: ['angular', 'typescript', 'postgresql', 'docker'],
  },
  {
    id: 'saas',
    title: {
      fr: 'Application SaaS',
      en: 'SaaS Application',
    },
    shortDesc: {
      fr: 'Plateforme SaaS multi-tenant avec authentification et facturation.',
      en: 'Multi-tenant SaaS platform with authentication and billing.',
    },
    fullDesc: {
      fr: 'Plateforme SaaS multi-tenant avec authentification securisee, gestion d abonnements, API RESTful, et interface d administration complete. Architecture microservices deployee avec Docker.',
      en: 'Multi-tenant SaaS platform with secure authentication, subscription management, RESTful API, and complete admin interface. Microservices architecture deployed with Docker.',
    },
    image: '/images/project-saas.jpg',
    skills: ['react', 'typescript', 'nodejs', 'docker', 'tailwind', 'git'],
  },
];
