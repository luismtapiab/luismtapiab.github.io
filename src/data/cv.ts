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
