import React from 'react';
import classNames from 'classnames';

import './ProjectWrapper.css';

interface ProjectWrapperProps {
  isImage: boolean;
  title?: string;
  children: React.ReactNode;
}

export default function ProjectWrapper({isImage, title, children}: ProjectWrapperProps) {
  const overlayClasses = classNames(
    'overlay-wrapper',
    {
      'overlay-wrapper--active' : !isImage,
    }
  )
  return (
    <>
    <div className='project__overlay'></div>
    
      <div className={overlayClasses}>
        <div className='overlay-content'>
          {title && <div className="item-heading overlay-title">{title}</div>}
          <div className='project__info'>{children}</div>
        </div>
      </div>
    </>
  )
}
