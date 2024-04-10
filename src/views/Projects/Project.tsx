import React from 'react';
import type { ProjectType } from '../../constants/projects';

import './Project.css'

interface ProjectProps extends ProjectType {
  onClick: () => void;
  active: boolean;
  order?: number | '';
}

export default function Project({ name, description='My another project', image, onClick, active, order }: ProjectProps) {
  return (
    <li className={`project ${active ? "project--active" : ""}`} onClick={onClick} style={{order}}>
      <div className={`project__overlay ${!image ? "project__overlay--active": ""}`}>
        <p className="project__name">{name}</p>
        <p className="project__description">{description}</p>
      </div>
      {image && <img alt={name} src={image} className="project__image" />}
    </li>
  )
}
