export type Locale = 'fr' | 'en';

export interface WorkDetails {
  responsibility: string;
  status: string;
  mainMissions: string[];
  vision: string;
  relatedSkills?: string[];
  relatedProjects?: string[];
}

export interface EducationDetails {
  establishment: string;
  pedagogyVision: string;
  acquiredSkills?: string[];
  relatedProjects?: string[];
  referentials?: string[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  org: string;
  orgLogo: string;
  orgUrl?: string;
  type: 'work' | 'education';
  description: string;
  workDetails?: WorkDetails;
  educationDetails?: EducationDetails;
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
    seeDetail: string;
    close: string;
    responsibility: string;
    status: string;
    mainMissions: string;
    vision: string;
    relatedSkills: string;
    relatedProjects: string;
    establishment: string;
    pedagogyVision: string;
    acquiredSkills: string;
    referentials: string;
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
      description: 'Testeur automaticien avec une forte appétence pour le développement logiciel et l’automatisation des tests.',
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
              description: 'Passionné de football, je suis particulièrement les matchs de Manchester United ainsi que les compétitions comme la Premier League et l’UEFA Champions League. J’apprécie ce sport pour l’esprit d’équipe, la stratégie et l’intensité des matchs.',
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
      seeDetail: 'Voir le détail',
      close: 'Fermer',
      responsibility: 'Responsabilité',
      status: 'Statut',
      mainMissions: 'Missions principales',
      vision: 'Vision de l\'entreprise',
      relatedSkills: 'Compétences mobilisées',
      relatedProjects: 'Réalisations liées',
      establishment: 'À propos de l\'établissement',
      pedagogyVision: 'Vision pédagogique',
      acquiredSkills: 'Compétences acquises',
      referentials: 'Référentiels',
      items: [
        {
          year: 'Octobre 2024 — Présent',
          title: 'Testeur QA en Automatisation',
          org: 'Harmonie Mutuelle',
          orgLogo: 'data:image/png;base64,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',
          orgUrl: 'https://www.harmonie-mutuelle.fr',
          type: 'work',
          description: 'Participation à la stratégie QA transverse, automatisation des tests, non-régression et accompagnement des équipes de développement dans un environnement agile.',
          workDetails: {
            responsibility: 'En tant que Testeur QA en automatisation, j\'interviens au sein de la DSI Métier dans une équipe QA transverse, en collaboration étroite avec les Product Owners, les développeurs et les équipes produit. Mon rôle consiste à garantir la qualité des applications avant leur mise en production et leur validation par les référents métiers. J\'assure également l\'accompagnement des squads dans la co-construction des cas de tests ainsi que l\'amélioration continue des processus qualité.',
            status: 'Alternant',
            mainMissions: [
              'Élaboration des stratégies et plans de tests',
              'Exécution des campagnes de tests',
              'Tests de non-régression sur applications critiques',
              'Construction des jeux de données via SQL',
              'Détection et remontée des anomalies',
              'Reporting qualité et PV de recette',
              'Participation aux cérémonies Agile',
              'Co-construction des cas de tests avec les squads produits',
              'Veille technologique et amélioration continue',
            ],
            vision: 'Une organisation orientée qualité produit, amélioration continue et agilité à l\'échelle, où la QA intervient comme un levier stratégique de sécurisation des livraisons.',
            relatedSkills: [
              'Selenium Java',
              'Jenkins',
              'Postman',
              'Git',
              'Mr Suricate',
              'Autonomie',
              'Travail d\'équipe',
              'Organisation et pilotage de projet',
              'Communication',
            ],
            relatedProjects: ['MNSI', 'IHM-GED', 'Octopus'],
          },
        },
        {
          year: 'Octobre 2024 — Nouvembre 2026',
          title: 'Expert en Ingénierie Logicielle (Bac+5) — Niveau 7 RNCP',
          org: 'ISCOD',
          orgLogo: 'https://static.wixstatic.com/media/2565f3_06309f64759a4ffb8a31178d74d8366e~mv2.png',
          orgUrl: 'https://www.iscod.fr/',
          type: 'education',
          description: 'Formation en alternance spécialisée en architecture logicielle, développement full-stack et management de projet IT.',
          educationDetails: {
            establishment: 'L\'ISCOD est un établissement spécialisé dans les formations en alternance dans le digital, avec une pédagogie orientée pratique professionnelle.',
            pedagogyVision: 'L\'alternance permet de relier directement les cours théoriques aux problématiques réelles rencontrées en entreprise, favorisant l\'acquisition de compétences techniques et transversales. La pédagogie par l\'alternance permet une montée en compétences progressive, concrète et professionnalisante.',
            relatedProjects: ['PMT - Project Management Tool', 'GameUP'],
          },
        },
        {
          year: 'Février 2024 — Juin 2024',
          title: 'Certification DevOps & Automatisation des Tests (RS5044)',
          org: 'Automation Test Academy',
          orgLogo: 'https://media.licdn.com/dms/image/v2/D4E0BAQE81rTEPbghnA/company-logo_200_200/company-logo_200_200/0/1730725433693/ata_testing_logo?e=2147483647&v=beta&t=SdpfAConnjSLcq2exjN-8WKCcZ6VLWzMBmbJCJLdXyQ',
          orgUrl: 'https://fr.linkedin.com/company/ata-testing',
          type: 'education',
          description: 'Formation intensive orientée pratique permettant de maîtriser l\'automatisation des tests UI/API et l\'industrialisation des processus qualité.',
          educationDetails: {
            establishment: 'Automation Test Academy est un organisme de formation spécialisé dans les métiers de la qualité logicielle, de l\'automatisation des tests et des pratiques DevOps. L\'établissement propose des formations orientées pratique, basées sur des cas concrets et des mises en situation proches du monde professionnel.',
            pedagogyVision: 'La pédagogie est centrée sur la pratique et l\'acquisition de compétences directement applicables en entreprise. L\'objectif est de former des profils capables de concevoir, automatiser et industrialiser les tests dans un environnement DevOps, en maîtrisant les outils modernes et les bonnes pratiques du développement logiciel.',
            acquiredSkills: [
              'Élaboration d\'une stratégie complète d\'automatisation',
              'Tests UI avec Cypress',
              'Tests API avec Postman',
              'HTML / CSS / technologies Web',
              'Industrialisation des tests en environnement DevOps',
            ],
          },
        },
        {
          year: 'Novembre 2023',
          title: 'Certification ISTQB — Niveau Fondation',
          org: 'GASQ',
          orgLogo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GASQ_Logo.png',
          orgUrl: 'https://gasq.org',
          type: 'education',
          description: 'Certification internationale en assurance qualité logicielle, méthodologies de test et validation logicielle.',
          educationDetails: {
            establishment: 'GASQ est l\'organisme de certification officiel pour l\'ISTQB en France, délivrant les certifications en assurance qualité logicielle.',
            pedagogyVision: 'La certification ISTQB fournit une base solide en méthodologies de test, bonnes pratiques et frameworks reconnus internationalement pour la gestion de la qualité logicielle.',
            acquiredSkills: [
              'Fondamentaux des tests logiciels',
              'Méthodologies de test et stratégies',
              'Gestion des cas de test et plans de test',
              'Norms et normes en QA',
            ],
          },
        },
        {
          year: 'Octobre 2021 — Juillet 2023',
          title: 'Testeur QA Fonctionnel',
          org: 'MSPE',
          orgLogo: 'https://mspe.tn/wp-content/uploads/2024/04/cropped-logo-mspe.png',
          orgUrl: 'https://mspe.tn/company/',
          type: 'work',
          description: 'Validation fonctionnelle des applications et contrôle de conformité logicielle.',
          workDetails: {
            responsibility: 'En tant que Testeur QA fonctionnel, j\'étais en charge de la validation des applications en phase de recette afin de garantir leur conformité aux besoins fonctionnels et aux exigences qualité avant mise en production.',
            status: 'CDI',
            mainMissions: [
              'Préparer les jeux de données nécessaires à l\'exécution des tests (JDD)',
              'Concevoir et exécuter les tests fonctionnels et les tests de régression',
              'Vérifier la conformité des applications par rapport aux spécifications fonctionnelles',
              'Identifier, analyser et documenter les anomalies détectées',
              'Rédiger et suivre les tickets d\'anomalies jusqu\'à leur résolution',
              'Documenter les résultats des campagnes de tests',
              'Participer à la validation des livrables avant mise en production',
              'Contribuer à l\'amélioration continue des processus de test',
              'Collaborer avec les équipes projet pour comprendre les besoins et les évolutions fonctionnelles',
            ],
            vision: 'Une forte culture orientée qualité, rigueur et fiabilité des livraisons.',
            relatedSkills: ['Travail d\'équipe', 'Autonomie', 'Communication'],
          },
        },
        {
          year: 'Janvier 2019 — Septembre 2021',
          title: 'Responsable Contrôle Qualité',
          org: 'MSPE',
          orgLogo: 'https://mspe.tn/wp-content/uploads/2024/04/cropped-logo-mspe.png',
          orgUrl: 'https://mspe.tn/company/',
          type: 'work',
          description: 'Encadrement de l\'équipe qualité et supervision des processus de contrôle.',
          workDetails: {
            responsibility: 'Responsable du suivi et de l\'amélioration de la qualité produit tout au long des différentes étapes de production, avec pour objectif de garantir la conformité des produits aux exigences clients et aux normes qualité en vigueur.',
            status: 'CDI',
            mainMissions: [
              'Assurer le suivi de la qualité produit à chaque étape du processus de production',
              'Suivre et analyser les indicateurs qualité afin d\'identifier les écarts et mettre en place des actions correctives',
              'Réaliser l\'homologation de la production en série (planche de montage / station CFE)',
              'Traiter les réclamations qualité internes et clients à travers la méthode 8D Report',
              'Préparer et participer aux audits qualité : audit système, audit processus et audit produit',
              'Mettre en place et suivre les plans d\'action d\'amélioration continue selon la méthode PDCA',
              'Participer à la veille technologique et à l\'amélioration des méthodes de contrôle qualité',
              'Assurer la formation, l\'encadrement et la montée en compétences de l\'équipe qualité',
              'Superviser les agents qualité et garantir le respect des procédures internes',
              'Suivre les réclamations clients et assurer la coordination avec les différents services concernés',
              'Participer aux réunions techniques pour l\'analyse des problématiques qualité et la recherche de solutions',
            ],
            vision: 'Une forte culture orientée qualité, rigueur et fiabilité des livrables industriels.',
            relatedSkills: ['Travail d\'équipe', 'Autonomie', 'Communication'],
          },
        },
        {
          year: 'Juin 2017',
          title: 'Licence Fondamentale en Électronique, Électrotechnique et Automatique — Niveau Bac+3',
          org: 'ISSAT Sousse',
          orgLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Logo_Issat_Sousse.svg',
          orgUrl: 'https://issatso.rnu.tn',
          type: 'education',
          description: 'Formation universitaire orientée électronique industrielle, automatisation et systèmes techniques.',
          educationDetails: {
            establishment: 'L\'ISSAT Sousse est un institut universitaire spécialisé dans les formations techniques et industrielles, notamment en électronique, électrotechnique et automatique. L\'établissement prépare les étudiants à comprendre, analyser et améliorer les systèmes techniques utilisés dans l\'industrie.',
            pedagogyVision: 'La formation combine théorie et pratique à travers des cours, des travaux dirigés et des manipulations en laboratoire. Cette approche permet de développer la rigueur, l\'analyse et la résolution de problèmes, tout en acquérant une bonne compréhension des systèmes électroniques et automatisés.',
            acquiredSkills: [
              'Électronique industrielle',
              'Automatisation et systèmes de contrôle',
              'Microcontrôleurs et programmation',
              'Électrotechnique',
            ],
          },
        },
        {
          year: 'Juin 2013',
          title: 'Baccalauréat Technique — Niveau Bac',
          org: 'Lycée Saïd Bou Baker Moknine',
          orgLogo: 'https://scontent-cdg6-1.xx.fbcdn.net/v/t39.30808-1/299142797_378841944411344_3858827830682105847_n.jpg?stp=dst-jpg_tt6&cstp=mx1511x2015&ctp=s960x960&_nc_cat=103&ccb=1-7&_nc_sid=3ab345&_nc_ohc=8iO6kQ3ECUcQ7kNvwGphAJh&_nc_oc=AdrtU7q4NVxoziI2q9EiOFQYKfezQrFqpAlFZNlHIWNk18ZpUs0Sjos4oF0ICE31ASGjT16snyilfdWwPRmbLge4&_nc_zt=24&_nc_ht=scontent-cdg6-1.xx&_nc_gid=MpBPw7b_vB2YPhjNplowyA&_nc_ss=7d20f&oh=00_Af2nKHdSJKgmh0KmNZO5Wulwldh8Ikuy6HwRybBTABgLrQ&oe=69F6E330',
          orgUrl: 'https://www.facebook.com/100068566233250/?locale=he_IL',
          type: 'education',
          description: 'Formation secondaire technique avec spécialisation industrielle et technologique.',
          educationDetails: {
            establishment: 'Lycée Saïd Bou Baker Moknine est un établissement secondaire d\'enseignement technique offrant une formation spécialisée en domaines industriels.',
            pedagogyVision: 'L\'approche pédagogique combine enseignement théorique et apprentissage pratique via des travaux de laboratoire pour préparer les étudiants aux domaines industriels et techniques.',
            acquiredSkills: [
              'Électrotechnique',
              'Électronique appliquée',
              'Automatisation industrielle',
              'Conception technique',
            ],
          },
        },
      ],
    },
    skills: {
      title: 'Compétences',
      subtitle: 'Compétences techniques et humaines:',
      seeDetail: 'Voir le détail',
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
