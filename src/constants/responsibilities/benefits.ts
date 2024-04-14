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
    name: "Clear Communication",
    description: 'I facilitate smooth communication, team play, support & knowledge sharing with my colleagues, and alignment with business goals & requirements',
    image: chat,
  },
  {
    name: "Clean Code",
    description: 'I deliver clean, manageable, extensible and testable code according to the best practices & industry standards',
    image: ccode,
  },
  {
    name: "Top-notch UI & UX",
    description: "To ensure your project's vision is perfectly captured and communicated I create fully interactive prototypes using Figma, complete with animations, mobile and desktop layouts — all up to the highest UI/UX quality standard",
    image: ui,
  },
  {
    name: "Performance",
    description: 'I employ the most performant algorithms and best React practices, code splitting and exhaustive debugging — to optimize performance, ensuring your application runs smoothly without any bottlenecks',
    image: perf,
  },
];
