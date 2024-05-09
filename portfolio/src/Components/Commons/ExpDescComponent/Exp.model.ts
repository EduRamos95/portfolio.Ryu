export interface WorkData {
    company: string;
    job: string;
    dateStart: string;
    dateEnd: string;
    descriptions: string[];
    stack: JSX.Element[];
  }

export interface WorksExperience {
    worksExp: WorkData[]
}