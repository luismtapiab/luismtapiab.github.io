export interface Education {
  institution: string;
  degree: string;
  location: string;
  graduation_date: string;
  relevant_courses: string[];
  thesis?: string;
}

export interface Experience {
  title: string;
  institution?: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export interface CV {
  contact: {
    location: string;
    email: string;
    github: string;
    phone: string;
  };
  education: Education[];
  experience: Experience[];
  achievements: string[];
  skills: {
    lang: string[];
    tools: string[];
  };
  other: {
    languages: string[];
    interests: string[];
  };
}

export const cv: CV = {
  contact: {
    location: 'Cochabamba, Bolivia',
    email: 'lmtapia1024@gmail.com',
    github: 'https://github.com/luismtapiab',
    phone: '(+591) 67471092',
  },
  education: [
    {
      institution: 'Universidad Pública de El Alto',
      degree: 'Postgraduate Diploma in Higher Education based on Competencies',
      location: 'Bolivia',
      graduation_date: '2026 – present',
      relevant_courses: [],
    },
    {
      institution: 'Universidad Mayor de San Simón',
      degree: 'Ingeniería Informática (Computer Science)',
      location: 'Cochabamba, Bolivia',
      graduation_date: 'Jul 2023',
      relevant_courses: ['Functional Programming', 'Compilers construction', 'Semantics', 'Database'],
      thesis: 'An example of executable semantics (approved with honors).',
    },
    {
      institution: 'UE Santa Ana',
      degree: 'Bachiller en Humanidades (High School Diploma)',
      location: 'Tupiza, Bolivia',
      graduation_date: 'Dec 2016',
      relevant_courses: ['Programming in C++', 'Robotics'],
    },
  ],
  experience: [
    {
      title: 'Fullstack Developer',
      location: 'Tupiza, Bolivia',
      duration: 'April 2025 – present',
      responsibilities: [
        'Fullstack development of an inventory management web application for a local business.',
        'Migration of data from a legacy system to a new database.',
        'Design of user interaction.',
      ],
    },
    {
      title: 'Fullstack Developer — Game Development',
      location: 'Remote',
      duration: 'Aug 2023 – Feb 2024',
      responsibilities: [
        'Configuration of cloud solutions: Google Cloud, Azure storage.',
        'Implementation of REST APIs.',
        'Design of user interaction and scene transitions.',
      ],
    },
    {
      title: 'C# Developer',
      location: 'Remote',
      duration: 'Jan 2021 – Feb 2022',
      responsibilities: [
        'Image processing with OpenCV in Unity.',
        'C# module implementation, retrieving data from location provider.',
      ],
    },
    {
      title: 'Teaching Assistant',
      institution: 'Universidad Mayor de San Simón',
      location: 'Cochabamba, Bolivia',
      duration: 'Feb 2019 – Jan 2021',
      responsibilities: [
        'Introduction to Programming: problem-solving focus, Java & Pseint.',
        'Programming Elements and Data Structures: recursion, backtracking, functional concepts.',
      ],
    },
  ],
  achievements: [
    '2nd Place Tech4Future Hack 2026',
    '3rd Place Microsoft Ambassadors Hackathon IA 2023',
    'Robotics Silver Medal Potosí 2016',
    'OBI Participant Potosí 2014–2016',
  ],
  skills: {
    lang: ['Java', 'JavaScript', 'TypeScript', 'Haskell', 'Python', 'C#', 'Kotlin'],
    tools: ['PostgreSQL', 'JOOQ', 'Supabase', 'Spring Boot', 'Angular', 'ReactJS', 'Next.js', 'Astro', 'Unity'],
  },
  other: {
    languages: ['Spanish (native)', 'English (Intermediate B2)'],
    interests: ['Language Design', 'Robotics', 'Contact sports'],
  },
};

export const cvES: CV = {
  ...cv,
  education: [
    {
      ...cv.education[0],
      degree: 'Diplomado en Educación Superior por Competencias',
      relevant_courses: [],
    },
    {
      ...cv.education[1],
      degree: 'Ingeniería Informática',
      thesis: 'Un ejemplo de semántica ejecutable (aprobada con honores).',
      relevant_courses: ['Programación Funcional', 'Construcción de Compiladores', 'Semántica', 'Taller de Base de Datos'],
    },
    {
      ...cv.education[1],
      degree: 'Bachiller en Humanidades',
      relevant_courses: ['Programación en C++', 'Robótica'],
    },
  ],
  experience: [
    {
      ...cv.experience[0], title: 'Desarrollador Fullstack', responsibilities: [
        'Desarrollo Fullstack de una aplicación web de gestión de inventarios para un negocio local.',
        'Migración de datos de un sistema heredado a una nueva base de datos.',
        'Diseño de interacción de usuario.',
      ]
    },
    {
      ...cv.experience[1], title: 'Desarrollador Fullstack — Videojuegos', responsibilities: [
        'Configuración de soluciones en la nube: Google Cloud, almacenamiento Azure.',
        'Implementación de APIs REST.',
        'Diseño de interacción de usuario y transiciones de escena.',
      ]
    },
    {
      ...cv.experience[2], title: 'Desarrollador C#', responsibilities: [
        'Procesamiento de imágenes con OpenCV en Unity.',
        'Implementación de módulos C#, recuperación de datos desde proveedor de ubicación.',
      ]
    },
    {
      ...cv.experience[3], title: 'Auxiliar de Docencia', responsibilities: [
        'Introducción a la Programación: enfoque en resolución de problemas, Java y Pseint.',
        'Elementos de Programación y Estructuras de Datos: recursión, backtracking, conceptos funcionales.',
      ]
    },
  ],
  achievements: [
    '2do Lugar Tech4Future Hack 2026',
    '3er Lugar Microsoft Ambassadors Hackathon IA 2023',
    'Medalla de Plata en Robótica Potosí 2016',
    'Participante OBI Potosí 2014–2016',
  ],
  other: {
    languages: cv.other.languages,
    interests: ['Diseño de Lenguajes', 'Robótica', 'Deportes de contacto'],
  },
};

export function getCv(lang: 'en' | 'es'): CV {
  return lang === 'es' ? cvES : cv;
}
