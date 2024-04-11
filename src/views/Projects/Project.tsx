import React from 'react';
import type { ProjectType } from '../../constants/projects';
import ProjectWrapper from './ProjectWrapper';

import './Project.css'

interface ProjectProps extends ProjectType {
  onClick: () => void;
  active: boolean;
}

export default function Project({ name, description="", image, demo, source, techStack="", onClick, active }: ProjectProps) {

  function handleOnClick(link: string) {
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  return (
    <li className={`project ${active ? "project--active" : ""}`} onClick={onClick}>
      <ProjectWrapper isImage={Boolean(image)} title={name}>
        <p className="project__description">{description}</p>
        { active && 
          <>
            {techStack && <p className="project__description"><span>TechStack: </span>{techStack}</p> }
            <div className='project__button-container'>
              {demo && <button className='button--white' onClick={() => handleOnClick(demo)}>DEMO</button>}
              {source && <button className='button--white' onClick={() => handleOnClick(source)}>CODE</button>}
            </div>              
          </>          
        }
      </ProjectWrapper>
    {image && <img alt={name} src={image} className="project__image" />}
    </li>
  )
}
