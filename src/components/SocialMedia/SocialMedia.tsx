import React from 'react';
import { socialMedia } from '../../constants/socialMedia/socialMedia';

import './SocialMedia.css';

interface SocialMediaProps {
  direction?: 'column' | 'row';
  mailText?: boolean;
  colorInverse?: boolean;
  smallScreenDirection?: 'column' | 'row';
}

export default function SocialMedia({
  direction = 'row', 
  mailText = true, 
  colorInverse = false,
  smallScreenDirection='column'
}: SocialMediaProps) {
  return (
    <div className={`social-media ${smallScreenDirection === 'row' ? 'social-media--sm-row' : ''} ${direction === 'column' ? 'social-media--column' : 'social-media--row'}`}>
      {socialMedia.map(sm => (
        <div key={sm.name} className='sm'>
          <button 
            onClick={sm.action} 
            className={`sm-circle ${sm.text && mailText ? 'sm-circle--text' : ''} ${colorInverse ? 'button--white' : ''}`}>
              {sm.Icon}
            </button>
          {sm.text && mailText && <div className='sm-text'>{sm.text}</div>}
        </div>
      ))}
    </div>
  )
}
