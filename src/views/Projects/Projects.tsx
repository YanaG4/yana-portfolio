import React from 'react';
import { ProjectType, projects } from '../../constants/projects';
import Project from './Project';

import './Projects.css'

export default function Projects() {
  return (
    <section id='projects' className='projects'>
      <h1 className='section-heading'>PROJECTS</h1>
      <div className='projects-gallery'>
        {projects.map((project: ProjectType) => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
}
