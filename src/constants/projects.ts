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
    description: "UI part of the app that shows public holidays for the chosen countries! Also the app could deliver them to Mail clients or work via e-mail subscription. The back-end is down ATM :(",
    techStack: "JS/ES6+, React, CSS, Axios, HTML, MUI, Figma, REST, Jest, RTL, Cypress, Codecov",
    source: "https://github.com/YanaG4/public-holiday-calendar",
    demo: "https://yanag4.github.io/public-holiday-calendar/",
    image: PHC,
  },
  {
    name: "Currency Converter",
    description: "Provides current European Central Bank exchange rates for more than 170 currencies! Fluctuation charts included.",
    techStack: "JS/ES6+, React, Redux Toolkit, Redux Thunk, SCSS, HTML, CRA, API Fetching (axios), React Hooks, React Router, Responsive design, Swiper, Recharts",
    source: "https://github.com/YanaG4/currency-converter",
    demo: "https://yanag4.github.io/currency-converter/#",
    image: CConv,
  },
  {
    name: "MUI Search Interface",
    description: "A showcase of the MUI search interface I created as a part of my consulting job",
    techStack: "JS/ES6+, React, Redux Toolkit, CSS, Axios, HTML, MUI, Figma, REST",
    source: "https://github.com/YanaG4/demands-search",
    demo: "https://yanag4.github.io/demands-search/",
    image: DS,
  },
  {
    name: "Smart Timer App",
    description: "It's a WIP app, that helps to manage time, increase focus and productivity. The source code is in the private repo.",
    techStack: "JS/ES6+, React, Redux Toolkit, SCSS, HTML, React Hooks, React Router, Responsive design, sound notifications, Jest, RTL",
    demo: "https://your-timer-hub-rtuu7.ondigitalocean.app/",
    image: TH,
  },
  {
    name: "",
    description: "New amazing projects coming soon!",
  },
];