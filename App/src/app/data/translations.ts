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
      greeting: '',
      role: 'Expert en ingénierie logicielle / testeur QA en automatisation',
      description: 'Testeur automaticien  avec une forte appétence pour le développement logiciel et l’automatisation des tests.',
      cta: 'Présentation',
      contact: 'Me contacter',
    },
    about: {
      title: 'Présentation',
      subtitle: 'Présentation de mon parcours, mes valeurs et mon projet professionnel.',
      cards: [
        {
          title: 'Présentation générale',
          description: '',
paragraphs: [
  "Actuellement en alternance chez Harmonie Mutuelle en tant que testeur automaticien, avec une activité centrée sur la qualité logicielle et la fiabilité des applications. Cette expérience permet d’évoluer dans un environnement exigeant où la qualité des livrables et la stabilité des solutions sont essentielles. En parallèle, la préparation du diplôme d’Expert en Ingénierie Logicielle permet de renforcer les compétences en automatisation, qualité logicielle et ingénierie des systèmes.",
  
  "Les missions portent sur la création et la maintenance de tests automatisés, aussi bien sur des applications web que sur des API. Le lancement des campagnes de tests de non-régression (TNR) ainsi que le suivi des mises en production font également partie des responsabilités quotidiennes.",
  
  "Une expérience précédente chez MSPE en tant que testeur QA a permis de participer à des campagnes de tests fonctionnels et de non-régression, y compris en production. La conception des cas de tests, la préparation des données, la validation des résultats ainsi que la collaboration avec les utilisateurs lors des phases de recette ont renforcé la maîtrise des processus qualité.",
  
  "J’y ai également occupé un rôle de responsable qualité, avec des missions de suivi de la qualité des produits, de gestion des anomalies et d’amélioration continue des pratiques.",
  
  "En complément, l’obtention de la certification ISTQB (11/2023, GASQ) ainsi que de la certification “Appliquer la méthode DevOps pour optimiser le cycle de vie des applications” (09/2024, Simplon.co) a permis de consolider les compétences en qualité logicielle, automatisation et amélioration continue."
]
        },
        {
          title: 'Mes valeurs',
          description: '',
            paragraphs: [
              "La rigueur, la fiabilité et le sens des responsabilités se sont imposés comme des piliers essentiels tout au long du parcours en qualité logicielle et en automatisation des tests.",
              "La qualité du code, la stabilité des applications et la pertinence des tests occupent une place centrale dans la manière de travailler. Une attention particulière est portée à la maintenabilité du code de test, à la clarté de la documentation ainsi qu’à la fiabilité des scénarios automatisés sur le long terme.",
              "Le travail en équipe occupe également une place importante, notamment avec les développeurs et les équipes métier, afin de garantir une bonne compréhension des besoins et une couverture de test pertinente.",
              "L’amélioration continue reste une priorité constante, que ce soit dans l’optimisation des processus de test, la gestion de la qualité ou l’automatisation des tâches répétitives."
            ]

        },
        {
          title: 'Projet professionnel et personnel',
          description: "",
          paragraphs: [
            "L’objectif professionnel s’oriente vers l’automatisation des tests et l’amélioration de la qualité logicielle, avec un intérêt marqué pour l’ingénierie logicielle et la conception de solutions fiables et durables.",
            "À court et moyen terme, le renforcement des compétences dans la conception, la maintenance et l’intégration des tests automatisés au sein de pipelines CI/CD constitue une priorité, avec pour ambition l’obtention de la certification ISTQB spécialisée en test automation.",
            "À plus long terme, l’évolution visée concerne des rôles spécialisés en automatisation et en qualité logicielle, avec une contribution active à la mise en place de solutions robustes, performantes et efficaces.",
            "Sur le plan personnel, une grande importance est accordée à l’équilibre entre vie professionnelle et vie personnelle, notamment en consacrant du temps à la famille. Les voyages et la découverte de nouvelles cultures nourrissent également la curiosité et l’ouverture d’esprit. Un intérêt particulier est aussi porté au domaine automobile, avec l’envie d’en apprendre davantage sur ses évolutions et ses technologies.",
          ]
        },
        {
          title: 'Qualités humaines',
          description: '',
          paragraphs: [
            "Rigueur et sens du détail dans la validation des applications et la qualité du code.",
            "Capacité d’analyse et esprit critique pour identifier les anomalies et anticiper les risques.",
            "Autonomie et sens des responsabilités dans la gestion des tests et des campagnes de validation.",
            "Travail collaboratif et communication claire avec les équipes techniques et métier.",
            "Curiosité et volonté d’apprentissage continu, notamment autour des outils de test et des pratiques DevOps.",
          ]
        },
        {
          title: 'Centres d’intérêt',
          description: '',
          interests: [
            {
              title: 'Automobile',
              description: 'Je m’intéresse à l’univers automobile, notamment à l’évolution des technologies, au design, aux performances et à la fiabilité des véhicules.',
            },
            {
              title: 'Voyage',
              description: 'Voyager me permet de découvrir de nouveaux lieux, cultures et points de vue.',
            },
            {
              title: 'Football',
              description: 'Passionné de football, je suis particulièrement les matchs de Manchester United ainsi que les compétitions comme la Premier League et la UEFA Champions League. J’apprécie ce sport pour l’esprit d’équipe, la stratégie et l’intensité des matchs',
            },
            {
              title: 'Jeux vidéo',
              description: 'Les jeux vidéo, notamment League of Legends, qui me permet de développer ma réactivité, ma prise de décision et mon sens de la stratégie, tout en évoluant dans un environnement compétitif et en équipe.',
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
      subtitle: 'Compétences techniques et humaines:',
      seeDetail: 'Voir le detail',
      close: 'Fermer',
      experience: 'Expérience',
      level: 'Niveau',
      projects: 'Projets',
    },
    projects: {
      title: '',
      subtitle: 'Mes réalisations',
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
