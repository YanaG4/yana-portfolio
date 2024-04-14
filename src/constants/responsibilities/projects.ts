import lamp from '../../assets/img/projectTypes/lamp.svg';
import code from '../../assets/img/projectTypes/code.svg';
import rocket from '../../assets/img/projectTypes/rocket.svg';

export interface ProjectsType {
  name?: string;
  description: string;
  image?: string;
}

export const projects: Array<ProjectsType> = [
  {
    description: 'Create a brand new project: from the idea to production-ready solution',
    image: lamp,
  },
  {
    description: 'Streamline the development of an existing project',
    image: rocket,
  },
  {
    description: 'Support legacy code',
    image: code,
  },
];
