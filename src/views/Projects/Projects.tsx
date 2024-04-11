import React, { useState } from 'react';
import { ProjectType, projects } from '../../constants/projects';
import Project from './Project';
import { ResponsiveGrid } from '../../components/ResponsiveGrid/RG';
import { StyledChild } from '../../components/ResponsiveGrid/RGChild';

import './Projects.css'

export default function Projects() {
  const [activeProject, setActiveProject] = useState({name: projects[0].name, index: 0});

  return (
    <section id='projects' className='projects section-container'>
      <h1 className='section-heading'>FEATURED PROJECTS</h1>
      <ResponsiveGrid
      columnsCountBreakPoints={{ 100: 2, 729: 3 }}
      activeIndex={activeProject.index}
    >
      {projects.map((project: ProjectType, index) => (
        <StyledChild index={index}>
          <Project
          key={project.name}
          name={project.name}
          description={project.description}
          image={project.image}
          techStack={project.techStack}
          source={project.source}
          demo={project.demo}
          onClick={() => {project.name && setActiveProject({ name: project.name, index })}}
          active={activeProject.name === project.name}
        />
        </StyledChild>
      ))} 
    </ResponsiveGrid>
    </section>
  )
}
