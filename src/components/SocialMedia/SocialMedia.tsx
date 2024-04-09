import React from 'react';
import { socialMedia } from '../../constants/socialMedia/socialMedia';

import './SocialMedia.css';

export default function SocialMedia() {
  return (
    <div className='social-media'>
      {socialMedia.map(sm => (
        <div className='sm'>
          <div className={`sm-circle ${sm.text && 'sm-circle--text'}`}>{sm.Icon}</div>
          {sm.text && <div className='sm-text'>{sm.text}</div>}
        </div>
      ))}
    </div>
  )
}
