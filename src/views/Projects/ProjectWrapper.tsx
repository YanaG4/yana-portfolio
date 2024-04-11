import React from 'react';

import './ProjectWrapper.css';

interface ProjectWrapperProps {
  isImage: boolean;
  title?: string;
  children: React.ReactNode;
}

export default function ProjectWrapper({isImage, title, children}: ProjectWrapperProps) {
  return (
    <div className={`project__overlay ${!isImage ? "project__overlay--active": ""}`}>
      <p className="item-heading">{title}</p>

      <div className='project__info'>
        {children}
      </div>

      </div>
  )
}
