export type CompetencyDomain = 'technical' | 'human';

export interface CompetencyProof {
  title: string;
  anecdote: string;
  implementationProof: string;
  resultAndValue: string;
  realizationLabel: string;
  realizationFragment?: string;
}

export interface CompetencyArticle {
  intro: string;
  definition: string;
  professionalContext: string;
  currentTopic: string;
  selfReview: string;
  priorityInProfile: string;
  acquisitionSpeed: string;
  advice: string;
  mediumTermGoal: string;
  trainings: string[];
  achievements: Array<{ label: string; fragment?: string }>;
  proofs: CompetencyProof[];
}

export interface Competency {
  id: string;
  name: string;
  logo: string;
  level: number;
  domain: CompetencyDomain;
  summary: { fr: string; en: string };
  article: CompetencyArticle;
}

export const competencies: Competency[] = [
  {
    id: 'selenium-java',
    name: 'Selenium Java',
    logo: 'https://cdn.simpleicons.org/selenium/43B02A',
    level: 80,
    domain: 'technical',
    summary: {
      fr: 'Automatisation des tests fonctionnels et de non-regression sur applications web avec une approche fiable et maintenable.',
      en: 'Functional and regression test automation on web applications with a reliable and maintainable approach.',
    },
    article: {
      intro:
        'Cette competence est au coeur de ma pratique QA. Elle me permet de transformer des parcours critiques en scripts robustes et reutilisables.',
      definition:
        'Selenium Java est un socle d automatisation des tests web qui permet de verifier de facon systematique les comportements attendus d une application.',
      professionalContext:
        'Dans un contexte agile avec des mises en production frequentes, cette competence est indispensable pour reduire le risque de regression.',
      currentTopic:
        'Elle s inscrit dans l actualite de l industrialisation des tests et de l acceleration des cycles CI/CD.',
      proofs: [
        {
          title: 'TNR automatisee sur parcours de souscription',
          anecdote:
            'J ai automatise les parcours de souscription les plus sensibles avec des jeux de donnees parametrables et des verifications metier.',
          implementationProof:
            'La competence a ete mise en oeuvre par la creation d une architecture Page Object, une gestion des waits explicites et des rapports exploitables pour les equipes.',
          resultAndValue:
            'Le temps de validation avant release a baisse et les regressions critiques ont ete detectees plus tot. Ma valeur ajoutee a ete de fiabiliser les campagnes et de rendre les resultats actionnables.',
          realizationLabel: 'Plateforme E-Commerce',
          realizationFragment: 'project-ecommerce',
        },
        {
          title: 'Stabilisation des scripts flaky',
          anecdote:
            'J ai repris un lot de tests instables en production en identifiant les causes racines liees aux temps de chargement et a la synchronisation.',
          implementationProof:
            'J ai introduit des helpers de synchronisation et des strategies de retry controlees dans les scenarios critiques.',
          resultAndValue:
            'Le taux de faux positifs a fortement diminue. J ai apporte une meilleure confiance dans les executions automatiques quotidiennes.',
          realizationLabel: 'Application de Gestion',
          realizationFragment: 'project-gestion',
        },
      ],
      selfReview:
        'Niveau de maitrise avance. Je suis autonome sur la conception, la maintenance et l evolution des suites automatisees.',
      priorityInProfile:
        'Competence prioritaire dans mon profil d expert QA automatisation, car elle impacte directement la qualite des livraisons.',
      acquisitionSpeed:
        'Acquisition rapide grace a une pratique continue en alternance et a des besoins projet immediats.',
      advice:
        'Conserver des scenarios lisibles, limiter la duplication et privilegier la stabilite des tests a la quantite de scripts.',
      mediumTermGoal:
        'Atteindre un niveau expert sur les patterns d automatisation resilients et la parallelisation des executions.',
      trainings: ['Preparation ISTQB Test Automation', 'Perfectionnement sur les frameworks de tests UI modernes'],
      achievements: [
        { label: 'MNSI', fragment: 'project-mnsi' },
        { label: 'IHM-GED', fragment: 'project-ihm-ged' },
      ],
    },
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    logo: 'https://cdn.simpleicons.org/jenkins/D24939',
    level: 78,
    domain: 'technical',
    summary: {
      fr: 'Lancement des campagnes TNR, suivi des pipelines de validation et integration des tests dans les processus CI/CD.',
      en: 'Execution of regression campaigns, validation pipeline tracking, and test integration in CI/CD processes.',
    },
    article: {
      intro:
        'Jenkins me permet de transformer des tests isoles en processus de controle continu integre au delivery.',
      definition:
        'Jenkins est un orchestrateur de pipelines qui automatise l execution des tests, la publication des rapports et les controles qualite.',
      professionalContext:
        'Dans mes missions QA, Jenkins est utilise pour lancer les TNR a chaque etape cle des mises en production.',
      currentTopic:
        'Cette competence est liee a l actualite DevOps: fiabilite des releases, tra+�abilite et feedback rapide.',
      proofs: [
        {
          title: 'Pipeline de non-regression quotidienne',
          anecdote:
            'J ai mis en place un pipeline Jenkins planifie executant les tests critiques chaque nuit avec publication automatique des rapports.',
          implementationProof:
            'J ai configure les stages, les artefacts de test et les notifications afin que les equipes re+�oivent une vision claire des echecs.',
          resultAndValue:
            'Les anomalies ont ete detectees avant l ouverture de la journee de travail, ce qui a reduit les blocages. Ma valeur ajoutee a ete d installer un rythme de qualite proactif.',
          realizationLabel: 'Infrastructure CI/CD',
        },
      ],
      selfReview:
        'Niveau solide avec autonomie sur la configuration des jobs QA et l interpretation des resultats.',
      priorityInProfile:
        'Competence centrale pour connecter mes activites de test au cycle de vie logiciel.',
      acquisitionSpeed:
        'Acquisition progressive mais rapide des bonnes pratiques via la pratique quotidienne.',
      advice:
        'Commencer simple, versionner les pipelines et ajouter les controles qualite par increment.',
      mediumTermGoal:
        'Renforcer mes competences sur les pipelines as code et l optimisation des temps d execution.',
      trainings: ['Autoformation Jenkins declaratif', 'Approfondissement CI/CD orientee qualite'],
      achievements: [
        { label: 'MNSI', fragment: 'project-mnsi' },
      ],
    },
  },
  {
    id: 'postman',
    name: 'Postman',
    logo: 'https://cdn.simpleicons.org/postman/FF6C37',
    level: 76,
    domain: 'technical',
    summary: {
      fr: 'Tests manuels et automatises des API, validation des echanges back-end et controle de la qualite des services.',
      en: 'Manual and automated API testing, backend exchange validation, and service quality control.',
    },
    article: {
      intro:
        'Postman est ma boite a outils principale pour valider rapidement la fiabilite et la coherence des API.',
      definition:
        'Postman est une plateforme de test API permettant de construire des collections, de verifier les reponses et d automatiser des scenarios de validation.',
      professionalContext:
        'Je l utilise lors des phases de recette et de non-regression pour securiser les flux entre front-end et back-end.',
      currentTopic:
        'Cette competence suit l evolution des architectures API-first et la necessite de contractualiser les services.',
      proofs: [
        {
          title: 'Validation de contrats API avant livraison',
          anecdote:
            'J ai construit une collection de tests couvrant les cas nominal, limites et erreurs pour des endpoints critiques.',
          implementationProof:
            'J ai implemente des assertions sur les statuts, schemas et temps de reponse, puis integre les executions dans les campagnes de validation.',
          resultAndValue:
            'Les ecarts de contrat ont ete identifies avant integration front, evitant des retours tardifs. J ai apporte une meilleure robustesse des echanges techniques.',
          realizationLabel: 'API E-Commerce',
        },
      ],
      selfReview:
        'Niveau avance sur la conception de collections et le diagnostic des anomalies API.',
      priorityInProfile:
        'Competence strategique car de nombreuses anomalies critiques se situent dans les interfaces de services.',
      acquisitionSpeed:
        'Progression rapide grace a son usage quotidien sur des flux metier prioritaires.',
      advice:
        'Documenter les preconditions, reutiliser les variables d environnement et maintenir des jeux de tests representatifs.',
      mediumTermGoal:
        'Monter en competence sur les tests de performance API et la gouvernance des contrats.',
      trainings: ['Autoformation sur les tests contractuels', 'Perfectionnement sur Newman et execution CI'],
      achievements: [
        { label: 'MNSI', fragment: 'project-mnsi' },
        { label: 'IHM-GED', fragment: 'project-ihm-ged' },
      ],
    },
  },
  {
    id: 'git',
    name: 'Git',
    logo: 'https://cdn.simpleicons.org/git/F05032',
    level: 75,
    domain: 'technical',
    summary: {
      fr: 'Gestion des versions, suivi des evolutions et collaboration efficace avec les equipes de developpement.',
      en: 'Version control, change tracking, and efficient collaboration with development teams.',
    },
    article: {
      intro:
        'Git structure ma contribution quotidienne et garantit la tra+�abilite des evolutions qualite.',
      definition:
        'Git est un systeme de gestion de versions distribue qui permet de suivre, partager et securiser les modifications de code.',
      professionalContext:
        'Je l utilise pour versionner les scripts de tests, collaborer avec les developpeurs et fiabiliser les livraisons.',
      currentTopic:
        'Cette competence est essentielle dans les pratiques modernes de revue de code et de collaboration asynchrone.',
      proofs: [
        {
          title: 'Structuration des branches de tests automatises',
          anecdote:
            'J ai propose une convention de branches et de messages de commit pour clarifier les evolutions de scripts QA.',
          implementationProof:
            'Mise en oeuvre via merge requests documentees et revues croisees avec les equipes projet.',
          resultAndValue:
            'La lisibilite de l historique s est amelioree et les reprises de contexte sont plus rapides. Ma valeur ajoutee a ete d elever la qualite de collaboration.',
          realizationLabel: 'Tous les projets',
        },
      ],
      selfReview:
        'Niveau confirme avec maitrise des workflows courants et des bonnes pratiques collaboratives.',
      priorityInProfile:
        'Competence transversale qui supporte toutes mes activites techniques.',
      acquisitionSpeed:
        'Acquisition reguliere et constante depuis mes premiers projets.',
      advice:
        'Faire des commits atomiques, ecrire des messages explicites et relire ses diffs avant partage.',
      mediumTermGoal:
        'Approfondir les strategies de release management et les politiques de branching avancees.',
      trainings: ['Veille continue sur Git Flow et trunk-based development'],
      achievements: [
        { label: 'PMT - Project Management Tool', fragment: 'project-pmt' },
        { label: 'MNSI', fragment: 'project-mnsi' },
        { label: 'IHM-GED', fragment: 'project-ihm-ged' },
      ],
    },
  },
  {
    id: 'angular',
    name: 'Angular',
    logo: 'https://cdn.simpleicons.org/angular/DD0031',
    level: 73,
    domain: 'technical',
    summary: {
      fr: 'Comprehension et manipulation des applications front-end pour la validation des interfaces et des parcours utilisateurs.',
      en: 'Understanding and handling front-end apps to validate interfaces and user journeys.',
    },
    article: {
      intro:
        'Angular me permet de comprendre en profondeur le front-end pour mieux anticiper les risques de qualite.',
      definition:
        'Angular est un framework front-end structure qui facilite la construction d interfaces modulaires et maintenables.',
      professionalContext:
        'Je mobilise cette competence pour analyser les parcours utilisateurs et concevoir des tests alignes avec le comportement de l application.',
      currentTopic:
        'Elle est en phase avec l actualite des applications web riches et des enjeux d experience utilisateur.',
      proofs: [
        {
          title: 'Validation ciblee des composants critiques',
          anecdote:
            'Sur une application de gestion, j ai cartographie les composants les plus sensibles afin de prioriser les scenarios de test.',
          implementationProof:
            'J ai exploite la logique de routing et les etats de formulaires pour ecrire des cas de test alignes sur l usage reel.',
          resultAndValue:
            'Les anomalies d interface ont ete detectees plus tot et les recettes ont gagne en pertinence. Ma valeur ajoutee a ete d associer vision QA et comprehension front.',
          realizationLabel: 'Application de Gestion',
          realizationFragment: 'project-gestion',
        },
      ],
      selfReview:
        'Niveau intermediaire a avance, avec bonne autonomie pour l analyse fonctionnelle et la validation UI.',
      priorityInProfile:
        'Competence importante pour renforcer ma polyvalence entre qualite et developpement.',
      acquisitionSpeed:
        'Acquisition continue au fil des projets et de la pratique en contexte reeel.',
      advice:
        'Comprendre le routing et la gestion d etat avant d automatiser massivement des parcours.',
      mediumTermGoal:
        'Atteindre un niveau avance de conception front pour accelerer la creation de tests pertinents.',
      trainings: ['Autoformation avancee sur Angular moderne', 'Pratique de tests E2E sur applications Angular'],
      achievements: [
        { label: 'PMT - Project Management Tool', fragment: 'project-pmt' },
      ],
    },
  },
  {
    id: 'docker',
    name: 'Docker',
    logo: 'https://cdn.simpleicons.org/docker/2496ED',
    level: 70,
    domain: 'technical',
    summary: {
      fr: 'Utilisation d environnements isoles et reproductibles pour faciliter l execution des tests et la stabilite des applications.',
      en: 'Use of isolated and reproducible environments to ease test execution and improve app stability.',
    },
    article: {
      intro:
        'Docker m aide a maitriser la reproductibilite, point cle pour des validations fiables.',
      definition:
        'Docker est une technologie de conteneurisation qui encapsule application et dependances dans un environnement portable.',
      professionalContext:
        'Dans mes activites QA, cette competence est utile pour standardiser les environnements de test.',
      currentTopic:
        'Elle est au coeur des pratiques cloud-native et de la fiabilite des chaines de livraison.',
      proofs: [
        {
          title: 'Environnement de test reproductible',
          anecdote:
            'J ai contribue a la mise en place d un environnement de test compose de services conteneurises pour limiter les ecarts entre postes.',
          implementationProof:
            'Mise en oeuvre via des configurations partagables et des scripts de lancement documentes pour l equipe.',
          resultAndValue:
            'Les differences d environnement ont diminue, les executions de tests sont devenues plus predictibles. Ma valeur ajoutee a ete de reduire les pertes de temps en investigation.',
          realizationLabel: 'Application SaaS',
          realizationFragment: 'project-saas',
        },
      ],
      selfReview:
        'Niveau intermediaire avec capacite a utiliser et adapter des environnements de test conteneurises.',
      priorityInProfile:
        'Competence importante pour soutenir l automatisation et la stabilite du delivery.',
      acquisitionSpeed:
        'Acquisition progressive au rythme des besoins projet et des pratiques DevOps.',
      advice:
        'Documenter les images utilisees et versionner les configurations pour garantir la reproductibilite.',
      mediumTermGoal:
        'Renforcer la maitrise de Docker Compose avance et des pratiques d optimisation des images.',
      trainings: ['Autoformation Docker Compose avance', 'Veille sur les bonnes pratiques conteneurisation'],
      achievements: [
        { label: 'PMT - Project Management Tool', fragment: 'project-pmt' },
      ],
    },
  },
  {
    id: 'travail-equipe',
    name: 'Travail d equipe',
    logo: 'https://api.iconify.design/mdi/account-group.svg?color=%2314b8a6',
    level: 79,
    domain: 'human',
    summary: {
      fr: 'Collaboration quotidienne avec les developpeurs, les equipes metier et les testeurs pour garantir la qualite des livrables.',
      en: 'Daily collaboration with developers, business teams, and testers to ensure delivery quality.',
    },
    article: {
      intro:
        'Le travail d equipe est la competence humaine qui maximise l impact des competences techniques.',
      definition:
        'Le travail d equipe consiste a coordonner des profils differents autour d un objectif commun de qualite et de valeur metier.',
      professionalContext:
        'Dans les projets QA, cette competence est decisive pour partager les risques et aligner les priorites.',
      currentTopic:
        'Elle est en resonance avec les organisations agiles et la co-construction entre metier, dev et qualite.',
      proofs: [
        {
          title: 'Animation de points de synchronisation QA',
          anecdote:
            'J ai organise des points de suivi courts entre QA, dev et metier pour qualifier rapidement les anomalies detectees.',
          implementationProof:
            'J ai formalise des criteres de priorisation et des regles de communication communes.',
          resultAndValue:
            'Les decisions ont ete prises plus vite et les incomprehensions ont diminue. Ma valeur ajoutee a ete de fluidifier la collaboration.',
          realizationLabel: 'MNSI',
          realizationFragment: 'project-gestion',
        },
      ],
      selfReview:
        'Niveau eleve, avec une posture orientee cooperation et resultat collectif.',
      priorityInProfile:
        'Competence majeure dans mon metier actuel, car la qualite est toujours une responsabilite partagee.',
      acquisitionSpeed:
        'Acquisition continue, acceleree par des contextes projet transverses et exigeants.',
      advice:
        'Rendre visibles les risques, parler le langage metier et maintenir un climat constructif.',
      mediumTermGoal:
        'Developper davantage mes competences de facilitation et de pilotage transverse.',
      trainings: ['Lecture et pratique sur la communication inter-equipes', 'Ateliers internes d amelioration continue'],
      achievements: [
        { label: 'MNSI', fragment: 'project-mnsi' },
        { label: 'IHM-GED', fragment: 'project-ihm-ged' },
        { label: 'Octopus', fragment: 'project-octopus' },
      ],
    },
  },
  {
    id: 'autonomie',
    name: 'Autonomie',
    logo: 'https://api.iconify.design/mdi/rocket-launch.svg?color=%2314b8a6',
    level: 77,
    domain: 'human',
    summary: {
      fr: 'Gestion des campagnes de tests, suivi des anomalies et prise d initiative sur les actions correctives.',
      en: 'Management of test campaigns, defect follow-up, and initiative on corrective actions.',
    },
    article: {
      intro:
        'L autonomie me permet de tenir un haut niveau de fiabilite dans les phases critiques de validation.',
      definition:
        'L autonomie est la capacite a organiser son activite, arbitrer les priorites et prendre des decisions pertinentes sans supervision constante.',
      professionalContext:
        'En QA, elle se traduit par la capacite a gerer une campagne de test de bout en bout.',
      currentTopic:
        'Cette competence est centrale dans les equipes agiles qui attendent de la responsabilisation et de la proactivite.',
      proofs: [
        {
          title: 'Pilotage autonome d une campagne TNR',
          anecdote:
            'Lors d une release sensible, j ai construit le plan de test, suivi les anomalies et propose les priorites de correction.',
          implementationProof:
            'J ai structure les scenarios critiques, assure un suivi quotidien et fourni une synthese claire au chef de projet.',
          resultAndValue:
            'La release a ete securisee dans les delais. Ma valeur ajoutee a ete de maintenir un pilotage fiable en toute autonomie.',
          realizationLabel: 'PMT - Project Management Tool',
          realizationFragment: 'project-pmt',
        },
      ],
      selfReview:
        'Niveau eleve avec une bonne capacite a assumer la responsabilite des livrables qualite.',
      priorityInProfile:
        'Competence prioritaire dans mon metier actuel, surtout sur les periodes de forte charge.',
      acquisitionSpeed:
        'Acquisition rapide, rendue possible par des missions confiees tres tot avec responsabilites fortes.',
      advice:
        'Documenter ses decisions, communiquer tot en cas de risque et rester ouvert au feedback.',
      mediumTermGoal:
        'Renforcer l autonomie sur des perimetres plus larges de pilotage qualite.',
      trainings: ['Autoformation sur les methodes de priorisation', 'Amelioration continue de ma gestion du temps'],
      achievements: [
        { label: 'PMT - Project Management Tool', fragment: 'project-pmt' },
        { label: 'MNSI', fragment: 'project-mnsi' },
        { label: 'IHM-GED', fragment: 'project-ihm-ged' },
        { label: 'Octopus', fragment: 'project-octopus' },
        { label: 'GameUp', fragment: 'project-gameup' },
      ],
    },
  },
  {
    id: 'organisation',
    name: 'Organisation et pilotage de projet',
    logo: 'https://api.iconify.design/mdi/calendar-check.svg?color=%2314b8a6',
    level: 74,
    domain: 'human',
    summary: {
      fr: 'Planification des activites de test, priorisation des taches et respect des delais dans un environnement projet.',
      en: 'Test activity planning, task prioritization, and deadline management in project environments.',
    },
    article: {
      intro:
        'L organisation est la condition pour tenir la qualite dans des contraintes de delai fortes.',
      definition:
        'L organisation consiste a structurer les activites, planifier les actions et prioriser selon les risques et les objectifs.',
      professionalContext:
        'Je l applique pour preparer les campagnes de tests et optimiser la couverture dans le temps disponible.',
      currentTopic:
        'Cette competence repond aux enjeux actuels de delivery rapide sans compromis sur la qualite.',
      proofs: [
        {
          title: 'Planification ciblee d une recette',
          anecdote:
            'J ai decoupe la campagne de test en lots priorises selon criticite metier et probabilite de regression.',
          implementationProof:
            'J ai utilise une matrice de priorisation et un suivi quotidien des avancements pour reallouer rapidement les efforts.',
          resultAndValue:
            'Les delais ont ete respectes avec une couverture des risques critiques. Ma valeur ajoutee a ete de rendre la validation previsible.',
          realizationLabel: 'PMT - Project Management Tool',
          realizationFragment: 'project-pmt',
        },
      ],
      selfReview:
        'Niveau eleve avec une approche methodique et orientee priorites.',
      priorityInProfile:
        'Competence essentielle pour garantir la fiabilite des livraisons dans mon metier.',
      acquisitionSpeed:
        'Acquisition reguliere, renforcee par la gestion simultanee de plusieurs chantiers.',
      advice:
        'Toujours distinguer urgent et important, puis aligner le plan de test sur les risques metier.',
      mediumTermGoal:
        'Monter en maturite sur les indicateurs de pilotage QA et la prevision de charge.',
      trainings: ['Formation interne gestion des priorites', 'Pratique de tableaux de pilotage qualite'],
      achievements: [
        { label: 'PMT - Project Management Tool', fragment: 'project-pmt' },
        { label: 'MNSI', fragment: 'project-mnsi' },
        { label: 'IHM-GED', fragment: 'project-ihm-ged' },
        { label: 'Octopus', fragment: 'project-octopus' },
        { label: 'GameUp', fragment: 'project-gameup' },
      ],
    },
  },
  {
    id: 'communication',
    name: 'Communication',
    logo: 'https://api.iconify.design/mdi/message-text.svg?color=%2314b8a6',
    level: 72,
    domain: 'human',
    summary: {
      fr: 'Echanges clairs avec les equipes techniques et fonctionnelles pour assurer une bonne comprehension des besoins.',
      en: 'Clear exchanges with technical and business teams to ensure shared understanding of requirements.',
    },
    article: {
      intro:
        'Une communication claire est indispensable pour transformer un constat technique en action utile.',
      definition:
        'La communication professionnelle est la capacite a transmettre une information fiable, contextualisee et exploitable par les parties prenantes.',
      professionalContext:
        'En QA, elle permet de qualifier les anomalies, argumenter les risques et faciliter la prise de decision.',
      currentTopic:
        'Elle est cruciale dans les environnements hybrides et les equipes pluridisciplinaires distribuees.',
      proofs: [
        {
          title: 'Formalisation des anomalies a fort impact',
          anecdote:
            'J ai standardise mes tickets d anomalies avec contexte, etapes de reproduction, criticite et proposition de verification.',
          implementationProof:
            'Chaque anomalie etait accompagnee de preuves et d un message adapte au destinataire (metier ou technique).',
          resultAndValue:
            'Le temps de traitement des anomalies a ete reduit et les allers-retours ont baisse. Ma valeur ajoutee a ete de rendre la communication orientee action.',
          realizationLabel: 'MNSI',
          realizationFragment: 'project-mnsi',
        },
      ],
      selfReview:
        'Niveau confirme avec capacite a adapter le message au public cible.',
      priorityInProfile:
        'Competence forte dans mon profil, car elle relie l analyse QA a la decision projet.',
      acquisitionSpeed:
        'Acquisition continue, marquee par des situations de coordination multi-acteurs.',
      advice:
        'Etre factuel, structurer les messages et toujours expliciter l impact metier d un probleme.',
      mediumTermGoal:
        'Perfectionner la communication de synthese pour les comites de pilotage.',
      trainings: ['Ateliers de communication professionnelle', 'Pratique de restitution orale orientee decision'],
      achievements: [
        { label: 'MNSI', fragment: 'project-mnsi' },
        { label: 'IHM-GED', fragment: 'project-ihm-ged' },
        { label: 'Octopus', fragment: 'project-octopus' },
      ],
    },
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    logo: 'https://cdn.simpleicons.org/springboot/6DB33F',
    level: 78,
    domain: 'technical',
    summary: {
      fr: 'Framework Java pour construire des API robustes, modulaires et maintenables.',
      en: 'Java framework to build robust, modular, and maintainable APIs.',
    },
    article: {
      intro:
        'Spring Boot me permet de structurer des backends solides et lisibles, avec un vrai souci de separation des responsabilites et de maintenabilite.',
      definition:
        'Spring Boot est un framework Java qui simplifie la creation d applications serveur en apportant auto-configuration, injection de dependances et demarrage rapide.',
      professionalContext:
        'Dans un contexte professionnel, il est ideal pour concevoir des API stables, testables et faciles a faire evoluer au rythme des besoins metier.',
      currentTopic:
        'Il s inscrit dans les pratiques actuelles de microservices, d API-first et d industrialisation des applications back-end.',
      proofs: [
        {
          title: 'Conception d une API de gestion de projet',
          anecdote:
            'J ai exploite Spring Boot pour structurer une API de gestion de projets avec des ressources metier claires et des controles d entree explicites.',
          implementationProof:
            'La mise en oeuvre a repose sur des controllers, services et repositories bien separes, avec gestion centralisee des erreurs et validation des donnees.',
          resultAndValue:
            'Le backend est devenu plus lisible et plus simple a faire evoluer. Ma valeur ajoutee a ete de mettre en place une architecture propre et testable.',
          realizationLabel: 'PMT - Project Management Tool',
          realizationFragment: 'project-pmt',
        },
        {
          title: 'Industrialisation du backend entreprise',
          anecdote:
            'Sur un projet entreprise, j ai consolide les endpoints existants pour fiabiliser les echanges avec le front et limiter les regressions.',
          implementationProof:
            'J ai travaille sur la stabilite des contrats API, la gestion des exceptions et la coherence des reponses serveur.',
          resultAndValue:
            'Les integrations sont devenues plus fluides et les corrections plus rapides. J ai apporte une meilleure robustesse du socle technique.',
          realizationLabel: 'MNSI',
          realizationFragment: 'project-mnsi',
        },
      ],
      selfReview:
        'Niveau intermediaire a avance. Je suis a l aise pour construire une API claire, mais je veux encore renforcer les patterns avanc+�s et la securisation.',
      priorityInProfile:
        'Competence technique importante pour evoluer vers des architectures full-stack plus solides et plus industrialisees.',
      acquisitionSpeed:
        'Bonne vitesse d acquisition grace a la pratique sur des projets concrets et a la repetition des besoins back-end.',
      advice:
        'Travailler tres tot la structure du backend et ne pas sous-estimer la qualite des contrats API.',
      mediumTermGoal:
        'Atteindre un niveau plus avance sur les microservices, la securisation et les tests d integration Spring.',
      trainings: ['Perfectionnement Spring Security', 'Approfondissement des tests Spring Boot'],
      achievements: [
        { label: 'PMT - Project Management Tool', fragment: 'project-pmt' },
        { label: 'GameUp', fragment: 'project-gameup' },
      ],
    },
  },
  {
    id: 'mr-souricate',
    name: 'Mr Souricate',
    logo: 'https://api.iconify.design/mdi/squirrel.svg?color=%2314b8a6',
    level: 72,
    domain: 'technical',
    summary: {
      fr: 'Competence technique orientee analyse, automatisation et suivi des actions avec une logique de productivite.',
      en: 'Technical skill focused on analysis, automation, and action tracking with a productivity mindset.',
    },
    article: {
      intro:
        'Mr Souricate represente pour moi une competence technique de productivite et de pilotage, utile pour organiser l information, automatiser les actions repetitives et garder une vision claire des priorites.',
      definition:
        'Mr Souricate peut etre compris comme un outil ou une approche technique d assistance a l analyse et au suivi, permettant de structurer, prioriser et fiabiliser des activites de travail.',
      professionalContext:
        'Dans un environnement professionnel, ce type de competence est pertinent pour gagner du temps, standardiser les actions et reduire les oublis dans le suivi des taches ou des anomalies.',
      currentTopic:
        'Cette competence s inscrit dans les pratiques actuelles d automatisation, d aide a la decision et de simplification des flux de travail.',
      proofs: [
        {
          title: 'Organisation et suivi des actions',
          anecdote:
            'J ai utilise cette logique de travail pour structurer des actions recurrentes et garder une trace claire des priorites a traiter.',
          implementationProof:
            'J ai mis en place une methode simple pour classer, retrouver et suivre les elements importants au fil des cycles projet.',
          resultAndValue:
            'Les traitements sont devenus plus fluides et les oublis ont diminue. Ma valeur ajoutee a ete d apporter une meilleure discipline d execution.',
          realizationLabel: 'GameUp',
          realizationFragment: 'project-gameup',
        },
        {
          title: 'Appui a la qualite et au suivi',
          anecdote:
            'Sur des activites techniques, j ai adopte cette approche pour faciliter le suivi des points ouverts et des corrections a realiser.',
          implementationProof:
            'La methode a repose sur un suivi simple, un classement clair des informations et une priorisation visuelle des actions.',
          resultAndValue:
            'Le traitement des sujets a ete plus rapide et plus lisible pour les equipes. J ai apporte une vraie aide a la coordination.',
          realizationLabel: 'IHM-GED',
          realizationFragment: 'project-ihm-ged',
        },
      ],
      selfReview:
        'Niveau intermediaire. Je maitrise bien l utilite de cette competence pour structurer mon travail, mais je veux encore la pousser en automatisation et en productivite.',
      priorityInProfile:
        'Competence utile pour renforcer ma rigueur, ma vitesse d execution et ma capacite a traiter plusieurs sujets en parallel.',
      acquisitionSpeed:
        'Apprentissage rapide parce que la logique est directement applicable dans mes activites quotidiennes.',
      advice:
        'Toujours garder une methode simple et reproductible plutot que multiplier des outils compliques.',
      mediumTermGoal:
        'Faire de cette competence un vrai support d organisation technique et de pilotage efficace.',
      trainings: ['Automatisation de routines techniques', 'Amelioration continue du suivi des actions'],
      achievements: [
        { label: 'Octopus', fragment: 'project-octopus' },
      ],
    },
  },
];
