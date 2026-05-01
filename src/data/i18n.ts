export type Lang = 'en' | 'es';

export const ui = {
  en: {
    nav: {
      home: 'Home',
      blog: 'Blog',
      about: 'About',
      search: 'Search',
      switchLang: 'ES',
    },
    home: {
      greeting: 'Luis Tapia',
      intro: 'I\'m a developer and musician from Bolivia, this page contains some of the projects I did. I\'m interested in solving problems with the tools I know, more about the logic and taking apart the pieces rather the languages or software but I enjoy both. I\'m a developer but in my personal life I\'m also a caretaker, proud guardian of two dogs. I also like to travel and explore new places.',
      projects: 'Projects',
      compilers: 'Compilers & PL Research',
      other: 'Other Projects',
    },
    about: {
      title: 'About Me',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      languages: 'Languages',
      thesis: 'Thesis',
      courses: 'Relevant Courses',
      achievements: 'Achievements',
      interests: 'Interests',
      contact: 'Contact Information',
    },
    blog: {
      title: 'Blog',
      readMore: 'Read more',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      blog: 'Blog',
      about: 'Sobre mí',
      search: 'Buscar',
      switchLang: 'EN',
    },
    home: {
      greeting: 'Luis Tapia',
      intro: 'Soy desarrollador y músico de Bolivia, esta página contiene algunos de los proyectos que he realizado. Me interesa resolver problemas con las herramientas que conozco, más sobre la lógica y desarmar las piezas que los lenguajes o el software en sí, pero disfruto de ambos. Soy desarrollador, pero en mi vida personal también soy cuidador, orgulloso guardián de dos perros. También me gusta viajar y explorar nuevos lugares.',
      projects: 'Proyectos',
      compilers: 'Compiladores e Investigación en LP',
      other: 'Otros Proyectos',
    },
    about: {
      title: 'Sobre mí',
      education: 'Educación',
      experience: 'Experiencia',
      skills: 'Habilidades',
      languages: 'Idiomas',
      thesis: 'Tesis',
      courses: 'Cursos Relevantes',
      achievements: 'Logros',
      interests: 'Intereses',
      contact: 'Información de Contacto',
    },
    blog: {
      title: 'Blog',
      readMore: 'Leer más',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },
} as const;
