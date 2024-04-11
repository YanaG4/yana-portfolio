import React from 'react';
import { socialMedia } from '../../constants/socialMedia/socialMedia';

import './SocialMedia.css';

export default function SocialMedia() {
  return (
    <div className='social-media'>
      {socialMedia.map(sm => (
        <div key={sm.name} className='sm'>
          <button onClick={sm.action} className={`sm-circle ${sm.text ? 'sm-circle--text' : ''}`}>{sm.Icon}</button>
          {sm.text && <div className='sm-text'>{sm.text}</div>}
        </div>
      ))}
    </div>
  )
}
