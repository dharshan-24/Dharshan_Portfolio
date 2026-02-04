
import React from 'react';
import project1 from "./assets/projects/project1.png";
import project2 from "./assets/projects/project2.png";
import project3 from "./assets/projects/project3.jpg";
import project4 from "./assets/projects/project4.jpg";
import { NavItem, Project, Certification } from './types';
import { 
  Code2, 
  Server, 
  Database, 
  Globe, 
  ShieldCheck, 
  Wrench, 
  Cloud, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Terminal,
  Layers,
  Zap,
  Cpu
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Bus Management System',
    description: 'The system maintains centralized records of buses, drivers, routes, schedules, passengers, and fares. Administrators can easily add, update, or remove buses and routes, assign drivers, and monitor bus availability in real time. It helps ensure better time management, cost control, and service reliability.',
    image: project1,
    tags: ['Html', 'Css', 'Javascript', "Netlify"],
    liveLink: 'https://elegant-mermaid-bfbd72.netlify.app/ ',
    githubLink: 'https://github.com/dharshan-24/Bus-Management.git',
   
  },
  {
    title: 'College Admission Form',
    description: 'I am applying for admission to this college to gain quality education and practical exposure in my chosen field of study. This institution’s academic excellence, experienced faculty, and supportive learning environment motivate me to pursue my higher education here. I am confident that this program will help me achieve my academic and professional goals.',
    image: project2,
    tags: ['Html', 'Css', 'Javascript', "Netlify"],
    liveLink: 'https://thunderous-phoenix-f81e31.netlify.app',
    githubLink: 'https://github.com/dharshan-24/College-Admission-Form.git'
  },
  {
    title: 'Educational Management System',
    description: 'EduTrack is a web-based application designed to digitize, manage, and streamline academic records while enforcing role-based workflows within an educational institution. The system centralizes student data, academic performance, and administrative processes, reducing manual effort and improving data accuracy and transparency.\n\nThe platform supports multiple user roles—such as Admin, Faculty, and Students—each with clearly defined permissions and responsibilities. By implementing role-based access control (RBAC), EduTrack ensures that users can only access and modify information relevant to their role, enhancing both security and accountability.',
    image: project3,
    tags: ['Django', 'Mysql', "Postman", "Rest Framework"],
    liveLink: '',
    githubLink: 'https://github.com/dharshan-24/edutrack-academic-workflow.git'
  },
  {
    title: 'Social Networking Api',
    description: " Social Network API – DRF is a backend web application built using Django Rest Framework that provides core social networking functionalities through secure and scalable RESTful APIs.\n\nThe project enables users to register, authenticate, search other users, send and manage friend requests, and maintain social connections in a controlled and secure manner. Authentication is implemented using JWT (JSON Web Tokens) to ensure stateless, token-based access to protected endpoints.\n\nThe system includes rate limiting to prevent abuse (restricting users to a maximum of three friend requests per minute), ensuring fairness and performance. All sensitive APIs are protected using authentication and authorization mechanisms, following industry best practices.",
    image: project4,
    tags: ['Django', 'Python', 'Rest Framework', 'Sqlite', "Postman"],
    githubLink: "https://github.com/dharshan-24/social-networking-api-drf.git"
    
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Generative AI',
    provider: "Linkedin Learning",
    date: 'March 2024',
    skills: ["Generative AI", 'AI Models', 'Prompt Engineering'],
    link: 'https://drive.google.com/file/d/13AwAwbIsMSqTxmuPWsdXu1oQQ4QdPAs3/preview',
    type: 'Simulation'
  },
  {
    title: 'Data Analysis',
    provider: 'Linkedin Learning',
    date: 'March 2024',
    skills: ['Coding', 'Development',"Python", "Data Analysis"],
    link: 'https://drive.google.com/file/d/1GP31JpwRDEHhm4OplrxBaJOmB1xViBul/preview',
    type: 'Simulation'
  },
  {
    title: 'SQL Certification',
    provider: 'HackerRank',
    date: 'Nov 2025',
    skills: ['SQL',  'Intermediate SQL'],
    link: 'https://drive.google.com/file/d/16yTyWgg2Q--zBIil5rUhcRqslOjxOAGB/preview',
    type: 'Course'
  }
];

export const SKILLS = [
  {
    category: 'Backend',
    icon: <Server className="w-5 h-5" />,
    items: ['Python', 'Django', 'Django REST Framework', "Flask"]
  },
  {
    category: 'Frontend',
    icon: <Globe className="w-5 h-5" />,
    items: ['HTML5', 'CSS3', 'Bootstrap', "Javascript","React.js"]
  },
  {
    category: 'Database',
    icon: <Database className="w-5 h-5" />,
    items: ['MySQL', " SQLite" ]
  },
  {
    category: 'APIs & Protocols',
    icon: <ShieldCheck className="w-5 h-5" />,
    items: ['REST APIs', 'JWT Authentication', , 'API Documentation', ]
  },
  {
    category: 'Tools',
    icon: <Wrench className="w-5 h-5" />,
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'PyCharm']
  },
  {
    category: 'Deployment',
    icon: <Cloud className="w-5 h-5" />,
    items: ['Railway', 'Render', 'Cloud Platforms', "Vercel", "Netlify"]
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/dharshan-24/',
  linkedin: 'https://www.linkedin.com/in/dharshanl/',
  email: 'mailto:dharshanlak2005@gmail.com',
  resume: 'https://drive.google.com/file/d/1D3St6-U9PwXgg7DO_zT5YqighA4d6Xf1/view?usp=sharing'

};
