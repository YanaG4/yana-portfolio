import React from 'react';
import classNames from 'classnames';

import './ProjectWrapper.css';

interface ProjectWrapperProps {
  isImage: boolean;
  title?: string;
  isShowInfo: boolean;
  children: React.ReactNode;
}

export default function ProjectWrapper({isImage, title, isShowInfo, children}: ProjectWrapperProps) {
  const overlayWrapperClasses = classNames(
    'overlay-wrapper',
    {
      'overlay-wrapper--active' : !isImage || isShowInfo,
    }
  )
  const overlayClasses = classNames(
    'project__overlay',
    {
      'project__overlay--active' : isShowInfo,
    }
  )
  return (
    <>
    <div className={overlayClasses}></div>
    
      <div className={overlayWrapperClasses}>
        <div className='overlay-content'>
          {title && <div className="item-heading overlay-title">{title}</div>}
          <div className='project__info'>{children}</div>
        </div>
      </div>
    </>
  )
}
