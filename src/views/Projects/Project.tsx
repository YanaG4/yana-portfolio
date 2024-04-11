import React from 'react';
import type { ProjectType } from '../../constants/projects';

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
      <div className={`project__overlay ${!image ? "project__overlay--active": ""}`}>
        <p className="item-heading">{name}</p>

        <div className='project__info'>
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
        </div>

      </div>
      {image && <img alt={name} src={image} className="project__image" />}
    </li>
  )
}
