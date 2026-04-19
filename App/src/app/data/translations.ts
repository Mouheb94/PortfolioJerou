export type Locale = 'fr' | 'en';

export interface TimelineEntry {
  year: string;
  title: string;
  org: string;
  description: string;
}

export interface TranslationSet {
  nav: {
    accueil: string;
    presentation: string;
    parcours: string;
    competences: string;
    realisations: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    cta: string;
    contact: string;
  };
  about: {
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      description: string;
      paragraphs?: string[];
      interests?: Array<{
        title: string;
        description: string;
      }>;
    }>;
  };
  parcours: {
    title: string;
    subtitle: string;
    items: TimelineEntry[];
  };
  skills: {
    title: string;
    subtitle: string;
    seeDetail: string;
    close: string;
    experience: string;
    level: string;
    projects: string;
  };
  projects: {
    title: string;
    subtitle: string;
    seeProject: string;
    techUsed: string;
    description: string;
    close: string;
    goToSkill: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: TranslationSet = {
    nav: {
      accueil: 'Accueil',
      presentation: 'Présentation',
      parcours: 'Mon parcours',
      competences: 'Compétences',
      realisations: 'Réalisations',
      contact: 'Contact',   
    },
    hero: {
      greeting: 'Bonjour, je suis',
      role: 'Expert en ingénierie logicielle / testeur QA en automatisation',
      description: 'Testeur automaticien  avec une forte appétence pour le développement logiciel et l’automatisation des tests.',
      cta: 'Présentation',
      contact: 'Me contacter',
    },
    about: {
      title: 'Présentation',
      subtitle: 'À propos de moi',
      cards: [
        {
          title: 'Présentation générale',
          description: '',
paragraphs: [
  "Actuellement en alternance chez Harmonie Mutuelle, je travaille en tant que testeur automaticien dans un environnement axé sur la qualité logicielle et la fiabilité des applications. En parallèle, je poursuis un diplôme d’Expert en Ingénierie Logicielle afin de renforcer mes compétences en automatisation et en qualité.",
  
  "Au quotidien, je participe à la création et à la maintenance de tests automatisés, aussi bien sur des applications web que sur des API. J’interviens également sur le lancement des campagnes de tests de non-régression (TNR) et le suivi des mises en production.",
  
  "Lors de mon expérience chez MSPE en tant que testeur QA, j’ai participé à des campagnes de tests fonctionnels et de non-régression, y compris en production. J’ai contribué à la conception des cas de tests, à la préparation des données et à la validation des résultats, tout en travaillant avec les utilisateurs lors des phases de recette.",
  
  "J’y ai également occupé un rôle de responsable qualité, avec des missions de suivi de la qualité des produits, de gestion des anomalies et d’amélioration continue des pratiques.",
  
  "En complément, j’ai obtenu la certification “ISTQB (11/2023, GASQ) ainsi que la certification “Appliquer la méthode DevOps pour optimiser le cycle de vie des applications” (09/2024, Simplon.co), ce qui m’a permis de consolider mes bases en qualité logicielle et en automatisation.."
]
        },
        {
          title: 'Mes valeurs',
          description: '',
            paragraphs: [
              "Au fil de mon parcours en qualité logicielle et en automatisation des tests, j’ai développé une approche basée sur la rigueur, la fiabilité et le sens des responsabilités. La qualité du code, la stabilité des applications et la pertinence des tests sont au cœur de ma manière de travailler.",
              "J’accorde une attention particulière à la qualité du code de test, à sa maintenabilité ainsi qu’à la clarté de la documentation des cas de test et des résultats. La fiabilité des scénarios automatisés et leur capacité à évoluer dans le temps sont pour moi essentielles.",
              "Le travail en équipe occupe également une place importante, notamment avec les développeurs et les équipes métier, afin de garantir une bonne compréhension des besoins et une couverture de test pertinente. Enfin, je suis dans une démarche constante d’amélioration continue, que ce soit dans l’optimisation des processus de test ou l’automatisation des tâches répétitives.",
            ]

        },
        {
          title: 'Projet professionnel',
          description: 'Évoluer dans un environnement où je peux combiner automatisation des tests, qualité logicielle et développement d’applications.',
        },
        {
          title: 'Qualités humaines',
          description: 'Je suis curieux, impliqué, à l’écoute et j’apprécie le travail en équipe dans un cadre collaboratif.',
        },
        {
          title: 'Centres d’intérêt',
          description: 'Voici quelques centres d’intérêt qui me définissent en dehors du travail.',
          interests: [
            {
              title: 'Automobile',
              description: 'J’aime l’univers automobile, entre technologie, design et performance.',
            },
            {
              title: 'Voyage',
              description: 'Voyager me permet de découvrir de nouveaux lieux, cultures et points de vue.',
            },
            {
              title: 'Football',
              description: 'Le football reste un vrai moment de partage, de passion et d’esprit d’équipe.',
            },
            {
              title: 'Jeux vidéo',
              description: 'Les jeux vidéo stimulent ma curiosité, ma logique et mon sens de la stratégie.',
            },
          ],
        },
      ],
    },
    parcours: {
      title: 'Mon parcours',
      subtitle: 'Expérience & Formation',
      items: [
        {
          year: '2024 - Présent',
          title: 'Développeur Full Stack Senior',
          org: 'Entreprise Tech',
          description: 'Développement d’applications web complexes avec React, Node.js et bases de données SQL/NoSQL.',
        },
        {
          year: '2022 - 2024',
          title: 'Développeur Front-End',
          org: 'Agence Digitale',
          description: 'Création d’interfaces utilisateur réactives et accessibles avec Angular et TypeScript.',
        },
        {
          year: '2020 - 2022',
          title: 'Développeur Junior',
          org: 'Startup Innovation',
          description: 'Participation au développement de plateformes SaaS avec des technologies modernes.',
        },
        {
          year: '2017 - 2020',
          title: 'Licence en informatique',
          org: 'Université',
          description: 'Formation complète en informatique : algorithmique, structures de données, génie logiciel.',
        },
      ],
    },
    skills: {
      title: 'Compétences',
      subtitle: 'Technologies & Outils',
      seeDetail: 'Voir le detail',
      close: 'Fermer',
      experience: 'Expérience',
      level: 'Niveau',
      projects: 'Projets',
    },
    projects: {
      title: 'Réalisations',
      subtitle: 'Projets récents',
      seeProject: 'Voir le projet',
      techUsed: 'Technologies utilisées',
      description: 'Description',
      close: 'Fermer',
      goToSkill: 'Voir cette compétence',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Contactez-moi',
      description:'Contactez-moi pour toute demande de collaboration ou de renseignements.',
      name: 'Nom',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'vous@exemple.com',
      subjectPlaceholder: 'Objet de votre message',
      messagePlaceholder: 'Écrivez votre message…',
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
};
