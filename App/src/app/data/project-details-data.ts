export interface ProjectDetail {
  projectId: string;
  presentation: string;
  objectives: string[];
  actions: string[];
  actors: string;
  results: string[];
  aftermath: string;
  criticalView: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    projectId: 'pmt',
    presentation:
      'PMT est une application web de gestion de projet pensee comme un socle produit: creer des projets, piloter des taches, suivre des statuts et priorites, assurer une attribution claire, et maintenir une coherence front/back dans un cadre industrialisable. Developpe dans le cadre de la formation d Expert en Ingenierie Logicielle a l ISCOD, ce projet m a permis d approfondir les notions d architecture logicielle, de conception d API, de tests automatises et d integration continue.',
    objectives: [
      'Fournir une solution complete et intuitive pour la gestion de projets agiles, avec suivi en temps reel des taches, sprints et indicateurs.',
      'Repondre a un contexte d equipes distribuees necessitant une synchronisation fiable des informations.',
      'Maitriser les risques lies a la modelisation des relations entre entites (projets, taches, utilisateurs).',
      'Garantir de bonnes performances sur des volumes de donnees croissants et securiser les acces par role.',
    ],
    actions: [
      'Analyse fonctionnelle et technique: redaction du cahier des charges, user stories et criteres d acceptation.',
      'Conception de l architecture full-stack: Angular (frontend), Spring Boot (backend), MySQL (base de donnees).',
      'Modelisation des entites (utilisateur, projet, tache) et definition des regles metier (statuts, priorites, attribution).',
      'Developpement backend Spring Boot: endpoints REST, gestion d erreurs explicite, securisation avec Spring Security (JWT).',
      'Developpement frontend Angular: composants reutilisables, services API, state management, interface Material Design.',
      'Mise en place de la base MySQL: schema, optimisation de requetes, gestion des transactions.',
      'Ecriture des tests unitaires et d integration (JUnit, Jasmine/Karma) pour une bonne couverture.',
      'Containerisation avec Docker et orchestration via Docker Compose.',
      'Mise en place d une chaine CI/CD GitHub Actions: tests automatiques, build, deploiement.',
    ],
    actors:
      'Projet individuel realise en autonomie (conception, developpement, tests, CI/CD), dans un cadre academique avec un formateur referent pour les suivis hebdomadaires et les revues. Validation finale via demonstration et entretien technique.',
    results: [
      'Application full-stack operationnelle pour gerer projets et taches (statuts, priorites, suivi, attribution).',
      'Structure de code maintenable (contrats API clairs, separation front/back).',
      'Qualite renforcee via une bonne couverture de tests unitaires et integration.',
      'Execution reproductible avec Docker Compose en environnement coherent.',
      'Automatisation CI/CD fiable avec GitHub Actions (tests, build, deploiement).',
      'Base de code reutilisable pour des evolutions futures (droits avances, notifications, reporting).',
    ],
    aftermath:
      'Le projet a servi de support pour approfondir l architecture logicielle et l industrialisation. A court terme, l ajout de fonctionnalites IA pour la prediction des delais est envisage. A moyen terme, une version mobile peut etre etudiee.',
    criticalView:
      'Avec le recul, l axe principal d amelioration concerne la formalisation plus precoce des contrats API et de la documentation. La CI/CD et les tests ont ete un vrai plus et auraient gagne a etre integres encore plus tot.',
  },
  {
    projectId: 'mnsi',
    presentation:
      'MNSI est un projet entreprise oriente qualite logicielle, avec un fort accent sur la fiabilite des parcours metier et la reduction des regressions en production.',
    objectives: [
      'Securiser les parcours metier critiques avant chaque mise en production.',
      'Structurer les campagnes de tests pour fournir un feedback rapide aux equipes.',
    ],
    actions: [
      'Definition des scenarios de test prioritaires et des criteres d acceptation.',
      'Automatisation progressive des cas critiques avec Selenium Java.',
      'Execution et supervision des campagnes via Jenkins.',
      'Validation API avec Postman et formalisation des anomalies.',
    ],
    actors:
      'Projet mene en collaboration avec equipe technique, equipe metier et parties prenantes qualite.',
    results: [
      'Diminution des regressions visibles apres livraison.',
      'Meilleure lisibilite des risques grace a des rapports de test clairs.',
      'Cycle de validation plus rapide avant release.',
    ],
    aftermath:
      'Le projet a renforce les pratiques d automatisation et la discipline de suivi qualite dans l equipe.',
    criticalView:
      'Le principal axe d amelioration est d augmenter la couverture automatisee encore plus en amont du cycle de developpement.',
  },
  {
    projectId: 'ihm-ged',
    presentation:
      'IHM-GED est un projet entreprise centre sur les interfaces de gestion documentaire et la fiabilite des parcours utilisateurs associes.',
    objectives: [
      'Garantir une experience utilisateur stable sur les ecrans critiques.',
      'Valider les regles metier et les flux documents de bout en bout.',
    ],
    actions: [
      'Conception de jeux de tests fonctionnels cibles sur les parcours IHM.',
      'Verification des integrations API avec Postman.',
      'Suivi des anomalies avec priorisation et communication aux equipes.',
    ],
    actors:
      'Travail transverse avec developpeurs, QA et referents metier.',
    results: [
      'Qualite d interface amelioree sur les parcours sensibles.',
      'Reduction des retours tardifs pendant les phases de recette.',
    ],
    aftermath:
      'Ce projet a servi de base pour standardiser des pratiques de validation UI plus robustes.',
    criticalView:
      'Un effort supplementaire sur les tests automatises E2E aurait encore accelere la stabilisation.',
  },
  {
    projectId: 'octopus',
    presentation:
      'Octopus est un projet entreprise avec des cycles de livraison frequents, necessitant des controles qualite continus et industrialises.',
    objectives: [
      'Automatiser les validations critiques pour securiser les releases.',
      'Ameliorer la reproductibilite des executions de test.',
    ],
    actions: [
      'Mise en place de suites automatisees Selenium Java.',
      'Orchestration des executions via Jenkins et environnements Docker.',
      'Analyse des resultats et pilotage des corrections avec les equipes.',
    ],
    actors:
      'Projet conduit avec les equipes de developpement et de qualite applicative.',
    results: [
      'Hausse de la confiance avant mise en production.',
      'Meilleure detection des regressions critiques en amont.',
    ],
    aftermath:
      'Le projet a consolide l approche CI/test automation sur des livraisons a rythme soutenu.',
    criticalView:
      'L axe d amelioration principal est la reduction du temps d execution global des campagnes.',
  },
  {
    projectId: 'gameup',
    presentation:
      'GameUp est un projet ecole axe sur l experience utilisateur, la logique applicative et la qualite fonctionnelle des parcours.',
    objectives: [
      'Concevoir une application intuitive et engageante.',
      'Structurer un socle technique maintenable pour evolutions futures.',
    ],
    actions: [
      'Participation a la conception fonctionnelle et au developpement front-end.',
      'Mise en place de tests de validation des parcours cles.',
      'Iterations successives apres retours utilisateurs.',
    ],
    actors:
      'Projet academique avec accompagnement pedagogique et validations regulieres.',
    results: [
      'Application stable avec parcours utilisateurs fluides.',
      'Amelioration continue basee sur feedback concret.',
    ],
    aftermath:
      'Ce projet a renforce les competences de conception produit et d amelioration iterative.',
    criticalView:
      'Une meilleure formalisation initiale des scenarios de test aurait permis de gagner du temps sur les ajustements.',
  },
];
