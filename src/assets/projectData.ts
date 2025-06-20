import { atom } from 'jotai';

export interface ProjectType {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
  github: string;
  skills: string[];
  description: string;
  isFeatured: boolean;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Travel Memory',
    thumbnail: 'travel-memory.png',
    url: 'https://travel-memory.vercel.app',
    github: 'https://github.com/rockyueno0223/travel-memory',
    skills: ['Next.js', 'Supabase', 'Typescript', 'Tailwind'],
    description:
      'An app to save photos and comments of travels by country using Supabase. Users can see of which countries they save memories in a world map.',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Property Management',
    thumbnail: 'property-management.png',
    url: 'https://property-management-frontend.onrender.com',
    github: 'https://github.com/rockyueno0223/property-management',
    skills: [
      'React',
      'Tailwind',
      'Typescript',
      'shadcn/ui',
      'Express',
      'MongoDB',
    ],
    description:
      'This is a dashboard app of properties created with MERN stack. Owners can create, update and delete property posts. Residents can browse houses and get contact to owners. Users and properties data is stored in MongoDB.',
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Paint Party',
    thumbnail: 'paint-party.png',
    url: 'https://paint-party-frontend.onrender.com',
    github: 'https://github.com/rockyueno0223/paint-party',
    skills: [
      'React',
      'Tailwind',
      'Typescript',
      'Flowbite',
      'Express',
      'MongoDB',
      'JWT',
      'socket.io',
    ],
    description:
      'This is a realtime paint app. User can draw paintings with other users and save them to database.',
    isFeatured: true,
  },
  {
    id: 4,
    title: 'Post Now!',
    thumbnail: 'post-now.png',
    url: 'https://post-now-production.up.railway.app',
    github: 'https://github.com/rockyueno0223/post-now',
    skills: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    description:
      'This is a kind of social media to post messages. Users can post and other users can see them. User can follow other users and posts of following users show on dashboard.',
    isFeatured: true,
  },
  {
    id: 5,
    title: 'Portfolio-v2',
    thumbnail: 'portfolio-v2.png',
    url: 'https://rocky-portfolio-v2.vercel.app/',
    github: 'https://github.com/rockyueno0223/portfolio-v2',
    skills: [
      'React',
      'Tailwind',
      'Three.js',
      'Framer Motion',
      'GSAP',
      'EmailJS',
    ],
    description: 'This portfolio.',
    isFeatured: true,
  },
  {
    id: 6,
    title: 'Stock Chart',
    thumbnail: 'stock-chart.png',
    url: 'https://rockyueno0223.github.io/stock-chart/',
    github: 'https://github.com/rockyueno0223/stock-chart',
    skills: ['Vue.js'],
    description: 'Website to show stock market price.',
    isFeatured: true,
  },
  {
    id: 7,
    title: 'Trend Flicks',
    thumbnail: 'trend-flicks.png',
    url: 'https://rockyueno0223.github.io/trend-flicks/',
    github: 'https://github.com/rockyueno0223/trend-flicks',
    skills: ['React', 'Tailwind'],
    description: 'Website to search trending movies and TV shows.',
    isFeatured: false,
  },
  {
    id: 8,
    title: 'Portfolio-v1',
    thumbnail: 'portfolio-v1.png',
    url: 'https://rockyueno0223.github.io/portfolio-v1/',
    github: 'https://github.com/rockyueno0223/portfolio-v1',
    skills: ['React', 'Sass', 'Javascript'],
    description: 'My first portfolio.',
    isFeatured: false,
  },
  {
    id: 9,
    title: 'GSAP Portfolio',
    thumbnail: 'gsap-portfolio.png',
    url: 'https://rockyueno0223.github.io/gsap-portfolio/',
    github: 'https://github.com/rockyueno0223/gsap-portfolio',
    skills: ['Javascript', 'GSAP'],
    description: 'I created this website to practice GSAP.',
    isFeatured: false,
  },
  {
    id: 10,
    title: 'Todo Board',
    thumbnail: 'todo-board.png',
    url: 'https://rockyueno0223.github.io/todo-board/',
    github: 'https://github.com/rockyueno0223/todo-board',
    skills: ['React'],
    description: 'Simple todo app to create, edit, and delete todos.',
    isFeatured: false,
  },
  {
    id: 11,
    title: 'Weather App',
    thumbnail: 'weather-app.png',
    url: 'https://rockyueno0223.github.io/weather-app/',
    github: 'https://github.com/rockyueno0223/weather-app',
    skills: ['HTML', 'CSS', 'Vue.js'],
    description: 'An app to search and show temperature of the city.',
    isFeatured: false,
  },
];

export const currentProjectAtom = atom(0);
