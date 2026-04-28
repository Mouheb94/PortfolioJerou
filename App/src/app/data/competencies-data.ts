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
  definitionParagraphs: string[];
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
  summary: { fr: string };
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
      fr: 'Automatisation des tests fonctionnels et de non-régression sur applications web pour sécuriser les parcours critiques et fiabiliser les mises en production.',
    },
    article: {
      definitionParagraphs: [
        'Selenium Java est une compétence importante dans mon métier de QA automatisation. Elle me permet d’automatiser les tests des applications web pour vérifier que les fonctionnalités principales continuent de bien fonctionner après chaque évolution.',
        'L’idée est de reproduire les actions d’un vrai utilisateur : se connecter, remplir un formulaire, faire une recherche, valider une action, vérifier qu’un résultat s’affiche correctement. Cela permet de détecter rapidement les anomalies et d’éviter les régressions avant les mises en production.',
        'Dans un contexte agile où les livraisons sont fréquentes, cette compétence est devenue essentielle. Les équipes doivent aller vite, mais sans prendre de risques sur la qualité. L’automatisation permet justement de sécuriser les parcours les plus sensibles, de gagner du temps sur les validations manuelles et de fiabiliser les releases.',
        'Aujourd’hui, cette compétence est aussi très liée aux pratiques de CI/CD, car les tests automatisés sont souvent intégrés directement dans les pipelines pour vérifier la stabilité de l’application avant chaque déploiement.',
        'Pour moi, Selenium n’est pas seulement un outil de test : c’est un vrai levier de qualité logicielle.',
      ],
      proofs: [
        {
          title: 'Automatisation de la TNR sur les parcours de souscription',
          anecdote:
            'Dans le projet MNSI, j’ai automatisé les parcours de souscription les plus sensibles pour sécuriser les mises en production. Les tests manuels prenaient beaucoup de temps et certaines régressions étaient détectées trop tard, ce qui pouvait avoir un impact direct sur le métier.',
          implementationProof:
            'J’ai mis en place une architecture de tests basée sur le pattern Page Object Model pour rendre les scripts plus propres et plus faciles à maintenir. J’ai aussi travaillé sur des jeux de données paramétrables, des waits explicites pour éviter les erreurs de synchronisation, des contrôles métier plus précis et des rapports de tests plus lisibles pour les équipes. L’objectif était d’avoir des campagnes de TNR plus fiables et plus exploitables.',
          resultAndValue:
            'Le temps de validation avant chaque release a diminué et plusieurs régressions importantes ont été détectées plus tôt. Ma valeur ajoutée a été de rendre les campagnes plus fiables et surtout plus utiles pour les équipes projet.',
          realizationLabel: 'MNSI',
          realizationFragment: 'project-mnsi',
        },
        {
          title: 'Stabilisation de scripts de tests instables',
          anecdote:
            'Sur le projet IHM-GED, plusieurs scripts Selenium étaient instables et provoquaient beaucoup de faux positifs. Les erreurs venaient surtout des temps de chargement, des problèmes de synchronisation et de certains éléments dynamiques mal gérés.',
          implementationProof:
            'J’ai repris les scénarios concernés pour identifier les causes réelles des échecs. J’ai ensuite ajouté des helpers de synchronisation, des waits explicites mieux adaptés, des stratégies de retry contrôlées et une meilleure gestion des éléments dynamiques. Le but était de rendre les tests réellement fiables au quotidien.',
          resultAndValue:
            'Le taux de faux positifs a fortement baissé, ce qui a permis de redonner confiance dans les exécutions automatiques. Ma valeur ajoutée a été de transformer une suite de tests instable en un vrai outil de validation pour les livraisons.',
          realizationLabel: 'IHM-GED',
          realizationFragment: 'project-ihm-ged',
        },
      ],
      selfReview:
        'Je considère avoir un bon niveau de maîtrise sur Selenium Java. Je suis autonome sur la création d’un framework de tests, le développement des scénarios, la maintenance des scripts existants et l’amélioration de leur stabilité.',
      priorityInProfile:
        'C’est une compétence très importante dans mon profil, car elle a un impact direct sur la qualité des livraisons et sur la confiance des équipes dans les mises en production.',
      acquisitionSpeed:
        'Je l’ai développée assez rapidement grâce à la pratique en alternance, où les besoins étaient concrets et immédiats.',
      advice:
        'Avec le recul, j’ai compris qu’il vaut mieux avoir moins de tests mais des tests fiables, plutôt qu’une grande quantité de scripts difficiles à maintenir. Un bon test automatisé doit être stable, lisible et utile pour les équipes.',
      mediumTermGoal:
        'À moyen terme, je veux atteindre un niveau encore plus avancé sur l’automatisation des tests, surtout sur la création de frameworks plus robustes, la parallélisation des exécutions, l’intégration complète dans les pipelines CI/CD et l’optimisation des campagnes de tests à grande échelle.',
      trainings: [
        'Préparation de la certification ISTQB Test Automation pour renforcer mes bases méthodologiques.',
        'Formation continue sur les frameworks modernes de tests UI et les bonnes pratiques d’automatisation.',
      ],
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
    level: 60,
    domain: 'technical',
    summary: {
      fr: 'Automatisation des campagnes de tests, suivi qualité continu et intégration des validations dans le cycle CI/CD.',
    },
    article: {
      definitionParagraphs: [
        'Jenkins est une compétence importante dans mon métier de QA automatisation, car il permet de transformer des tests isolés en un vrai processus de contrôle continu intégré au cycle de livraison.',
        'Concrètement, Jenkins sert à automatiser l’exécution des tests, la génération des rapports, le suivi des erreurs et les contrôles qualité avant les mises en production.',
        'Dans mes missions QA, Jenkins est utilisé pour lancer les campagnes de TNR (tests de non-régression) aux moments clés : avant une release, après une mise à jour importante ou de façon planifiée chaque jour.',
        'Cela permet d’éviter de lancer les tests manuellement, de gagner du temps et surtout de détecter plus rapidement les anomalies.',
        'Aujourd’hui, avec les pratiques DevOps et CI/CD, cette compétence est devenue essentielle. Les entreprises cherchent à livrer plus vite, mais avec plus de fiabilité. Jenkins apporte cette sécurité en automatisant les vérifications et en donnant un retour rapide aux équipes.',
        'Pour moi, Jenkins ne sert pas seulement à exécuter des tests : il permet d’installer une vraie logique de qualité continue.',
      ],
      proofs: [
        {
          title: 'Mise en place d’un pipeline de non-régression quotidienne',
          anecdote:
            'Dans le cadre de mes missions QA, les campagnes de tests de non-régression étaient souvent lancées manuellement, ce qui prenait du temps et retardait parfois la détection des anomalies. L’objectif était de mettre en place une exécution automatique des tests afin d’identifier les problèmes plus tôt et de sécuriser les mises en production.',
          implementationProof:
            'J’ai configuré un pipeline Jenkins planifié pour exécuter les scénarios de tests. J’ai mis en place les différents stages d’exécution, la récupération des artefacts de test, la génération automatique des rapports, les notifications pour les équipes et le suivi des échecs pour faciliter l’analyse. L’objectif était d’avoir une vision claire et rapide de l’état de l’application dès le début de la journée.',
          resultAndValue:
            'Les anomalies étaient détectées avant la mise en production, ce qui permettait aux équipes de réagir plus rapidement. Cela a réduit les blocages, amélioré la réactivité et renforcé la confiance dans les livraisons. Ma valeur ajoutée a été de mettre en place une logique de qualité proactive plutôt que réactive.',
          realizationLabel: 'MNSI',
          realizationFragment: 'project-mnsi',
        },
      ],
      selfReview:
        'Je considère avoir un bon niveau de maîtrise sur Jenkins. Je suis autonome sur la configuration des pipelines simples, l’analyse des résultats et l’intégration des campagnes de tests dans le processus de livraison.',
      priorityInProfile:
        'Cette compétence est très importante dans mon profil, car elle permet de relier directement mes activités de test au cycle de vie complet de l’application.',
      acquisitionSpeed:
        'Je l’ai acquise progressivement, surtout grâce à la pratique quotidienne sur les projets et à la nécessité de rendre les validations plus rapides et plus fiables.',
      advice:
        'Avec le recul, j’ai compris qu’il vaut mieux commencer par des pipelines simples et stables plutôt que vouloir tout automatiser trop vite.',
      mediumTermGoal:
        'À moyen terme, je veux renforcer mes compétences sur les pipelines as code et sur l’optimisation des temps d’exécution. Je souhaite aussi mieux maîtriser les pipelines déclaratifs, l’intégration complète avec les outils de tests automatisés, l’amélioration du reporting qualité, l’optimisation des exécutions parallèles et l’intégration plus poussée dans les environnements DevOps.',
      trainings: [
        'Autoformation sur Jenkins déclaratif.',
        'Approfondissement des pratiques CI/CD orientées qualité.',
        'Amélioration continue sur les projets réels.',
      ],
      achievements: [
        { label: 'MNSI', fragment: 'project-mnsi' },
      ],
    },
  },
  {
    id: 'postman',
    name: 'Postman',
    logo: 'https://cdn.simpleicons.org/postman/FF6C37',
    level: 80,
    domain: 'technical',
    summary: {
      fr: 'Tests et sécurisation des API backend avec Postman et Newman pour fiabiliser les échanges entre services et applications.',
    },
    article: {
      definitionParagraphs: [
        'Postman est une compétence essentielle dans mon travail de QA automatisation, surtout pour tester et sécuriser les API backend.',
        'C’est l’outil que j’utilise pour vérifier que les échanges entre le frontend et le backend fonctionnent correctement : contrôler les endpoints, valider les réponses, tester les erreurs possibles et automatiser les vérifications les plus importantes.',
        'Avec Postman, je peux construire des collections de tests qui permettent de valider rapidement si une API répond correctement aux besoins métier et respecte bien le contrat attendu.',
        'Je l’utilise particulièrement pendant les phases de recette, de non-régression et avant les mises en production pour éviter que des anomalies backend ne bloquent le front ou impactent les utilisateurs.',
        'J’utilise également Newman, qui permet d’exécuter les collections Postman en ligne de commande. Cela facilite l’automatisation des campagnes de tests et leur intégration dans les processus CI/CD.',
        'Pour moi, Postman ne sert pas seulement à tester une API : il permet de sécuriser toute la communication entre les différentes parties d’une application.',
      ],
      proofs: [
        {
          title: 'Automatisation des tests backend sur le projet IHM-GED',
          anecdote:
            'Sur le projet IHM-GED, ma mission consistait à tester la nouvelle interface GED ainsi que les nouvelles API permettant d’accéder aux documents des deux systèmes : Mutex et Harmonie Mutuelle. Les recherches documentaires, la consultation et la modification des documents reposaient fortement sur les API backend. Il fallait donc garantir leur fiabilité avant la mise en production.',
          implementationProof:
            'J’ai créé plusieurs collections Postman pour couvrir les endpoints les plus critiques. J’ai mis en place des tests sur les endpoints de recherche de documents, la consultation des fiches documentaires, la modification des métadonnées, les cas d’erreur, la cohérence des données retournées et les temps de réponse sur certains appels sensibles. J’ai également ajouté des assertions automatiques pour vérifier les codes de statut HTTP, la structure des réponses, les données attendues et la stabilité des contrats API. Pour industrialiser davantage les validations, j’ai utilisé Newman afin de lancer automatiquement les collections de tests en ligne de commande, ce qui facilitait les campagnes de recette et les exécutions répétées. L’objectif était d’avoir une validation backend fiable, rapide et facilement réutilisable.',
          resultAndValue:
            'Les écarts de contrat API ont été détectés avant l’intégration complète côté front, ce qui a évité plusieurs retours tardifs et des blocages projet. Les campagnes de validation étaient plus rapides, plus fiables et mieux standardisées grâce à l’automatisation avec Newman. Ma valeur ajoutée a été de renforcer la robustesse des échanges entre l’IHM et le backend tout en améliorant la qualité des livraisons.',
          realizationLabel: 'IHM-GED',
          realizationFragment: 'project-ihm-ged',
        },
      ],
      selfReview:
        'Je considère avoir un bon niveau de maîtrise sur Postman. Je suis autonome sur la création de collections de tests, la mise en place des assertions, l’analyse des anomalies API, l’utilisation de Newman et la validation des contrats entre frontend et backend.',
      priorityInProfile:
        'Cette compétence est très importante dans mon profil, car beaucoup d’anomalies critiques se trouvent au niveau des échanges entre services, souvent avant même l’affichage côté interface utilisateur.',
      acquisitionSpeed:
        'Je l’ai développée rapidement grâce à son utilisation quotidienne sur des projets où les flux métier dépendaient fortement des API.',
      advice:
        'Avec le recul, j’ai compris qu’un bon test API ne consiste pas seulement à vérifier un code 200. Il faut aussi penser aux cas limites, aux erreurs métier, aux performances et surtout à la stabilité des contrats pour éviter les problèmes plus tard dans le projet. Documenter les prérequis, bien utiliser les variables d’environnement et garder des jeux de données réalistes sont des points essentiels.',
      mediumTermGoal:
        'À moyen terme, je veux aller plus loin sur les tests avancés d’API, notamment sur les tests de performance, les tests contractuels, l’exécution automatisée avec Newman, l’intégration dans les pipelines CI/CD et la gouvernance des contrats API.',
      trainings: [
        'Autoformation autour des tests contractuels.',
        'Perfectionnement sur Newman.',
        'Exécution des collections dans Jenkins.',
        'Bonnes pratiques de validation backend.',
      ],
      achievements: [
        { label: 'IHM-GED', fragment: 'project-ihm-ged' },
      ],
    },
  },
  {
    id: 'git',
    name: 'Git',
    logo: 'https://cdn.simpleicons.org/git/F05032',
    level: 80,
    domain: 'technical',
    summary: {
      fr: 'Gestion de versions, traçabilité et collaboration pour sécuriser les évolutions des projets QA, backend et full-stack.',
    },
    article: {
      definitionParagraphs: [
        'Git est une compétence essentielle dans mon travail au quotidien, car il me permet de suivre, organiser et sécuriser toutes les évolutions de mes projets.',
        'C’est un système de gestion de versions qui permet de conserver l’historique des modifications, de collaborer avec les autres membres d’une équipe et de revenir facilement sur une version précédente si besoin.',
        'Je l’utilise aussi bien pour versionner mes scripts de tests automatisés que pour travailler sur des projets backend avec Spring Boot ou sur des projets full-stack.',
        'Git me permet de travailler de façon plus propre, plus structurée et surtout plus sécurisée.',
        'Dans mes missions QA, il est très important pour gérer les évolutions des scripts Selenium, Postman ou Jenkins, suivre les corrections, collaborer avec les développeurs et garantir la stabilité des livraisons.',
        'Aujourd’hui, avec les pratiques DevOps, les revues de code et le travail en équipe distribué, Git est devenu indispensable.',
        'Pour moi, Git ne sert pas seulement à sauvegarder du code : il permet de garder une vraie traçabilité et d’améliorer la qualité de la collaboration.',
      ],
      proofs: [
        {
          title: 'Organisation des branches pour les tests automatisés',
          anecdote:
            'Sur plusieurs projets comme MNSI, IHM-GED, GameUp ou Octopus, je travaillais régulièrement sur l’évolution des scripts de tests automatisés. Sans organisation claire, il devenait difficile de suivre les modifications, de comprendre rapidement les changements réalisés et de collaborer efficacement avec les autres équipes. L’objectif était donc d’améliorer la lisibilité et la gestion des évolutions QA.',
          implementationProof:
            'J’ai proposé une convention simple pour structurer le travail : organisation claire des branches par sujet ou correction, noms de branches plus explicites, messages de commit plus lisibles, merge requests mieux documentées et revues croisées avec les équipes projet. J’ai aussi pris l’habitude de faire des commits plus petits et plus ciblés pour faciliter la compréhension de l’historique. L’objectif était de rendre les changements plus faciles à relire, à valider et à reprendre plus tard.',
          resultAndValue:
            'L’historique Git est devenu plus propre et plus compréhensible, ce qui a facilité les reprises de contexte et les corrections rapides. Les échanges avec les développeurs étaient aussi plus fluides grâce à des merge requests mieux préparées. Ma valeur ajoutée a été d’améliorer la qualité de collaboration autour des projets et de rendre le suivi des évolutions beaucoup plus simple.',
          realizationLabel: 'Tous les projets',
        },
      ],
      selfReview:
        'Je considère avoir un bon niveau de maîtrise sur Git. Je suis autonome sur les workflows classiques : création de branches, gestion des merges, résolution de conflits simples, revue de code et organisation des livraisons.',
      priorityInProfile:
        'C’est une compétence transversale très importante dans mon profil, car elle accompagne toutes mes activités techniques, que ce soit en automatisation de tests, en backend ou en gestion de projet.',
      acquisitionSpeed:
        'Je l’ai acquise progressivement, de façon naturelle, depuis mes premiers projets, grâce à une utilisation quotidienne.',
      advice:
        'Avec le recul, j’ai compris que la qualité d’un projet passe aussi par la qualité de son historique Git. Faire des commits propres, écrire des messages clairs et relire ses diffs avant de pousser sont des habitudes simples mais très importantes. Un bon Git facilite toujours le travail de toute l’équipe.',
      mediumTermGoal:
        'À moyen terme, je veux approfondir davantage les stratégies avancées de gestion de versions, notamment le release management, Git Flow, le trunk-based development, les politiques de branching avancées et l’optimisation des workflows CI/CD.',
      trainings: [
        'Veille continue sur les bonnes pratiques Git.',
        'Amélioration des workflows collaboratifs.',
        'Expérience sur les projets réels.',
        'Approfondissement des stratégies de delivery modernes.',
      ],
      achievements: [
        { label: 'PMT - Project Management Tool', fragment: 'project-pmt' },
        { label: 'MNSI', fragment: 'project-mnsi' },
        { label: 'IHM-GED', fragment: 'project-ihm-ged' },
        { label: 'GameUp', fragment: 'project-gameup' },
        { label: 'Octopus', fragment: 'project-octopus' },
      ],
    },
  },
  {
    id: 'angular',
    name: 'Angular',
    logo: 'https://cdn.simpleicons.org/angular/DD0031',
    level: 70,
    domain: 'technical',
    summary: {
      fr: 'Compréhension et développement front-end avec Angular pour construire des interfaces fiables et améliorer la pertinence des tests QA.',
    },
    article: {
      definitionParagraphs: [
        'Angular est une compétence importante dans mon parcours, car elle me permet de mieux comprendre le fonctionnement du front-end et donc de mieux anticiper les risques de qualité.',
        'C’est un framework front-end structuré qui permet de construire des interfaces web modulaires, maintenables et adaptées aux applications métier complexes.',
        'Je l’ai utilisé directement pour développer le front du projet PMT – Project Management Tool, ce qui m’a permis de mieux comprendre la logique des composants, du routing, des formulaires et de la communication avec le backend.',
        'Cette compréhension m’aide aussi beaucoup dans mes missions de QA automatisation. Quand on connaît bien le fonctionnement du front Angular, il devient plus facile de créer des tests Selenium pertinents, de mieux cibler les parcours critiques et de détecter plus rapidement les causes d’une anomalie.',
        'Aujourd’hui, avec les applications web riches et les enjeux d’expérience utilisateur, comprendre le front-end est devenu indispensable, même dans un rôle orienté qualité.',
        'Pour moi, Angular n’est pas seulement une compétence de développement : c’est aussi un vrai atout pour améliorer la pertinence des tests automatisés.',
      ],
      proofs: [
        {
          title: 'Développement du front sur PMT',
          anecdote:
            'Dans le projet PMT – Project Management Tool, j’ai participé au développement du frontend Angular d’une application de gestion de projet permettant de suivre les projets, les tâches, les statuts, les priorités et les affectations. L’objectif était d’avoir une interface claire, simple à utiliser et cohérente avec le backend Spring Boot.',
          implementationProof:
            'J’ai travaillé sur la création de composants réutilisables, la gestion du routing entre les différentes pages, les formulaires de création et modification, les appels API via les services Angular, la gestion des états et des validations utilisateur, ainsi que l’intégration avec Angular Material pour l’interface. ',
          resultAndValue:
            'Les parcours utilisateurs étaient plus cohérents, les validations plus fiables.',
          realizationLabel: 'PMT - Project Management Tool',
          realizationFragment: 'project-pmt',
        },
      ],
      selfReview:
        'Je considère avoir un niveau intermédiaire à avancé sur Angular. Je suis à l’aise pour comprendre la structure d’une application Angular, développer des composants simples, gérer les formulaires et analyser les parcours utilisateurs.',
      priorityInProfile:
        'Cette compétence est importante dans mon profil, car elle renforce ma polyvalence entre développement et assurance qualité. Elle me permet de mieux dialoguer avec les développeurs frontend et surtout de construire des tests automatisés plus intelligents et plus stables.',
      acquisitionSpeed:
        'Je l’ai développée progressivement grâce aux projets concrets, notamment PMT, mais aussi grâce à l’analyse quotidienne des comportements front dans mes missions QA.',
      advice:
        'Avec le recul, j’ai compris qu’une bonne compréhension du front permet de concevoir des tests plus robustes et mieux ciblés sur les usages réels des utilisateurs.',
      mediumTermGoal:
        'À moyen terme, je veux renforcer mon niveau sur Angular afin d’avoir une meilleure maîtrise de la conception front-end. Je souhaite approfondir Angular moderne, la gestion avancée des états, les bonnes pratiques de structure des composants et les performances front-end.',
      trainings: [
        'Pratique sur les projets réels.',
        'Analyse des architectures front modernes.',
      ],
      achievements: [
        { label: 'PMT - Project Management Tool', fragment: 'project-pmt' },
      ],
    },
  },
  {
    id: 'docker',
    name: 'Docker',
    logo: 'https://cdn.simpleicons.org/docker/2496ED',
    level: 60,
    domain: 'technical',
    summary: {
      fr: 'Utilisation d’environnements isolés et reproductibles pour faciliter l’exécution des tests et la stabilité des applications.',
    },
    article: {
      definitionParagraphs: [
        'Docker est une compétence importante dans mon travail, car il me permet de garantir des environnements de test plus stables et plus reproductibles.',
        'C\'est une technologie de conteneurisation qui permet d\'exécuter une application avec toutes ses dépendances dans un environnement isolé, identique pour tous.',
        'Concrètement, cela évite les problèmes du type "ça marche sur mon poste mais pas sur le tien", ce qui arrive souvent lorsqu\'on travaille sur des projets avec plusieurs services ou plusieurs environnements.',
        'Je l\'ai utilisé sur le projet PMT – Project Management Tool, où le frontend, le backend et la base de données devaient fonctionner ensemble de manière fiable.',
        'Aujourd\'hui, avec les pratiques DevOps, le cloud et les déploiements automatisés, Docker est devenu presque indispensable.',
        'Pour moi, il permet de gagner du temps, de réduire les erreurs liées à l\'environnement.',
      ],
      proofs: [
        {
          title: 'Mise en place d\'un environnement de test reproductible sur PMT',
          anecdote:
            'Dans le projet PMT – Project Management Tool, nous avions une application full-stack avec plusieurs parties à faire fonctionner ensemble : frontend Angular, backend Spring Boot et base de données MySQL. L\'objectif était d\'avoir un environnement simple à lancer, identique pour tout le monde et stable pour les phases de développement, de test et de validation. Sans cela, les différences entre les postes pouvaient provoquer des erreurs difficiles à analyser.',
          implementationProof:
            'J\'ai participé à la mise en place de l\'environnement conteneurisé avec Docker. J\'ai travaillé sur la création des Dockerfiles pour le frontend et le backend, la configuration de la base de données, l\'orchestration avec Docker Compose, les scripts de lancement pour simplifier l\'utilisation, et la documentation pour permettre à l\'équipe de relancer facilement l\'environnement.',
          resultAndValue:
            'Les différences d\'environnement ont fortement diminué et les campagnes de tests sont devenues plus prévisibles. Les développeurs et les validations QA pouvaient travailler sur une base identique, ce qui réduisait les pertes de temps liées aux problèmes techniques. Ma valeur ajoutée a été d\'aider à rendre le projet plus stable et plus simple à maintenir au quotidien.',
          realizationLabel: 'PMT – Project Management Tool',
          realizationFragment: 'project-pmt',
        },
      ],
      selfReview:
        'Je considère avoir un niveau intermédiaire sur Docker. Je suis à l\'aise pour utiliser des environnements conteneurisés, comprendre leur fonctionnement et adapter des configurations existantes selon les besoins projet. Cette compétence est importante dans mon profil, car elle soutient directement l\'automatisation des tests, la stabilité des validations et la fiabilité des livraisons.',
      priorityInProfile:
        'Je l\'ai développée progressivement au fil des projets, surtout lorsque les besoins d\'industrialisation devenaient plus concrets.',
      acquisitionSpeed:
        'Avec le recul, j\'ai compris qu\'un bon usage de Docker repose beaucoup sur la clarté de la configuration. Il faut bien documenter les images utilisées, versionner les fichiers de configuration et garder une structure simple pour éviter de complexifier inutilement le projet.',
      advice:
        'Un environnement simple et stable vaut toujours mieux qu\'une architecture trop compliquée.',
      mediumTermGoal:
        'À moyen terme, je veux renforcer ma maîtrise de Docker, surtout sur les aspects plus avancés de Docker Compose. Je souhaite approfondir Docker Compose avancé, l\'optimisation des images et les bonnes pratiques de conteneurisation.',
      trainings: [
        'Autoformation sur Docker Compose',
        'Pratique sur les projets réels',
        'Veille sur les bonnes pratiques DevOps',
        'Amélioration continue des environnements de test',
      ],
      achievements: [
        { label: 'PMT – Project Management Tool', fragment: 'project-pmt' },
      ],
    },
  },
  {
    id: 'travail-equipe',
    name: 'Travail d\'équipe',
    logo: 'https://api.iconify.design/mdi/account-group.svg?color=%2314b8a6',
    level: 80,
    domain: 'human',
    summary: {
      fr: 'Collaboration transverse entre QA, développement et métier pour sécuriser les décisions qualité et améliorer la fluidité des projets.',
    },
    article: {
      definitionParagraphs: [
        'Le travail d\'équipe est une compétence humaine essentielle dans mon métier, car la qualité d\'un projet ne repose jamais sur une seule personne.',
        'En QA, on travaille en permanence avec plusieurs profils : développeurs, testeurs, équipes métier, responsables techniques, parfois même les utilisateurs finaux. Il faut savoir échanger clairement, comprendre les besoins de chacun et avancer ensemble vers le même objectif.',
        'Le travail d\'équipe, ce n\'est pas seulement bien communiquer. C\'est aussi savoir partager les priorités, remonter les risques au bon moment, aider à trouver des solutions et garder une bonne dynamique même quand le projet devient plus tendu.',
        'Dans les projets agiles, cette compétence est encore plus importante, car les décisions doivent souvent être prises rapidement et collectivement.',
        'Aujourd\'hui, avec les méthodes de travail transverses entre métier, développement et qualité, savoir bien collaborer est aussi important que les compétences techniques.',
        'Pour moi, un bon QA ne se contente pas de détecter des anomalies : il aide l\'équipe à mieux livrer ensemble.',
      ],
      proofs: [
        {
          title: 'Coordination entre QA, développement et métier sur MNSI',
          anecdote:
            'Sur le projet MNSI, plusieurs anomalies étaient détectées pendant les phases de recette et de non-régression, notamment sur les parcours de souscription les plus sensibles. Certaines situations demandaient des décisions rapides entre les équipes QA, les développeurs et le métier pour éviter les blocages avant les mises en production. Sans bonne coordination, les retards pouvaient rapidement s\'accumuler.',
          implementationProof:
            'J\'ai participé à l\'organisation de points de synchronisation courts et réguliers entre les différentes équipes. L\'objectif était de qualifier rapidement les anomalies détectées, identifier leur niveau de criticité, décider des priorités de correction, éviter les incompréhensions entre les équipes et assurer un meilleur suivi jusqu\'à la validation finale. J\'ai aussi aidé à formaliser une logique simple de priorisation et des règles de communication plus claires pour fluidifier les échanges.',
          resultAndValue:
            'Les décisions étaient prises plus rapidement et les retours entre QA, développement et métier devenaient beaucoup plus fluides. Les incompréhensions ont diminué et les campagnes de validation étaient mieux pilotées. Ma valeur ajoutée a été de faciliter la collaboration entre les équipes et de rendre le traitement des anomalies plus efficace.',
          realizationLabel: 'MNSI',
          realizationFragment: 'project-mnsi',
        },
        {
          title: 'Collaboration transverse sur IHM-GED et Octopus',
          anecdote:
            'Sur les projets IHM-GED et Octopus, les tests automatisés demandaient une bonne compréhension des besoins métier et des parcours utilisateurs réels. Pour construire les bons scénarios de test, il fallait échanger régulièrement avec les développeurs, les responsables techniques et les utilisateurs métier.',
          implementationProof:
            'J\'ai travaillé en lien direct avec les équipes pour comprendre les parcours les plus sensibles, identifier les cas critiques à automatiser, valider les scénarios de tests, analyser ensemble les anomalies détectées et suivre les corrections avant livraison. L\'objectif était de garantir que les tests automatisés apportaient une vraie valeur métier et pas seulement une validation technique.',
          resultAndValue:
            'Les scénarios automatisés étaient plus pertinents et les validations plus alignées avec les besoins réels des utilisateurs. Les échanges avec les équipes devenaient aussi plus simples, car chacun comprenait mieux les enjeux qualité. Ma valeur ajoutée a été d\'apporter une approche plus collaborative de la QA, orientée solution et non seulement contrôle.',
          realizationLabel: 'IHM-GED / Octopus',
          realizationFragment: 'project',
        },
      ],
      selfReview:
        'Je considère avoir un bon niveau sur le travail d\'équipe. J\'aime travailler dans un environnement collaboratif et je suis à l\'aise pour échanger avec différents profils, qu\'ils soient techniques ou métier.',
      priorityInProfile:
        'Cette compétence est très importante dans mon profil, car la qualité logicielle est toujours une responsabilité collective. Un bon test ou une bonne automatisation ne sert à rien si l\'information ne circule pas bien dans l\'équipe.',
      acquisitionSpeed:
        'Je l\'ai développée naturellement au fil des projets, surtout dans des contextes où il fallait gérer plusieurs interlocuteurs et prendre des décisions rapidement.',
      advice:
        'Avec le recul, j\'ai compris qu\'il faut savoir rendre visibles les risques sans créer de tension inutile. Être clair, simple et orienté solution reste souvent la meilleure façon de faire avancer un projet.',
      mediumTermGoal:
        'À moyen terme, je veux encore renforcer ma capacité à travailler en transverse et à faciliter la collaboration entre les équipes. Je souhaite progresser sur la facilitation des échanges entre métiers et technique, la gestion des priorités projet, l\'animation de points de suivi plus efficaces, la communication en contexte de tension et la coordination autour des sujets qualité.',
      trainings: [
        'L\'expérience projet quotidienne',
        'La pratique de la communication inter-équipes',
        'Les retours d\'expérience sur les projets',
        'Les démarches d\'amélioration continue',
      ],
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
    level: 80,
    domain: 'human',
    summary: {
      fr: 'Pilotage autonome des campagnes de validation, priorisation des risques et sécurisation des livraisons dans des contextes projet exigeants.',
    },
    article: {
      definitionParagraphs: [
        'L\'autonomie est une compétence très importante dans mon métier de QA, car elle me permet de gérer les phases critiques de validation avec rigueur et efficacité.',
        'Être autonome, ce n\'est pas travailler seul, mais savoir organiser son travail, prioriser les actions importantes, prendre les bonnes décisions et avancer sans avoir besoin d\'une supervision constante.',
        'En assurance qualité, cela se traduit par la capacité à piloter une campagne de tests de bout en bout : préparer les scénarios, exécuter les validations, suivre les anomalies, relancer les équipes si nécessaire et donner une vision claire de l\'état du projet.',
        'Dans les environnements agiles, cette compétence est essentielle, car les équipes attendent de la réactivité, de la responsabilisation et de la proactivité.',
        'Aujourd\'hui, un bon QA doit être capable d\'anticiper les risques et de prendre des initiatives pour sécuriser les livraisons.',
        'Pour moi, l\'autonomie permet de transformer un simple rôle de validation en vraie responsabilité qualité.',
      ],
      proofs: [
        {
          title: 'Pilotage autonome des campagnes de tests sur plusieurs projets',
          anecdote:
            'Sur plusieurs projets comme PMT, MNSI, IHM-GED, Octopus et GameUp, j\'ai souvent dû gérer de manière autonome les campagnes de tests fonctionnels et de non-régression, notamment avant les mises en production. Ces phases étaient sensibles, car elles impactaient directement la qualité des livraisons et la stabilité des applications en production. Il fallait être capable de prioriser rapidement les parcours critiques, suivre les anomalies et donner une vision claire aux équipes projet.',
          implementationProof:
            'J\'ai pris en charge l\'organisation complète de plusieurs campagnes de validation : identification des scénarios les plus sensibles, construction du plan de test, exécution des tests manuels et automatisés, suivi des anomalies détectées, priorisation des corrections avec les équipes, relances régulières pour sécuriser les délais et synthèse claire de l\'avancement pour les responsables projet. Sur certains projets, cela incluait aussi le lancement des tests automatisés avec Selenium, Postman, Newman ou Mr Suricate selon le contexte. L\'objectif était de garantir une validation fiable tout en respectant les contraintes de délai.',
          resultAndValue:
            'Les mises en production ont pu être sécurisées dans les délais avec une meilleure visibilité sur les risques réels. Les équipes projet avaient une vision plus claire des priorités et les anomalies critiques étaient traitées plus rapidement. Ma valeur ajoutée a été de maintenir un pilotage qualité fiable et structuré, même sur des périodes de forte charge ou avec peu de supervision.',
          realizationLabel: 'PMT - Project Management Tool/MNSI/IHM-GED/Octopus/GameUp',
          realizationFragment: 'project',
        },
      ],
      selfReview:
        'Je considère avoir un bon niveau d\'autonomie. Je suis à l\'aise pour organiser mon travail, gérer mes priorités et assumer la responsabilité des livrables qualité, surtout sur les périodes sensibles avant les releases.',
      priorityInProfile:
        'Cette compétence est très importante dans mon profil, car elle me permet d\'être fiable et efficace sans dépendre en permanence d\'un encadrement fort.',
      acquisitionSpeed:
        'Je l\'ai développée assez rapidement, notamment grâce aux responsabilités qui m\'ont été confiées tôt sur plusieurs projets où il fallait avancer vite et bien.',
      advice:
        'Avec le recul, j\'ai compris que l\'autonomie ne veut pas dire tout gérer seul. Il faut savoir documenter ses décisions, signaler rapidement les risques et rester ouvert au feedback des autres équipes. Être autonome, c\'est surtout savoir prendre les bonnes initiatives au bon moment.',
      mediumTermGoal:
        'À moyen terme, je veux encore renforcer mon autonomie sur des périmètres plus larges de pilotage qualité. Je souhaite progresser sur la gestion de campagnes de validation plus complexes, la priorisation des risques métier, la coordination transverse avec plusieurs équipes, la prise de décision rapide en contexte de production et le pilotage qualité sur des projets plus larges.',
      trainings: [
        'L\'expérience projet quotidienne',
        'L\'amélioration de ma gestion du temps',
        'L\'autoformation sur les méthodes de priorisation',
        'Le retour d\'expérience sur les phases de release',
      ],
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
    level: 70,
    domain: 'human',
    summary: {
      fr: 'Structuration des validations QA, priorisation des risques et pilotage des campagnes de tests pour sécuriser les livraisons.',
    },
    article: {
      definitionParagraphs: [
        'L\'organisation est une compétence essentielle dans mon métier de QA, car la qualité dépend souvent de la capacité à bien structurer les validations dans un temps limité.',
        'Organiser un projet, ce n\'est pas seulement planifier des tâches. C\'est savoir prioriser les actions importantes, anticiper les risques, répartir les efforts au bon moment et garder une vision claire de l\'avancement.',
        'En assurance qualité, cette compétence est indispensable pour préparer les campagnes de tests, gérer les délais de recette et assurer une bonne couverture fonctionnelle sans perdre de temps sur des points secondaires.',
        'Dans les environnements agiles, où les mises en production sont fréquentes et les délais parfois courts, il faut être capable de piloter efficacement sans compromettre la qualité.',
        'Aujourd\'hui, livrer vite ne suffit plus : il faut livrer juste.',
        'Pour moi, une bonne organisation permet de transformer une phase de test sous pression en validation maîtrisée.',
      ],
      proofs: [
        {
          title: 'Organisation des campagnes de tests sur plusieurs projets',
          anecdote:
            'Sur plusieurs projets comme PMT, MNSI, IHM-GED, Octopus et GameUp, j\'ai dû préparer et piloter des campagnes de recette et de non-régression avant les mises en production. Le temps disponible était souvent limité, alors que les fonctionnalités à valider étaient nombreuses et parfois critiques pour le métier. Il fallait donc organiser les validations de manière intelligente pour sécuriser les livraisons sans bloquer le projet.',
          implementationProof:
            'J\'ai structuré les campagnes de tests en plusieurs étapes : identification des parcours les plus sensibles, découpage des tests par niveau de criticité, priorisation selon les risques métier et les régressions possibles, planification des exécutions manuelles et automatiques, suivi quotidien de l\'avancement, réajustement rapide en fonction des anomalies détectées et communication claire avec les équipes projet sur l\'état des validations. J\'utilisais aussi une logique de priorisation simple pour concentrer les efforts sur les zones à plus fort impact. L\'objectif était de garder une validation efficace, réaliste et orientée résultat.',
          resultAndValue:
            'Les délais ont été respectés tout en gardant une bonne couverture sur les fonctionnalités critiques. Les équipes avaient une meilleure visibilité sur l\'état réel des validations et les décisions pouvaient être prises plus rapidement. Ma valeur ajoutée a été de rendre les campagnes de test plus prévisibles, mieux pilotées et plus alignées avec les priorités métier.',
          realizationLabel: 'PMT - Project Management Tool/MNSI/IHM-GED/Octopus/GameUp',
          realizationFragment: 'project',
        },
      ],
      selfReview:
        'Je considère avoir un bon niveau en organisation et pilotage de projet. Je suis à l\'aise pour structurer une campagne de validation, gérer les priorités et adapter rapidement le plan de test selon l\'évolution du projet.',
      priorityInProfile:
        'Cette compétence est très importante dans mon profil, car elle impacte directement la qualité des livraisons et la capacité à tenir les délais.',
      acquisitionSpeed:
        'Je l\'ai développée progressivement, notamment en gérant plusieurs projets en parallèle avec des contraintes différentes.',
      advice:
        'Avec le recul, j\'ai compris qu\'il faut toujours distinguer ce qui est urgent de ce qui est vraiment important. Un bon pilotage repose souvent sur des choix simples mais bien assumés. Prioriser correctement vaut mieux que vouloir tout tester sans stratégie claire.',
      mediumTermGoal:
        'À moyen terme, je veux renforcer ma capacité de pilotage sur des projets plus complexes et améliorer encore ma vision globale des validations. Je souhaite progresser sur les indicateurs de pilotage QA, l\'estimation de charge des campagnes de tests, la gestion des priorités en contexte critique, la coordination multi-projets et le suivi qualité orienté performance.',
      trainings: [
        'L\'expérience terrain sur les phases de recette',
        'La pratique des tableaux de suivi qualité',
        'L\'amélioration continue de ma gestion des priorités',
        'Les retours d\'expérience sur les mises en production',
      ],
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
    level: 70,
    domain: 'human',
    summary: {
      fr: 'Communication claire et structurée des anomalies QA pour accélérer les corrections et faciliter les décisions projet.',
    },
    article: {
      definitionParagraphs: [
        'La communication est une compétence essentielle dans mon métier de QA, car détecter une anomalie ne suffit pas : il faut aussi savoir l\'expliquer clairement pour qu\'elle soit comprise et corrigée rapidement.',
        'Communiquer, c\'est transmettre une information utile, fiable et adaptée à la personne qui la reçoit. En assurance qualité, cela veut dire savoir décrire un problème, expliquer son impact métier, proposer un niveau de priorité et faciliter la prise de décision.',
        'On échange en permanence avec des profils différents : développeurs, testeurs, chefs de projet, équipes métier ou responsables techniques. Il faut donc savoir adapter son message selon le contexte.',
        'Dans les projets agiles et les environnements où plusieurs équipes travaillent ensemble, une mauvaise communication peut faire perdre beaucoup de temps.',
        'Aujourd\'hui, la qualité ne dépend pas seulement des tests réalisés, mais aussi de la capacité à faire circuler la bonne information au bon moment.',
        'Pour moi, bien communiquer permet de transformer un simple constat technique en vraie action utile pour le projet.',
      ],
      proofs: [
        {
          title: 'Communication des anomalies sur plusieurs projets',
          anecdote:
            'Sur plusieurs projets comme MNSI, IHM-GED et Octopus, j\'ai régulièrement géré des anomalies importantes détectées pendant les phases de recette, de non-régression ou de tests automatisés. Certaines anomalies pouvaient bloquer une mise en production ou impacter directement des parcours métier sensibles comme la souscription, la recherche documentaire ou le suivi des MEP. Il fallait donc transmettre rapidement l\'information aux bonnes personnes, sans créer de confusion ni perdre de temps.',
          implementationProof:
            'J\'ai mis en place une façon de formaliser mes anomalies de manière plus claire et plus utile : contexte fonctionnel de l\'anomalie, étapes précises de reproduction, captures ou preuves techniques, niveau de criticité, impact métier identifié, comportement attendu / comportement observé, proposition de vérification ou de piste de correction si nécessaire. J\'adaptais aussi la communication selon le destinataire : plus technique avec les développeurs, plus orientée impact métier avec les responsables fonctionnels ou chefs de projet. L\'objectif était de réduire les allers-retours inutiles et d\'accélérer la prise de décision.',
          resultAndValue:
            'Le traitement des anomalies est devenu plus rapide et les échanges entre les équipes plus fluides. Les développeurs pouvaient reproduire plus facilement les problèmes et les responsables projet avaient une meilleure vision des risques réels avant les mises en production. Ma valeur ajoutée a été de rendre la communication QA plus claire, plus structurée et surtout plus orientée action.',
          realizationLabel: 'MNSI / IHM-GED / Octopus',
          realizationFragment: 'project',
        },
      ],
      selfReview:
        'Je considère avoir un bon niveau en communication professionnelle. Je suis à l\'aise pour expliquer une anomalie, synthétiser une situation de test et adapter mon message selon la personne en face, qu\'elle soit technique ou métier.',
      priorityInProfile:
        'Cette compétence est très importante dans mon profil, car elle relie directement l\'analyse QA aux décisions projet. Un bon test mal expliqué perd beaucoup de sa valeur.',
      acquisitionSpeed:
        'Je l\'ai développée progressivement grâce aux échanges quotidiens avec plusieurs équipes et aux situations où il fallait réagir vite sur des sujets sensibles.',
      advice:
        'Avec le recul, j\'ai compris qu\'il faut toujours rester factuel, simple et orienté solution. Bien communiquer, ce n\'est pas parler plus, c\'est transmettre ce qui aide vraiment à avancer.',
      mediumTermGoal:
        'À moyen terme, je veux encore améliorer ma capacité de communication de synthèse, notamment sur les sujets à fort enjeu projet. Je souhaite progresser sur la restitution claire pour les comités de pilotage, la communication en contexte de stress ou d\'urgence, la prise de parole plus stratégique, la synthèse orientée décision et la coordination entre plusieurs interlocuteurs.',
      trainings: [
        'L\'expérience quotidienne en projet',
        'Les retours des équipes',
        'Les ateliers de communication professionnelle',
        'La pratique des restitutions orales et écrites',
      ],
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
    level: 70,
    domain: 'technical',
    summary: {
      fr: 'Conception de backends structurés, fiables et maintenables avec Spring Boot pour des API robustes et industrialisables.',
    },
    article: {
      definitionParagraphs: [
        'Spring Boot est une compétence importante dans mon parcours, car il me permet de concevoir des backends propres, structurés et faciles à maintenir.',
        'C’est un framework Java qui simplifie le développement d’applications serveur grâce à l’auto-configuration, l’injection de dépendances et une organisation claire du projet.',
        'Dans mes projets, je l’utilise surtout pour développer des API REST stables, avec une bonne séparation entre les controllers, les services et l’accès aux données. Cela permet d’avoir un code plus lisible, plus testable et plus simple à faire évoluer.',
        'Dans un contexte professionnel, cette compétence est essentielle car le backend doit être fiable, sécurisé et capable de suivre les évolutions métier sans devenir difficile à maintenir.',
        'Aujourd’hui, avec les architectures orientées API, les microservices et les pratiques DevOps, Spring Boot est devenu une base solide pour construire des applications robustes et industrialisables.',
        'Pour moi, bien utiliser Spring Boot ne consiste pas seulement à créer des endpoints, mais à construire une vraie architecture backend durable.',
      ],
      proofs: [
        {
          title: 'Développement d’une API de gestion de projet',
          anecdote:
            'Dans le projet PMT – Project Management Tool, j’ai développé le backend d’une application de gestion de projet permettant de gérer les projets, les tâches, les statuts, les priorités et l’attribution des responsabilités. L’objectif était de construire une API claire et maintenable, capable de supporter l’évolution du projet tout en gardant une bonne cohérence entre le frontend Angular et le backend Spring Boot.',
          implementationProof:
            'J’ai structuré l’application avec une architecture en couches : Controller, Service, Repository, Entity et DTO. J’ai également mis en place la validation des données d’entrée, la gestion centralisée des erreurs, la sécurisation avec Spring Security et JWT, la connexion avec MySQL via JPA/Hibernate, ainsi que des tests unitaires et d’intégration. L’objectif était d’avoir un backend propre, stable et facilement testable.',
          resultAndValue:
            'Le backend obtenu était plus lisible, plus simple à maintenir et plus évolutif. Les échanges avec le frontend étaient plus fluides grâce à des contrats API clairs et la sécurisation des accès permettait de mieux contrôler les rôles utilisateurs. Ma valeur ajoutée a été de mettre en place une architecture backend propre et durable, pensée dès le départ pour être industrialisable.',
          realizationLabel: 'PMT - Project Management Tool',
          realizationFragment: 'project-pmt',
        },
        {
          title: 'Refonte et fiabilisation d’une API existante',
          anecdote:
            'Sur le projet GameUp, j’ai dû reprendre une API Spring existante qui présentait beaucoup de problèmes : mauvaise organisation, responsabilités mal réparties, faible maintenabilité et manque de sécurité. Le backend devenait difficile à faire évoluer et provoquait de nombreuses instabilités.',
          implementationProof:
            'J’ai analysé l’existant puis refactorisé l’application pour repartir sur une architecture REST plus propre. J’ai travaillé sur la séparation claire entre controller, service et repository, l’application des principes SOLID, l’intégration de Hibernate pour la persistance, la sécurisation avec Spring Security, la gestion des rôles client/administrateur et l’amélioration de la cohérence des réponses API. Le but était de rendre l’API plus fiable sans repartir complètement de zéro.',
          resultAndValue:
            'L’API est devenue plus stable, plus maintenable et beaucoup plus claire pour les évolutions futures. Les échanges avec le frontend et avec l’API Python de recommandation étaient mieux maîtrisés et les risques de régression ont été réduits. Ma valeur ajoutée a été de transformer un backend fragile en une base technique plus robuste et plus professionnelle.',
          realizationLabel: 'GameUp',
          realizationFragment: 'project-gameup',
        },
      ],
      selfReview:
        'Je considère avoir un niveau intermédiaire à avancé sur Spring Boot. Je suis à l’aise pour concevoir une API REST propre, organiser l’architecture backend, gérer la persistance des données et mettre en place les bases de la sécurité applicative.',
      priorityInProfile:
        'Cette compétence est importante dans mon profil, car elle me permet de mieux comprendre l’ensemble du cycle applicatif et de travailler sur des projets full-stack plus solides.',
      acquisitionSpeed:
        'Je l’ai développée assez rapidement grâce aux projets concrets réalisés en formation.',
      advice:
        'Avec le recul, j’ai compris qu’un bon backend se prépare dès le début : il faut penser très tôt à la structure du projet, aux contrats API et à la maintenabilité. Corriger une mauvaise architecture plus tard coûte toujours plus cher que bien concevoir dès le départ.',
      mediumTermGoal:
        'À moyen terme, je veux renforcer mon niveau sur les aspects plus avancés de Spring Boot, notamment les architectures microservices, Spring Security avancé, les tests d’intégration, la performance des API, la communication entre services et l’industrialisation backend.',
      trainings: [
        'Perfectionnement de Spring Security.',
        'Approfondissement des tests Spring Boot.',
        'Bonnes pratiques d’architecture backend.',
        'Intégration dans des environnements DevOps.',
      ],
      achievements: [
        { label: 'PMT - Project Management Tool', fragment: 'project-pmt' },
        { label: 'GameUp', fragment: 'project-gameup' },
      ],
    },
  },
  {
    id: 'mr-suricate',
    name: 'Mr Suricate',
    logo: 'https://www.adnbooster.fr/wp-content/uploads/2025/10/MrSuricate-Logo-vertical.png',
    level: 70,
    domain: 'technical',
    summary: {
      fr: 'Automatisation des tests fonctionnels sur applications web avec Mr Suricate pour sécuriser les parcours critiques et fiabiliser les mises en production.',
    },
    article: {
      definitionParagraphs: [
        'Mr Suricate est une compétence importante dans mon métier de QA automatisation, car il me permet d\'automatiser les tests fonctionnels sur les applications web et de sécuriser les parcours les plus sensibles.',
        'C\'est un outil de test automatisé utilisé pour reproduire les actions des utilisateurs sur une application : saisie, navigation, modification, validation ou recherche d\'informations.',
        'Dans ce type de contexte, l\'objectif est de réduire les validations manuelles, détecter plus rapidement les anomalies et éviter les régressions sur des fonctionnalités critiques.',
        'Cette compétence s\'inscrit dans les pratiques actuelles de qualité logicielle et d\'automatisation des tests, où les entreprises cherchent à livrer plus vite tout en gardant un bon niveau de fiabilité.',
        'Pour moi, il permet de rendre les campagnes de validation plus rapides, plus stables et plus utiles pour les équipes métier.',
      ],
      proofs: [
        {
          title: 'Création du projet de tests automatisés sur Octopus',
          anecdote:
            'Sur le projet Octopus, ma mission était d\'automatiser les tests fonctionnels d\'une application utilisée pour la gestion des absences, des présences et le suivi des mises en production. Les équipes avaient besoin de sécuriser les parcours critiques afin d\'éviter les erreurs sur les absences, les présences ou les informations liées aux MEP. L\'objectif était de réduire les validations manuelles et de fiabiliser les mises en production.',
          implementationProof:
            'J\'ai commencé par créer entièrement le projet de tests automatisés avec Mr Suricate depuis zéro : structure complète du projet, organisation des scénarios de tests, mise en place des méthodes de base, configuration de l\'environnement de test, préparation des données de validation et standardisation des scripts pour faciliter la maintenance. J\'ai ensuite développé plusieurs cas de tests automatisés sur la saisie et la modification des absences, la saisie et le suivi des présences, la consultation des présences des collaborateurs, la création et la modification des MEP, la recherche des mises en production et les tests de non-régression sur les parcours critiques. L\'objectif était d\'avoir une base fiable, réutilisable et facile à faire évoluer.',
          resultAndValue:
            'Les campagnes de validation sont devenues plus rapides et plus fiables, avec une meilleure couverture des parcours sensibles. Les risques de régression ont diminué et les anomalies pouvaient être détectées plus tôt avant les mises en production. Ma valeur ajoutée a été de mettre en place un framework de tests maintenable et réellement utile pour les équipes métier et techniques.',
          realizationLabel: 'Octopus',
          realizationFragment: 'project-octopus',
        },
      ],
      selfReview:
        'Je considère avoir un niveau intermédiaire sur Mr Suricate. Je suis autonome sur la création d\'un projet de tests, l\'organisation des scénarios, la maintenance des scripts et l\'automatisation des parcours fonctionnels les plus importants.',
      priorityInProfile:
        'Cette compétence est importante dans mon profil, car elle renforce ma capacité à industrialiser les validations et à sécuriser les applications métier.',
      acquisitionSpeed:
        'Je l\'ai acquise rapidement, car la logique de l\'outil est directement liée à mes missions quotidiennes en QA automation.',
      advice:
        'Avec le recul, j\'ai compris qu\'il faut toujours garder des scénarios simples, stables et vraiment utiles pour les utilisateurs. Mieux vaut automatiser les bons parcours plutôt que chercher à tout tester sans réelle valeur métier. La qualité d\'un framework repose surtout sur sa maintenabilité.',
      mediumTermGoal:
        'À moyen terme, je veux renforcer davantage mon niveau sur Mr Suricate pour améliorer l\'industrialisation des tests et la qualité des campagnes automatiques. Je souhaite approfondir les bonnes pratiques de structuration des projets, l\'optimisation des scénarios de tests, l\'intégration dans les pipelines CI/CD, le reporting des campagnes de validation et l\'automatisation des parcours métier complexes.',
      trainings: [
        'Pratique sur les projets réels.',
        'Amélioration continue des frameworks de tests.',
        'Optimisation des campagnes de non-régression.',
        'Renforcement des méthodes de QA automation.',
      ],
      achievements: [
        { label: 'Octopus', fragment: 'project-octopus' },
      ],
    },
  },
];
