import React, { useEffect, useState } from 'react';
import { ProjectType, projects } from '../../constants/projects';
import Project from './Project';
import { ResponsiveGrid } from '../../components/ResponsiveGrid/RG';
import { StyledChild } from '../../components/ResponsiveGrid/RGChild';

import './Projects.css'

export default function Projects() {
  const [activeProject, setActiveProject] = useState({name: projects[0].name, index: 0, isShowInfo: false});
  const [lastInteractionType, setLastInteractionType] = useState<string | null>(null);

  useEffect(() => {
    const resetInteractionType = () => setLastInteractionType(null);
    window.addEventListener('touchend', resetInteractionType);
    return () => window.removeEventListener('touchend', resetInteractionType);
  }, []);

  function handleProjectClick(e: React.MouseEvent | React.TouchEvent, name: string, index: number) {
    e.stopPropagation();
    if (!name) return;

    const eventType = e.nativeEvent instanceof TouchEvent ? 'touch' : 'mouse';
    if (eventType === 'mouse' && lastInteractionType === 'touch') return;  
    setLastInteractionType(eventType);

    if (name === activeProject.name) {
      setActiveProject((prev: any) => ({ ...prev, isShowInfo: !prev.isShowInfo }));
      return;
    }

    const isShowInfoImmediately = eventType === 'touch';
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
