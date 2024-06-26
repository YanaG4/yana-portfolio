import React, { useState } from 'react';
import { ProjectType, projects } from '../../constants/projects';
import Project from './Project';
import { ResponsiveGrid } from '../../components/ResponsiveGrid/RG';
import { StyledChild } from '../../components/ResponsiveGrid/RGChild';
import { isMobile } from 'react-device-detect';

import './Projects.css'

export default function Projects() {
  const [activeProject, setActiveProject] = useState({name: projects[0].name, index: 0, isShowInfo: false});

  function handleProjectClick(e: React.MouseEvent | React.TouchEvent, name: string, index: number) {
    e.stopPropagation();
    if (!name) return;


    if (name === activeProject.name) {
      setActiveProject((prev: any) => ({ ...prev, isShowInfo: !prev.isShowInfo }));
      return;
    }

    const isShowInfoImmediately = isMobile;
    setActiveProject({ name, index, isShowInfo: isShowInfoImmediately });
  }

  return (
    <section id='projects' className='projects section-container'>
      <h1 className='section-heading'>FEATURED PROJECTS</h1>
      <ResponsiveGrid
      columnsCountBreakPoints={{ 100: 2, 729: 3 }}
      activeIndex={activeProject.index}
    >
      {projects.map((project: ProjectType, index) => (
        <StyledChild index={index} key={project.name ? project.name : project.description}>
          <Project
            name={project.name}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
            source={project.source}
            demo={project.demo}
            onClick={(e) => handleProjectClick(e, project.name, index)}
            active={activeProject.name === project.name}
            isShowInfo={activeProject.isShowInfo}
          />
        </StyledChild>
      ))} 
    </ResponsiveGrid>
    </section>
  )
}
