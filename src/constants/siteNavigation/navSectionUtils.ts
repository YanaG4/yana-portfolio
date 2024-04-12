import {projects} from '../projects';
import type { NavItem } from './siteNavigation';

export const navProjects: NavItem[] = projects.reduce((acc: NavItem[], project) => {
  if(!project.name) return acc;
  const to = project.demo ?? project.source ?? '';
  acc.push({text: project.name, to});
  return acc;
}, [])
