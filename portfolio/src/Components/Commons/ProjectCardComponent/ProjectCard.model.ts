export interface ProjectData {
    title: string;
    content: string;
    github: string;
    demo: string;
    descriptions: string[];
    stack: IconName[];
    front: IconName[];
    back: IconName[];
    orm: IconName[];
    db: IconName[]
  }

export interface ProjectExperience {
    projectsExp: ProjectData[]
}

export interface IconName {
    name: string;
    icon: JSX.Element
}