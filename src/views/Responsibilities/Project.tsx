import React from 'react';
import type { ProjectsType } from '../../constants/responsibilities/projects';

export default function Project({name, description, image}: ProjectsType) {
  return (
    <div className='project-type'>
      {image && <img src={image} alt={image} style={{width: '28px'}} />}
      {name && <h3 className='item-heading'>{name}</h3>}
      <p>{description}</p>
  </div>
  )
}
