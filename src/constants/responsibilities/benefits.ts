import ui from '../../assets/img/benefits/ui.svg';
import chat from '../../assets/img/benefits/chat.svg';
import perf from '../../assets/img/benefits/perf.svg';
import ccode from '../../assets/img/benefits/cleancode.svg';
export interface BenefitsType {
  name: string;
  description: string;
  image?: string;
}

export const benefits: Array<BenefitsType> = [
  {
    name: "Communication",
    description: 'Smooth communication, team play, support & knowledge sharing with my colleagues, and constant focus on business goals & business requirements',
    image: chat,
  },
  {
    name: "Clean Code",
    description: 'Clean, manageable, extensible and testable code according to best practices &  industry standards',
    image: ccode,
  },
  {
    name: "Top-notch UI & UX",
    description: "User-centric approach & amazing design \nDo you want to see how the project or the feature will look like before developing? Test it on the users or employees? I can provide you with fully interactive Figma mockups, levaraging the advanced features like prototyping, animations, mobile & desktop layouts",
    image: ui,
  },
  {
    name: "Performance",
    description: 'Performance optimization from carefully choosing the most performant methods and algorithms to best React practices, from code splitting to thorough debugging to ensure no bottle necks will slow-down or freeze the page!',
    image: perf,
  },
];
