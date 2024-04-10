import React, { useState } from 'react';
import { ProjectType, projects } from '../../constants/projects';
import Project from './Project';

import './Projects.css'

export default function Projects() {
  const [activeProject, setActiveProject] = useState({name: projects[0].name, index: 0});

  const getOrder = (index: number, grid: number, ) => {
    if(grid < 2) return index;
    const elementPositionInOrder = activeProject.index + 1;
    if(elementPositionInOrder % grid !== 0) return index;
    if (index === activeProject.index - 1)
      return index + 1;
    if (index === activeProject.index)
      return index - 1;
    return index;
  };

  return (
    <section id='projects' className='projects section-container'>
      <h1 className='section-heading'>PROJECTS</h1>
      <div className='projects-gallery'>
        {projects.map((project: ProjectType, index) => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            onClick={() => setActiveProject({name: project.name, index})}
            active={activeProject.name === project.name}
            order={getOrder(index, 3)}
          />
        ))}
      </div>
    </section>
  )
}
