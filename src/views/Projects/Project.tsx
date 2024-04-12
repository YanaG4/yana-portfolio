import React from 'react';
import type { ProjectType } from '../../constants/projects';
import ProjectWrapper from './ProjectWrapper';
import classNames from 'classnames';
import { GitHUb } from '../../components/Icons/SocialMediaIcons';

import './Project.css'

interface ProjectProps extends ProjectType {
  onClick: () => void;
  active: boolean;
  isShowInfo: boolean;
}

export default function Project({ name, description="", image, demo, source, techStack="", active, onClick, isShowInfo }: ProjectProps) {
  const projectClasses = classNames(
    'project',
    {
      'project--active' : active,
    }
  )
  function handleOnClick(link: string) {
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  return (
    <li className={projectClasses} onClick={onClick}>
      <ProjectWrapper isImage={Boolean(image)} title={name} isShowInfo={isShowInfo && active} >
        <p className="project__description">{description}</p>
        { active && 
          <>
            {techStack && <p className="project__description"><span>TechStack: </span>{techStack}</p> }
            <div className='project__button-container'>
              {demo && <button className='button--white' onClick={() => handleOnClick(demo)}>DEMO</button>}
              {source && <button className='button--white' onClick={() => handleOnClick(source)}><GitHUb />CODE</button>}
            </div>              
          </>          
        }
      </ProjectWrapper>
    {image && <img alt={name} src={image} className="project__image" />}
    </li>
  )
}
