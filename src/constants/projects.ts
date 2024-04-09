import DS from '../assets/img/projects/DS.png';
import CConv from '../assets/img/projects/CConv.png';
import PHC from '../assets/img/projects/PHC.png';
import YP from '../assets/img/projects/YP.png';
import TH from '../assets/img/projects/TH.png';

export interface ProjectType {
  name: string;
  description?: string;
  image?: string;
}

export const projects: Array<ProjectType> = [
  {
    name: "Portfolio Website",
    description:
      "This is the site you're currently on! :)",
    image: YP,
  },
  {
    name: "Public Holiday Calendar",
    image: PHC,
  },
  {
    name: "Currency Converter",
    description:
      "",
    image: CConv,
  },
  {
    name: "MUI Search Interface",
    image: DS,
  },
  {
    name: "Smart Timer App",
    description:
      "",
    image: TH,
  },
  {
    name: "New amazing projects coming soon!",
    description:
      "",
  },
];