
export interface NavItem {
  name: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  docsLink?: string;
  badges?: string[];
}

export interface Certification {
  title: string;
  provider: string;
  date: string;
  skills: string[];
  link: string;
  type: 'Simulation' | 'Course';
}
