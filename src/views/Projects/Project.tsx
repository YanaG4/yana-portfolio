import React from 'react';
import type { ProjectType } from '../../constants/projects';

import './Project.css'

type ProjectProps = ProjectType;

export default function Project({ name, description='My another project', image="" }: ProjectProps) {
  return (
    <li className="project">
      <div className={`project__overlay ${!image && "project__overlay--active"}`}>
        <p className="project__name">{name}</p>
        <p className="project__description">{description}</p>
      </div>
      {image && <img alt={name} src={image} className="project__image" />}
    </li>
  )
}
