
export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}
