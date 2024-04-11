import React from 'react'
import { BenefitsType } from '../../constants/responsibilities/benefits';

import './Benefit.css';

export default function Benefit({name, description, image}: BenefitsType) {
  return (
    <div className='benefit'>
      {image && <img src={image} alt={image} />}
      <h3 className='item-heading'>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
