import DS from '../../assets/img/projects/DS.png';
import CConv from '../../assets/img/projects/CConv.png';

export interface ProjectsType {
  name?: string;
  description: string;
  image?: string;
}

export const projects: Array<ProjectsType> = [
  {
    description: 'Create a brand new project: from the idea to ready-to-use solution',
    image: DS,
  },
  {
    description: 'Streamline the development of an existing project',
    image: CConv,
  },
  {
    description: 'Support legacy code',
    image: CConv,
  },
];
