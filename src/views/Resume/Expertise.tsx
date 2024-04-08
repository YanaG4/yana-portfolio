import React from 'react';
import { ExpertiseType } from '../../constants/expertise';

import './Expertise.css';

type ExpertiseProps = ExpertiseType;

export default function Expertise({name, description, image}: ExpertiseProps) {
  return (
    <div className='expertise'>
      <img src={image} alt={image} />
      <h3 className='item-heading'>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
