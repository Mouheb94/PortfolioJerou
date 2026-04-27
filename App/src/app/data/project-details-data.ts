export interface ProjectDetail {
  projectId: string;
  presentation: string[];
  objectives: string[];
  actions: string[];
  actors: string;
  results: string[];
  aftermath: string[];
  criticalView: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    projectId: 'pmt',
    presentation: [
      'PMT est une application web full-stack de gestion de projet développée dans le cadre de la formation Expert en Ingénierie Logicielle.',
      'L\'objectif était de concevoir une plateforme permettant de gérer des projets, des tâches, les priorités, les statuts et l\'attribution des responsabilités, tout en garantissant une architecture propre, maintenable et facilement déployable.',
      'Le projet a été pensé comme un véritable socle produit : une application utilisable en conditions réelles, avec une séparation claire entre frontend et backend, une base de données structurée, des tests automatisés, ainsi qu\'une industrialisation complète via Docker et CI/CD.',
      'L\'enjeu n\'était pas seulement de développer une application fonctionnelle, mais aussi de produire une solution robuste, testable et prête à évoluer.',
    ],
    objectives: [
      'Permettre la création de projets, la gestion des tâches, le suivi des statuts, la gestion des priorités, l\'attribution des tâches aux utilisateurs, le filtrage et la recherche, et la sécurisation des accès selon les rôles.',
      'Architecture full-stack cohérente avec une API REST maintenable.',
      'Sécurité avec authentification JWT.',
      'Bonne couverture de tests automatisés.',
      'Exécution reproductible avec Docker.',
      'Automatisation CI/CD avec GitHub Actions.',
      'Risques : complexité de la modélisation entre projets, tâches et utilisateurs.',
      'Risques : cohérence entre le frontend Angular et le backend Spring Boot.',
      'Risques : performance des requêtes sur des volumes de données croissants.',
      'Risques : sécurisation des accès utilisateurs.',
    ],
    actions: [
      'Analyse fonctionnelle et technique : rédaction des besoins, user stories et critères d\'acceptation.',
      'Conception de l\'architecture full-stack : Angular (frontend), Spring Boot (backend), MySQL (base de données).',
      'Modélisation des entités principales (utilisateur, projet, tâche) et définition des règles métier : statuts, priorités, attribution, filtrage.',
      'Développement backend Spring Boot : endpoints REST, gestion des erreurs et sécurisation avec Spring Security et JWT.',
      'Développement frontend Angular : composants réutilisables, services d\'appel API, interface Material Design.',
      'Mise en place de la base de données MySQL : schéma, optimisation des requêtes, gestion des transactions.',
      'Tests unitaires et d\'intégration : backend avec JUnit, frontend avec Jasmine et Karma.',
      'Industrialisation : Docker pour le frontend, le backend et la base de données, orchestration avec Docker Compose.',
      'CI/CD avec GitHub Actions : exécution automatique des tests, build et déploiement.',
    ],
    actors:
      'Projet réalisé individuellement, en autonomie complète, dans un cadre académique avec un formateur référent pour les points de suivi réguliers et les revues de projet. Validation finale via démonstration technique et échange sur les choix d\'architecture. Pas d\'équipe métier dédiée, mais les cas d\'usage étaient pensés pour répondre aux besoins réels de chefs de projet et d\'équipes de développement.',
    results: [
      'Application full-stack fonctionnelle de gestion de projets et de tâches.',
      'Architecture claire et maintenable avec séparation propre frontend/backend.',
      'API REST sécurisée avec JWT.',
      'Bonne couverture de tests automatisés.',
      'Exécution reproductible avec Docker Compose.',
      'Chaîne CI/CD complète avec GitHub Actions.',
      'Base solide réutilisable pour d\'autres projets métier plus complexes.',
    ],
    aftermath: [
      'Ajout de notifications en temps réel.',
      'Reporting avancé et tableaux de bord.',
      'Gestion des sprints et backlog agile.',
      'Prédiction des délais via l\'IA.',
      'Version mobile avec React Native.',
      'Gestion avancée des rôles et permissions.',
      'Monitoring et observabilité plus poussés.',
    ],
    criticalView:
      'Je me donnerais une note de 8/10. Le point fort principal a été la capacité à penser le projet comme un vrai produit et pas uniquement comme un exercice technique. La mise en place de Docker, de la CI/CD et des tests a apporté une vraie dimension professionnelle. Avec le recul, j\'aurais formalisé plus tôt les contrats API et la documentation technique, et intégré la stratégie de tests dès le début du projet. Ce projet reste une référence importante dans ma manière de concevoir une application maintenable et industrialisable.',
  },
  {
    projectId: 'mnsi',
    presentation: [
      'MNSI est un projet entreprise orienté qualité logicielle, avec un fort accent sur la fiabilité des parcours métier et la réduction des régressions en production.',
    ],
    objectives: [
      'Sécuriser les parcours métier critiques avant chaque mise en production.',
      'Structurer les campagnes de tests pour fournir un feedback rapide aux équipes.',
    ],
    actions: [
      'Définition des scénarios de test prioritaires et des critères d\'acceptation.',
      'Automatisation progressive des cas critiques avec Selenium Java.',
      'Exécution et supervision des campagnes via Jenkins.',
      'Validation API avec Postman et formalisation des anomalies.',
    ],
    actors:
      'Projet mené en collaboration avec équipe technique, équipe métier et parties prenantes qualité.',
    results: [
      'Diminution des régressions visibles après livraison.',
      'Meilleure lisibilité des risques grâce à des rapports de test clairs.',
      'Cycle de validation plus rapide avant release.',
    ],
    aftermath: [
      'Le projet a renforcé les pratiques d\'automatisation et la discipline de suivi qualité dans l\'équipe.',
    ],
    criticalView:
      'Le principal axe d\'amélioration est d\'augmenter la couverture automatisée encore plus en amont du cycle de développement.',
  },
  {
    projectId: 'ihm-ged',
    presentation: [
      'La GED (Gestion électronique des documents) est un système permettant le stockage, la consultation et la modification de documents à travers une base de données contenant les documents ainsi que leurs métadonnées : nom du document, client, numéro de contrat, type de document, etc.',
      'Le projet GED Access est né dans le cadre du rapprochement entre les sociétés Mutex et Harmonie Mutuelle, durant une phase de transition entre leurs deux systèmes d\'information.',
      'L\'objectif était de permettre aux utilisateurs d\'accéder aux documents des deux GED existantes (Mutex et HM) à travers une nouvelle interface unifiée et de nouvelles API capables d\'interroger les deux environnements.',
      'Le projet se divisait en deux parties : adaptation de l\'IHM GED côté Harmonie Mutuelle pour consommer les nouvelles API, et remplacement de l\'IHM GED Mutex par une nouvelle interface permettant l\'accès aux documents Mutex et HM.',
      'Ma mission portait principalement sur la qualité logicielle : automatiser les tests de la nouvelle IHM et des API afin de garantir la fiabilité des fonctionnalités avant mise en production.',
    ],
    objectives: [
      'Assurer la qualité et la stabilité du nouveau système GED dans un contexte sensible de fusion entre deux SI critiques.',
      'Permettre la recherche de documents, la consultation des documents, la modification des métadonnées, l\'accès aux documents des deux GED, et la fiabilité des échanges entre IHM et API.',
      'Enjeux : garantir la continuité métier pendant la transition SI.',
      'Enjeux : éviter les régressions sur des fonctionnalités sensibles.',
      'Enjeux : sécuriser les échanges entre les deux systèmes.',
      'Enjeux : fiabiliser les recherches documentaires pour les utilisateurs finaux.',
      'Risques : erreurs de synchronisation entre les deux GED.',
      'Risques : anomalies sur les API de recherche.',
      'Risques : régressions sur l\'interface utilisateur.',
      'Risques : impacts métier en cas d\'erreur sur les documents contractuels.',
      'Dans ce contexte, l\'automatisation des tests était essentielle.',
    ],
    actions: [
      'Création complète du projet de tests automatisés Selenium depuis zéro.',
      'Mise en place de la structure globale du projet, de l\'organisation des packages, des méthodes de base, de la configuration des drivers et du pattern Page Object Model.',
      'Préparation des jeux de données de test pour disposer d\'une base propre, maintenable et réutilisable.',
      'Développement des tests front Selenium pour valider la recherche de documents, l\'affichage des résultats, la consultation des fiches documentaires, la modification des informations, les parcours critiques et la non-régression.',
      'Conception des tests back avec Postman pour vérifier les endpoints de recherche, les réponses API, la cohérence des données retournées, les cas d\'erreur, les validations métier et certaines performances de réponse.',
      'Standardisation des contrôles via des collections Postman pour faciliter les campagnes de validation.',
    ],
    actors:
      'Projet en contexte réel d\'entreprise avec développeurs frontend, développeurs backend, équipes métier GED, équipes QA, responsables techniques et utilisateurs finaux côté Mutex et Harmonie Mutuelle. Les interactions portaient sur la compréhension des parcours métier, l\'identification des scénarios critiques, la validation des cas de tests, l\'analyse des anomalies détectées et le suivi des corrections avant livraison. Mon rôle nécessitait une collaboration régulière avec les équipes techniques et métier pour garantir la pertinence des tests.',
    results: [
      'Base de projet Selenium propre et réutilisable.',
      'Automatisation fiable des tests front.',
      'Campagnes de validation API avec Postman.',
      'Meilleure couverture des cas critiques.',
      'Réduction du risque de régression.',
      'Amélioration de la qualité des livraisons.',
      'Renforcement des compétences en assurance qualité, automatisation de tests et compréhension des systèmes complexes en environnement métier sensible.',
      'Développement d\'une meilleure vision de la relation entre qualité logicielle et continuité métier.',
    ],
    aftermath: [
      'Enrichir la couverture des tests automatisés.',
      'Intégrer davantage de tests de performance.',
      'Améliorer le reporting des campagnes de tests.',
      'Connecter les résultats aux outils de suivi qualité.',
      'Intégrer les tests dans une vraie chaîne CI/CD complète.',
      'Renforcer les tests sur les échanges inter-systèmes.',
      'Aujourd\'hui, cette base de tests reste un socle solide pour accompagner l\'évolution du projet GED.',
    ],
    criticalView:
      'Je me donnerais une note de 8/10. Le principal point fort a été la mise en place complète du framework de tests automatisés à partir de zéro, ce qui demandait à la fois de la rigueur technique et une bonne compréhension métier. Le plus difficile était de tester un projet fortement dépendant de plusieurs systèmes existants et de nombreux cas métiers sensibles. Avec plus de temps, j\'aurais poussé davantage l\'industrialisation des tests avec une intégration plus complète dans une chaîne CI/CD. Ce projet m\'a surtout appris que la qualité logicielle ne repose pas uniquement sur les tests eux-mêmes, mais sur la capacité à anticiper les risques métier réels.',
  },
  {
    projectId: 'octopus',
    presentation: [
      'Octopus est un projet entreprise avec des cycles de livraison fréquents, nécessitant des contrôles qualité continus et industrialisés.',
    ],
    objectives: [
      'Automatiser les validations critiques pour sécuriser les releases.',
      'Améliorer la reproductibilité des exécutions de test.',
    ],
    actions: [
      'Mise en place de suites automatisées Selenium Java.',
      'Orchestration des exécutions via Jenkins et environnements Docker.',
      'Analyse des résultats et pilotage des corrections avec les équipes.',
    ],
    actors:
      'Projet conduit avec les équipes de développement et de qualité applicative.',
    results: [
      'Hausse de la confiance avant mise en production.',
      'Meilleure détection des régressions critiques en amont.',
    ],
    aftermath: [
      'Le projet a consolidé l\'approche CI/test automation sur des livraisons à rythme soutenu.',
    ],
    criticalView:
      'L\'axe d\'amélioration principal est la réduction du temps d\'exécution global des campagnes.',
  },
  {
    projectId: 'gameup',
    presentation: [
      'Dans le cadre d\'une étude de cas en architecture logicielle avancée, j\'ai travaillé sur GamesUP, une plateforme de vente de jeux de société en ligne.',
      'Le site connaissait de plus en plus de bugs qui impactaient directement les ventes. Le frontend Angular avait déjà été modernisé, mais le backend Spring était devenu obsolète et difficile à maintenir.',
      'Une première version de l\'API avait été réalisée, mais elle présentait de nombreux problèmes de structure, de sécurité et de stabilité. L\'objectif était donc de reprendre ce code existant, de corriger ses faiblesses et de reconstruire une API propre, sécurisée et évolutive.',
      'En parallèle, le système de recommandation de jeux devait être amélioré grâce à une API Python utilisant le Machine Learning.',
    ],
    objectives: [
      'Le projet devait permettre de gérer : les jeux, les clients, les commandes, les auteurs, les éditeurs, les achats, la recherche dans le catalogue et les recommandations de jeux.',
      'Refondre l\'API Spring avec une architecture REST claire.',
      'Appliquer les principes SOLID.',
      'Sécuriser l\'application avec Spring Security.',
      'Mettre en place Hibernate pour la gestion des données.',
      'Développer les fonctionnalités CRUD.',
      'Distinguer les rôles client et administrateur.',
      'Intégrer un système de recommandation avec FastAPI et KNN.',
      'Rédiger les tests et la documentation UML.',
      'Enjeu principal : reprendre un code existant peu fiable sans repartir de zéro.',
    ],
    actions: [
      'Analyse du code existant pour identifier les problèmes d\'architecture, les dépendances mal gérées et les failles de sécurité.',
      'Restructuration de l\'API avec une architecture en couches : Controller, Service, Repository.',
      'Application des principes SOLID pour rendre le projet plus propre et maintenable.',
      'Mise en place d\'Hibernate pour gérer les entités principales : client, jeu, auteur, éditeur, commande.',
      'Développement des opérations CRUD et d\'un moteur de recherche sur le catalogue.',
      'Intégration de Spring Security avec deux rôles (client et administrateur) pour protéger les endpoints sensibles.',
      'Développement d\'une API Python avec FastAPI et un modèle KNN pour la recommandation de jeux.',
      'Mise en place de la communication entre l\'API Spring et l\'API Python.',
      'Rédaction des tests unitaires, tests d\'intégration et des diagrammes UML.',
    ],
    actors:
      'Projet réalisé seul, dans un cadre académique. Stack imposée et code existant à reprendre, sans équipe projet ni Product Owner. Les principales interactions concernaient la compréhension du besoin, le respect des contraintes techniques et la justification des choix d\'architecture.',
    results: [
      'API Spring restructurée et plus maintenable.',
      'Architecture REST claire avec meilleure séparation des responsabilités.',
      'Endpoints sécurisés avec Spring Security.',
      'Moteur de recherche fonctionnel sur le catalogue.',
      'Système de recommandation KNN opérationnel.',
      'Communication établie entre l\'API Java et l\'API Python.',
      'Documentation technique complète et bonne couverture de tests.',
      'Renforcement de la capacité à reprendre un existant complexe et le transformer en solution propre et fiable.',
    ],
    aftermath: [
      'Enrichir les données pour améliorer le modèle ML.',
      'Ajouter Docker pour la containerisation.',
      'Mettre en place un pipeline CI/CD.',
      'Améliorer le monitoring.',
      'Documenter l\'API avec OpenAPI.',
      'Aller vers une architecture microservices plus poussée.',
    ],
    criticalView:
      'Je me donnerais une note de 8/10. Le point le plus difficile a été de travailler sur un code déjà existant et mal structuré — corriger sans tout reconstruire. Avec plus de temps, j\'aurais poussé davantage la séparation en microservices et amélioré la partie Machine Learning avec de meilleures données. Ce projet m\'a appris qu\'améliorer un existant demande souvent plus de réflexion que créer un projet depuis zéro.',
  },
];
