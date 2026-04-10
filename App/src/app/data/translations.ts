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
    p1: string;
    p2: string;
    p3: string;
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
    message: string;
    send: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Locale, TranslationSet> = {
  fr: {
    nav: {
      accueil: 'Accueil',
      presentation: 'Presentation',
      parcours: 'Mon parcours',
      competences: 'Competences',
      realisations: 'Realisations',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      role: 'Developpeur Full Stack/Testeur QA Automatisation',
      description: 'Testeur automatisé / Qualité logicielle, avec une forte appétence pour le développement logiciel et l’automatisation des tests, fort d’une expérience professionnelle chez Harmonie Mutuelle.',
      cta: 'Decouvrir mes projets',
      contact: 'Me contacter',
    },
    about: {
      title: 'Presentation',
      subtitle: 'A propos de moi',
      p1: 'Passionne par le developpement web et les nouvelles technologies, je cree des experiences numeriques qui allient esthetique et performance.',
      p2: 'Avec une solide expertise en developpement front-end et back-end, je m efforce de livrer des solutions qui repondent aux besoins des utilisateurs tout en respectant les meilleures pratiques du secteur.',
      p3: 'Je suis constamment a la recherche de nouveaux defis et de technologies innovantes pour perfectionner mon savoir-faire.',
    },
    parcours: {
      title: 'Mon parcours',
      subtitle: 'Experience & Formation',
      items: [
        {
          year: '2024 - Present',
          title: 'Developpeur Full Stack Senior',
          org: 'Entreprise Tech',
          description: 'Developpement d applications web complexes avec React, Node.js et bases de donnees SQL/NoSQL.',
        },
        {
          year: '2022 - 2024',
          title: 'Developpeur Front-End',
          org: 'Agence Digitale',
          description: 'Creation d interfaces utilisateur reactives et accessibles avec Angular et TypeScript.',
        },
        {
          year: '2020 - 2022',
          title: 'Developpeur Junior',
          org: 'Startup Innovation',
          description: 'Participation au developpement de plateformes SaaS avec des technologies modernes.',
        },
        {
          year: '2017 - 2020',
          title: 'Licence en Informatique',
          org: 'Universite',
          description: 'Formation complete en informatique : algorithmique, structures de donnees, genie logiciel.',
        },
      ],
    },
    skills: {
      title: 'Competences',
      subtitle: 'Technologies & Outils',
      seeDetail: 'Voir le detail',
      close: 'Fermer',
      experience: 'Experience',
      level: 'Niveau',
      projects: 'Projets',
    },
    projects: {
      title: 'Realisations',
      subtitle: 'Projets recents',
      seeProject: 'Voir le projet',
      techUsed: 'Technologies utilisees',
      description: 'Description',
      close: 'Fermer',
      goToSkill: 'Voir cette competence',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Travaillons ensemble',
      description: 'Vous avez un projet en tete ou souhaitez discuter ? N hesitez pas a me contacter.',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer le message',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'votre@email.com',
      messagePlaceholder: 'Decrivez votre projet...',
    },
    footer: {
      rights: 'Tous droits reserves.',
    },
  },
  en: {
    nav: {
      accueil: 'Home',
      presentation: 'About',
      parcours: 'Experience',
      competences: 'Skills',
      realisations: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I\'m',
      role: 'Full Stack Developer',
      description: 'I design and develop modern, high-performance, and accessible web applications.',
      cta: 'Discover my projects',
      contact: 'Contact me',
    },
    about: {
      title: 'About',
      subtitle: 'About me',
      p1: 'Passionate about web development and new technologies, I create digital experiences that combine aesthetics and performance.',
      p2: 'With solid expertise in front-end and back-end development, I strive to deliver solutions that meet user needs while following industry best practices.',
      p3: 'I am constantly looking for new challenges and innovative technologies to perfect my skills.',
    },
    parcours: {
      title: 'Experience',
      subtitle: 'Experience & Education',
      items: [
        {
          year: '2024 - Present',
          title: 'Senior Full Stack Developer',
          org: 'Tech Company',
          description: 'Development of complex web applications with React, Node.js and SQL/NoSQL databases.',
        },
        {
          year: '2022 - 2024',
          title: 'Front-End Developer',
          org: 'Digital Agency',
          description: 'Creating reactive and accessible user interfaces with Angular and TypeScript.',
        },
        {
          year: '2020 - 2022',
          title: 'Junior Developer',
          org: 'Innovation Startup',
          description: 'Participation in the development of SaaS platforms with modern technologies.',
        },
        {
          year: '2017 - 2020',
          title: 'Bachelor\'s in Computer Science',
          org: 'University',
          description: 'Comprehensive training in CS: algorithms, data structures, software engineering.',
        },
      ],
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies & Tools',
      seeDetail: 'See details',
      close: 'Close',
      experience: 'Experience',
      level: 'Level',
      projects: 'Projects',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Recent work',
      seeProject: 'View project',
      techUsed: 'Technologies used',
      description: 'Description',
      close: 'Close',
      goToSkill: 'View this skill',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s work together',
      description: 'Have a project in mind or want to chat? Don\'t hesitate to reach out.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Describe your project...',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};
