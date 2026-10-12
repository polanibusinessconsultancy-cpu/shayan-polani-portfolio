export interface Project {
  id: string;
  repoName: string;
  title: string;
  category: string;
  year: string;
  isFlagship?: boolean;
  tagline: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  demoUrl?: string;
  highlights: string[];
  imageSrc?: string;
  imageAlt?: string;
  badge?: string;
}

export interface Capability {
  id: string;
  title: string;
  description?: string;
}
