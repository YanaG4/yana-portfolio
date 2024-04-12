import { navProjects } from "./navSectionUtils";

export type NavItem = {
  to: string;
  text: string;
}

export const navItems: NavItem[] = [
  { to: 'home', text: 'HOME' },
  { to: 'responsibilities', text: 'RESPONSIBILITIES' },
  { to: 'projects', text: 'PROJECTS' },
  { to: 'skills', text: 'SKILLS' },
];

type LinkType = 'scroll' | 'open';

export type NavSection = {
  title: string;
  links: NavItem[];
  linkType: LinkType;
}

export const navSections: NavSection[] = [
  {
    title: "Navigation",
    links: navItems,
    linkType: 'scroll',
  }, 
  {
    title: 'Projects',
    links: navProjects,
    linkType: 'open',
  },
]
