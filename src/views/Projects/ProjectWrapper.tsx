import React from 'react';
import classNames from 'classnames';

import './ProjectWrapper.css';

interface ProjectWrapperProps {
  isImage: boolean;
  title?: string;
  isShowInfo: boolean;
  children: React.ReactNode;
  isProjectActive: boolean;
}

export default function ProjectWrapper({isImage, title, isShowInfo, isProjectActive, children}: ProjectWrapperProps) {
  const overlayWrapperClasses = classNames(
    'overlay-wrapper',
    {
      'overlay-wrapper--active' : !isImage || isShowInfo,
      'overlay-wrapper--placeholder' : !isImage && !title,
    }
  )
  const overlayClasses = classNames(
    'project__overlay',
    {
      'project__overlay--active' : isShowInfo,
    }
  )

  const displayShowMore = !isShowInfo && isProjectActive;
  return (
    <>
    <div className={overlayClasses}></div>
    
      <div className={overlayWrapperClasses}>
        <div className='overlay-content'>
          {title && 
            <div className="item-heading overlay-title">
              {title}
              {displayShowMore && <p className='text--show-more'>Show More</p>}
            </div>
          }
          <div className='project__info'>{children}</div>
        </div>
      </div>
    </>
  )
}
