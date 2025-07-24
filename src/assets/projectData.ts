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
    skills: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind'],
    description:
      'A full-stack travel journal app built with Next.js and Supabase. Users can upload photos and comments of their trips, organized by country, and view them interactively on a world map.',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'VanCastro Driving School',
    thumbnail: 'vancastro.png',
    url: 'https://vancastro-driving-school-v1.vercel.app/',
    github:
      'https://github.com/Cornerstone-CICCC/program-project-musculars-final',
    skills: [
      'Next.js',
      'Express',
      'QuickBooks',
      'Intuit OAuth',
      'Prisma',
      'PostgreSQL',
    ],
    description:
      'A driving school management system built for a local client. Features include lesson scheduling, student management, and automated invoicing through QuickBooks integration with OAuth login.',
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Property Management',
    thumbnail: 'property-management.png',
    url: 'https://property-management-frontend.onrender.com',
    github: 'https://github.com/rockyueno0223/property-management',
    skills: [
      'React',
      'Tailwind',
      'TypeScript',
      'ShadCN/UI',
      'Express',
      'MongoDB',
    ],
    description:
      'A dashboard application for managing rental properties. Owners can post and edit property listings, while residents can browse and contact owners. Built with the MERN stack and styled using ShadCN UI.',
    isFeatured: true,
  },
  {
    id: 4,
    title: 'Paint Party',
    thumbnail: 'paint-party.png',
    url: 'https://paint-party-frontend.onrender.com',
    github: 'https://github.com/rockyueno0223/paint-party',
    skills: [
      'React',
      'Tailwind',
      'Flowbite',
      'Express',
      'MongoDB',
      'JWT',
      'Socket.IO',
    ],
    description:
      'A real-time collaborative drawing app built with the MERN stack. Users can draw together on a shared canvas, with updates synced live via socket.io. Includes user authentication using JWT and stores drawings in MongoDB.',
    isFeatured: true,
  },
  {
    id: 5,
    title: 'Post Now!',
    thumbnail: 'post-now.png',
    url: 'https://post-now-production.up.railway.app',
    github: 'https://github.com/rockyueno0223/post-now',
    skills: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    description:
      'A Laravel-based social media platform where users can post messages, follow others, and view a personalized feed. Includes Bootstrap styling and data persistence with MySQL.',
    isFeatured: true,
  },
  {
    id: 6,
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
    description:
      'My interactive 3D portfolio built with Three.js, Framer Motion, and GSAP. It showcases my work with smooth animations and scroll-based transitions for an immersive experience.',
    isFeatured: true,
  },
  {
    id: 7,
    title: 'Stock Chart',
    thumbnail: 'stock-chart.png',
    url: 'https://rockyueno0223.github.io/stock-chart/',
    github: 'https://github.com/rockyueno0223/stock-chart',
    skills: ['Vue.js'],
    description:
      'A lightweight Vue.js app that visualizes stock prices using interactive charts.',
    isFeatured: true,
  },
  {
    id: 8,
    title: 'Trend Flicks',
    thumbnail: 'trend-flicks.png',
    url: 'https://rockyueno0223.github.io/trend-flicks/',
    github: 'https://github.com/rockyueno0223/trend-flicks',
    skills: ['React', 'Tailwind'],
    description:
      'A React app to browse trending movies and TV shows. Built using The Movie Database (TMDb) API with responsive design via Tailwind CSS.',
    isFeatured: false,
  },
  {
    id: 9,
    title: 'Portfolio-v1',
    thumbnail: 'portfolio-v1.png',
    url: 'https://rockyueno0223.github.io/portfolio-v1/',
    github: 'https://github.com/rockyueno0223/portfolio-v1',
    skills: ['React', 'Sass', 'JavaScript'],
    description:
      'My first personal portfolio website built with React and Sass. A simple but functional showcase of early projects and skills.',
    isFeatured: false,
  },
  {
    id: 10,
    title: 'GSAP Portfolio',
    thumbnail: 'gsap-portfolio.png',
    url: 'https://rockyueno0223.github.io/gsap-portfolio/',
    github: 'https://github.com/rockyueno0223/gsap-portfolio',
    skills: ['JavaScript', 'GSAP'],
    description:
      'A simple animated website built to practice GSAP transitions.',
    isFeatured: false,
  },
  {
    id: 11,
    title: 'Todo Board',
    thumbnail: 'todo-board.png',
    url: 'https://rockyueno0223.github.io/todo-board/',
    github: 'https://github.com/rockyueno0223/todo-board',
    skills: ['React'],
    description: 'A basic React app to add, edit, and remove todos.',
    isFeatured: false,
  },
  {
    id: 12,
    title: 'Weather App',
    thumbnail: 'weather-app.png',
    url: 'https://rockyueno0223.github.io/weather-app/',
    github: 'https://github.com/rockyueno0223/weather-app',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A simple weather app built with vanilla JavaScript to display current temperature by city.',
    isFeatured: false,
  },
];

export const currentProjectAtom = atom(0);
