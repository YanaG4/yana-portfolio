import React from 'react';
import type { ProjectType } from '../../constants/projects';
import ProjectWrapper from './ProjectWrapper';
import classNames from 'classnames';
import { GitHUb } from '../../components/Icons/SocialMediaIcons';

import './Project.css'

interface ProjectProps extends ProjectType {
  onClick?: React.MouseEventHandler;
  onMouseDown?: React.MouseEventHandler;
  onTouchEnd?: React.TouchEventHandler;
  active: boolean;
  isShowInfo: boolean;
}

export default function Project({ name, description="", image, demo, source, techStack="", active, isShowInfo, ...rest }: ProjectProps) {
  const projectClasses = classNames(
    'project',
    {
      'project--active' : active,
    }
  )
  function handleOnClick(e: React.MouseEvent | React.TouchEvent, link: string) {
    e.stopPropagation();
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className={projectClasses} {...rest}>
      <ProjectWrapper isImage={Boolean(image)} title={name} isShowInfo={isShowInfo && active} >
        <p className="project__description">{description}</p>
        { active && 
          <>
            {techStack && <p className="project__description"><span>TechStack: </span>{techStack}</p> }
            <div className='project__button-container'>
              {demo && <button className='button--white' onClick={(e) => handleOnClick(e, demo)}>DEMO</button>}
              {source && <button className='button--white' onClick={(e) => handleOnClick(e, source)}><GitHUb />CODE</button>}
            </div>              
          </>          
        }
      </ProjectWrapper>
    {image && <img alt={name} src={image} className="project__image" />}
    </div>
  )
}
