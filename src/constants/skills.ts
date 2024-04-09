export interface SkillsType {
  name: string;
  description: Array<string>;
  image?: string;
}

const skillFrontend: Array<string> = [
  'TypeScript', 'JavaScript', 'React', 'Redux', 'HTML5', 'MobX', 'axios', 'React Router',
]

const skillStyle: Array<string> = [
  'CSS3', 'SASS', 'MUI', 'Tailwind CSS', 'Bootstrap', 'Styled components',
]

const skillOther: Array<string> = [
  'GraphQL', 'node.js', 'express.js', 'mongodb', 'JSON',
]

const skillTestsCiCd: Array<string> = [
  'Jest', 'RTL', 'Cypress', 'CodeCov', 'git', 'GitHub', 'BitBucket', 'Sonar Cloud', 'Webpack', 'Babel', 'Digital Ocean', 'GitHub Pages',
]

const skillTools: Array<string> = [
  'Prettier', 'ESLint', 'YARN', 'NPM', 'Vite',
]

const skillDesign: Array<string> = [
  'Figma', 'Adobe Photoshop', 'Adobe Illustrator',
]

const mainSkills: Array<string> = [
  'TypeScript', 'JavaScript', 'React', 'Redux', 'Figma',
]


export const skills: Array<SkillsType> = [
  {
    name: "Frontend",
    description: skillFrontend,
  },
  {
    name: "Styles",
    description: skillStyle,
  },
  {
    name: "Backend",
    description: skillOther,
  },
  {
    name: "Tests & CI/CD",
    description: skillTestsCiCd,
  },
  {
    name: "Tools",
    description: skillTools,
  }, 
  {
    name: "Design",
    description: skillDesign,
  },
];

export const isSkillImportant = (skill: string) => mainSkills.includes(skill);
