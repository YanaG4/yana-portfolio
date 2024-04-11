import DS from '../assets/img/projects/DS.png';
import CConv from '../assets/img/projects/CConv.png';
import PHC from '../assets/img/projects/PHC.png';
import YP from '../assets/img/projects/YP.png';
import TH from '../assets/img/projects/TH.png';

export interface ProjectType {
  name: string;
  description?: string;
  techStack?: string;
  source?: string;
  demo?: string;
  image?: string;
}

export const projects: Array<ProjectType> = [
  {
    name: "Portfolio Website",
    description: "This is the site you're currently on! :)",
    techStack: "TS, React, CSS, HTML, Figma, REST, Jest, RTL, Codecov",
    source: "https://github.com/YanaG4/yana-portfolio",
    image: YP,
  },
  {
    name: "Public Holiday Calendar",
    description: "UI part of the app that shows events for the chosen countries! Also you can add it to your Mail client or subscribe to the e-mail reminders.",
    techStack: "JS/ES6+, React, CSS, Axios, HTML, MUI, Figma, REST, Jest, RTL, Codecov",
    source: "https://github.com/YanaG4/public-holiday-calendar",
    demo: "https://yanag4.github.io/public-holiday-calendar/",
    image: PHC,
  },
  {
    name: "Currency Converter",
    description: "Provides an actual Central Bank exchange rates for more than 170 currencies!",
    techStack: "JS/ES6+, React, Redux Toolkit, Redux Thunk, SCSS, HTML, CRA, API Fetching (axios), React Hooks, React Router, Responsive design, Swiper, Recharts",
    source: "https://github.com/YanaG4/currency-converter",
    demo: "https://github.com/YanaG4/currency-converter",
    image: CConv,
  },
  {
    name: "MUI Search Interface",
    description: "UI of a single page for searching the product",
    techStack: "JS/ES6+, React, Redux Toolkit, CSS, Axios, HTML, MUI, Figma, REST",
    source: "https://github.com/YanaG4/demands-search",
    demo: "https://github.com/YanaG4/demands-search",
    image: DS,
  },
  {
    name: "Smart Timer App",
    description: "It's WIP app, that helps to manage the time, increase focus and productivity. The source code is in the private repo",
    techStack: "JS/ES6+, React, Redux Toolkit, SCSS, HTML, React Hooks, React Router, Responsive design, sound notifications, Jest, RTL",
    demo: "todo",
    image: TH,
  },
  {
    name: "",
    description: "New amazing projects coming soon!",
  },
];