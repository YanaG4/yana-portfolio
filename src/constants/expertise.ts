import DS from '../assets/img/projects/DS.png';
import CConv from '../assets/img/projects/CConv.png';

export interface ExpertiseType {
  name: string;
  description: string;
  image: string;
}

export const expertise: Array<ExpertiseType> = [
  {
    name: "FRONTEND",
    description:
      "As a front-end developer, my primary technologies include TypeScript, JavaScript, React, and Redux. I am highly proficient in all technologies and instruments listed in the front-end and tools columns. I specialize in creating dynamic and visually appealing user interfaces via CSS, SASS, and Material UI. Additionally, I have a solid understanding of backend technologies and have hands-on experience with them, making me a well-rounded developer.",
    image: DS,
  },
  {
    name: "UI/UX DESIGN",
    description:
      "As a seasoned designer with 7 years of experience, I have honed my skills to create visually appealing and user-friendly designs that adhere to the latest UI/UX standards. My expertise in color theory and form psychology enables me to craft designs that align with your brand identity and target audience. From ideas to Figma mock-ups and final delivery, I offer a comprehensive solution to bring your vision to life in the form of a fully responsive and functional website.",
    image: CConv,
  },
];
