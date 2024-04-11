import React from 'react';
import classNames from 'classnames';

import './ProjectWrapper.css';

interface ProjectWrapperProps {
  isImage: boolean;
  title?: string;
  isMainElement: boolean;
  children: React.ReactNode;
}

export default function ProjectWrapper({isImage, title, isMainElement, children}: ProjectWrapperProps) {
  const overlayClasses = classNames(
    'project__overlay',
    {
      'project__overlay--active' : !isImage,
      'project__overlay--main' : isMainElement,
    }
  )
  return (
    <>
    <div className={overlayClasses}></div>
    
      <div className='overlay-wrapper'>
        <div className='overlay-content'>
          <div className="item-heading overlay-title">{title}</div>
          <div className='project__info'>{children}</div>
        </div>
      </div>
    </>
  )
}
